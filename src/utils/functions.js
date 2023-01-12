export function NairaFormat(number){
    if (number) {
        const formatter = new Intl.NumberFormat(
            'en-NG', { style: 'currency', currency: 'NGN' }
        );
        return formatter.format(parseFloat(number));
    }
    return '₦0.00';
};

export function truncateLongText(text) {
    return text.length <= 20 ? text: text.slice(0, 17) + "..."
  };
// export function