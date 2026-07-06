var OrderPeople = function (people) {
    const res = [...people].sort((a, b) => a.age - b.age);
    return res;
};
