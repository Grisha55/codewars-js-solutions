function top3(products, amounts, prices) {
    const items = products.map((product, index) => ({
        name: product,
        revenue: amounts[index] * prices[index],
        index: index,
    }));

    items.sort((a, b) => {
        if (b.revenue !== a.revenue) {
            return b.revenue - a.revenue;
        }
        return a.index - b.index;
    });

    return items.slice(0, 3).map((item) => item.name);
}
