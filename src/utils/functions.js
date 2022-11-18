export const NairaFormat = (number) => {
    if (number) {
        const formatter = new Intl.NumberFormat(
            'en-NG', { style: 'currency', currency: 'NGN' }
        );
        return formatter.format(parseFloat(number));
    }
    return '₦0.00';
};