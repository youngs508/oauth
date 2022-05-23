function test1() {
    let cnt = 0;

    let fibonacci = function(n) {
        if(n < 2) {
            return n;
        }
        return fibonacci(n-2) + fibonacci(n-1);
    };

    return function() {
        cnt++;
        fibonacci(cnt-1);
    };
}