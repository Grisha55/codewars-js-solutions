function palindrome(num) {
    if (typeof num !== "number" || num < 0) return "Not valid";
    function isPalindrome(val) {
        if (val <= 10) return false;
        for (let i = 0; i < val.length; i++) {
            if (val[i] !== val[val.length - i - 1]) {
                return false;
            }
        }
        return true;
    }

    let up = num;
    let down = num;

    while (true) {
        if (isPalindrome(String(up))) {
            return up;
        } else if (isPalindrome(String(down))) {
            return down;
        } else {
            up++;
            down--;
        }
    }

    return -1;
}
