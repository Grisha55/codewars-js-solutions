{-# LANGUAGE NoImplicitPrelude, GADTs, DataKinds, TypeFamilies,
             TypeOperators, RankNTypes, DeriveFunctor, ScopedTypeVariables #-}

module Singletons where

import Prelude hiding (drop, take, head, tail, index, zipWith, replicate, map, (++))

data Nat = Zero | Succ Nat

data SNat a where
  SZero :: SNat Zero
  SSucc :: SNat a -> SNat (Succ a)

data Vec a n where
  VNil  :: Vec a Zero
  VCons :: a -> Vec a n -> Vec a (Succ n)

-- type families
type family (a :: Nat) :< (b :: Nat) :: Bool
type instance m :< Zero = False
type instance Zero :< Succ n = True
type instance (Succ m) :< (Succ n) = m :< n

type family Add (a :: Nat) (b :: Nat) :: Nat where
  Add 'Zero b     = b
  Add ('Succ a) b = 'Succ (Add a b)

type family Sub (a :: Nat) (b :: Nat) :: Nat where
  Sub a 'Zero     = a
  Sub 'Zero b     = 'Zero
  Sub ('Succ a) ('Succ b) = Sub a b

type family Min (a :: Nat) (b :: Nat) :: Nat where
  Min 'Zero b     = 'Zero
  Min a 'Zero     = 'Zero
  Min ('Succ a) ('Succ b) = 'Succ (Min a b)

-- map
map :: (a -> b) -> Vec a n -> Vec b n
map _ VNil         = VNil
map f (VCons x xs) = VCons (f x) (map f xs)

-- index
index :: ((a :< b) ~ True) => SNat a -> Vec s b -> s
index SZero (VCons v _)     = v
index (SSucc n) (VCons _ xs) = index n xs

-- replicate
replicate :: s -> SNat a -> Vec s a
replicate _ SZero     = VNil
replicate x (SSucc n) = VCons x (replicate x n)

-- zipWith: оба вектора одной длины n
zipWith :: (a -> b -> c) -> Vec a n -> Vec b n -> Vec c n
zipWith _ VNil VNil = VNil
zipWith f (VCons x xs) (VCons y ys) = VCons (f x y) (zipWith f xs ys)

-- (++)
(++) :: Vec v m -> Vec v n -> Vec v (Add m n)
VNil       ++ ys = ys
(VCons x xs) ++ ys = VCons x (xs ++ ys)

-- take
take :: SNat n -> Vec a m -> Vec a (Min n m)
take SZero _ = VNil
take _ VNil = VNil
take (SSucc n) (VCons x xs) = VCons x (take n xs)

-- drop
drop :: SNat n -> Vec a m -> Vec a (Sub m n)
drop SZero xs = xs
drop _ VNil = VNil
drop (SSucc n) (VCons _ xs) = drop n xs

-- head
head :: Vec a (Succ n) -> a
head (VCons x _) = x

-- tail
tail :: Vec a (Succ n) -> Vec a n
tail (VCons _ xs) = xs
