var compose = (a, ...rest) => 
  rest.length === 0
  ? a
  : (...arg) => a(compose(...rest)(...arg))

var compose = (a, ...rest) => 
  rest.length === 0
  ? a
  : (arg) => a(compose(...rest)(arg))

compose(a,b,c,d) = (arg1) => a( compose(b,c,d)                                        (arg1) )
                   (arg1) => a( (arg2) => b( compose(c,d)                     (arg2)) (arg1) ) 
                   (arg1) => a( (arg2) => b( (arg3) => b( compose(c) (arg3))  (arg2)) (arg1) ) 
                   (arg1) => a( (arg2) => b( (arg3) => b( c          (arg3))  (arg2)) (arg1) ) 
