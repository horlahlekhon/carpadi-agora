export function NairaFormat(number){
    if (number) {
        const formatter = new Intl.NumberFormat(
            'en-NG', { style: 'currency', currency: 'NGN' }
        );
        return formatter.format(parseFloat(number));
    }
    return '₦0.00';
};

export function debounce(func, wait, immediate) {
    let timeout;
  
    return function executedFunction() {
      let context = this;
      let args = arguments;
          
      let later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
  
      let callNow = immediate && !timeout;
      
      clearTimeout(timeout);
  
      timeout = setTimeout(later, wait);
      
      if (callNow) func.apply(context, args);
    };
  };
// export function