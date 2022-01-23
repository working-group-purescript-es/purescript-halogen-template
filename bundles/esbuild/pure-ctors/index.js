(() => {
  // output/Data.Unit/foreign.js
  var unit = {};

  // output/Control.Lazy/index.js
  var defer = function(dict) {
    return dict.defer;
  };

  // output/Data.Bounded/foreign.js
  var topInt = 2147483647;
  var bottomInt = -2147483648;
  var topChar = String.fromCharCode(65535);
  var bottomChar = String.fromCharCode(0);
  var topNumber = Number.POSITIVE_INFINITY;
  var bottomNumber = Number.NEGATIVE_INFINITY;

  // output/Data.Ord/foreign.js
  var unsafeCompareImpl = function(lt) {
    return function(eq2) {
      return function(gt) {
        return function(x) {
          return function(y) {
            return x < y ? lt : x === y ? eq2 : gt;
          };
        };
      };
    };
  };
  var ordBooleanImpl = unsafeCompareImpl;
  var ordIntImpl = unsafeCompareImpl;
  var ordNumberImpl = unsafeCompareImpl;
  var ordStringImpl = unsafeCompareImpl;
  var ordCharImpl = unsafeCompareImpl;

  // output/Data.Eq/foreign.js
  var refEq = function(r1) {
    return function(r2) {
      return r1 === r2;
    };
  };
  var eqBooleanImpl = refEq;
  var eqIntImpl = refEq;
  var eqNumberImpl = refEq;
  var eqCharImpl = refEq;
  var eqStringImpl = refEq;

  // output/Type.Proxy/index.js
  var Proxy3 = function() {
    function Proxy32() {
    }
    ;
    Proxy32.value = new Proxy32();
    return Proxy32;
  }();
  var Proxy2 = function() {
    function Proxy22() {
    }
    ;
    Proxy22.value = new Proxy22();
    return Proxy22;
  }();
  var $$Proxy = function() {
    function $$Proxy2() {
    }
    ;
    $$Proxy2.value = new $$Proxy2();
    return $$Proxy2;
  }();

  // output/Data.Symbol/index.js
  var SProxy = function() {
    function SProxy2() {
    }
    ;
    SProxy2.value = new SProxy2();
    return SProxy2;
  }();

  // output/Data.Eq/index.js
  var eqUnit = {
    eq: function(v) {
      return function(v1) {
        return true;
      };
    }
  };
  var eqString = {
    eq: eqStringImpl
  };
  var eqProxy3 = {
    eq: function(v) {
      return function(v1) {
        return true;
      };
    }
  };
  var eqProxy2 = {
    eq: function(v) {
      return function(v1) {
        return true;
      };
    }
  };
  var eqProxy = {
    eq: function(v) {
      return function(v1) {
        return true;
      };
    }
  };
  var eqNumber = {
    eq: eqNumberImpl
  };
  var eqInt = {
    eq: eqIntImpl
  };
  var eqChar = {
    eq: eqCharImpl
  };
  var eqBoolean = {
    eq: eqBooleanImpl
  };
  var eq1 = function(dict) {
    return dict.eq1;
  };
  var eq = function(dict) {
    return dict.eq;
  };
  var notEq = function(dictEq) {
    return function(x) {
      return function(y) {
        return eq(eqBoolean)(eq(dictEq)(x)(y))(false);
      };
    };
  };

  // output/Data.Ordering/index.js
  var LT = function() {
    function LT2() {
    }
    ;
    LT2.value = new LT2();
    return LT2;
  }();
  var GT = function() {
    function GT2() {
    }
    ;
    GT2.value = new GT2();
    return GT2;
  }();
  var EQ = function() {
    function EQ2() {
    }
    ;
    EQ2.value = new EQ2();
    return EQ2;
  }();
  var semigroupOrdering = {
    append: function(v) {
      return function(v1) {
        if (v instanceof LT) {
          return LT.value;
        }
        ;
        if (v instanceof GT) {
          return GT.value;
        }
        ;
        if (v instanceof EQ) {
          return v1;
        }
        ;
        throw new Error("Failed pattern match at Data.Ordering (line 21, column 1 - line 24, column 18): " + [v.constructor.name, v1.constructor.name]);
      };
    }
  };
  var eqOrdering = {
    eq: function(v) {
      return function(v1) {
        if (v instanceof LT && v1 instanceof LT) {
          return true;
        }
        ;
        if (v instanceof GT && v1 instanceof GT) {
          return true;
        }
        ;
        if (v instanceof EQ && v1 instanceof EQ) {
          return true;
        }
        ;
        return false;
      };
    }
  };

  // output/Data.Semiring/foreign.js
  var intAdd = function(x) {
    return function(y) {
      return x + y | 0;
    };
  };
  var intMul = function(x) {
    return function(y) {
      return x * y | 0;
    };
  };

  // output/Data.Semiring/index.js
  var zero = function(dict) {
    return dict.zero;
  };
  var semiringProxy3 = {
    add: function(v) {
      return function(v1) {
        return Proxy3.value;
      };
    },
    mul: function(v) {
      return function(v1) {
        return Proxy3.value;
      };
    },
    one: Proxy3.value,
    zero: Proxy3.value
  };
  var semiringProxy2 = {
    add: function(v) {
      return function(v1) {
        return Proxy2.value;
      };
    },
    mul: function(v) {
      return function(v1) {
        return Proxy2.value;
      };
    },
    one: Proxy2.value,
    zero: Proxy2.value
  };
  var semiringProxy = {
    add: function(v) {
      return function(v1) {
        return $$Proxy.value;
      };
    },
    mul: function(v) {
      return function(v1) {
        return $$Proxy.value;
      };
    },
    one: $$Proxy.value,
    zero: $$Proxy.value
  };
  var semiringInt = {
    add: intAdd,
    zero: 0,
    mul: intMul,
    one: 1
  };
  var one = function(dict) {
    return dict.one;
  };
  var add = function(dict) {
    return dict.add;
  };

  // output/Data.Ord/index.js
  var ordUnit = {
    compare: function(v) {
      return function(v1) {
        return EQ.value;
      };
    },
    Eq0: function() {
      return eqUnit;
    }
  };
  var ordString = {
    compare: ordStringImpl(LT.value)(EQ.value)(GT.value),
    Eq0: function() {
      return eqString;
    }
  };
  var ordProxy3 = {
    compare: function(v) {
      return function(v1) {
        return EQ.value;
      };
    },
    Eq0: function() {
      return eqProxy3;
    }
  };
  var ordProxy2 = {
    compare: function(v) {
      return function(v1) {
        return EQ.value;
      };
    },
    Eq0: function() {
      return eqProxy2;
    }
  };
  var ordProxy = {
    compare: function(v) {
      return function(v1) {
        return EQ.value;
      };
    },
    Eq0: function() {
      return eqProxy;
    }
  };
  var ordOrdering = {
    compare: function(v) {
      return function(v1) {
        if (v instanceof LT && v1 instanceof LT) {
          return EQ.value;
        }
        ;
        if (v instanceof EQ && v1 instanceof EQ) {
          return EQ.value;
        }
        ;
        if (v instanceof GT && v1 instanceof GT) {
          return EQ.value;
        }
        ;
        if (v instanceof LT) {
          return LT.value;
        }
        ;
        if (v instanceof EQ && v1 instanceof LT) {
          return GT.value;
        }
        ;
        if (v instanceof EQ && v1 instanceof GT) {
          return LT.value;
        }
        ;
        if (v instanceof GT) {
          return GT.value;
        }
        ;
        throw new Error("Failed pattern match at Data.Ord (line 121, column 1 - line 128, column 21): " + [v.constructor.name, v1.constructor.name]);
      };
    },
    Eq0: function() {
      return eqOrdering;
    }
  };
  var ordNumber = {
    compare: ordNumberImpl(LT.value)(EQ.value)(GT.value),
    Eq0: function() {
      return eqNumber;
    }
  };
  var ordInt = {
    compare: ordIntImpl(LT.value)(EQ.value)(GT.value),
    Eq0: function() {
      return eqInt;
    }
  };
  var ordChar = {
    compare: ordCharImpl(LT.value)(EQ.value)(GT.value),
    Eq0: function() {
      return eqChar;
    }
  };
  var ordBoolean = {
    compare: ordBooleanImpl(LT.value)(EQ.value)(GT.value),
    Eq0: function() {
      return eqBoolean;
    }
  };
  var compare1 = function(dict) {
    return dict.compare1;
  };
  var compare = function(dict) {
    return dict.compare;
  };
  var comparing = function(dictOrd) {
    return function(f) {
      return function(x) {
        return function(y) {
          return compare(dictOrd)(f(x))(f(y));
        };
      };
    };
  };

  // output/Data.Bounded/index.js
  var top = function(dict) {
    return dict.top;
  };
  var boundedUnit = {
    top: unit,
    bottom: unit,
    Ord0: function() {
      return ordUnit;
    }
  };
  var boundedProxy3 = {
    bottom: Proxy3.value,
    top: Proxy3.value,
    Ord0: function() {
      return ordProxy3;
    }
  };
  var boundedProxy2 = {
    bottom: Proxy2.value,
    top: Proxy2.value,
    Ord0: function() {
      return ordProxy2;
    }
  };
  var boundedProxy = {
    bottom: $$Proxy.value,
    top: $$Proxy.value,
    Ord0: function() {
      return ordProxy;
    }
  };
  var boundedOrdering = {
    top: GT.value,
    bottom: LT.value,
    Ord0: function() {
      return ordOrdering;
    }
  };
  var boundedInt = {
    top: topInt,
    bottom: bottomInt,
    Ord0: function() {
      return ordInt;
    }
  };
  var boundedChar = {
    top: topChar,
    bottom: bottomChar,
    Ord0: function() {
      return ordChar;
    }
  };
  var bottom = function(dict) {
    return dict.bottom;
  };

  // output/Data.Functor/foreign.js
  var arrayMap = function(f) {
    return function(arr) {
      var l = arr.length;
      var result = new Array(l);
      for (var i2 = 0; i2 < l; i2++) {
        result[i2] = f(arr[i2]);
      }
      return result;
    };
  };

  // output/Control.Semigroupoid/index.js
  var semigroupoidFn = {
    compose: function(f) {
      return function(g) {
        return function(x) {
          return f(g(x));
        };
      };
    }
  };
  var compose = function(dict) {
    return dict.compose;
  };
  var composeFlipped = function(dictSemigroupoid) {
    return function(f) {
      return function(g) {
        return compose(dictSemigroupoid)(g)(f);
      };
    };
  };

  // output/Control.Category/index.js
  var identity = function(dict) {
    return dict.identity;
  };
  var categoryFn = {
    identity: function(x) {
      return x;
    },
    Semigroupoid0: function() {
      return semigroupoidFn;
    }
  };

  // output/Data.Boolean/index.js
  var otherwise = true;

  // output/Data.Function/index.js
  var flip = function(f) {
    return function(b2) {
      return function(a2) {
        return f(a2)(b2);
      };
    };
  };
  var $$const = function(a2) {
    return function(v) {
      return a2;
    };
  };
  var applyFlipped = function(x) {
    return function(f) {
      return f(x);
    };
  };

  // output/Data.Functor/index.js
  var map = function(dict) {
    return dict.map;
  };
  var $$void = function(dictFunctor) {
    return map(dictFunctor)($$const(unit));
  };
  var voidLeft = function(dictFunctor) {
    return function(f) {
      return function(x) {
        return map(dictFunctor)($$const(x))(f);
      };
    };
  };
  var functorFn = {
    map: compose(semigroupoidFn)
  };
  var functorArray = {
    map: arrayMap
  };

  // output/Data.Functor.Invariant/index.js
  var imapF = function(dictFunctor) {
    return function(f) {
      return function(v) {
        return map(dictFunctor)(f);
      };
    };
  };
  var invariantArray = {
    imap: imapF(functorArray)
  };
  var invariantFn = {
    imap: imapF(functorFn)
  };

  // output/Data.Show/foreign.js
  var showIntImpl = function(n) {
    return n.toString();
  };
  var showNumberImpl = function(n) {
    var str = n.toString();
    return isNaN(str + ".0") ? str : str + ".0";
  };

  // output/Data.Show/index.js
  var showNumber = {
    show: showNumberImpl
  };
  var showInt = {
    show: showIntImpl
  };
  var show = function(dict) {
    return dict.show;
  };

  // output/Data.Generic.Rep/index.js
  var Inl = function() {
    function Inl2(value0) {
      this.value0 = value0;
    }
    ;
    Inl2.create = function(value0) {
      return new Inl2(value0);
    };
    return Inl2;
  }();
  var Inr = function() {
    function Inr2(value0) {
      this.value0 = value0;
    }
    ;
    Inr2.create = function(value0) {
      return new Inr2(value0);
    };
    return Inr2;
  }();
  var Product = function() {
    function Product2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Product2.create = function(value0) {
      return function(value1) {
        return new Product2(value0, value1);
      };
    };
    return Product2;
  }();
  var NoArguments = function() {
    function NoArguments2() {
    }
    ;
    NoArguments2.value = new NoArguments2();
    return NoArguments2;
  }();

  // output/Data.HeytingAlgebra/foreign.js
  var boolConj = function(b1) {
    return function(b2) {
      return b1 && b2;
    };
  };
  var boolDisj = function(b1) {
    return function(b2) {
      return b1 || b2;
    };
  };
  var boolNot = function(b2) {
    return !b2;
  };

  // output/Data.HeytingAlgebra/index.js
  var tt = function(dict) {
    return dict.tt;
  };
  var not = function(dict) {
    return dict.not;
  };
  var implies = function(dict) {
    return dict.implies;
  };
  var heytingAlgebraProxy3 = {
    conj: function(v) {
      return function(v1) {
        return Proxy3.value;
      };
    },
    disj: function(v) {
      return function(v1) {
        return Proxy3.value;
      };
    },
    implies: function(v) {
      return function(v1) {
        return Proxy3.value;
      };
    },
    ff: Proxy3.value,
    not: function(v) {
      return Proxy3.value;
    },
    tt: Proxy3.value
  };
  var heytingAlgebraProxy2 = {
    conj: function(v) {
      return function(v1) {
        return Proxy2.value;
      };
    },
    disj: function(v) {
      return function(v1) {
        return Proxy2.value;
      };
    },
    implies: function(v) {
      return function(v1) {
        return Proxy2.value;
      };
    },
    ff: Proxy2.value,
    not: function(v) {
      return Proxy2.value;
    },
    tt: Proxy2.value
  };
  var heytingAlgebraProxy = {
    conj: function(v) {
      return function(v1) {
        return $$Proxy.value;
      };
    },
    disj: function(v) {
      return function(v1) {
        return $$Proxy.value;
      };
    },
    implies: function(v) {
      return function(v1) {
        return $$Proxy.value;
      };
    },
    ff: $$Proxy.value,
    not: function(v) {
      return $$Proxy.value;
    },
    tt: $$Proxy.value
  };
  var ff = function(dict) {
    return dict.ff;
  };
  var disj = function(dict) {
    return dict.disj;
  };
  var heytingAlgebraBoolean = {
    ff: false,
    tt: true,
    implies: function(a2) {
      return function(b2) {
        return disj(heytingAlgebraBoolean)(not(heytingAlgebraBoolean)(a2))(b2);
      };
    },
    conj: boolConj,
    disj: boolDisj,
    not: boolNot
  };
  var conj = function(dict) {
    return dict.conj;
  };
  var heytingAlgebraFunction = function(dictHeytingAlgebra) {
    return {
      ff: function(v) {
        return ff(dictHeytingAlgebra);
      },
      tt: function(v) {
        return tt(dictHeytingAlgebra);
      },
      implies: function(f) {
        return function(g) {
          return function(a2) {
            return implies(dictHeytingAlgebra)(f(a2))(g(a2));
          };
        };
      },
      conj: function(f) {
        return function(g) {
          return function(a2) {
            return conj(dictHeytingAlgebra)(f(a2))(g(a2));
          };
        };
      },
      disj: function(f) {
        return function(g) {
          return function(a2) {
            return disj(dictHeytingAlgebra)(f(a2))(g(a2));
          };
        };
      },
      not: function(f) {
        return function(a2) {
          return not(dictHeytingAlgebra)(f(a2));
        };
      }
    };
  };

  // output/Data.Semigroup/foreign.js
  var concatArray = function(xs) {
    return function(ys) {
      if (xs.length === 0)
        return ys;
      if (ys.length === 0)
        return xs;
      return xs.concat(ys);
    };
  };

  // output/Data.Semigroup/index.js
  var semigroupUnit = {
    append: function(v) {
      return function(v1) {
        return unit;
      };
    }
  };
  var semigroupArray = {
    append: concatArray
  };
  var append = function(dict) {
    return dict.append;
  };

  // output/Data.Monoid/index.js
  var monoidUnit = {
    mempty: unit,
    Semigroup0: function() {
      return semigroupUnit;
    }
  };
  var monoidOrdering = {
    mempty: EQ.value,
    Semigroup0: function() {
      return semigroupOrdering;
    }
  };
  var mempty = function(dict) {
    return dict.mempty;
  };

  // output/Data.Tuple/index.js
  var Tuple = function() {
    function Tuple2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Tuple2.create = function(value0) {
      return function(value1) {
        return new Tuple2(value0, value1);
      };
    };
    return Tuple2;
  }();
  var uncurry = function(f) {
    return function(v) {
      return f(v.value0)(v.value1);
    };
  };
  var snd = function(v) {
    return v.value1;
  };
  var functorTuple = {
    map: function(f) {
      return function(m) {
        return /* @__PURE__ */ new Tuple(m.value0, f(m.value1));
      };
    }
  };
  var invariantTuple = {
    imap: imapF(functorTuple)
  };
  var fst = function(v) {
    return v.value0;
  };

  // output/Control.Monad.State.Class/index.js
  var state = function(dict) {
    return dict.state;
  };
  var modify_ = function(dictMonadState) {
    return function(f) {
      return state(dictMonadState)(function(s) {
        return /* @__PURE__ */ new Tuple(unit, f(s));
      });
    };
  };

  // output/Control.Apply/foreign.js
  var arrayApply = function(fs) {
    return function(xs) {
      var l = fs.length;
      var k = xs.length;
      var result = new Array(l * k);
      var n = 0;
      for (var i2 = 0; i2 < l; i2++) {
        var f = fs[i2];
        for (var j = 0; j < k; j++) {
          result[n++] = f(xs[j]);
        }
      }
      return result;
    };
  };

  // output/Control.Apply/index.js
  var applyFn = {
    apply: function(f) {
      return function(g) {
        return function(x) {
          return f(x)(g(x));
        };
      };
    },
    Functor0: function() {
      return functorFn;
    }
  };
  var applyArray = {
    apply: arrayApply,
    Functor0: function() {
      return functorArray;
    }
  };
  var apply = function(dict) {
    return dict.apply;
  };
  var applySecond = function(dictApply) {
    return function(a2) {
      return function(b2) {
        return apply(dictApply)(map(dictApply.Functor0())($$const(identity(categoryFn)))(a2))(b2);
      };
    };
  };
  var lift2 = function(dictApply) {
    return function(f) {
      return function(a2) {
        return function(b2) {
          return apply(dictApply)(map(dictApply.Functor0())(f)(a2))(b2);
        };
      };
    };
  };

  // output/Control.Applicative/index.js
  var pure = function(dict) {
    return dict.pure;
  };
  var unless = function(dictApplicative) {
    return function(v) {
      return function(v1) {
        if (!v) {
          return v1;
        }
        ;
        if (v) {
          return pure(dictApplicative)(unit);
        }
        ;
        throw new Error("Failed pattern match at Control.Applicative (line 66, column 1 - line 66, column 65): " + [v.constructor.name, v1.constructor.name]);
      };
    };
  };
  var when = function(dictApplicative) {
    return function(v) {
      return function(v1) {
        if (v) {
          return v1;
        }
        ;
        if (!v) {
          return pure(dictApplicative)(unit);
        }
        ;
        throw new Error("Failed pattern match at Control.Applicative (line 61, column 1 - line 61, column 63): " + [v.constructor.name, v1.constructor.name]);
      };
    };
  };
  var liftA1 = function(dictApplicative) {
    return function(f) {
      return function(a2) {
        return apply(dictApplicative.Apply0())(pure(dictApplicative)(f))(a2);
      };
    };
  };
  var applicativeFn = {
    pure: function(x) {
      return function(v) {
        return x;
      };
    },
    Apply0: function() {
      return applyFn;
    }
  };

  // output/Control.Alt/index.js
  var altArray = {
    alt: append(semigroupArray),
    Functor0: function() {
      return functorArray;
    }
  };

  // output/Data.Maybe/index.js
  var Nothing = function() {
    function Nothing2() {
    }
    ;
    Nothing2.value = new Nothing2();
    return Nothing2;
  }();
  var Just = function() {
    function Just2(value0) {
      this.value0 = value0;
    }
    ;
    Just2.create = function(value0) {
      return new Just2(value0);
    };
    return Just2;
  }();
  var maybe = function(v) {
    return function(v1) {
      return function(v2) {
        if (v2 instanceof Nothing) {
          return v;
        }
        ;
        if (v2 instanceof Just) {
          return v1(v2.value0);
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 230, column 1 - line 230, column 51): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
      };
    };
  };
  var isNothing = maybe(true)($$const(false));
  var isJust = maybe(false)($$const(true));
  var functorMaybe = {
    map: function(v) {
      return function(v1) {
        if (v1 instanceof Just) {
          return /* @__PURE__ */ new Just(v(v1.value0));
        }
        ;
        return Nothing.value;
      };
    }
  };
  var invariantMaybe = {
    imap: imapF(functorMaybe)
  };
  var fromMaybe = function(a2) {
    return maybe(a2)(identity(categoryFn));
  };
  var fromJust = function(dictPartial) {
    return function(v) {
      if (v instanceof Just) {
        return v.value0;
      }
      ;
      throw new Error("Failed pattern match at Data.Maybe (line 281, column 1 - line 281, column 46): " + [v.constructor.name]);
    };
  };
  var applyMaybe = {
    apply: function(v) {
      return function(v1) {
        if (v instanceof Just) {
          return map(functorMaybe)(v.value0)(v1);
        }
        ;
        if (v instanceof Nothing) {
          return Nothing.value;
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 68, column 1 - line 70, column 30): " + [v.constructor.name, v1.constructor.name]);
      };
    },
    Functor0: function() {
      return functorMaybe;
    }
  };
  var bindMaybe = {
    bind: function(v) {
      return function(v1) {
        if (v instanceof Just) {
          return v1(v.value0);
        }
        ;
        if (v instanceof Nothing) {
          return Nothing.value;
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 126, column 1 - line 128, column 28): " + [v.constructor.name, v1.constructor.name]);
      };
    },
    Apply0: function() {
      return applyMaybe;
    }
  };
  var applicativeMaybe = {
    pure: Just.create,
    Apply0: function() {
      return applyMaybe;
    }
  };
  var monadMaybe = {
    Applicative0: function() {
      return applicativeMaybe;
    },
    Bind1: function() {
      return bindMaybe;
    }
  };
  var altMaybe = {
    alt: function(v) {
      return function(v1) {
        if (v instanceof Nothing) {
          return v1;
        }
        ;
        return v;
      };
    },
    Functor0: function() {
      return functorMaybe;
    }
  };
  var plusMaybe = {
    empty: Nothing.value,
    Alt0: function() {
      return altMaybe;
    }
  };

  // output/Data.Either/index.js
  var Left = function() {
    function Left2(value0) {
      this.value0 = value0;
    }
    ;
    Left2.create = function(value0) {
      return new Left2(value0);
    };
    return Left2;
  }();
  var Right = function() {
    function Right2(value0) {
      this.value0 = value0;
    }
    ;
    Right2.create = function(value0) {
      return new Right2(value0);
    };
    return Right2;
  }();
  var functorEither = {
    map: function(f) {
      return function(m) {
        if (m instanceof Left) {
          return /* @__PURE__ */ new Left(m.value0);
        }
        ;
        if (m instanceof Right) {
          return /* @__PURE__ */ new Right(f(m.value0));
        }
        ;
        throw new Error("Failed pattern match at Data.Either (line 31, column 1 - line 31, column 52): " + [m.constructor.name]);
      };
    }
  };
  var invariantEither = {
    imap: imapF(functorEither)
  };
  var either = function(v) {
    return function(v1) {
      return function(v2) {
        if (v2 instanceof Left) {
          return v(v2.value0);
        }
        ;
        if (v2 instanceof Right) {
          return v1(v2.value0);
        }
        ;
        throw new Error("Failed pattern match at Data.Either (line 208, column 1 - line 208, column 64): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
      };
    };
  };
  var hush = either($$const(Nothing.value))(Just.create);
  var isLeft = either($$const(true))($$const(false));
  var isRight = either($$const(false))($$const(true));
  var applyEither = {
    apply: function(v) {
      return function(v1) {
        if (v instanceof Left) {
          return /* @__PURE__ */ new Left(v.value0);
        }
        ;
        if (v instanceof Right) {
          return map(functorEither)(v.value0)(v1);
        }
        ;
        throw new Error("Failed pattern match at Data.Either (line 70, column 1 - line 72, column 30): " + [v.constructor.name, v1.constructor.name]);
      };
    },
    Functor0: function() {
      return functorEither;
    }
  };
  var bindEither = {
    bind: either(function(e2) {
      return function(v) {
        return /* @__PURE__ */ new Left(e2);
      };
    })(function(a2) {
      return function(f) {
        return f(a2);
      };
    }),
    Apply0: function() {
      return applyEither;
    }
  };
  var applicativeEither = {
    pure: Right.create,
    Apply0: function() {
      return applyEither;
    }
  };
  var monadEither = {
    Applicative0: function() {
      return applicativeEither;
    },
    Bind1: function() {
      return bindEither;
    }
  };

  // output/Data.Bifunctor/index.js
  var bimap = function(dict) {
    return dict.bimap;
  };
  var rmap = function(dictBifunctor) {
    return bimap(dictBifunctor)(identity(categoryFn));
  };

  // output/Control.Bind/foreign.js
  var arrayBind = function(arr) {
    return function(f) {
      var result = [];
      for (var i2 = 0, l = arr.length; i2 < l; i2++) {
        Array.prototype.push.apply(result, f(arr[i2]));
      }
      return result;
    };
  };

  // output/Control.Bind/index.js
  var discard = function(dict) {
    return dict.discard;
  };
  var bindFn = {
    bind: function(m) {
      return function(f) {
        return function(x) {
          return f(m(x))(x);
        };
      };
    },
    Apply0: function() {
      return applyFn;
    }
  };
  var bindArray = {
    bind: arrayBind,
    Apply0: function() {
      return applyArray;
    }
  };
  var bind = function(dict) {
    return dict.bind;
  };
  var bindFlipped = function(dictBind) {
    return flip(bind(dictBind));
  };
  var composeKleisliFlipped = function(dictBind) {
    return function(f) {
      return function(g) {
        return function(a2) {
          return bindFlipped(dictBind)(f)(g(a2));
        };
      };
    };
  };
  var composeKleisli = function(dictBind) {
    return function(f) {
      return function(g) {
        return function(a2) {
          return bind(dictBind)(f(a2))(g);
        };
      };
    };
  };
  var discardUnit = {
    discard: function(dictBind) {
      return bind(dictBind);
    }
  };

  // output/Control.Plus/index.js
  var empty = function(dict) {
    return dict.empty;
  };

  // output/Data.Identity/index.js
  var Identity = function(x) {
    return x;
  };
  var functorIdentity = {
    map: function(f) {
      return function(m) {
        return f(m);
      };
    }
  };
  var invariantIdentity = {
    imap: imapF(functorIdentity)
  };
  var applyIdentity = {
    apply: function(v) {
      return function(v1) {
        return v(v1);
      };
    },
    Functor0: function() {
      return functorIdentity;
    }
  };
  var bindIdentity = {
    bind: function(v) {
      return function(f) {
        return f(v);
      };
    },
    Apply0: function() {
      return applyIdentity;
    }
  };
  var applicativeIdentity = {
    pure: Identity,
    Apply0: function() {
      return applyIdentity;
    }
  };
  var monadIdentity = {
    Applicative0: function() {
      return applicativeIdentity;
    },
    Bind1: function() {
      return bindIdentity;
    }
  };

  // output/Unsafe.Coerce/foreign.js
  var unsafeCoerce2 = function(x) {
    return x;
  };

  // output/Safe.Coerce/index.js
  var coerce = function(dictCoercible) {
    return unsafeCoerce2;
  };

  // output/Data.Newtype/index.js
  var unwrap = function(dictNewtype) {
    return coerce();
  };
  var over = function(dictNewtype) {
    return function(dictNewtype1) {
      return function(v) {
        return coerce();
      };
    };
  };
  var alaF = function(dictCoercible) {
    return function(dictCoercible1) {
      return function(dictNewtype) {
        return function(dictNewtype1) {
          return function(v) {
            return coerce();
          };
        };
      };
    };
  };

  // output/Data.Exists/index.js
  var runExists = unsafeCoerce2;
  var mkExists = unsafeCoerce2;

  // output/Data.Foldable/foreign.js
  var foldrArray = function(f) {
    return function(init3) {
      return function(xs) {
        var acc = init3;
        var len = xs.length;
        for (var i2 = len - 1; i2 >= 0; i2--) {
          acc = f(xs[i2])(acc);
        }
        return acc;
      };
    };
  };
  var foldlArray = function(f) {
    return function(init3) {
      return function(xs) {
        var acc = init3;
        var len = xs.length;
        for (var i2 = 0; i2 < len; i2++) {
          acc = f(acc)(xs[i2]);
        }
        return acc;
      };
    };
  };

  // output/Data.Maybe.First/index.js
  var semigroupFirst = {
    append: function(v) {
      return function(v1) {
        if (v instanceof Just) {
          return v;
        }
        ;
        return v1;
      };
    }
  };
  var monoidFirst = {
    mempty: Nothing.value,
    Semigroup0: function() {
      return semigroupFirst;
    }
  };
  var functorFirst = functorMaybe;
  var altFirst = {
    alt: append(semigroupFirst),
    Functor0: function() {
      return functorFirst;
    }
  };
  var plusFirst = {
    empty: mempty(monoidFirst),
    Alt0: function() {
      return altFirst;
    }
  };

  // output/Data.Monoid.Disj/index.js
  var Disj = function(x) {
    return x;
  };
  var semigroupDisj = function(dictHeytingAlgebra) {
    return {
      append: function(v) {
        return function(v1) {
          return disj(dictHeytingAlgebra)(v)(v1);
        };
      }
    };
  };
  var monoidDisj = function(dictHeytingAlgebra) {
    return {
      mempty: ff(dictHeytingAlgebra),
      Semigroup0: function() {
        return semigroupDisj(dictHeytingAlgebra);
      }
    };
  };

  // output/Data.Monoid.Endo/index.js
  var Endo = function(x) {
    return x;
  };
  var semigroupEndo = function(dictSemigroupoid) {
    return {
      append: function(v) {
        return function(v1) {
          return compose(dictSemigroupoid)(v)(v1);
        };
      }
    };
  };
  var monoidEndo = function(dictCategory) {
    return {
      mempty: identity(dictCategory),
      Semigroup0: function() {
        return semigroupEndo(dictCategory.Semigroupoid0());
      }
    };
  };

  // output/Data.Foldable/index.js
  var foldr = function(dict) {
    return dict.foldr;
  };
  var traverse_ = function(dictApplicative) {
    return function(dictFoldable) {
      return function(f) {
        return foldr(dictFoldable)(function() {
          var $316 = applySecond(dictApplicative.Apply0());
          return function($317) {
            return $316(f($317));
          };
        }())(pure(dictApplicative)(unit));
      };
    };
  };
  var for_ = function(dictApplicative) {
    return function(dictFoldable) {
      return flip(traverse_(dictApplicative)(dictFoldable));
    };
  };
  var foldl = function(dict) {
    return dict.foldl;
  };
  var length = function(dictFoldable) {
    return function(dictSemiring) {
      return foldl(dictFoldable)(function(c) {
        return function(v) {
          return add(dictSemiring)(one(dictSemiring))(c);
        };
      })(zero(dictSemiring));
    };
  };
  var foldableMaybe = {
    foldr: function(v) {
      return function(z) {
        return function(v1) {
          if (v1 instanceof Nothing) {
            return z;
          }
          ;
          if (v1 instanceof Just) {
            return v(v1.value0)(z);
          }
          ;
          throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): " + [v.constructor.name, z.constructor.name, v1.constructor.name]);
        };
      };
    },
    foldl: function(v) {
      return function(z) {
        return function(v1) {
          if (v1 instanceof Nothing) {
            return z;
          }
          ;
          if (v1 instanceof Just) {
            return v(z)(v1.value0);
          }
          ;
          throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): " + [v.constructor.name, z.constructor.name, v1.constructor.name]);
        };
      };
    },
    foldMap: function(dictMonoid) {
      return function(v) {
        return function(v1) {
          if (v1 instanceof Nothing) {
            return mempty(dictMonoid);
          }
          ;
          if (v1 instanceof Just) {
            return v(v1.value0);
          }
          ;
          throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): " + [v.constructor.name, v1.constructor.name]);
        };
      };
    }
  };
  var foldMapDefaultR = function(dictFoldable) {
    return function(dictMonoid) {
      return function(f) {
        return foldr(dictFoldable)(function(x) {
          return function(acc) {
            return append(dictMonoid.Semigroup0())(f(x))(acc);
          };
        })(mempty(dictMonoid));
      };
    };
  };
  var foldableArray = {
    foldr: foldrArray,
    foldl: foldlArray,
    foldMap: function(dictMonoid) {
      return foldMapDefaultR(foldableArray)(dictMonoid);
    }
  };
  var foldMapDefaultL = function(dictFoldable) {
    return function(dictMonoid) {
      return function(f) {
        return foldl(dictFoldable)(function(acc) {
          return function(x) {
            return append(dictMonoid.Semigroup0())(acc)(f(x));
          };
        })(mempty(dictMonoid));
      };
    };
  };
  var foldMap = function(dict) {
    return dict.foldMap;
  };
  var foldrDefault = function(dictFoldable) {
    return function(c) {
      return function(u2) {
        return function(xs) {
          return unwrap()(foldMap(dictFoldable)(monoidEndo(categoryFn))(function($322) {
            return Endo(c($322));
          })(xs))(u2);
        };
      };
    };
  };
  var any = function(dictFoldable) {
    return function(dictHeytingAlgebra) {
      return alaF()()()()(Disj)(foldMap(dictFoldable)(monoidDisj(dictHeytingAlgebra)));
    };
  };

  // output/Data.Semigroup.Foldable/index.js
  var FoldRight1 = function() {
    function FoldRight12(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    FoldRight12.create = function(value0) {
      return function(value1) {
        return new FoldRight12(value0, value1);
      };
    };
    return FoldRight12;
  }();
  var mkFoldRight1 = FoldRight1.create($$const);

  // output/Data.Traversable/foreign.js
  var traverseArrayImpl = function() {
    function array1(a2) {
      return [a2];
    }
    function array2(a2) {
      return function(b2) {
        return [a2, b2];
      };
    }
    function array3(a2) {
      return function(b2) {
        return function(c) {
          return [a2, b2, c];
        };
      };
    }
    function concat2(xs) {
      return function(ys) {
        return xs.concat(ys);
      };
    }
    return function(apply2) {
      return function(map3) {
        return function(pure2) {
          return function(f) {
            return function(array) {
              function go2(bot, top2) {
                switch (top2 - bot) {
                  case 0:
                    return pure2([]);
                  case 1:
                    return map3(array1)(f(array[bot]));
                  case 2:
                    return apply2(map3(array2)(f(array[bot])))(f(array[bot + 1]));
                  case 3:
                    return apply2(apply2(map3(array3)(f(array[bot])))(f(array[bot + 1])))(f(array[bot + 2]));
                  default:
                    var pivot = bot + Math.floor((top2 - bot) / 4) * 2;
                    return apply2(map3(concat2)(go2(bot, pivot)))(go2(pivot, top2));
                }
              }
              return go2(0, array.length);
            };
          };
        };
      };
    };
  }();

  // output/Data.Const/index.js
  var functorConst = {
    map: function(f) {
      return function(m) {
        return m;
      };
    }
  };
  var invariantConst = {
    imap: imapF(functorConst)
  };

  // output/Data.Maybe.Last/index.js
  var semigroupLast = {
    append: function(v) {
      return function(v1) {
        if (v1 instanceof Just) {
          return v1;
        }
        ;
        if (v1 instanceof Nothing) {
          return v;
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe.Last (line 52, column 1 - line 54, column 36): " + [v.constructor.name, v1.constructor.name]);
      };
    }
  };
  var monoidLast = {
    mempty: Nothing.value,
    Semigroup0: function() {
      return semigroupLast;
    }
  };
  var functorLast = functorMaybe;
  var altLast = {
    alt: append(semigroupLast),
    Functor0: function() {
      return functorLast;
    }
  };
  var plusLast = {
    empty: mempty(monoidLast),
    Alt0: function() {
      return altLast;
    }
  };

  // output/Data.Traversable/index.js
  var traverse = function(dict) {
    return dict.traverse;
  };
  var sequence = function(dict) {
    return dict.sequence;
  };

  // output/Data.Coyoneda/index.js
  var CoyonedaF = function() {
    function CoyonedaF2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    CoyonedaF2.create = function(value0) {
      return function(value1) {
        return new CoyonedaF2(value0, value1);
      };
    };
    return CoyonedaF2;
  }();
  var unCoyoneda = function(f) {
    return function(v) {
      return runExists(function(v1) {
        return f(v1.value0)(v1.value1);
      })(v);
    };
  };
  var coyoneda = function(k) {
    return function(fi) {
      return mkExists(/* @__PURE__ */ new CoyonedaF(k, fi));
    };
  };
  var functorCoyoneda = {
    map: function(f) {
      return function(v) {
        return runExists(function(v1) {
          return coyoneda(function($84) {
            return f(v1.value0($84));
          })(v1.value1);
        })(v);
      };
    }
  };
  var invatiantCoyoneda = {
    imap: imapF(functorCoyoneda)
  };
  var liftCoyoneda = coyoneda(identity(categoryFn));

  // output/Data.FunctorWithIndex/index.js
  var mapWithIndex = function(dict) {
    return dict.mapWithIndex;
  };

  // output/Data.FoldableWithIndex/index.js
  var foldrWithIndex = function(dict) {
    return dict.foldrWithIndex;
  };
  var foldlWithIndex = function(dict) {
    return dict.foldlWithIndex;
  };

  // output/Control.Monad/index.js
  var unlessM = function(dictMonad) {
    return function(mb) {
      return function(m) {
        return bind(dictMonad.Bind1())(mb)(function(b2) {
          return unless(dictMonad.Applicative0())(b2)(m);
        });
      };
    };
  };
  var monadFn = {
    Applicative0: function() {
      return applicativeFn;
    },
    Bind1: function() {
      return bindFn;
    }
  };
  var ap = function(dictMonad) {
    return function(f) {
      return function(a2) {
        return bind(dictMonad.Bind1())(f)(function(f$prime) {
          return bind(dictMonad.Bind1())(a2)(function(a$prime) {
            return pure(dictMonad.Applicative0())(f$prime(a$prime));
          });
        });
      };
    };
  };

  // output/Effect/foreign.js
  var pureE = function(a2) {
    return function() {
      return a2;
    };
  };
  var bindE = function(a2) {
    return function(f) {
      return function() {
        return f(a2())();
      };
    };
  };

  // output/Effect/index.js
  var monadEffect = {
    Applicative0: function() {
      return applicativeEffect;
    },
    Bind1: function() {
      return bindEffect;
    }
  };
  var bindEffect = {
    bind: bindE,
    Apply0: function() {
      return applyEffect;
    }
  };
  var applyEffect = {
    apply: ap(monadEffect),
    Functor0: function() {
      return functorEffect;
    }
  };
  var applicativeEffect = {
    pure: pureE,
    Apply0: function() {
      return applyEffect;
    }
  };
  var functorEffect = {
    map: liftA1(applicativeEffect)
  };
  var semigroupEffect = function(dictSemigroup) {
    return {
      append: lift2(applyEffect)(append(dictSemigroup))
    };
  };
  var monoidEffect = function(dictMonoid) {
    return {
      mempty: pureE(mempty(dictMonoid)),
      Semigroup0: function() {
        return semigroupEffect(dictMonoid.Semigroup0());
      }
    };
  };

  // output/Effect.Ref/foreign.js
  var _new = function(val) {
    return function() {
      return { value: val };
    };
  };
  var read = function(ref3) {
    return function() {
      return ref3.value;
    };
  };
  var modifyImpl = function(f) {
    return function(ref3) {
      return function() {
        var t = f(ref3.value);
        ref3.value = t.state;
        return t.value;
      };
    };
  };
  var write = function(val) {
    return function(ref3) {
      return function() {
        ref3.value = val;
      };
    };
  };

  // output/Effect.Ref/index.js
  var $$new = _new;
  var modify$prime = modifyImpl;
  var modify = function(f) {
    return modify$prime(function(s) {
      var s$prime = f(s);
      return {
        state: s$prime,
        value: s$prime
      };
    });
  };
  var modify_2 = function(f) {
    return function(s) {
      return $$void(functorEffect)(modify(f)(s));
    };
  };

  // output/Control.Monad.Rec.Class/index.js
  var Loop = function() {
    function Loop2(value0) {
      this.value0 = value0;
    }
    ;
    Loop2.create = function(value0) {
      return new Loop2(value0);
    };
    return Loop2;
  }();
  var Done = function() {
    function Done3(value0) {
      this.value0 = value0;
    }
    ;
    Done3.create = function(value0) {
      return new Done3(value0);
    };
    return Done3;
  }();
  var tailRecM = function(dict) {
    return dict.tailRecM;
  };
  var monadRecEffect = {
    tailRecM: function(f) {
      return function(a2) {
        var fromDone = function(v) {
          if (v instanceof Done) {
            return v.value0;
          }
          ;
          throw new Error("Failed pattern match at Control.Monad.Rec.Class (line 113, column 30 - line 113, column 44): " + [v.constructor.name]);
        };
        return function __do2() {
          var r = bindFlipped(bindEffect)($$new)(f(a2))();
          (function() {
            while (!function __do3() {
              var v = read(r)();
              if (v instanceof Loop) {
                var e2 = f(v.value0)();
                write(e2)(r)();
                return false;
              }
              ;
              if (v instanceof Done) {
                return true;
              }
              ;
              throw new Error("Failed pattern match at Control.Monad.Rec.Class (line 104, column 22 - line 109, column 28): " + [v.constructor.name]);
            }()) {
            }
            ;
            return {};
          })();
          return map(functorEffect)(fromDone)(read(r))();
        };
      };
    },
    Monad0: function() {
      return monadEffect;
    }
  };

  // output/Data.Unfoldable/foreign.js
  var unfoldrArrayImpl = function(isNothing2) {
    return function(fromJust2) {
      return function(fst2) {
        return function(snd2) {
          return function(f) {
            return function(b2) {
              var result = [];
              var value13 = b2;
              while (true) {
                var maybe2 = f(value13);
                if (isNothing2(maybe2))
                  return result;
                var tuple = fromJust2(maybe2);
                result.push(fst2(tuple));
                value13 = snd2(tuple);
              }
            };
          };
        };
      };
    };
  };

  // output/Data.Unfoldable1/foreign.js
  var unfoldr1ArrayImpl = function(isNothing2) {
    return function(fromJust2) {
      return function(fst2) {
        return function(snd2) {
          return function(f) {
            return function(b2) {
              var result = [];
              var value13 = b2;
              while (true) {
                var tuple = f(value13);
                result.push(fst2(tuple));
                var maybe2 = snd2(tuple);
                if (isNothing2(maybe2))
                  return result;
                value13 = fromJust2(maybe2);
              }
            };
          };
        };
      };
    };
  };

  // output/Data.Unfoldable1/index.js
  var unfoldable1Array = {
    unfoldr1: unfoldr1ArrayImpl(isNothing)(fromJust())(fst)(snd)
  };

  // output/Data.Unfoldable/index.js
  var unfoldr = function(dict) {
    return dict.unfoldr;
  };
  var unfoldableArray = {
    unfoldr: unfoldrArrayImpl(isNothing)(fromJust())(fst)(snd),
    Unfoldable10: function() {
      return unfoldable1Array;
    }
  };

  // output/Data.NonEmpty/index.js
  var NonEmpty = function() {
    function NonEmpty2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    NonEmpty2.create = function(value0) {
      return function(value1) {
        return new NonEmpty2(value0, value1);
      };
    };
    return NonEmpty2;
  }();
  var unfoldable1NonEmpty = function(dictUnfoldable) {
    return {
      unfoldr1: function(f) {
        return function(b2) {
          return uncurry(NonEmpty.create)(map(functorTuple)(unfoldr(dictUnfoldable)(map(functorMaybe)(f)))(f(b2)));
        };
      }
    };
  };
  var singleton2 = function(dictPlus) {
    return function(a2) {
      return /* @__PURE__ */ new NonEmpty(a2, empty(dictPlus));
    };
  };
  var functorNonEmpty = function(dictFunctor) {
    return {
      map: function(f) {
        return function(m) {
          return /* @__PURE__ */ new NonEmpty(f(m.value0), map(dictFunctor)(f)(m.value1));
        };
      }
    };
  };
  var functorWithIndex = function(dictFunctorWithIndex) {
    return {
      mapWithIndex: function(f) {
        return function(v) {
          return /* @__PURE__ */ new NonEmpty(f(Nothing.value)(v.value0), mapWithIndex(dictFunctorWithIndex)(function($161) {
            return f(Just.create($161));
          })(v.value1));
        };
      },
      Functor0: function() {
        return functorNonEmpty(dictFunctorWithIndex.Functor0());
      }
    };
  };
  var foldableNonEmpty = function(dictFoldable) {
    return {
      foldMap: function(dictMonoid) {
        return function(f) {
          return function(v) {
            return append(dictMonoid.Semigroup0())(f(v.value0))(foldMap(dictFoldable)(dictMonoid)(f)(v.value1));
          };
        };
      },
      foldl: function(f) {
        return function(b2) {
          return function(v) {
            return foldl(dictFoldable)(f)(f(b2)(v.value0))(v.value1);
          };
        };
      },
      foldr: function(f) {
        return function(b2) {
          return function(v) {
            return f(v.value0)(foldr(dictFoldable)(f)(b2)(v.value1));
          };
        };
      }
    };
  };
  var traversableNonEmpty = function(dictTraversable) {
    return {
      sequence: function(dictApplicative) {
        return function(v) {
          return apply(dictApplicative.Apply0())(map(dictApplicative.Apply0().Functor0())(NonEmpty.create)(v.value0))(sequence(dictTraversable)(dictApplicative)(v.value1));
        };
      },
      traverse: function(dictApplicative) {
        return function(f) {
          return function(v) {
            return apply(dictApplicative.Apply0())(map(dictApplicative.Apply0().Functor0())(NonEmpty.create)(f(v.value0)))(traverse(dictTraversable)(dictApplicative)(f)(v.value1));
          };
        };
      },
      Functor0: function() {
        return functorNonEmpty(dictTraversable.Functor0());
      },
      Foldable1: function() {
        return foldableNonEmpty(dictTraversable.Foldable1());
      }
    };
  };
  var foldable1NonEmpty = function(dictFoldable) {
    return {
      foldMap1: function(dictSemigroup) {
        return function(f) {
          return function(v) {
            return foldl(dictFoldable)(function(s) {
              return function(a1) {
                return append(dictSemigroup)(s)(f(a1));
              };
            })(f(v.value0))(v.value1);
          };
        };
      },
      foldr1: function(f) {
        return function(v) {
          return maybe(v.value0)(f(v.value0))(foldr(dictFoldable)(function(a1) {
            var $166 = maybe(a1)(f(a1));
            return function($167) {
              return Just.create($166($167));
            };
          })(Nothing.value)(v.value1));
        };
      },
      foldl1: function(f) {
        return function(v) {
          return foldl(dictFoldable)(f)(v.value0)(v.value1);
        };
      },
      Foldable0: function() {
        return foldableNonEmpty(dictFoldable);
      }
    };
  };
  var eqNonEmpty = function(dictEq1) {
    return function(dictEq) {
      return {
        eq: function(x) {
          return function(y) {
            return eq(dictEq)(x.value0)(y.value0) && eq1(dictEq1)(dictEq)(x.value1)(y.value1);
          };
        }
      };
    };
  };
  var ordNonEmpty = function(dictOrd1) {
    return function(dictOrd) {
      return {
        compare: function(x) {
          return function(y) {
            var v = compare(dictOrd)(x.value0)(y.value0);
            if (v instanceof LT) {
              return LT.value;
            }
            ;
            if (v instanceof GT) {
              return GT.value;
            }
            ;
            return compare1(dictOrd1)(dictOrd)(x.value1)(y.value1);
          };
        },
        Eq0: function() {
          return eqNonEmpty(dictOrd1.Eq10())(dictOrd.Eq0());
        }
      };
    };
  };
  var eq1NonEmpty = function(dictEq1) {
    return {
      eq1: function(dictEq) {
        return eq(eqNonEmpty(dictEq1)(dictEq));
      }
    };
  };
  var ord1NonEmpty = function(dictOrd1) {
    return {
      compare1: function(dictOrd) {
        return compare(ordNonEmpty(dictOrd1)(dictOrd));
      },
      Eq10: function() {
        return eq1NonEmpty(dictOrd1.Eq10());
      }
    };
  };

  // output/Data.List.Types/index.js
  var Nil = function() {
    function Nil3() {
    }
    ;
    Nil3.value = new Nil3();
    return Nil3;
  }();
  var Cons = function() {
    function Cons3(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Cons3.create = function(value0) {
      return function(value1) {
        return new Cons3(value0, value1);
      };
    };
    return Cons3;
  }();
  var NonEmptyList = function(x) {
    return x;
  };
  var toList = function(v) {
    return /* @__PURE__ */ new Cons(v.value0, v.value1);
  };
  var listMap = function(f) {
    var chunkedRevMap = function($copy_chunksAcc) {
      return function($copy_v) {
        var $tco_var_chunksAcc = $copy_chunksAcc;
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(chunksAcc, v) {
          if (v instanceof Cons && (v.value1 instanceof Cons && v.value1.value1 instanceof Cons)) {
            $tco_var_chunksAcc = /* @__PURE__ */ new Cons(v, chunksAcc);
            $copy_v = v.value1.value1.value1;
            return;
          }
          ;
          var unrolledMap = function(v1) {
            if (v1 instanceof Cons && (v1.value1 instanceof Cons && v1.value1.value1 instanceof Nil)) {
              return /* @__PURE__ */ new Cons(f(v1.value0), /* @__PURE__ */ new Cons(f(v1.value1.value0), Nil.value));
            }
            ;
            if (v1 instanceof Cons && v1.value1 instanceof Nil) {
              return /* @__PURE__ */ new Cons(f(v1.value0), Nil.value);
            }
            ;
            return Nil.value;
          };
          var reverseUnrolledMap = function($copy_v1) {
            return function($copy_acc) {
              var $tco_var_v1 = $copy_v1;
              var $tco_done1 = false;
              var $tco_result2;
              function $tco_loop2(v1, acc) {
                if (v1 instanceof Cons && (v1.value0 instanceof Cons && (v1.value0.value1 instanceof Cons && v1.value0.value1.value1 instanceof Cons))) {
                  $tco_var_v1 = v1.value1;
                  $copy_acc = /* @__PURE__ */ new Cons(f(v1.value0.value0), /* @__PURE__ */ new Cons(f(v1.value0.value1.value0), /* @__PURE__ */ new Cons(f(v1.value0.value1.value1.value0), acc)));
                  return;
                }
                ;
                $tco_done1 = true;
                return acc;
              }
              ;
              while (!$tco_done1) {
                $tco_result2 = $tco_loop2($tco_var_v1, $copy_acc);
              }
              ;
              return $tco_result2;
            };
          };
          $tco_done = true;
          return reverseUnrolledMap(chunksAcc)(unrolledMap(v));
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($tco_var_chunksAcc, $copy_v);
        }
        ;
        return $tco_result;
      };
    };
    return chunkedRevMap(Nil.value);
  };
  var functorList = {
    map: listMap
  };
  var functorNonEmptyList = functorNonEmpty(functorList);
  var foldableList = {
    foldr: function(f) {
      return function(b2) {
        var rev3 = function() {
          var go2 = function($copy_acc) {
            return function($copy_v) {
              var $tco_var_acc = $copy_acc;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(acc, v) {
                if (v instanceof Nil) {
                  $tco_done = true;
                  return acc;
                }
                ;
                if (v instanceof Cons) {
                  $tco_var_acc = /* @__PURE__ */ new Cons(v.value0, acc);
                  $copy_v = v.value1;
                  return;
                }
                ;
                throw new Error("Failed pattern match at Data.List.Types (line 108, column 7 - line 108, column 23): " + [acc.constructor.name, v.constructor.name]);
              }
              ;
              while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_acc, $copy_v);
              }
              ;
              return $tco_result;
            };
          };
          return go2(Nil.value);
        }();
        var $205 = foldl(foldableList)(flip(f))(b2);
        return function($206) {
          return $205(rev3($206));
        };
      };
    },
    foldl: function(f) {
      var go2 = function($copy_b) {
        return function($copy_v) {
          var $tco_var_b = $copy_b;
          var $tco_done1 = false;
          var $tco_result;
          function $tco_loop(b2, v) {
            if (v instanceof Nil) {
              $tco_done1 = true;
              return b2;
            }
            ;
            if (v instanceof Cons) {
              $tco_var_b = f(b2)(v.value0);
              $copy_v = v.value1;
              return;
            }
            ;
            throw new Error("Failed pattern match at Data.List.Types (line 112, column 12 - line 114, column 30): " + [v.constructor.name]);
          }
          ;
          while (!$tco_done1) {
            $tco_result = $tco_loop($tco_var_b, $copy_v);
          }
          ;
          return $tco_result;
        };
      };
      return go2;
    },
    foldMap: function(dictMonoid) {
      return function(f) {
        return foldl(foldableList)(function(acc) {
          var $207 = append(dictMonoid.Semigroup0())(acc);
          return function($208) {
            return $207(f($208));
          };
        })(mempty(dictMonoid));
      };
    }
  };
  var foldableNonEmptyList = foldableNonEmpty(foldableList);
  var foldableWithIndexList = {
    foldrWithIndex: function(f) {
      return function(b2) {
        return function(xs) {
          var v = function() {
            var rev3 = foldl(foldableList)(function(v1) {
              return function(a2) {
                return /* @__PURE__ */ new Tuple(v1.value0 + 1 | 0, /* @__PURE__ */ new Cons(a2, v1.value1));
              };
            });
            return rev3(/* @__PURE__ */ new Tuple(0, Nil.value))(xs);
          }();
          return snd(foldl(foldableList)(function(v1) {
            return function(a2) {
              return /* @__PURE__ */ new Tuple(v1.value0 - 1 | 0, f(v1.value0 - 1 | 0)(a2)(v1.value1));
            };
          })(/* @__PURE__ */ new Tuple(v.value0, b2))(v.value1));
        };
      };
    },
    foldlWithIndex: function(f) {
      return function(acc) {
        var $209 = foldl(foldableList)(function(v) {
          return function(a2) {
            return /* @__PURE__ */ new Tuple(v.value0 + 1 | 0, f(v.value0)(v.value1)(a2));
          };
        })(/* @__PURE__ */ new Tuple(0, acc));
        return function($210) {
          return snd($209($210));
        };
      };
    },
    foldMapWithIndex: function(dictMonoid) {
      return function(f) {
        return foldlWithIndex(foldableWithIndexList)(function(i2) {
          return function(acc) {
            var $211 = append(dictMonoid.Semigroup0())(acc);
            var $212 = f(i2);
            return function($213) {
              return $211($212($213));
            };
          };
        })(mempty(dictMonoid));
      };
    },
    Foldable0: function() {
      return foldableList;
    }
  };
  var functorWithIndexList = {
    mapWithIndex: function(f) {
      return foldrWithIndex(foldableWithIndexList)(function(i2) {
        return function(x) {
          return function(acc) {
            return /* @__PURE__ */ new Cons(f(i2)(x), acc);
          };
        };
      })(Nil.value);
    },
    Functor0: function() {
      return functorList;
    }
  };
  var functorWithIndexNonEmptyList = {
    mapWithIndex: function(fn) {
      return function(v) {
        return mapWithIndex(functorWithIndex(functorWithIndexList))(function() {
          var $220 = maybe(0)(add(semiringInt)(1));
          return function($221) {
            return fn($220($221));
          };
        }())(v);
      };
    },
    Functor0: function() {
      return functorNonEmptyList;
    }
  };
  var semigroupList = {
    append: function(xs) {
      return function(ys) {
        return foldr(foldableList)(Cons.create)(ys)(xs);
      };
    }
  };
  var monoidList = {
    mempty: Nil.value,
    Semigroup0: function() {
      return semigroupList;
    }
  };
  var semigroupNonEmptyList = {
    append: function(v) {
      return function(as$prime) {
        return /* @__PURE__ */ new NonEmpty(v.value0, append(semigroupList)(v.value1)(toList(as$prime)));
      };
    }
  };
  var traversableList = {
    traverse: function(dictApplicative) {
      return function(f) {
        var $222 = map(dictApplicative.Apply0().Functor0())(foldl(foldableList)(flip(Cons.create))(Nil.value));
        var $223 = foldl(foldableList)(function(acc) {
          var $225 = lift2(dictApplicative.Apply0())(flip(Cons.create))(acc);
          return function($226) {
            return $225(f($226));
          };
        })(pure(dictApplicative)(Nil.value));
        return function($224) {
          return $222($223($224));
        };
      };
    },
    sequence: function(dictApplicative) {
      return traverse(traversableList)(dictApplicative)(identity(categoryFn));
    },
    Functor0: function() {
      return functorList;
    },
    Foldable1: function() {
      return foldableList;
    }
  };
  var traversableNonEmptyList = traversableNonEmpty(traversableList);
  var unfoldable1List = {
    unfoldr1: function(f) {
      return function(b2) {
        var go2 = function($copy_source) {
          return function($copy_memo) {
            var $tco_var_source = $copy_source;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(source2, memo) {
              var v = f(source2);
              if (v.value1 instanceof Just) {
                $tco_var_source = v.value1.value0;
                $copy_memo = /* @__PURE__ */ new Cons(v.value0, memo);
                return;
              }
              ;
              if (v.value1 instanceof Nothing) {
                $tco_done = true;
                return foldl(foldableList)(flip(Cons.create))(Nil.value)(/* @__PURE__ */ new Cons(v.value0, memo));
              }
              ;
              throw new Error("Failed pattern match at Data.List.Types (line 136, column 22 - line 138, column 61): " + [v.constructor.name]);
            }
            ;
            while (!$tco_done) {
              $tco_result = $tco_loop($tco_var_source, $copy_memo);
            }
            ;
            return $tco_result;
          };
        };
        return go2(b2)(Nil.value);
      };
    }
  };
  var unfoldableList = {
    unfoldr: function(f) {
      return function(b2) {
        var go2 = function($copy_source) {
          return function($copy_memo) {
            var $tco_var_source = $copy_source;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(source2, memo) {
              var v = f(source2);
              if (v instanceof Nothing) {
                $tco_done = true;
                return foldl(foldableList)(flip(Cons.create))(Nil.value)(memo);
              }
              ;
              if (v instanceof Just) {
                $tco_var_source = v.value0.value1;
                $copy_memo = /* @__PURE__ */ new Cons(v.value0.value0, memo);
                return;
              }
              ;
              throw new Error("Failed pattern match at Data.List.Types (line 143, column 22 - line 145, column 52): " + [v.constructor.name]);
            }
            ;
            while (!$tco_done) {
              $tco_result = $tco_loop($tco_var_source, $copy_memo);
            }
            ;
            return $tco_result;
          };
        };
        return go2(b2)(Nil.value);
      };
    },
    Unfoldable10: function() {
      return unfoldable1List;
    }
  };
  var unfoldable1NonEmptyList = unfoldable1NonEmpty(unfoldableList);
  var foldable1NonEmptyList = foldable1NonEmpty(foldableList);
  var eq1List = {
    eq1: function(dictEq) {
      return function(xs) {
        return function(ys) {
          var go2 = function($copy_v) {
            return function($copy_v1) {
              return function($copy_v2) {
                var $tco_var_v = $copy_v;
                var $tco_var_v1 = $copy_v1;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(v, v1, v2) {
                  if (!v2) {
                    $tco_done = true;
                    return false;
                  }
                  ;
                  if (v instanceof Nil && v1 instanceof Nil) {
                    $tco_done = true;
                    return v2;
                  }
                  ;
                  if (v instanceof Cons && v1 instanceof Cons) {
                    $tco_var_v = v.value1;
                    $tco_var_v1 = v1.value1;
                    $copy_v2 = v2 && eq(dictEq)(v1.value0)(v.value0);
                    return;
                  }
                  ;
                  $tco_done = true;
                  return false;
                }
                ;
                while (!$tco_done) {
                  $tco_result = $tco_loop($tco_var_v, $tco_var_v1, $copy_v2);
                }
                ;
                return $tco_result;
              };
            };
          };
          return go2(xs)(ys)(true);
        };
      };
    }
  };
  var eq1NonEmptyList = eq1NonEmpty(eq1List);
  var ord1List = {
    compare1: function(dictOrd) {
      return function(xs) {
        return function(ys) {
          var go2 = function($copy_v) {
            return function($copy_v1) {
              var $tco_var_v = $copy_v;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(v, v1) {
                if (v instanceof Nil && v1 instanceof Nil) {
                  $tco_done = true;
                  return EQ.value;
                }
                ;
                if (v instanceof Nil) {
                  $tco_done = true;
                  return LT.value;
                }
                ;
                if (v1 instanceof Nil) {
                  $tco_done = true;
                  return GT.value;
                }
                ;
                if (v instanceof Cons && v1 instanceof Cons) {
                  var v2 = compare(dictOrd)(v.value0)(v1.value0);
                  if (v2 instanceof EQ) {
                    $tco_var_v = v.value1;
                    $copy_v1 = v1.value1;
                    return;
                  }
                  ;
                  $tco_done = true;
                  return v2;
                }
                ;
                throw new Error("Failed pattern match at Data.List.Types (line 61, column 5 - line 61, column 20): " + [v.constructor.name, v1.constructor.name]);
              }
              ;
              while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_v, $copy_v1);
              }
              ;
              return $tco_result;
            };
          };
          return go2(xs)(ys);
        };
      };
    },
    Eq10: function() {
      return eq1List;
    }
  };
  var ord1NonEmptyList = ord1NonEmpty(ord1List);
  var applyList = {
    apply: function(v) {
      return function(v1) {
        if (v instanceof Nil) {
          return Nil.value;
        }
        ;
        if (v instanceof Cons) {
          return append(semigroupList)(map(functorList)(v.value0)(v1))(apply(applyList)(v.value1)(v1));
        }
        ;
        throw new Error("Failed pattern match at Data.List.Types (line 158, column 1 - line 160, column 48): " + [v.constructor.name, v1.constructor.name]);
      };
    },
    Functor0: function() {
      return functorList;
    }
  };
  var applyNonEmptyList = {
    apply: function(v) {
      return function(v1) {
        return /* @__PURE__ */ new NonEmpty(v.value0(v1.value0), append(semigroupList)(apply(applyList)(v.value1)(/* @__PURE__ */ new Cons(v1.value0, Nil.value)))(apply(applyList)(/* @__PURE__ */ new Cons(v.value0, v.value1))(v1.value1)));
      };
    },
    Functor0: function() {
      return functorNonEmptyList;
    }
  };
  var bindList = {
    bind: function(v) {
      return function(v1) {
        if (v instanceof Nil) {
          return Nil.value;
        }
        ;
        if (v instanceof Cons) {
          return append(semigroupList)(v1(v.value0))(bind(bindList)(v.value1)(v1));
        }
        ;
        throw new Error("Failed pattern match at Data.List.Types (line 165, column 1 - line 167, column 37): " + [v.constructor.name, v1.constructor.name]);
      };
    },
    Apply0: function() {
      return applyList;
    }
  };
  var bindNonEmptyList = {
    bind: function(v) {
      return function(f) {
        var v1 = f(v.value0);
        return /* @__PURE__ */ new NonEmpty(v1.value0, append(semigroupList)(v1.value1)(bind(bindList)(v.value1)(function($235) {
          return toList(f($235));
        })));
      };
    },
    Apply0: function() {
      return applyNonEmptyList;
    }
  };
  var applicativeList = {
    pure: function(a2) {
      return /* @__PURE__ */ new Cons(a2, Nil.value);
    },
    Apply0: function() {
      return applyList;
    }
  };
  var altNonEmptyList = {
    alt: append(semigroupNonEmptyList),
    Functor0: function() {
      return functorNonEmptyList;
    }
  };
  var altList = {
    alt: append(semigroupList),
    Functor0: function() {
      return functorList;
    }
  };
  var plusList = {
    empty: Nil.value,
    Alt0: function() {
      return altList;
    }
  };
  var applicativeNonEmptyList = {
    pure: function() {
      var $236 = singleton2(plusList);
      return function($237) {
        return NonEmptyList($236($237));
      };
    }(),
    Apply0: function() {
      return applyNonEmptyList;
    }
  };

  // output/Data.List.Internal/index.js
  var Leaf = function() {
    function Leaf3() {
    }
    ;
    Leaf3.value = new Leaf3();
    return Leaf3;
  }();
  var Two = function() {
    function Two3(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    Two3.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return new Two3(value0, value1, value22);
        };
      };
    };
    return Two3;
  }();
  var Three = function() {
    function Three3(value0, value1, value22, value32, value42) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
      this.value4 = value42;
    }
    ;
    Three3.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return function(value32) {
            return function(value42) {
              return new Three3(value0, value1, value22, value32, value42);
            };
          };
        };
      };
    };
    return Three3;
  }();
  var TwoLeft = function() {
    function TwoLeft3(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    TwoLeft3.create = function(value0) {
      return function(value1) {
        return new TwoLeft3(value0, value1);
      };
    };
    return TwoLeft3;
  }();
  var TwoRight = function() {
    function TwoRight3(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    TwoRight3.create = function(value0) {
      return function(value1) {
        return new TwoRight3(value0, value1);
      };
    };
    return TwoRight3;
  }();
  var ThreeLeft = function() {
    function ThreeLeft3(value0, value1, value22, value32) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
    }
    ;
    ThreeLeft3.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return function(value32) {
            return new ThreeLeft3(value0, value1, value22, value32);
          };
        };
      };
    };
    return ThreeLeft3;
  }();
  var ThreeMiddle = function() {
    function ThreeMiddle3(value0, value1, value22, value32) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
    }
    ;
    ThreeMiddle3.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return function(value32) {
            return new ThreeMiddle3(value0, value1, value22, value32);
          };
        };
      };
    };
    return ThreeMiddle3;
  }();
  var ThreeRight = function() {
    function ThreeRight3(value0, value1, value22, value32) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
    }
    ;
    ThreeRight3.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return function(value32) {
            return new ThreeRight3(value0, value1, value22, value32);
          };
        };
      };
    };
    return ThreeRight3;
  }();
  var KickUp = function() {
    function KickUp3(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    KickUp3.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return new KickUp3(value0, value1, value22);
        };
      };
    };
    return KickUp3;
  }();
  var fromZipper = function($copy_v) {
    return function($copy_tree) {
      var $tco_var_v = $copy_v;
      var $tco_done = false;
      var $tco_result;
      function $tco_loop(v, tree) {
        if (v instanceof Nil) {
          $tco_done = true;
          return tree;
        }
        ;
        if (v instanceof Cons) {
          if (v.value0 instanceof TwoLeft) {
            $tco_var_v = v.value1;
            $copy_tree = /* @__PURE__ */ new Two(tree, v.value0.value0, v.value0.value1);
            return;
          }
          ;
          if (v.value0 instanceof TwoRight) {
            $tco_var_v = v.value1;
            $copy_tree = /* @__PURE__ */ new Two(v.value0.value0, v.value0.value1, tree);
            return;
          }
          ;
          if (v.value0 instanceof ThreeLeft) {
            $tco_var_v = v.value1;
            $copy_tree = /* @__PURE__ */ new Three(tree, v.value0.value0, v.value0.value1, v.value0.value2, v.value0.value3);
            return;
          }
          ;
          if (v.value0 instanceof ThreeMiddle) {
            $tco_var_v = v.value1;
            $copy_tree = /* @__PURE__ */ new Three(v.value0.value0, v.value0.value1, tree, v.value0.value2, v.value0.value3);
            return;
          }
          ;
          if (v.value0 instanceof ThreeRight) {
            $tco_var_v = v.value1;
            $copy_tree = /* @__PURE__ */ new Three(v.value0.value0, v.value0.value1, v.value0.value2, v.value0.value3, tree);
            return;
          }
          ;
          throw new Error("Failed pattern match at Data.List.Internal (line 25, column 3 - line 30, column 76): " + [v.value0.constructor.name]);
        }
        ;
        throw new Error("Failed pattern match at Data.List.Internal (line 22, column 1 - line 22, column 63): " + [v.constructor.name, tree.constructor.name]);
      }
      ;
      while (!$tco_done) {
        $tco_result = $tco_loop($tco_var_v, $copy_tree);
      }
      ;
      return $tco_result;
    };
  };
  var insertAndLookupBy = function(comp) {
    return function(k) {
      return function(orig) {
        var up = function($copy_v) {
          return function($copy_v1) {
            var $tco_var_v = $copy_v;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(v, v1) {
              if (v instanceof Nil) {
                $tco_done = true;
                return /* @__PURE__ */ new Two(v1.value0, v1.value1, v1.value2);
              }
              ;
              if (v instanceof Cons) {
                if (v.value0 instanceof TwoLeft) {
                  $tco_done = true;
                  return fromZipper(v.value1)(/* @__PURE__ */ new Three(v1.value0, v1.value1, v1.value2, v.value0.value0, v.value0.value1));
                }
                ;
                if (v.value0 instanceof TwoRight) {
                  $tco_done = true;
                  return fromZipper(v.value1)(/* @__PURE__ */ new Three(v.value0.value0, v.value0.value1, v1.value0, v1.value1, v1.value2));
                }
                ;
                if (v.value0 instanceof ThreeLeft) {
                  $tco_var_v = v.value1;
                  $copy_v1 = /* @__PURE__ */ new KickUp(/* @__PURE__ */ new Two(v1.value0, v1.value1, v1.value2), v.value0.value0, /* @__PURE__ */ new Two(v.value0.value1, v.value0.value2, v.value0.value3));
                  return;
                }
                ;
                if (v.value0 instanceof ThreeMiddle) {
                  $tco_var_v = v.value1;
                  $copy_v1 = /* @__PURE__ */ new KickUp(/* @__PURE__ */ new Two(v.value0.value0, v.value0.value1, v1.value0), v1.value1, /* @__PURE__ */ new Two(v1.value2, v.value0.value2, v.value0.value3));
                  return;
                }
                ;
                if (v.value0 instanceof ThreeRight) {
                  $tco_var_v = v.value1;
                  $copy_v1 = /* @__PURE__ */ new KickUp(/* @__PURE__ */ new Two(v.value0.value0, v.value0.value1, v.value0.value2), v.value0.value3, /* @__PURE__ */ new Two(v1.value0, v1.value1, v1.value2));
                  return;
                }
                ;
                throw new Error("Failed pattern match at Data.List.Internal (line 58, column 5 - line 63, column 90): " + [v.value0.constructor.name, v1.constructor.name]);
              }
              ;
              throw new Error("Failed pattern match at Data.List.Internal (line 55, column 3 - line 55, column 50): " + [v.constructor.name, v1.constructor.name]);
            }
            ;
            while (!$tco_done) {
              $tco_result = $tco_loop($tco_var_v, $copy_v1);
            }
            ;
            return $tco_result;
          };
        };
        var down = function($copy_ctx) {
          return function($copy_v) {
            var $tco_var_ctx = $copy_ctx;
            var $tco_done1 = false;
            var $tco_result;
            function $tco_loop(ctx, v) {
              if (v instanceof Leaf) {
                $tco_done1 = true;
                return {
                  found: false,
                  result: up(ctx)(/* @__PURE__ */ new KickUp(Leaf.value, k, Leaf.value))
                };
              }
              ;
              if (v instanceof Two) {
                var v1 = comp(k)(v.value1);
                if (v1 instanceof EQ) {
                  $tco_done1 = true;
                  return {
                    found: true,
                    result: orig
                  };
                }
                ;
                if (v1 instanceof LT) {
                  $tco_var_ctx = /* @__PURE__ */ new Cons(/* @__PURE__ */ new TwoLeft(v.value1, v.value2), ctx);
                  $copy_v = v.value0;
                  return;
                }
                ;
                $tco_var_ctx = /* @__PURE__ */ new Cons(/* @__PURE__ */ new TwoRight(v.value0, v.value1), ctx);
                $copy_v = v.value2;
                return;
              }
              ;
              if (v instanceof Three) {
                var v1 = comp(k)(v.value1);
                if (v1 instanceof EQ) {
                  $tco_done1 = true;
                  return {
                    found: true,
                    result: orig
                  };
                }
                ;
                var v2 = comp(k)(v.value3);
                if (v2 instanceof EQ) {
                  $tco_done1 = true;
                  return {
                    found: true,
                    result: orig
                  };
                }
                ;
                if (v1 instanceof LT) {
                  $tco_var_ctx = /* @__PURE__ */ new Cons(/* @__PURE__ */ new ThreeLeft(v.value1, v.value2, v.value3, v.value4), ctx);
                  $copy_v = v.value0;
                  return;
                }
                ;
                if (v1 instanceof GT && v2 instanceof LT) {
                  $tco_var_ctx = /* @__PURE__ */ new Cons(/* @__PURE__ */ new ThreeMiddle(v.value0, v.value1, v.value3, v.value4), ctx);
                  $copy_v = v.value2;
                  return;
                }
                ;
                $tco_var_ctx = /* @__PURE__ */ new Cons(/* @__PURE__ */ new ThreeRight(v.value0, v.value1, v.value2, v.value3), ctx);
                $copy_v = v.value4;
                return;
              }
              ;
              throw new Error("Failed pattern match at Data.List.Internal (line 38, column 3 - line 38, column 81): " + [ctx.constructor.name, v.constructor.name]);
            }
            ;
            while (!$tco_done1) {
              $tco_result = $tco_loop($tco_var_ctx, $copy_v);
            }
            ;
            return $tco_result;
          };
        };
        return down(Nil.value)(orig);
      };
    };
  };
  var emptySet = Leaf.value;

  // output/Data.List/index.js
  var unzip = foldr(foldableList)(function(v) {
    return function(v1) {
      return /* @__PURE__ */ new Tuple(/* @__PURE__ */ new Cons(v.value0, v1.value0), /* @__PURE__ */ new Cons(v.value1, v1.value1));
    };
  })(/* @__PURE__ */ new Tuple(Nil.value, Nil.value));
  var span = function(v) {
    return function(v1) {
      if (v1 instanceof Cons && v(v1.value0)) {
        var v2 = span(v)(v1.value1);
        return {
          init: /* @__PURE__ */ new Cons(v1.value0, v2.init),
          rest: v2.rest
        };
      }
      ;
      return {
        init: Nil.value,
        rest: v1
      };
    };
  };
  var singleton3 = function(a2) {
    return /* @__PURE__ */ new Cons(a2, Nil.value);
  };
  var sortBy = function(cmp) {
    var merge = function(v) {
      return function(v1) {
        if (v instanceof Cons && v1 instanceof Cons) {
          if (eq(eqOrdering)(cmp(v.value0)(v1.value0))(GT.value)) {
            return /* @__PURE__ */ new Cons(v1.value0, merge(v)(v1.value1));
          }
          ;
          if (otherwise) {
            return /* @__PURE__ */ new Cons(v.value0, merge(v.value1)(v1));
          }
          ;
        }
        ;
        if (v instanceof Nil) {
          return v1;
        }
        ;
        if (v1 instanceof Nil) {
          return v;
        }
        ;
        throw new Error("Failed pattern match at Data.List (line 477, column 3 - line 477, column 38): " + [v.constructor.name, v1.constructor.name]);
      };
    };
    var mergePairs = function(v) {
      if (v instanceof Cons && v.value1 instanceof Cons) {
        return /* @__PURE__ */ new Cons(merge(v.value0)(v.value1.value0), mergePairs(v.value1.value1));
      }
      ;
      return v;
    };
    var mergeAll = function($copy_v) {
      var $tco_done = false;
      var $tco_result;
      function $tco_loop(v) {
        if (v instanceof Cons && v.value1 instanceof Nil) {
          $tco_done = true;
          return v.value0;
        }
        ;
        $copy_v = mergePairs(v);
        return;
      }
      ;
      while (!$tco_done) {
        $tco_result = $tco_loop($copy_v);
      }
      ;
      return $tco_result;
    };
    var sequences = function(v) {
      if (v instanceof Cons && v.value1 instanceof Cons) {
        if (eq(eqOrdering)(cmp(v.value0)(v.value1.value0))(GT.value)) {
          return descending(v.value1.value0)(singleton3(v.value0))(v.value1.value1);
        }
        ;
        if (otherwise) {
          return ascending(v.value1.value0)(function(v1) {
            return /* @__PURE__ */ new Cons(v.value0, v1);
          })(v.value1.value1);
        }
        ;
      }
      ;
      return singleton3(v);
    };
    var descending = function($copy_a) {
      return function($copy_as) {
        return function($copy_v) {
          var $tco_var_a = $copy_a;
          var $tco_var_as = $copy_as;
          var $tco_done1 = false;
          var $tco_result;
          function $tco_loop(a2, as, v) {
            if (v instanceof Cons && eq(eqOrdering)(cmp(a2)(v.value0))(GT.value)) {
              $tco_var_a = v.value0;
              $tco_var_as = /* @__PURE__ */ new Cons(a2, as);
              $copy_v = v.value1;
              return;
            }
            ;
            $tco_done1 = true;
            return /* @__PURE__ */ new Cons(/* @__PURE__ */ new Cons(a2, as), sequences(v));
          }
          ;
          while (!$tco_done1) {
            $tco_result = $tco_loop($tco_var_a, $tco_var_as, $copy_v);
          }
          ;
          return $tco_result;
        };
      };
    };
    var ascending = function($copy_a) {
      return function($copy_as) {
        return function($copy_v) {
          var $tco_var_a = $copy_a;
          var $tco_var_as = $copy_as;
          var $tco_done2 = false;
          var $tco_result;
          function $tco_loop(a2, as, v) {
            if (v instanceof Cons && notEq(eqOrdering)(cmp(a2)(v.value0))(GT.value)) {
              $tco_var_a = v.value0;
              $tco_var_as = function(ys) {
                return as(/* @__PURE__ */ new Cons(a2, ys));
              };
              $copy_v = v.value1;
              return;
            }
            ;
            $tco_done2 = true;
            return /* @__PURE__ */ new Cons(as(singleton3(a2)), sequences(v));
          }
          ;
          while (!$tco_done2) {
            $tco_result = $tco_loop($tco_var_a, $tco_var_as, $copy_v);
          }
          ;
          return $tco_result;
        };
      };
    };
    return function($345) {
      return mergeAll(sequences($345));
    };
  };
  var reverse = function() {
    var go2 = function($copy_acc) {
      return function($copy_v) {
        var $tco_var_acc = $copy_acc;
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(acc, v) {
          if (v instanceof Nil) {
            $tco_done = true;
            return acc;
          }
          ;
          if (v instanceof Cons) {
            $tco_var_acc = /* @__PURE__ */ new Cons(v.value0, acc);
            $copy_v = v.value1;
            return;
          }
          ;
          throw new Error("Failed pattern match at Data.List (line 372, column 3 - line 372, column 19): " + [acc.constructor.name, v.constructor.name]);
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($tco_var_acc, $copy_v);
        }
        ;
        return $tco_result;
      };
    };
    return go2(Nil.value);
  }();
  var take = function() {
    var go2 = function($copy_acc) {
      return function($copy_v) {
        return function($copy_v1) {
          var $tco_var_acc = $copy_acc;
          var $tco_var_v = $copy_v;
          var $tco_done = false;
          var $tco_result;
          function $tco_loop(acc, v, v1) {
            if (v < 1) {
              $tco_done = true;
              return reverse(acc);
            }
            ;
            if (v1 instanceof Nil) {
              $tco_done = true;
              return reverse(acc);
            }
            ;
            if (v1 instanceof Cons) {
              $tco_var_acc = /* @__PURE__ */ new Cons(v1.value0, acc);
              $tco_var_v = v - 1 | 0;
              $copy_v1 = v1.value1;
              return;
            }
            ;
            throw new Error("Failed pattern match at Data.List (line 524, column 3 - line 524, column 35): " + [acc.constructor.name, v.constructor.name, v1.constructor.name]);
          }
          ;
          while (!$tco_done) {
            $tco_result = $tco_loop($tco_var_acc, $tco_var_v, $copy_v1);
          }
          ;
          return $tco_result;
        };
      };
    };
    return go2(Nil.value);
  }();
  var zipWith = function(f) {
    return function(xs) {
      return function(ys) {
        var go2 = function($copy_v) {
          return function($copy_v1) {
            return function($copy_acc) {
              var $tco_var_v = $copy_v;
              var $tco_var_v1 = $copy_v1;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(v, v1, acc) {
                if (v instanceof Nil) {
                  $tco_done = true;
                  return acc;
                }
                ;
                if (v1 instanceof Nil) {
                  $tco_done = true;
                  return acc;
                }
                ;
                if (v instanceof Cons && v1 instanceof Cons) {
                  $tco_var_v = v.value1;
                  $tco_var_v1 = v1.value1;
                  $copy_acc = /* @__PURE__ */ new Cons(f(v.value0)(v1.value0), acc);
                  return;
                }
                ;
                throw new Error("Failed pattern match at Data.List (line 795, column 3 - line 795, column 21): " + [v.constructor.name, v1.constructor.name, acc.constructor.name]);
              }
              ;
              while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_v, $tco_var_v1, $copy_acc);
              }
              ;
              return $tco_result;
            };
          };
        };
        return reverse(go2(xs)(ys)(Nil.value));
      };
    };
  };
  var zip = zipWith(Tuple.create);
  var $$null = function(v) {
    if (v instanceof Nil) {
      return true;
    }
    ;
    return false;
  };
  var nubBy = function(p2) {
    var go2 = function($copy_v) {
      return function($copy_acc) {
        return function($copy_v1) {
          var $tco_var_v = $copy_v;
          var $tco_var_acc = $copy_acc;
          var $tco_done = false;
          var $tco_result;
          function $tco_loop(v, acc, v1) {
            if (v1 instanceof Nil) {
              $tco_done = true;
              return acc;
            }
            ;
            if (v1 instanceof Cons) {
              var v2 = insertAndLookupBy(p2)(v1.value0)(v);
              if (v2.found) {
                $tco_var_v = v2.result;
                $tco_var_acc = acc;
                $copy_v1 = v1.value1;
                return;
              }
              ;
              $tco_var_v = v2.result;
              $tco_var_acc = /* @__PURE__ */ new Cons(v1.value0, acc);
              $copy_v1 = v1.value1;
              return;
            }
            ;
            throw new Error("Failed pattern match at Data.List (line 689, column 5 - line 689, column 23): " + [v.constructor.name, acc.constructor.name, v1.constructor.name]);
          }
          ;
          while (!$tco_done) {
            $tco_result = $tco_loop($tco_var_v, $tco_var_acc, $copy_v1);
          }
          ;
          return $tco_result;
        };
      };
    };
    var $346 = go2(emptySet)(Nil.value);
    return function($347) {
      return reverse($346($347));
    };
  };
  var mapWithIndex2 = mapWithIndex(functorWithIndexList);
  var mapMaybe = function(f) {
    var go2 = function($copy_acc) {
      return function($copy_v) {
        var $tco_var_acc = $copy_acc;
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(acc, v) {
          if (v instanceof Nil) {
            $tco_done = true;
            return reverse(acc);
          }
          ;
          if (v instanceof Cons) {
            var v1 = f(v.value0);
            if (v1 instanceof Nothing) {
              $tco_var_acc = acc;
              $copy_v = v.value1;
              return;
            }
            ;
            if (v1 instanceof Just) {
              $tco_var_acc = /* @__PURE__ */ new Cons(v1.value0, acc);
              $copy_v = v.value1;
              return;
            }
            ;
            throw new Error("Failed pattern match at Data.List (line 423, column 5 - line 425, column 32): " + [v1.constructor.name]);
          }
          ;
          throw new Error("Failed pattern match at Data.List (line 421, column 3 - line 421, column 27): " + [acc.constructor.name, v.constructor.name]);
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($tco_var_acc, $copy_v);
        }
        ;
        return $tco_result;
      };
    };
    return go2(Nil.value);
  };
  var length2 = foldl(foldableList)(function(acc) {
    return function(v) {
      return acc + 1 | 0;
    };
  })(0);
  var groupBy = function(v) {
    return function(v1) {
      if (v1 instanceof Nil) {
        return Nil.value;
      }
      ;
      if (v1 instanceof Cons) {
        var v2 = span(v(v1.value0))(v1.value1);
        return /* @__PURE__ */ new Cons(/* @__PURE__ */ new NonEmpty(v1.value0, v2.init), groupBy(v)(v2.rest));
      }
      ;
      throw new Error("Failed pattern match at Data.List (line 624, column 1 - line 624, column 80): " + [v.constructor.name, v1.constructor.name]);
    };
  };
  var filter = function(p2) {
    var go2 = function($copy_acc) {
      return function($copy_v) {
        var $tco_var_acc = $copy_acc;
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(acc, v) {
          if (v instanceof Nil) {
            $tco_done = true;
            return reverse(acc);
          }
          ;
          if (v instanceof Cons) {
            if (p2(v.value0)) {
              $tco_var_acc = /* @__PURE__ */ new Cons(v.value0, acc);
              $copy_v = v.value1;
              return;
            }
            ;
            if (otherwise) {
              $tco_var_acc = acc;
              $copy_v = v.value1;
              return;
            }
            ;
          }
          ;
          throw new Error("Failed pattern match at Data.List (line 394, column 3 - line 394, column 27): " + [acc.constructor.name, v.constructor.name]);
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($tco_var_acc, $copy_v);
        }
        ;
        return $tco_result;
      };
    };
    return go2(Nil.value);
  };
  var intersectBy = function(v) {
    return function(v1) {
      return function(v2) {
        if (v1 instanceof Nil) {
          return Nil.value;
        }
        ;
        if (v2 instanceof Nil) {
          return Nil.value;
        }
        ;
        return filter(function(x) {
          return any(foldableList)(heytingAlgebraBoolean)(v(x))(v2);
        })(v1);
      };
    };
  };
  var nubByEq = function(v) {
    return function(v1) {
      if (v1 instanceof Nil) {
        return Nil.value;
      }
      ;
      if (v1 instanceof Cons) {
        return /* @__PURE__ */ new Cons(v1.value0, nubByEq(v)(filter(function(y) {
          return !v(v1.value0)(y);
        })(v1.value1)));
      }
      ;
      throw new Error("Failed pattern match at Data.List (line 721, column 1 - line 721, column 61): " + [v.constructor.name, v1.constructor.name]);
    };
  };
  var deleteBy = function(v) {
    return function(v1) {
      return function(v2) {
        if (v2 instanceof Nil) {
          return Nil.value;
        }
        ;
        if (v2 instanceof Cons && v(v1)(v2.value0)) {
          return v2.value1;
        }
        ;
        if (v2 instanceof Cons) {
          return /* @__PURE__ */ new Cons(v2.value0, deleteBy(v)(v1)(v2.value1));
        }
        ;
        throw new Error("Failed pattern match at Data.List (line 748, column 1 - line 748, column 67): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
      };
    };
  };
  var unionBy = function(eq2) {
    return function(xs) {
      return function(ys) {
        return append(semigroupList)(xs)(foldl(foldableList)(flip(deleteBy(eq2)))(nubByEq(eq2)(ys))(xs));
      };
    };
  };
  var concatMap = flip(bind(bindList));
  var catMaybes = mapMaybe(identity(categoryFn));

  // output/Data.Lazy/foreign.js
  var defer2 = function(thunk4) {
    var v = null;
    return function() {
      if (thunk4 === void 0)
        return v;
      v = thunk4();
      thunk4 = void 0;
      return v;
    };
  };
  var force = function(l) {
    return l();
  };

  // output/Data.Lazy/index.js
  var functorLazy = {
    map: function(f) {
      return function(l) {
        return defer2(function(v) {
          return f(force(l));
        });
      };
    }
  };
  var invariantLazy = {
    imap: imapF(functorLazy)
  };
  var applyLazy = {
    apply: function(f) {
      return function(x) {
        return defer2(function(v) {
          return force(f)(force(x));
        });
      };
    },
    Functor0: function() {
      return functorLazy;
    }
  };
  var applicativeLazy = {
    pure: function(a2) {
      return defer2(function(v) {
        return a2;
      });
    },
    Apply0: function() {
      return applyLazy;
    }
  };

  // output/Data.List.Lazy.Types/index.js
  var List = function(x) {
    return x;
  };
  var Nil2 = function() {
    function Nil3() {
    }
    ;
    Nil3.value = new Nil3();
    return Nil3;
  }();
  var Cons2 = function() {
    function Cons3(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Cons3.create = function(value0) {
      return function(value1) {
        return new Cons3(value0, value1);
      };
    };
    return Cons3;
  }();
  var nil = defer2(function(v) {
    return Nil2.value;
  });
  var step = function() {
    var $225 = unwrap();
    return function($226) {
      return force($225($226));
    };
  }();
  var semigroupList2 = {
    append: function(xs) {
      return function(ys) {
        var go2 = function(v) {
          if (v instanceof Nil2) {
            return step(ys);
          }
          ;
          if (v instanceof Cons2) {
            return /* @__PURE__ */ new Cons2(v.value0, append(semigroupList2)(v.value1)(ys));
          }
          ;
          throw new Error("Failed pattern match at Data.List.Lazy.Types (line 104, column 5 - line 104, column 21): " + [v.constructor.name]);
        };
        return map(functorLazy)(go2)(unwrap()(xs));
      };
    }
  };
  var lazyList = {
    defer: function(f) {
      return defer2(function($227) {
        return step(f($227));
      });
    }
  };
  var functorList2 = {
    map: function(f) {
      return function(xs) {
        var go2 = function(v) {
          if (v instanceof Nil2) {
            return Nil2.value;
          }
          ;
          if (v instanceof Cons2) {
            return /* @__PURE__ */ new Cons2(f(v.value0), map(functorList2)(f)(v.value1));
          }
          ;
          throw new Error("Failed pattern match at Data.List.Lazy.Types (line 113, column 5 - line 113, column 17): " + [v.constructor.name]);
        };
        return map(functorLazy)(go2)(unwrap()(xs));
      };
    }
  };
  var functorNonEmptyList2 = {
    map: function(f) {
      return function(v) {
        return map(functorLazy)(map(functorNonEmpty(functorList2))(f))(v);
      };
    }
  };
  var cons2 = function(x) {
    return function(xs) {
      return defer2(function(v) {
        return /* @__PURE__ */ new Cons2(x, xs);
      });
    };
  };
  var foldableList2 = {
    foldr: function(op) {
      return function(z) {
        return function(xs) {
          var rev3 = foldl(foldableList2)(flip(cons2))(nil);
          return foldl(foldableList2)(flip(op))(z)(rev3(xs));
        };
      };
    },
    foldl: function(op) {
      var go2 = function($copy_b) {
        return function($copy_xs) {
          var $tco_var_b = $copy_b;
          var $tco_done = false;
          var $tco_result;
          function $tco_loop(b2, xs) {
            var v = step(xs);
            if (v instanceof Nil2) {
              $tco_done = true;
              return b2;
            }
            ;
            if (v instanceof Cons2) {
              $tco_var_b = op(b2)(v.value0);
              $copy_xs = v.value1;
              return;
            }
            ;
            throw new Error("Failed pattern match at Data.List.Lazy.Types (line 128, column 7 - line 130, column 40): " + [v.constructor.name]);
          }
          ;
          while (!$tco_done) {
            $tco_result = $tco_loop($tco_var_b, $copy_xs);
          }
          ;
          return $tco_result;
        };
      };
      return go2;
    },
    foldMap: function(dictMonoid) {
      return function(f) {
        return foldl(foldableList2)(function(b2) {
          return function(a2) {
            return append(dictMonoid.Semigroup0())(b2)(f(a2));
          };
        })(mempty(dictMonoid));
      };
    }
  };
  var toList2 = function(v) {
    return defer(lazyList)(function(v1) {
      var v2 = force(v);
      return cons2(v2.value0)(v2.value1);
    });
  };
  var semigroupNonEmptyList2 = {
    append: function(v) {
      return function(as$prime) {
        var v1 = force(v);
        return defer2(function(v2) {
          return /* @__PURE__ */ new NonEmpty(v1.value0, append(semigroupList2)(v1.value1)(toList2(as$prime)));
        });
      };
    }
  };
  var unfoldable1List2 = {
    unfoldr1: function() {
      var go2 = function(f) {
        return function(b2) {
          return defer(lazyList)(function(v) {
            var v1 = f(b2);
            if (v1.value1 instanceof Just) {
              return cons2(v1.value0)(go2(f)(v1.value1.value0));
            }
            ;
            if (v1.value1 instanceof Nothing) {
              return cons2(v1.value0)(nil);
            }
            ;
            throw new Error("Failed pattern match at Data.List.Lazy.Types (line 152, column 28 - line 154, column 33): " + [v1.constructor.name]);
          });
        };
      };
      return go2;
    }()
  };
  var unfoldableList2 = {
    unfoldr: function() {
      var go2 = function(f) {
        return function(b2) {
          return defer(lazyList)(function(v) {
            var v1 = f(b2);
            if (v1 instanceof Nothing) {
              return nil;
            }
            ;
            if (v1 instanceof Just) {
              return cons2(v1.value0.value0)(go2(f)(v1.value0.value1));
            }
            ;
            throw new Error("Failed pattern match at Data.List.Lazy.Types (line 158, column 28 - line 160, column 39): " + [v1.constructor.name]);
          });
        };
      };
      return go2;
    }(),
    Unfoldable10: function() {
      return unfoldable1List2;
    }
  };
  var monadList = {
    Applicative0: function() {
      return applicativeList2;
    },
    Bind1: function() {
      return bindList2;
    }
  };
  var bindList2 = {
    bind: function(xs) {
      return function(f) {
        var go2 = function(v) {
          if (v instanceof Nil2) {
            return Nil2.value;
          }
          ;
          if (v instanceof Cons2) {
            return step(append(semigroupList2)(f(v.value0))(bind(bindList2)(v.value1)(f)));
          }
          ;
          throw new Error("Failed pattern match at Data.List.Lazy.Types (line 181, column 5 - line 181, column 17): " + [v.constructor.name]);
        };
        return map(functorLazy)(go2)(unwrap()(xs));
      };
    },
    Apply0: function() {
      return applyList2;
    }
  };
  var applyList2 = {
    apply: ap(monadList),
    Functor0: function() {
      return functorList2;
    }
  };
  var applicativeList2 = {
    pure: function(a2) {
      return cons2(a2)(nil);
    },
    Apply0: function() {
      return applyList2;
    }
  };
  var altNonEmptyList2 = {
    alt: append(semigroupNonEmptyList2),
    Functor0: function() {
      return functorNonEmptyList2;
    }
  };
  var altList2 = {
    alt: append(semigroupList2),
    Functor0: function() {
      return functorList2;
    }
  };

  // output/Data.List.Lazy/index.js
  var zipWith2 = function(f) {
    return function(xs) {
      return function(ys) {
        var go2 = function(v) {
          return function(v1) {
            if (v instanceof Nil2) {
              return Nil2.value;
            }
            ;
            if (v1 instanceof Nil2) {
              return Nil2.value;
            }
            ;
            if (v instanceof Cons2 && v1 instanceof Cons2) {
              return /* @__PURE__ */ new Cons2(f(v.value0)(v1.value0), zipWith2(f)(v.value1)(v1.value1));
            }
            ;
            throw new Error("Failed pattern match at Data.List.Lazy (line 705, column 3 - line 705, column 35): " + [v.constructor.name, v1.constructor.name]);
          };
        };
        return apply(applyLazy)(map(functorLazy)(go2)(unwrap()(xs)))(unwrap()(ys));
      };
    };
  };
  var zip2 = zipWith2(Tuple.create);
  var unzip2 = foldr(foldableList2)(function(v) {
    return function(v1) {
      return /* @__PURE__ */ new Tuple(cons2(v.value0)(v1.value0), cons2(v.value1)(v1.value1));
    };
  })(/* @__PURE__ */ new Tuple(nil, nil));
  var uncons = function(xs) {
    var v = step(xs);
    if (v instanceof Nil2) {
      return Nothing.value;
    }
    ;
    if (v instanceof Cons2) {
      return /* @__PURE__ */ new Just({
        head: v.value0,
        tail: v.value1
      });
    }
    ;
    throw new Error("Failed pattern match at Data.List.Lazy (line 288, column 13 - line 290, column 44): " + [v.constructor.name]);
  };
  var $$null2 = function($257) {
    return isNothing(uncons($257));
  };
  var mapMaybe2 = function(f) {
    var go2 = function($copy_v) {
      var $tco_done = false;
      var $tco_result;
      function $tco_loop(v) {
        if (v instanceof Nil2) {
          $tco_done = true;
          return Nil2.value;
        }
        ;
        if (v instanceof Cons2) {
          var v1 = f(v.value0);
          if (v1 instanceof Nothing) {
            $copy_v = step(v.value1);
            return;
          }
          ;
          if (v1 instanceof Just) {
            $tco_done = true;
            return /* @__PURE__ */ new Cons2(v1.value0, mapMaybe2(f)(v.value1));
          }
          ;
          throw new Error("Failed pattern match at Data.List.Lazy (line 448, column 5 - line 450, column 39): " + [v1.constructor.name]);
        }
        ;
        throw new Error("Failed pattern match at Data.List.Lazy (line 446, column 3 - line 446, column 15): " + [v.constructor.name]);
      }
      ;
      while (!$tco_done) {
        $tco_result = $tco_loop($copy_v);
      }
      ;
      return $tco_result;
    };
    var $258 = map(functorLazy)(go2);
    var $259 = unwrap();
    return function($260) {
      return List($258($259($260)));
    };
  };
  var length3 = foldl(foldableList2)(function(l) {
    return function(v) {
      return l + 1 | 0;
    };
  })(0);
  var last = function() {
    var go2 = function($copy_v) {
      var $tco_done = false;
      var $tco_result;
      function $tco_loop(v) {
        if (v instanceof Cons2) {
          if ($$null2(v.value1)) {
            $tco_done = true;
            return /* @__PURE__ */ new Just(v.value0);
          }
          ;
          if (otherwise) {
            $copy_v = step(v.value1);
            return;
          }
          ;
        }
        ;
        $tco_done = true;
        return Nothing.value;
      }
      ;
      while (!$tco_done) {
        $tco_result = $tco_loop($copy_v);
      }
      ;
      return $tco_result;
    };
    return function($261) {
      return go2(step($261));
    };
  }();
  var init = function() {
    var go2 = function(v) {
      if (v instanceof Cons2) {
        if ($$null2(v.value1)) {
          return /* @__PURE__ */ new Just(nil);
        }
        ;
        if (otherwise) {
          return map(functorMaybe)(cons2(v.value0))(go2(step(v.value1)));
        }
        ;
      }
      ;
      return Nothing.value;
    };
    return function($262) {
      return go2(step($262));
    };
  }();
  var fromStep = function() {
    var $266 = pure(applicativeLazy);
    return function($267) {
      return List($266($267));
    };
  }();
  var concatMap2 = flip(bind(bindList2));
  var catMaybes2 = mapMaybe2(identity(categoryFn));

  // output/Data.Map.Internal/index.js
  var Leaf2 = function() {
    function Leaf3() {
    }
    ;
    Leaf3.value = new Leaf3();
    return Leaf3;
  }();
  var Two2 = function() {
    function Two3(value0, value1, value22, value32) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
    }
    ;
    Two3.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return function(value32) {
            return new Two3(value0, value1, value22, value32);
          };
        };
      };
    };
    return Two3;
  }();
  var Three2 = function() {
    function Three3(value0, value1, value22, value32, value42, value52, value62) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
      this.value4 = value42;
      this.value5 = value52;
      this.value6 = value62;
    }
    ;
    Three3.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return function(value32) {
            return function(value42) {
              return function(value52) {
                return function(value62) {
                  return new Three3(value0, value1, value22, value32, value42, value52, value62);
                };
              };
            };
          };
        };
      };
    };
    return Three3;
  }();
  var TwoLeft2 = function() {
    function TwoLeft3(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    TwoLeft3.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return new TwoLeft3(value0, value1, value22);
        };
      };
    };
    return TwoLeft3;
  }();
  var TwoRight2 = function() {
    function TwoRight3(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    TwoRight3.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return new TwoRight3(value0, value1, value22);
        };
      };
    };
    return TwoRight3;
  }();
  var ThreeLeft2 = function() {
    function ThreeLeft3(value0, value1, value22, value32, value42, value52) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
      this.value4 = value42;
      this.value5 = value52;
    }
    ;
    ThreeLeft3.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return function(value32) {
            return function(value42) {
              return function(value52) {
                return new ThreeLeft3(value0, value1, value22, value32, value42, value52);
              };
            };
          };
        };
      };
    };
    return ThreeLeft3;
  }();
  var ThreeMiddle2 = function() {
    function ThreeMiddle3(value0, value1, value22, value32, value42, value52) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
      this.value4 = value42;
      this.value5 = value52;
    }
    ;
    ThreeMiddle3.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return function(value32) {
            return function(value42) {
              return function(value52) {
                return new ThreeMiddle3(value0, value1, value22, value32, value42, value52);
              };
            };
          };
        };
      };
    };
    return ThreeMiddle3;
  }();
  var ThreeRight2 = function() {
    function ThreeRight3(value0, value1, value22, value32, value42, value52) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
      this.value4 = value42;
      this.value5 = value52;
    }
    ;
    ThreeRight3.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return function(value32) {
            return function(value42) {
              return function(value52) {
                return new ThreeRight3(value0, value1, value22, value32, value42, value52);
              };
            };
          };
        };
      };
    };
    return ThreeRight3;
  }();
  var KickUp2 = function() {
    function KickUp3(value0, value1, value22, value32) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
    }
    ;
    KickUp3.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return function(value32) {
            return new KickUp3(value0, value1, value22, value32);
          };
        };
      };
    };
    return KickUp3;
  }();
  var values = function(v) {
    if (v instanceof Leaf2) {
      return Nil.value;
    }
    ;
    if (v instanceof Two2) {
      return append(semigroupList)(values(v.value0))(append(semigroupList)(pure(applicativeList)(v.value2))(values(v.value3)));
    }
    ;
    if (v instanceof Three2) {
      return append(semigroupList)(values(v.value0))(append(semigroupList)(pure(applicativeList)(v.value2))(append(semigroupList)(values(v.value3))(append(semigroupList)(pure(applicativeList)(v.value5))(values(v.value6)))));
    }
    ;
    throw new Error("Failed pattern match at Data.Map.Internal (line 626, column 1 - line 626, column 40): " + [v.constructor.name]);
  };
  var singleton4 = function(k) {
    return function(v) {
      return /* @__PURE__ */ new Two2(Leaf2.value, k, v, Leaf2.value);
    };
  };
  var toUnfoldable = function(dictUnfoldable) {
    return function(m) {
      var go2 = function($copy_v) {
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v) {
          if (v instanceof Nil) {
            $tco_done = true;
            return Nothing.value;
          }
          ;
          if (v instanceof Cons) {
            if (v.value0 instanceof Leaf2) {
              $copy_v = v.value1;
              return;
            }
            ;
            if (v.value0 instanceof Two2 && (v.value0.value0 instanceof Leaf2 && v.value0.value3 instanceof Leaf2)) {
              $tco_done = true;
              return /* @__PURE__ */ new Just(/* @__PURE__ */ new Tuple(/* @__PURE__ */ new Tuple(v.value0.value1, v.value0.value2), v.value1));
            }
            ;
            if (v.value0 instanceof Two2 && v.value0.value0 instanceof Leaf2) {
              $tco_done = true;
              return /* @__PURE__ */ new Just(/* @__PURE__ */ new Tuple(/* @__PURE__ */ new Tuple(v.value0.value1, v.value0.value2), /* @__PURE__ */ new Cons(v.value0.value3, v.value1)));
            }
            ;
            if (v.value0 instanceof Two2) {
              $copy_v = /* @__PURE__ */ new Cons(v.value0.value0, /* @__PURE__ */ new Cons(singleton4(v.value0.value1)(v.value0.value2), /* @__PURE__ */ new Cons(v.value0.value3, v.value1)));
              return;
            }
            ;
            if (v.value0 instanceof Three2) {
              $copy_v = /* @__PURE__ */ new Cons(v.value0.value0, /* @__PURE__ */ new Cons(singleton4(v.value0.value1)(v.value0.value2), /* @__PURE__ */ new Cons(v.value0.value3, /* @__PURE__ */ new Cons(singleton4(v.value0.value4)(v.value0.value5), /* @__PURE__ */ new Cons(v.value0.value6, v.value1)))));
              return;
            }
            ;
            throw new Error("Failed pattern match at Data.Map.Internal (line 591, column 18 - line 600, column 71): " + [v.value0.constructor.name]);
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 590, column 3 - line 590, column 19): " + [v.constructor.name]);
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($copy_v);
        }
        ;
        return $tco_result;
      };
      return unfoldr(dictUnfoldable)(go2)(/* @__PURE__ */ new Cons(m, Nil.value));
    };
  };
  var toAscArray = toUnfoldable(unfoldableArray);
  var lookup = function(dictOrd) {
    return function(k) {
      var comp = compare(dictOrd);
      var go2 = function($copy_v) {
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v) {
          if (v instanceof Leaf2) {
            $tco_done = true;
            return Nothing.value;
          }
          ;
          if (v instanceof Two2) {
            var v2 = comp(k)(v.value1);
            if (v2 instanceof EQ) {
              $tco_done = true;
              return /* @__PURE__ */ new Just(v.value2);
            }
            ;
            if (v2 instanceof LT) {
              $copy_v = v.value0;
              return;
            }
            ;
            $copy_v = v.value3;
            return;
          }
          ;
          if (v instanceof Three2) {
            var v3 = comp(k)(v.value1);
            if (v3 instanceof EQ) {
              $tco_done = true;
              return /* @__PURE__ */ new Just(v.value2);
            }
            ;
            var v4 = comp(k)(v.value4);
            if (v4 instanceof EQ) {
              $tco_done = true;
              return /* @__PURE__ */ new Just(v.value5);
            }
            ;
            if (v3 instanceof LT) {
              $copy_v = v.value0;
              return;
            }
            ;
            if (v4 instanceof GT) {
              $copy_v = v.value6;
              return;
            }
            ;
            $copy_v = v.value3;
            return;
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 211, column 5 - line 211, column 22): " + [v.constructor.name]);
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($copy_v);
        }
        ;
        return $tco_result;
      };
      return go2;
    };
  };
  var fromZipper2 = function($copy_dictOrd) {
    return function($copy_v) {
      return function($copy_tree) {
        var $tco_var_dictOrd = $copy_dictOrd;
        var $tco_var_v = $copy_v;
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(dictOrd, v, tree) {
          if (v instanceof Nil) {
            $tco_done = true;
            return tree;
          }
          ;
          if (v instanceof Cons) {
            if (v.value0 instanceof TwoLeft2) {
              $tco_var_dictOrd = dictOrd;
              $tco_var_v = v.value1;
              $copy_tree = /* @__PURE__ */ new Two2(tree, v.value0.value0, v.value0.value1, v.value0.value2);
              return;
            }
            ;
            if (v.value0 instanceof TwoRight2) {
              $tco_var_dictOrd = dictOrd;
              $tco_var_v = v.value1;
              $copy_tree = /* @__PURE__ */ new Two2(v.value0.value0, v.value0.value1, v.value0.value2, tree);
              return;
            }
            ;
            if (v.value0 instanceof ThreeLeft2) {
              $tco_var_dictOrd = dictOrd;
              $tco_var_v = v.value1;
              $copy_tree = /* @__PURE__ */ new Three2(tree, v.value0.value0, v.value0.value1, v.value0.value2, v.value0.value3, v.value0.value4, v.value0.value5);
              return;
            }
            ;
            if (v.value0 instanceof ThreeMiddle2) {
              $tco_var_dictOrd = dictOrd;
              $tco_var_v = v.value1;
              $copy_tree = /* @__PURE__ */ new Three2(v.value0.value0, v.value0.value1, v.value0.value2, tree, v.value0.value3, v.value0.value4, v.value0.value5);
              return;
            }
            ;
            if (v.value0 instanceof ThreeRight2) {
              $tco_var_dictOrd = dictOrd;
              $tco_var_v = v.value1;
              $copy_tree = /* @__PURE__ */ new Three2(v.value0.value0, v.value0.value1, v.value0.value2, v.value0.value3, v.value0.value4, v.value0.value5, tree);
              return;
            }
            ;
            throw new Error("Failed pattern match at Data.Map.Internal (line 432, column 3 - line 437, column 88): " + [v.value0.constructor.name]);
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 429, column 1 - line 429, column 80): " + [v.constructor.name, tree.constructor.name]);
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($tco_var_dictOrd, $tco_var_v, $copy_tree);
        }
        ;
        return $tco_result;
      };
    };
  };
  var insert = function(dictOrd) {
    return function(k) {
      return function(v) {
        var up = function($copy_v1) {
          return function($copy_v2) {
            var $tco_var_v1 = $copy_v1;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(v1, v2) {
              if (v1 instanceof Nil) {
                $tco_done = true;
                return /* @__PURE__ */ new Two2(v2.value0, v2.value1, v2.value2, v2.value3);
              }
              ;
              if (v1 instanceof Cons) {
                if (v1.value0 instanceof TwoLeft2) {
                  $tco_done = true;
                  return fromZipper2(dictOrd)(v1.value1)(/* @__PURE__ */ new Three2(v2.value0, v2.value1, v2.value2, v2.value3, v1.value0.value0, v1.value0.value1, v1.value0.value2));
                }
                ;
                if (v1.value0 instanceof TwoRight2) {
                  $tco_done = true;
                  return fromZipper2(dictOrd)(v1.value1)(/* @__PURE__ */ new Three2(v1.value0.value0, v1.value0.value1, v1.value0.value2, v2.value0, v2.value1, v2.value2, v2.value3));
                }
                ;
                if (v1.value0 instanceof ThreeLeft2) {
                  $tco_var_v1 = v1.value1;
                  $copy_v2 = /* @__PURE__ */ new KickUp2(/* @__PURE__ */ new Two2(v2.value0, v2.value1, v2.value2, v2.value3), v1.value0.value0, v1.value0.value1, /* @__PURE__ */ new Two2(v1.value0.value2, v1.value0.value3, v1.value0.value4, v1.value0.value5));
                  return;
                }
                ;
                if (v1.value0 instanceof ThreeMiddle2) {
                  $tco_var_v1 = v1.value1;
                  $copy_v2 = /* @__PURE__ */ new KickUp2(/* @__PURE__ */ new Two2(v1.value0.value0, v1.value0.value1, v1.value0.value2, v2.value0), v2.value1, v2.value2, /* @__PURE__ */ new Two2(v2.value3, v1.value0.value3, v1.value0.value4, v1.value0.value5));
                  return;
                }
                ;
                if (v1.value0 instanceof ThreeRight2) {
                  $tco_var_v1 = v1.value1;
                  $copy_v2 = /* @__PURE__ */ new KickUp2(/* @__PURE__ */ new Two2(v1.value0.value0, v1.value0.value1, v1.value0.value2, v1.value0.value3), v1.value0.value4, v1.value0.value5, /* @__PURE__ */ new Two2(v2.value0, v2.value1, v2.value2, v2.value3));
                  return;
                }
                ;
                throw new Error("Failed pattern match at Data.Map.Internal (line 468, column 5 - line 473, column 108): " + [v1.value0.constructor.name, v2.constructor.name]);
              }
              ;
              throw new Error("Failed pattern match at Data.Map.Internal (line 465, column 3 - line 465, column 56): " + [v1.constructor.name, v2.constructor.name]);
            }
            ;
            while (!$tco_done) {
              $tco_result = $tco_loop($tco_var_v1, $copy_v2);
            }
            ;
            return $tco_result;
          };
        };
        var comp = compare(dictOrd);
        var down = function($copy_ctx) {
          return function($copy_v1) {
            var $tco_var_ctx = $copy_ctx;
            var $tco_done1 = false;
            var $tco_result;
            function $tco_loop(ctx, v1) {
              if (v1 instanceof Leaf2) {
                $tco_done1 = true;
                return up(ctx)(/* @__PURE__ */ new KickUp2(Leaf2.value, k, v, Leaf2.value));
              }
              ;
              if (v1 instanceof Two2) {
                var v2 = comp(k)(v1.value1);
                if (v2 instanceof EQ) {
                  $tco_done1 = true;
                  return fromZipper2(dictOrd)(ctx)(/* @__PURE__ */ new Two2(v1.value0, k, v, v1.value3));
                }
                ;
                if (v2 instanceof LT) {
                  $tco_var_ctx = /* @__PURE__ */ new Cons(/* @__PURE__ */ new TwoLeft2(v1.value1, v1.value2, v1.value3), ctx);
                  $copy_v1 = v1.value0;
                  return;
                }
                ;
                $tco_var_ctx = /* @__PURE__ */ new Cons(/* @__PURE__ */ new TwoRight2(v1.value0, v1.value1, v1.value2), ctx);
                $copy_v1 = v1.value3;
                return;
              }
              ;
              if (v1 instanceof Three2) {
                var v3 = comp(k)(v1.value1);
                if (v3 instanceof EQ) {
                  $tco_done1 = true;
                  return fromZipper2(dictOrd)(ctx)(/* @__PURE__ */ new Three2(v1.value0, k, v, v1.value3, v1.value4, v1.value5, v1.value6));
                }
                ;
                var v4 = comp(k)(v1.value4);
                if (v4 instanceof EQ) {
                  $tco_done1 = true;
                  return fromZipper2(dictOrd)(ctx)(/* @__PURE__ */ new Three2(v1.value0, v1.value1, v1.value2, v1.value3, k, v, v1.value6));
                }
                ;
                if (v3 instanceof LT) {
                  $tco_var_ctx = /* @__PURE__ */ new Cons(/* @__PURE__ */ new ThreeLeft2(v1.value1, v1.value2, v1.value3, v1.value4, v1.value5, v1.value6), ctx);
                  $copy_v1 = v1.value0;
                  return;
                }
                ;
                if (v3 instanceof GT && v4 instanceof LT) {
                  $tco_var_ctx = /* @__PURE__ */ new Cons(/* @__PURE__ */ new ThreeMiddle2(v1.value0, v1.value1, v1.value2, v1.value4, v1.value5, v1.value6), ctx);
                  $copy_v1 = v1.value3;
                  return;
                }
                ;
                $tco_var_ctx = /* @__PURE__ */ new Cons(/* @__PURE__ */ new ThreeRight2(v1.value0, v1.value1, v1.value2, v1.value3, v1.value4, v1.value5), ctx);
                $copy_v1 = v1.value6;
                return;
              }
              ;
              throw new Error("Failed pattern match at Data.Map.Internal (line 448, column 3 - line 448, column 55): " + [ctx.constructor.name, v1.constructor.name]);
            }
            ;
            while (!$tco_done1) {
              $tco_result = $tco_loop($tco_var_ctx, $copy_v1);
            }
            ;
            return $tco_result;
          };
        };
        return down(Nil.value);
      };
    };
  };
  var pop = function(dictOrd) {
    return function(k) {
      var up = function($copy_ctxs) {
        return function($copy_tree) {
          var $tco_var_ctxs = $copy_ctxs;
          var $tco_done = false;
          var $tco_result;
          function $tco_loop(ctxs, tree) {
            if (ctxs instanceof Nil) {
              $tco_done = true;
              return tree;
            }
            ;
            if (ctxs instanceof Cons) {
              if (ctxs.value0 instanceof TwoLeft2 && (ctxs.value0.value2 instanceof Leaf2 && tree instanceof Leaf2)) {
                $tco_done = true;
                return fromZipper2(dictOrd)(ctxs.value1)(/* @__PURE__ */ new Two2(Leaf2.value, ctxs.value0.value0, ctxs.value0.value1, Leaf2.value));
              }
              ;
              if (ctxs.value0 instanceof TwoRight2 && (ctxs.value0.value0 instanceof Leaf2 && tree instanceof Leaf2)) {
                $tco_done = true;
                return fromZipper2(dictOrd)(ctxs.value1)(/* @__PURE__ */ new Two2(Leaf2.value, ctxs.value0.value1, ctxs.value0.value2, Leaf2.value));
              }
              ;
              if (ctxs.value0 instanceof TwoLeft2 && ctxs.value0.value2 instanceof Two2) {
                $tco_var_ctxs = ctxs.value1;
                $copy_tree = /* @__PURE__ */ new Three2(tree, ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2.value0, ctxs.value0.value2.value1, ctxs.value0.value2.value2, ctxs.value0.value2.value3);
                return;
              }
              ;
              if (ctxs.value0 instanceof TwoRight2 && ctxs.value0.value0 instanceof Two2) {
                $tco_var_ctxs = ctxs.value1;
                $copy_tree = /* @__PURE__ */ new Three2(ctxs.value0.value0.value0, ctxs.value0.value0.value1, ctxs.value0.value0.value2, ctxs.value0.value0.value3, ctxs.value0.value1, ctxs.value0.value2, tree);
                return;
              }
              ;
              if (ctxs.value0 instanceof TwoLeft2 && ctxs.value0.value2 instanceof Three2) {
                $tco_done = true;
                return fromZipper2(dictOrd)(ctxs.value1)(/* @__PURE__ */ new Two2(/* @__PURE__ */ new Two2(tree, ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2.value0), ctxs.value0.value2.value1, ctxs.value0.value2.value2, /* @__PURE__ */ new Two2(ctxs.value0.value2.value3, ctxs.value0.value2.value4, ctxs.value0.value2.value5, ctxs.value0.value2.value6)));
              }
              ;
              if (ctxs.value0 instanceof TwoRight2 && ctxs.value0.value0 instanceof Three2) {
                $tco_done = true;
                return fromZipper2(dictOrd)(ctxs.value1)(/* @__PURE__ */ new Two2(/* @__PURE__ */ new Two2(ctxs.value0.value0.value0, ctxs.value0.value0.value1, ctxs.value0.value0.value2, ctxs.value0.value0.value3), ctxs.value0.value0.value4, ctxs.value0.value0.value5, /* @__PURE__ */ new Two2(ctxs.value0.value0.value6, ctxs.value0.value1, ctxs.value0.value2, tree)));
              }
              ;
              if (ctxs.value0 instanceof ThreeLeft2 && (ctxs.value0.value2 instanceof Leaf2 && (ctxs.value0.value5 instanceof Leaf2 && tree instanceof Leaf2))) {
                $tco_done = true;
                return fromZipper2(dictOrd)(ctxs.value1)(/* @__PURE__ */ new Three2(Leaf2.value, ctxs.value0.value0, ctxs.value0.value1, Leaf2.value, ctxs.value0.value3, ctxs.value0.value4, Leaf2.value));
              }
              ;
              if (ctxs.value0 instanceof ThreeMiddle2 && (ctxs.value0.value0 instanceof Leaf2 && (ctxs.value0.value5 instanceof Leaf2 && tree instanceof Leaf2))) {
                $tco_done = true;
                return fromZipper2(dictOrd)(ctxs.value1)(/* @__PURE__ */ new Three2(Leaf2.value, ctxs.value0.value1, ctxs.value0.value2, Leaf2.value, ctxs.value0.value3, ctxs.value0.value4, Leaf2.value));
              }
              ;
              if (ctxs.value0 instanceof ThreeRight2 && (ctxs.value0.value0 instanceof Leaf2 && (ctxs.value0.value3 instanceof Leaf2 && tree instanceof Leaf2))) {
                $tco_done = true;
                return fromZipper2(dictOrd)(ctxs.value1)(/* @__PURE__ */ new Three2(Leaf2.value, ctxs.value0.value1, ctxs.value0.value2, Leaf2.value, ctxs.value0.value4, ctxs.value0.value5, Leaf2.value));
              }
              ;
              if (ctxs.value0 instanceof ThreeLeft2 && ctxs.value0.value2 instanceof Two2) {
                $tco_done = true;
                return fromZipper2(dictOrd)(ctxs.value1)(/* @__PURE__ */ new Two2(/* @__PURE__ */ new Three2(tree, ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2.value0, ctxs.value0.value2.value1, ctxs.value0.value2.value2, ctxs.value0.value2.value3), ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5));
              }
              ;
              if (ctxs.value0 instanceof ThreeMiddle2 && ctxs.value0.value0 instanceof Two2) {
                $tco_done = true;
                return fromZipper2(dictOrd)(ctxs.value1)(/* @__PURE__ */ new Two2(/* @__PURE__ */ new Three2(ctxs.value0.value0.value0, ctxs.value0.value0.value1, ctxs.value0.value0.value2, ctxs.value0.value0.value3, ctxs.value0.value1, ctxs.value0.value2, tree), ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5));
              }
              ;
              if (ctxs.value0 instanceof ThreeMiddle2 && ctxs.value0.value5 instanceof Two2) {
                $tco_done = true;
                return fromZipper2(dictOrd)(ctxs.value1)(/* @__PURE__ */ new Two2(ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2, /* @__PURE__ */ new Three2(tree, ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5.value0, ctxs.value0.value5.value1, ctxs.value0.value5.value2, ctxs.value0.value5.value3)));
              }
              ;
              if (ctxs.value0 instanceof ThreeRight2 && ctxs.value0.value3 instanceof Two2) {
                $tco_done = true;
                return fromZipper2(dictOrd)(ctxs.value1)(/* @__PURE__ */ new Two2(ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2, /* @__PURE__ */ new Three2(ctxs.value0.value3.value0, ctxs.value0.value3.value1, ctxs.value0.value3.value2, ctxs.value0.value3.value3, ctxs.value0.value4, ctxs.value0.value5, tree)));
              }
              ;
              if (ctxs.value0 instanceof ThreeLeft2 && ctxs.value0.value2 instanceof Three2) {
                $tco_done = true;
                return fromZipper2(dictOrd)(ctxs.value1)(/* @__PURE__ */ new Three2(/* @__PURE__ */ new Two2(tree, ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2.value0), ctxs.value0.value2.value1, ctxs.value0.value2.value2, /* @__PURE__ */ new Two2(ctxs.value0.value2.value3, ctxs.value0.value2.value4, ctxs.value0.value2.value5, ctxs.value0.value2.value6), ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5));
              }
              ;
              if (ctxs.value0 instanceof ThreeMiddle2 && ctxs.value0.value0 instanceof Three2) {
                $tco_done = true;
                return fromZipper2(dictOrd)(ctxs.value1)(/* @__PURE__ */ new Three2(/* @__PURE__ */ new Two2(ctxs.value0.value0.value0, ctxs.value0.value0.value1, ctxs.value0.value0.value2, ctxs.value0.value0.value3), ctxs.value0.value0.value4, ctxs.value0.value0.value5, /* @__PURE__ */ new Two2(ctxs.value0.value0.value6, ctxs.value0.value1, ctxs.value0.value2, tree), ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5));
              }
              ;
              if (ctxs.value0 instanceof ThreeMiddle2 && ctxs.value0.value5 instanceof Three2) {
                $tco_done = true;
                return fromZipper2(dictOrd)(ctxs.value1)(/* @__PURE__ */ new Three2(ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2, /* @__PURE__ */ new Two2(tree, ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5.value0), ctxs.value0.value5.value1, ctxs.value0.value5.value2, /* @__PURE__ */ new Two2(ctxs.value0.value5.value3, ctxs.value0.value5.value4, ctxs.value0.value5.value5, ctxs.value0.value5.value6)));
              }
              ;
              if (ctxs.value0 instanceof ThreeRight2 && ctxs.value0.value3 instanceof Three2) {
                $tco_done = true;
                return fromZipper2(dictOrd)(ctxs.value1)(/* @__PURE__ */ new Three2(ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2, /* @__PURE__ */ new Two2(ctxs.value0.value3.value0, ctxs.value0.value3.value1, ctxs.value0.value3.value2, ctxs.value0.value3.value3), ctxs.value0.value3.value4, ctxs.value0.value3.value5, /* @__PURE__ */ new Two2(ctxs.value0.value3.value6, ctxs.value0.value4, ctxs.value0.value5, tree)));
              }
              ;
              throw new Error("Failed pattern match at Data.Map.Internal (line 525, column 9 - line 542, column 136): " + [ctxs.value0.constructor.name, tree.constructor.name]);
            }
            ;
            throw new Error("Failed pattern match at Data.Map.Internal (line 522, column 5 - line 542, column 136): " + [ctxs.constructor.name]);
          }
          ;
          while (!$tco_done) {
            $tco_result = $tco_loop($tco_var_ctxs, $copy_tree);
          }
          ;
          return $tco_result;
        };
      };
      var removeMaxNode = function($copy_ctx) {
        return function($copy_m) {
          var $tco_var_ctx = $copy_ctx;
          var $tco_done1 = false;
          var $tco_result;
          function $tco_loop(ctx, m) {
            if (m instanceof Two2 && (m.value0 instanceof Leaf2 && m.value3 instanceof Leaf2)) {
              $tco_done1 = true;
              return up(ctx)(Leaf2.value);
            }
            ;
            if (m instanceof Two2) {
              $tco_var_ctx = /* @__PURE__ */ new Cons(/* @__PURE__ */ new TwoRight2(m.value0, m.value1, m.value2), ctx);
              $copy_m = m.value3;
              return;
            }
            ;
            if (m instanceof Three2 && (m.value0 instanceof Leaf2 && (m.value3 instanceof Leaf2 && m.value6 instanceof Leaf2))) {
              $tco_done1 = true;
              return up(/* @__PURE__ */ new Cons(/* @__PURE__ */ new TwoRight2(Leaf2.value, m.value1, m.value2), ctx))(Leaf2.value);
            }
            ;
            if (m instanceof Three2) {
              $tco_var_ctx = /* @__PURE__ */ new Cons(/* @__PURE__ */ new ThreeRight2(m.value0, m.value1, m.value2, m.value3, m.value4, m.value5), ctx);
              $copy_m = m.value6;
              return;
            }
            ;
            throw new Error("Failed pattern match at Data.Map.Internal (line 554, column 5 - line 558, column 107): " + [m.constructor.name]);
          }
          ;
          while (!$tco_done1) {
            $tco_result = $tco_loop($tco_var_ctx, $copy_m);
          }
          ;
          return $tco_result;
        };
      };
      var maxNode = function($copy_m) {
        var $tco_done2 = false;
        var $tco_result;
        function $tco_loop(m) {
          if (m instanceof Two2 && m.value3 instanceof Leaf2) {
            $tco_done2 = true;
            return {
              key: m.value1,
              value: m.value2
            };
          }
          ;
          if (m instanceof Two2) {
            $copy_m = m.value3;
            return;
          }
          ;
          if (m instanceof Three2 && m.value6 instanceof Leaf2) {
            $tco_done2 = true;
            return {
              key: m.value4,
              value: m.value5
            };
          }
          ;
          if (m instanceof Three2) {
            $copy_m = m.value6;
            return;
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 545, column 33 - line 549, column 45): " + [m.constructor.name]);
        }
        ;
        while (!$tco_done2) {
          $tco_result = $tco_loop($copy_m);
        }
        ;
        return $tco_result;
      };
      var comp = compare(dictOrd);
      var down = function($copy_ctx) {
        return function($copy_m) {
          var $tco_var_ctx = $copy_ctx;
          var $tco_done3 = false;
          var $tco_result;
          function $tco_loop(ctx, m) {
            if (m instanceof Leaf2) {
              $tco_done3 = true;
              return Nothing.value;
            }
            ;
            if (m instanceof Two2) {
              var v = comp(k)(m.value1);
              if (m.value3 instanceof Leaf2 && v instanceof EQ) {
                $tco_done3 = true;
                return /* @__PURE__ */ new Just(/* @__PURE__ */ new Tuple(m.value2, up(ctx)(Leaf2.value)));
              }
              ;
              if (v instanceof EQ) {
                var max7 = maxNode(m.value0);
                $tco_done3 = true;
                return /* @__PURE__ */ new Just(/* @__PURE__ */ new Tuple(m.value2, removeMaxNode(/* @__PURE__ */ new Cons(/* @__PURE__ */ new TwoLeft2(max7.key, max7.value, m.value3), ctx))(m.value0)));
              }
              ;
              if (v instanceof LT) {
                $tco_var_ctx = /* @__PURE__ */ new Cons(/* @__PURE__ */ new TwoLeft2(m.value1, m.value2, m.value3), ctx);
                $copy_m = m.value0;
                return;
              }
              ;
              $tco_var_ctx = /* @__PURE__ */ new Cons(/* @__PURE__ */ new TwoRight2(m.value0, m.value1, m.value2), ctx);
              $copy_m = m.value3;
              return;
            }
            ;
            if (m instanceof Three2) {
              var leaves = function() {
                if (m.value0 instanceof Leaf2 && (m.value3 instanceof Leaf2 && m.value6 instanceof Leaf2)) {
                  return true;
                }
                ;
                return false;
              }();
              var v = comp(k)(m.value4);
              var v3 = comp(k)(m.value1);
              if (leaves && v3 instanceof EQ) {
                $tco_done3 = true;
                return /* @__PURE__ */ new Just(/* @__PURE__ */ new Tuple(m.value2, fromZipper2(dictOrd)(ctx)(/* @__PURE__ */ new Two2(Leaf2.value, m.value4, m.value5, Leaf2.value))));
              }
              ;
              if (leaves && v instanceof EQ) {
                $tco_done3 = true;
                return /* @__PURE__ */ new Just(/* @__PURE__ */ new Tuple(m.value5, fromZipper2(dictOrd)(ctx)(/* @__PURE__ */ new Two2(Leaf2.value, m.value1, m.value2, Leaf2.value))));
              }
              ;
              if (v3 instanceof EQ) {
                var max7 = maxNode(m.value0);
                $tco_done3 = true;
                return /* @__PURE__ */ new Just(/* @__PURE__ */ new Tuple(m.value2, removeMaxNode(/* @__PURE__ */ new Cons(/* @__PURE__ */ new ThreeLeft2(max7.key, max7.value, m.value3, m.value4, m.value5, m.value6), ctx))(m.value0)));
              }
              ;
              if (v instanceof EQ) {
                var max7 = maxNode(m.value3);
                $tco_done3 = true;
                return /* @__PURE__ */ new Just(/* @__PURE__ */ new Tuple(m.value5, removeMaxNode(/* @__PURE__ */ new Cons(/* @__PURE__ */ new ThreeMiddle2(m.value0, m.value1, m.value2, max7.key, max7.value, m.value6), ctx))(m.value3)));
              }
              ;
              if (v3 instanceof LT) {
                $tco_var_ctx = /* @__PURE__ */ new Cons(/* @__PURE__ */ new ThreeLeft2(m.value1, m.value2, m.value3, m.value4, m.value5, m.value6), ctx);
                $copy_m = m.value0;
                return;
              }
              ;
              if (v3 instanceof GT && v instanceof LT) {
                $tco_var_ctx = /* @__PURE__ */ new Cons(/* @__PURE__ */ new ThreeMiddle2(m.value0, m.value1, m.value2, m.value4, m.value5, m.value6), ctx);
                $copy_m = m.value3;
                return;
              }
              ;
              $tco_var_ctx = /* @__PURE__ */ new Cons(/* @__PURE__ */ new ThreeRight2(m.value0, m.value1, m.value2, m.value3, m.value4, m.value5), ctx);
              $copy_m = m.value6;
              return;
            }
            ;
            throw new Error("Failed pattern match at Data.Map.Internal (line 495, column 34 - line 518, column 80): " + [m.constructor.name]);
          }
          ;
          while (!$tco_done3) {
            $tco_result = $tco_loop($tco_var_ctx, $copy_m);
          }
          ;
          return $tco_result;
        };
      };
      return down(Nil.value);
    };
  };
  var foldableMap = {
    foldl: function(f) {
      return function(z) {
        return function(m) {
          return foldl(foldableList)(f)(z)(values(m));
        };
      };
    },
    foldr: function(f) {
      return function(z) {
        return function(m) {
          return foldr(foldableList)(f)(z)(values(m));
        };
      };
    },
    foldMap: function(dictMonoid) {
      return function(f) {
        return function(m) {
          return foldMap(foldableList)(dictMonoid)(f)(values(m));
        };
      };
    }
  };
  var findMin = function() {
    var go2 = function($copy_v) {
      return function($copy_v1) {
        var $tco_var_v = $copy_v;
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v, v1) {
          if (v1 instanceof Leaf2) {
            $tco_done = true;
            return v;
          }
          ;
          if (v1 instanceof Two2) {
            $tco_var_v = /* @__PURE__ */ new Just({
              key: v1.value1,
              value: v1.value2
            });
            $copy_v1 = v1.value0;
            return;
          }
          ;
          if (v1 instanceof Three2) {
            $tco_var_v = /* @__PURE__ */ new Just({
              key: v1.value1,
              value: v1.value2
            });
            $copy_v1 = v1.value0;
            return;
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 308, column 5 - line 308, column 22): " + [v.constructor.name, v1.constructor.name]);
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($tco_var_v, $copy_v1);
        }
        ;
        return $tco_result;
      };
    };
    return go2(Nothing.value);
  }();
  var findMax = function() {
    var go2 = function($copy_v) {
      return function($copy_v1) {
        var $tco_var_v = $copy_v;
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v, v1) {
          if (v1 instanceof Leaf2) {
            $tco_done = true;
            return v;
          }
          ;
          if (v1 instanceof Two2) {
            $tco_var_v = /* @__PURE__ */ new Just({
              key: v1.value1,
              value: v1.value2
            });
            $copy_v1 = v1.value3;
            return;
          }
          ;
          if (v1 instanceof Three2) {
            $tco_var_v = /* @__PURE__ */ new Just({
              key: v1.value4,
              value: v1.value5
            });
            $copy_v1 = v1.value6;
            return;
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 300, column 5 - line 300, column 22): " + [v.constructor.name, v1.constructor.name]);
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($tco_var_v, $copy_v1);
        }
        ;
        return $tco_result;
      };
    };
    return go2(Nothing.value);
  }();
  var empty2 = Leaf2.value;
  var $$delete = function(dictOrd) {
    return function(k) {
      return function(m) {
        return maybe(m)(snd)(pop(dictOrd)(k)(m));
      };
    };
  };
  var asList = identity(categoryFn);
  var alter = function(dictOrd) {
    return function(f) {
      return function(k) {
        return function(m) {
          var v = f(lookup(dictOrd)(k)(m));
          if (v instanceof Nothing) {
            return $$delete(dictOrd)(k)(m);
          }
          ;
          if (v instanceof Just) {
            return insert(dictOrd)(k)(v.value0)(m);
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 563, column 15 - line 565, column 25): " + [v.constructor.name]);
        };
      };
    };
  };

  // output/Halogen.Data.OrdBox/index.js
  var OrdBox = function() {
    function OrdBox2(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    OrdBox2.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return new OrdBox2(value0, value1, value22);
        };
      };
    };
    return OrdBox2;
  }();

  // output/Halogen.Data.Slot/index.js
  var foreachSlot = function(dictApplicative) {
    return function(v) {
      return function(k) {
        return traverse_(dictApplicative)(foldableMap)(function($37) {
          return k($37);
        })(v);
      };
    };
  };
  var empty3 = empty2;

  // output/DOM.HTML.Indexed.ButtonType/index.js
  var ButtonButton = function() {
    function ButtonButton2() {
    }
    ;
    ButtonButton2.value = new ButtonButton2();
    return ButtonButton2;
  }();
  var ButtonSubmit = function() {
    function ButtonSubmit2() {
    }
    ;
    ButtonSubmit2.value = new ButtonSubmit2();
    return ButtonSubmit2;
  }();
  var ButtonReset = function() {
    function ButtonReset2() {
    }
    ;
    ButtonReset2.value = new ButtonReset2();
    return ButtonReset2;
  }();

  // output/DOM.HTML.Indexed.CrossOriginValue/index.js
  var Anonymous = function() {
    function Anonymous3() {
    }
    ;
    Anonymous3.value = new Anonymous3();
    return Anonymous3;
  }();
  var UseCredentials = function() {
    function UseCredentials3() {
    }
    ;
    UseCredentials3.value = new UseCredentials3();
    return UseCredentials3;
  }();

  // output/DOM.HTML.Indexed.DirValue/index.js
  var DirLTR = function() {
    function DirLTR2() {
    }
    ;
    DirLTR2.value = new DirLTR2();
    return DirLTR2;
  }();
  var DirRTL = function() {
    function DirRTL2() {
    }
    ;
    DirRTL2.value = new DirRTL2();
    return DirRTL2;
  }();
  var DirAuto = function() {
    function DirAuto2() {
    }
    ;
    DirAuto2.value = new DirAuto2();
    return DirAuto2;
  }();

  // output/DOM.HTML.Indexed.FormMethod/index.js
  var POST = function() {
    function POST2() {
    }
    ;
    POST2.value = new POST2();
    return POST2;
  }();
  var GET = function() {
    function GET2() {
    }
    ;
    GET2.value = new GET2();
    return GET2;
  }();
  var renderFormMethod = function(v) {
    if (v instanceof POST) {
      return "post";
    }
    ;
    if (v instanceof GET) {
      return "get";
    }
    ;
    throw new Error("Failed pattern match at DOM.HTML.Indexed.FormMethod (line 8, column 20 - line 10, column 15): " + [v.constructor.name]);
  };

  // output/Data.String.Common/foreign.js
  var _localeCompare = function(lt) {
    return function(eq2) {
      return function(gt) {
        return function(s1) {
          return function(s2) {
            var result = s1.localeCompare(s2);
            return result < 0 ? lt : result > 0 ? gt : eq2;
          };
        };
      };
    };
  };
  var joinWith = function(s) {
    return function(xs) {
      return xs.join(s);
    };
  };

  // output/Data.String.Common/index.js
  var localeCompare = _localeCompare(LT.value)(EQ.value)(GT.value);

  // output/DOM.HTML.Indexed.InputAcceptType/index.js
  var AcceptMediaType = function() {
    function AcceptMediaType2(value0) {
      this.value0 = value0;
    }
    ;
    AcceptMediaType2.create = function(value0) {
      return new AcceptMediaType2(value0);
    };
    return AcceptMediaType2;
  }();
  var AcceptFileExtension = function() {
    function AcceptFileExtension2(value0) {
      this.value0 = value0;
    }
    ;
    AcceptFileExtension2.create = function(value0) {
      return new AcceptFileExtension2(value0);
    };
    return AcceptFileExtension2;
  }();
  var renderInputAcceptTypeAtom = function(v) {
    if (v instanceof AcceptMediaType) {
      return v.value0;
    }
    ;
    if (v instanceof AcceptFileExtension) {
      return v.value0;
    }
    ;
    throw new Error("Failed pattern match at DOM.HTML.Indexed.InputAcceptType (line 28, column 29 - line 30, column 33): " + [v.constructor.name]);
  };
  var renderInputAcceptType = function(v) {
    return joinWith(",")(map(functorArray)(renderInputAcceptTypeAtom)(v));
  };

  // output/DOM.HTML.Indexed.InputType/index.js
  var InputButton = function() {
    function InputButton2() {
    }
    ;
    InputButton2.value = new InputButton2();
    return InputButton2;
  }();
  var InputCheckbox = function() {
    function InputCheckbox2() {
    }
    ;
    InputCheckbox2.value = new InputCheckbox2();
    return InputCheckbox2;
  }();
  var InputColor = function() {
    function InputColor2() {
    }
    ;
    InputColor2.value = new InputColor2();
    return InputColor2;
  }();
  var InputDate = function() {
    function InputDate2() {
    }
    ;
    InputDate2.value = new InputDate2();
    return InputDate2;
  }();
  var InputDatetimeLocal = function() {
    function InputDatetimeLocal2() {
    }
    ;
    InputDatetimeLocal2.value = new InputDatetimeLocal2();
    return InputDatetimeLocal2;
  }();
  var InputEmail = function() {
    function InputEmail2() {
    }
    ;
    InputEmail2.value = new InputEmail2();
    return InputEmail2;
  }();
  var InputFile = function() {
    function InputFile2() {
    }
    ;
    InputFile2.value = new InputFile2();
    return InputFile2;
  }();
  var InputHidden = function() {
    function InputHidden2() {
    }
    ;
    InputHidden2.value = new InputHidden2();
    return InputHidden2;
  }();
  var InputImage = function() {
    function InputImage2() {
    }
    ;
    InputImage2.value = new InputImage2();
    return InputImage2;
  }();
  var InputMonth = function() {
    function InputMonth2() {
    }
    ;
    InputMonth2.value = new InputMonth2();
    return InputMonth2;
  }();
  var InputNumber = function() {
    function InputNumber2() {
    }
    ;
    InputNumber2.value = new InputNumber2();
    return InputNumber2;
  }();
  var InputPassword = function() {
    function InputPassword2() {
    }
    ;
    InputPassword2.value = new InputPassword2();
    return InputPassword2;
  }();
  var InputRadio = function() {
    function InputRadio2() {
    }
    ;
    InputRadio2.value = new InputRadio2();
    return InputRadio2;
  }();
  var InputRange = function() {
    function InputRange2() {
    }
    ;
    InputRange2.value = new InputRange2();
    return InputRange2;
  }();
  var InputReset = function() {
    function InputReset2() {
    }
    ;
    InputReset2.value = new InputReset2();
    return InputReset2;
  }();
  var InputSearch = function() {
    function InputSearch2() {
    }
    ;
    InputSearch2.value = new InputSearch2();
    return InputSearch2;
  }();
  var InputSubmit = function() {
    function InputSubmit2() {
    }
    ;
    InputSubmit2.value = new InputSubmit2();
    return InputSubmit2;
  }();
  var InputTel = function() {
    function InputTel2() {
    }
    ;
    InputTel2.value = new InputTel2();
    return InputTel2;
  }();
  var InputText = function() {
    function InputText2() {
    }
    ;
    InputText2.value = new InputText2();
    return InputText2;
  }();
  var InputTime = function() {
    function InputTime2() {
    }
    ;
    InputTime2.value = new InputTime2();
    return InputTime2;
  }();
  var InputUrl = function() {
    function InputUrl2() {
    }
    ;
    InputUrl2.value = new InputUrl2();
    return InputUrl2;
  }();
  var InputWeek = function() {
    function InputWeek2() {
    }
    ;
    InputWeek2.value = new InputWeek2();
    return InputWeek2;
  }();

  // output/DOM.HTML.Indexed.KindValue/index.js
  var KindSubtitles = function() {
    function KindSubtitles2() {
    }
    ;
    KindSubtitles2.value = new KindSubtitles2();
    return KindSubtitles2;
  }();
  var KindCaptions = function() {
    function KindCaptions2() {
    }
    ;
    KindCaptions2.value = new KindCaptions2();
    return KindCaptions2;
  }();
  var KindDescriptions = function() {
    function KindDescriptions2() {
    }
    ;
    KindDescriptions2.value = new KindDescriptions2();
    return KindDescriptions2;
  }();
  var KindChapters = function() {
    function KindChapters2() {
    }
    ;
    KindChapters2.value = new KindChapters2();
    return KindChapters2;
  }();
  var KindMetadata = function() {
    function KindMetadata2() {
    }
    ;
    KindMetadata2.value = new KindMetadata2();
    return KindMetadata2;
  }();

  // output/DOM.HTML.Indexed.MenuType/index.js
  var MenuList = function() {
    function MenuList2() {
    }
    ;
    MenuList2.value = new MenuList2();
    return MenuList2;
  }();
  var MenuContext = function() {
    function MenuContext2() {
    }
    ;
    MenuContext2.value = new MenuContext2();
    return MenuContext2;
  }();
  var MenuToolbar = function() {
    function MenuToolbar2() {
    }
    ;
    MenuToolbar2.value = new MenuToolbar2();
    return MenuToolbar2;
  }();

  // output/DOM.HTML.Indexed.MenuitemType/index.js
  var MenuitemCommand = function() {
    function MenuitemCommand2() {
    }
    ;
    MenuitemCommand2.value = new MenuitemCommand2();
    return MenuitemCommand2;
  }();
  var MenuitemCheckbox = function() {
    function MenuitemCheckbox2() {
    }
    ;
    MenuitemCheckbox2.value = new MenuitemCheckbox2();
    return MenuitemCheckbox2;
  }();
  var MenuitemRadio = function() {
    function MenuitemRadio2() {
    }
    ;
    MenuitemRadio2.value = new MenuitemRadio2();
    return MenuitemRadio2;
  }();

  // output/DOM.HTML.Indexed.OnOff/index.js
  var On = function() {
    function On2() {
    }
    ;
    On2.value = new On2();
    return On2;
  }();
  var Off = function() {
    function Off2() {
    }
    ;
    Off2.value = new Off2();
    return Off2;
  }();
  var renderOnOff = function(v) {
    if (v instanceof On) {
      return "on";
    }
    ;
    if (v instanceof Off) {
      return "off";
    }
    ;
    throw new Error("Failed pattern match at DOM.HTML.Indexed.OnOff (line 8, column 15 - line 10, column 15): " + [v.constructor.name]);
  };

  // output/DOM.HTML.Indexed.OrderedListType/index.js
  var Uppercase = function() {
    function Uppercase2() {
    }
    ;
    Uppercase2.value = new Uppercase2();
    return Uppercase2;
  }();
  var Lowercase = function() {
    function Lowercase2() {
    }
    ;
    Lowercase2.value = new Lowercase2();
    return Lowercase2;
  }();
  var NumeralDecimal = function() {
    function NumeralDecimal2() {
    }
    ;
    NumeralDecimal2.value = new NumeralDecimal2();
    return NumeralDecimal2;
  }();
  var NumeralRoman = function() {
    function NumeralRoman2(value0) {
      this.value0 = value0;
    }
    ;
    NumeralRoman2.create = function(value0) {
      return new NumeralRoman2(value0);
    };
    return NumeralRoman2;
  }();
  var OrderedListNumeric = function() {
    function OrderedListNumeric2(value0) {
      this.value0 = value0;
    }
    ;
    OrderedListNumeric2.create = function(value0) {
      return new OrderedListNumeric2(value0);
    };
    return OrderedListNumeric2;
  }();
  var OrderedListAlphabetic = function() {
    function OrderedListAlphabetic2(value0) {
      this.value0 = value0;
    }
    ;
    OrderedListAlphabetic2.create = function(value0) {
      return new OrderedListAlphabetic2(value0);
    };
    return OrderedListAlphabetic2;
  }();

  // output/DOM.HTML.Indexed.PreloadValue/index.js
  var PreloadNone = function() {
    function PreloadNone2() {
    }
    ;
    PreloadNone2.value = new PreloadNone2();
    return PreloadNone2;
  }();
  var PreloadAuto = function() {
    function PreloadAuto2() {
    }
    ;
    PreloadAuto2.value = new PreloadAuto2();
    return PreloadAuto2;
  }();
  var PreloadMetadata = function() {
    function PreloadMetadata2() {
    }
    ;
    PreloadMetadata2.value = new PreloadMetadata2();
    return PreloadMetadata2;
  }();
  var renderPreloadValue = function(v) {
    if (v instanceof PreloadNone) {
      return "none";
    }
    ;
    if (v instanceof PreloadAuto) {
      return "auto";
    }
    ;
    if (v instanceof PreloadMetadata) {
      return "metadata";
    }
    ;
    throw new Error("Failed pattern match at DOM.HTML.Indexed.PreloadValue (line 9, column 22 - line 12, column 32): " + [v.constructor.name]);
  };

  // output/DOM.HTML.Indexed.ScopeValue/index.js
  var ScopeRow = function() {
    function ScopeRow2() {
    }
    ;
    ScopeRow2.value = new ScopeRow2();
    return ScopeRow2;
  }();
  var ScopeCol = function() {
    function ScopeCol2() {
    }
    ;
    ScopeCol2.value = new ScopeCol2();
    return ScopeCol2;
  }();
  var ScopeRowGroup = function() {
    function ScopeRowGroup2() {
    }
    ;
    ScopeRowGroup2.value = new ScopeRowGroup2();
    return ScopeRowGroup2;
  }();
  var ScopeColGroup = function() {
    function ScopeColGroup2() {
    }
    ;
    ScopeColGroup2.value = new ScopeColGroup2();
    return ScopeColGroup2;
  }();
  var ScopeAuto = function() {
    function ScopeAuto2() {
    }
    ;
    ScopeAuto2.value = new ScopeAuto2();
    return ScopeAuto2;
  }();
  var renderScopeValue = function(v) {
    if (v instanceof ScopeRow) {
      return "row";
    }
    ;
    if (v instanceof ScopeCol) {
      return "col";
    }
    ;
    if (v instanceof ScopeRowGroup) {
      return "rowgroup";
    }
    ;
    if (v instanceof ScopeColGroup) {
      return "colgroup";
    }
    ;
    if (v instanceof ScopeAuto) {
      return "auto";
    }
    ;
    throw new Error("Failed pattern match at DOM.HTML.Indexed.ScopeValue (line 11, column 20 - line 16, column 22): " + [v.constructor.name]);
  };

  // output/DOM.HTML.Indexed.StepValue/index.js
  var Any = function() {
    function Any2() {
    }
    ;
    Any2.value = new Any2();
    return Any2;
  }();
  var Step = function() {
    function Step3(value0) {
      this.value0 = value0;
    }
    ;
    Step3.create = function(value0) {
      return new Step3(value0);
    };
    return Step3;
  }();
  var renderStepValue = function(v) {
    if (v instanceof Any) {
      return "any";
    }
    ;
    if (v instanceof Step) {
      return show(showNumber)(v.value0);
    }
    ;
    throw new Error("Failed pattern match at DOM.HTML.Indexed.StepValue (line 10, column 19 - line 12, column 19): " + [v.constructor.name]);
  };

  // output/DOM.HTML.Indexed.WrapValue/index.js
  var Hard = function() {
    function Hard2() {
    }
    ;
    Hard2.value = new Hard2();
    return Hard2;
  }();
  var Soft = function() {
    function Soft2() {
    }
    ;
    Soft2.value = new Soft2();
    return Soft2;
  }();

  // output/Halogen.Query.Input/index.js
  var RefUpdate = function() {
    function RefUpdate2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    RefUpdate2.create = function(value0) {
      return function(value1) {
        return new RefUpdate2(value0, value1);
      };
    };
    return RefUpdate2;
  }();
  var Action = function() {
    function Action3(value0) {
      this.value0 = value0;
    }
    ;
    Action3.create = function(value0) {
      return new Action3(value0);
    };
    return Action3;
  }();
  var functorInput = {
    map: function(f) {
      return function(m) {
        if (m instanceof RefUpdate) {
          return /* @__PURE__ */ new RefUpdate(m.value0, m.value1);
        }
        ;
        if (m instanceof Action) {
          return /* @__PURE__ */ new Action(f(m.value0));
        }
        ;
        throw new Error("Failed pattern match at Halogen.Query.Input (line 19, column 1 - line 19, column 46): " + [m.constructor.name]);
      };
    }
  };

  // output/Data.Array/foreign.js
  var replicateFill = function(count) {
    return function(value13) {
      if (count < 1) {
        return [];
      }
      var result = new Array(count);
      return result.fill(value13);
    };
  };
  var replicatePolyfill = function(count) {
    return function(value13) {
      var result = [];
      var n = 0;
      for (var i2 = 0; i2 < count; i2++) {
        result[n++] = value13;
      }
      return result;
    };
  };
  var replicate = typeof Array.prototype.fill === "function" ? replicateFill : replicatePolyfill;
  var fromFoldableImpl = function() {
    function Cons3(head4, tail2) {
      this.head = head4;
      this.tail = tail2;
    }
    var emptyList = {};
    function curryCons(head4) {
      return function(tail2) {
        return new Cons3(head4, tail2);
      };
    }
    function listToArray(list3) {
      var result = [];
      var count = 0;
      var xs = list3;
      while (xs !== emptyList) {
        result[count++] = xs.head;
        xs = xs.tail;
      }
      return result;
    }
    return function(foldr4) {
      return function(xs) {
        return listToArray(foldr4(curryCons)(emptyList)(xs));
      };
    };
  }();
  var length4 = function(xs) {
    return xs.length;
  };
  var unconsImpl = function(empty7) {
    return function(next2) {
      return function(xs) {
        return xs.length === 0 ? empty7({}) : next2(xs[0])(xs.slice(1));
      };
    };
  };
  var indexImpl = function(just) {
    return function(nothing) {
      return function(xs) {
        return function(i2) {
          return i2 < 0 || i2 >= xs.length ? nothing : just(xs[i2]);
        };
      };
    };
  };
  var findMapImpl = function(nothing) {
    return function(isJust2) {
      return function(f) {
        return function(xs) {
          for (var i2 = 0; i2 < xs.length; i2++) {
            var result = f(xs[i2]);
            if (isJust2(result))
              return result;
          }
          return nothing;
        };
      };
    };
  };
  var findIndexImpl = function(just) {
    return function(nothing) {
      return function(f) {
        return function(xs) {
          for (var i2 = 0, l = xs.length; i2 < l; i2++) {
            if (f(xs[i2]))
              return just(i2);
          }
          return nothing;
        };
      };
    };
  };
  var findLastIndexImpl = function(just) {
    return function(nothing) {
      return function(f) {
        return function(xs) {
          for (var i2 = xs.length - 1; i2 >= 0; i2--) {
            if (f(xs[i2]))
              return just(i2);
          }
          return nothing;
        };
      };
    };
  };
  var _insertAt = function(just) {
    return function(nothing) {
      return function(i2) {
        return function(a2) {
          return function(l) {
            if (i2 < 0 || i2 > l.length)
              return nothing;
            var l1 = l.slice();
            l1.splice(i2, 0, a2);
            return just(l1);
          };
        };
      };
    };
  };
  var _deleteAt = function(just) {
    return function(nothing) {
      return function(i2) {
        return function(l) {
          if (i2 < 0 || i2 >= l.length)
            return nothing;
          var l1 = l.slice();
          l1.splice(i2, 1);
          return just(l1);
        };
      };
    };
  };
  var _updateAt = function(just) {
    return function(nothing) {
      return function(i2) {
        return function(a2) {
          return function(l) {
            if (i2 < 0 || i2 >= l.length)
              return nothing;
            var l1 = l.slice();
            l1[i2] = a2;
            return just(l1);
          };
        };
      };
    };
  };
  var sortByImpl = function() {
    function mergeFromTo(compare2, fromOrdering, xs1, xs2, from2, to) {
      var mid;
      var i2;
      var j;
      var k;
      var x;
      var y;
      var c;
      mid = from2 + (to - from2 >> 1);
      if (mid - from2 > 1)
        mergeFromTo(compare2, fromOrdering, xs2, xs1, from2, mid);
      if (to - mid > 1)
        mergeFromTo(compare2, fromOrdering, xs2, xs1, mid, to);
      i2 = from2;
      j = mid;
      k = from2;
      while (i2 < mid && j < to) {
        x = xs2[i2];
        y = xs2[j];
        c = fromOrdering(compare2(x)(y));
        if (c > 0) {
          xs1[k++] = y;
          ++j;
        } else {
          xs1[k++] = x;
          ++i2;
        }
      }
      while (i2 < mid) {
        xs1[k++] = xs2[i2++];
      }
      while (j < to) {
        xs1[k++] = xs2[j++];
      }
    }
    return function(compare2) {
      return function(fromOrdering) {
        return function(xs) {
          var out;
          if (xs.length < 2)
            return xs;
          out = xs.slice(0);
          mergeFromTo(compare2, fromOrdering, out, xs.slice(0), 0, xs.length);
          return out;
        };
      };
    };
  }();
  var zipWith3 = function(f) {
    return function(xs) {
      return function(ys) {
        var l = xs.length < ys.length ? xs.length : ys.length;
        var result = new Array(l);
        for (var i2 = 0; i2 < l; i2++) {
          result[i2] = f(xs[i2])(ys[i2]);
        }
        return result;
      };
    };
  };
  var unsafeIndexImpl = function(xs) {
    return function(n) {
      return xs[n];
    };
  };

  // output/Control.Monad.ST.Internal/foreign.js
  var map_ = function(f) {
    return function(a2) {
      return function() {
        return f(a2());
      };
    };
  };
  var pure_ = function(a2) {
    return function() {
      return a2;
    };
  };
  var bind_ = function(a2) {
    return function(f) {
      return function() {
        return f(a2())();
      };
    };
  };
  function newSTRef(val) {
    return function() {
      return { value: val };
    };
  }
  var read2 = function(ref3) {
    return function() {
      return ref3.value;
    };
  };
  var modifyImpl2 = function(f) {
    return function(ref3) {
      return function() {
        var t = f(ref3.value);
        ref3.value = t.state;
        return t.value;
      };
    };
  };
  var write2 = function(a2) {
    return function(ref3) {
      return function() {
        return ref3.value = a2;
      };
    };
  };

  // output/Control.Monad.ST.Internal/index.js
  var modify$prime2 = modifyImpl2;
  var modify2 = function(f) {
    return modify$prime2(function(s) {
      var s$prime = f(s);
      return {
        state: s$prime,
        value: s$prime
      };
    });
  };
  var functorST = {
    map: map_
  };
  var monadST = {
    Applicative0: function() {
      return applicativeST;
    },
    Bind1: function() {
      return bindST;
    }
  };
  var bindST = {
    bind: bind_,
    Apply0: function() {
      return applyST;
    }
  };
  var applyST = {
    apply: ap(monadST),
    Functor0: function() {
      return functorST;
    }
  };
  var applicativeST = {
    pure: pure_,
    Apply0: function() {
      return applyST;
    }
  };

  // output/Data.Array.ST/foreign.js
  var peekImpl = function(just) {
    return function(nothing) {
      return function(i2) {
        return function(xs) {
          return function() {
            return i2 >= 0 && i2 < xs.length ? just(xs[i2]) : nothing;
          };
        };
      };
    };
  };
  var popImpl = function(just) {
    return function(nothing) {
      return function(xs) {
        return function() {
          return xs.length > 0 ? just(xs.pop()) : nothing;
        };
      };
    };
  };
  var pushAll = function(as) {
    return function(xs) {
      return function() {
        return xs.push.apply(xs, as);
      };
    };
  };
  var shiftImpl = function(just) {
    return function(nothing) {
      return function(xs) {
        return function() {
          return xs.length > 0 ? just(xs.shift()) : nothing;
        };
      };
    };
  };
  var sortByImpl2 = function() {
    function mergeFromTo(compare2, fromOrdering, xs1, xs2, from2, to) {
      var mid;
      var i2;
      var j;
      var k;
      var x;
      var y;
      var c;
      mid = from2 + (to - from2 >> 1);
      if (mid - from2 > 1)
        mergeFromTo(compare2, fromOrdering, xs2, xs1, from2, mid);
      if (to - mid > 1)
        mergeFromTo(compare2, fromOrdering, xs2, xs1, mid, to);
      i2 = from2;
      j = mid;
      k = from2;
      while (i2 < mid && j < to) {
        x = xs2[i2];
        y = xs2[j];
        c = fromOrdering(compare2(x)(y));
        if (c > 0) {
          xs1[k++] = y;
          ++j;
        } else {
          xs1[k++] = x;
          ++i2;
        }
      }
      while (i2 < mid) {
        xs1[k++] = xs2[i2++];
      }
      while (j < to) {
        xs1[k++] = xs2[j++];
      }
    }
    return function(compare2) {
      return function(fromOrdering) {
        return function(xs) {
          return function() {
            if (xs.length < 2)
              return xs;
            mergeFromTo(compare2, fromOrdering, xs, xs.slice(0), 0, xs.length);
            return xs;
          };
        };
      };
    };
  }();

  // output/Data.Array.ST/index.js
  var shift = shiftImpl(Just.create)(Nothing.value);
  var push = function(a2) {
    return pushAll([a2]);
  };
  var pop2 = popImpl(Just.create)(Nothing.value);
  var peek = peekImpl(Just.create)(Nothing.value);

  // output/Data.Array.ST.Iterator/index.js
  var Iterator = function() {
    function Iterator2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Iterator2.create = function(value0) {
      return function(value1) {
        return new Iterator2(value0, value1);
      };
    };
    return Iterator2;
  }();
  var peek2 = function(v) {
    return function __do2() {
      var i2 = read2(v.value1)();
      return v.value0(i2);
    };
  };
  var next = function(v) {
    return function __do2() {
      var i2 = read2(v.value1)();
      modify2(function(v1) {
        return v1 + 1 | 0;
      })(v.value1)();
      return v.value0(i2);
    };
  };
  var pushWhile = function(p2) {
    return function(iter) {
      return function(array) {
        return function __do2() {
          var $$break = newSTRef(false)();
          while (map(functorST)(not(heytingAlgebraBoolean))(read2($$break))()) {
            (function __do3() {
              var mx = peek2(iter)();
              if (mx instanceof Just && p2(mx.value0)) {
                push(mx.value0)(array)();
                return $$void(functorST)(next(iter))();
              }
              ;
              return $$void(functorST)(write2(true)($$break))();
            })();
          }
          ;
          return {};
        };
      };
    };
  };
  var pushAll2 = pushWhile($$const(true));
  var exhausted = function() {
    var $13 = map(functorST)(isNothing);
    return function($14) {
      return $13(peek2($14));
    };
  }();

  // output/Data.Array/index.js
  var zip3 = zipWith3(Tuple.create);
  var updateAt = _updateAt(Just.create)(Nothing.value);
  var unsafeIndex = function(dictPartial) {
    return unsafeIndexImpl;
  };
  var uncons2 = unconsImpl($$const(Nothing.value))(function(x) {
    return function(xs) {
      return /* @__PURE__ */ new Just({
        head: x,
        tail: xs
      });
    };
  });
  var toUnfoldable2 = function(dictUnfoldable) {
    return function(xs) {
      var len = length4(xs);
      var f = function(i2) {
        if (i2 < len) {
          return /* @__PURE__ */ new Just(/* @__PURE__ */ new Tuple(unsafeIndex()(xs)(i2), i2 + 1 | 0));
        }
        ;
        if (otherwise) {
          return Nothing.value;
        }
        ;
        throw new Error("Failed pattern match at Data.Array (line 158, column 3 - line 160, column 26): " + [i2.constructor.name]);
      };
      return unfoldr(dictUnfoldable)(f)(0);
    };
  };
  var tail = unconsImpl($$const(Nothing.value))(function(v) {
    return function(xs) {
      return /* @__PURE__ */ new Just(xs);
    };
  });
  var sortBy2 = function(comp) {
    return sortByImpl(comp)(function(v) {
      if (v instanceof GT) {
        return 1;
      }
      ;
      if (v instanceof EQ) {
        return 0;
      }
      ;
      if (v instanceof LT) {
        return -1 | 0;
      }
      ;
      throw new Error("Failed pattern match at Data.Array (line 831, column 31 - line 834, column 11): " + [v.constructor.name]);
    });
  };
  var sortWith = function(dictOrd) {
    return function(f) {
      return sortBy2(comparing(dictOrd)(f));
    };
  };
  var singleton5 = function(a2) {
    return [a2];
  };
  var insertAt = _insertAt(Just.create)(Nothing.value);
  var index = indexImpl(Just.create)(Nothing.value);
  var foldr2 = foldr(foldableArray);
  var foldl2 = foldl(foldableArray);
  var findMap2 = findMapImpl(Nothing.value)(isJust);
  var findLastIndex = findLastIndexImpl(Just.create)(Nothing.value);
  var findIndex = findIndexImpl(Just.create)(Nothing.value);
  var deleteAt = _deleteAt(Just.create)(Nothing.value);
  var deleteBy2 = function(v) {
    return function(v1) {
      return function(v2) {
        if (v2.length === 0) {
          return [];
        }
        ;
        return maybe(v2)(function(i2) {
          return fromJust()(deleteAt(i2)(v2));
        })(findIndex(v(v1))(v2));
      };
    };
  };
  var concatMap3 = flip(bind(bindArray));
  var mapMaybe3 = function(f) {
    return concatMap3(function() {
      var $109 = maybe([])(singleton5);
      return function($110) {
        return $109(f($110));
      };
    }());
  };
  var catMaybes3 = mapMaybe3(identity(categoryFn));

  // output/Data.Nullable/foreign.js
  var _null = null;
  var nullable = function(a2, r, f) {
    return a2 == null ? r : f(a2);
  };
  var notNull = function(x) {
    return x;
  };

  // output/Data.Nullable/index.js
  var toMaybe = function(n) {
    return nullable(n, Nothing.value, Just.create);
  };
  var $$null3 = _null;
  var toNullable = maybe($$null3)(notNull);

  // output/Halogen.VDom.Machine/index.js
  var Step2 = function() {
    function Step3(value0, value1, value22, value32) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
    }
    ;
    Step3.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return function(value32) {
            return new Step3(value0, value1, value22, value32);
          };
        };
      };
    };
    return Step3;
  }();
  var unStep = unsafeCoerce2;
  var step2 = function(v, a2) {
    return v.value2(v.value1, a2);
  };
  var mkStep = unsafeCoerce2;
  var halt = function(v) {
    return v.value3(v.value1);
  };
  var extract2 = unStep(function(v) {
    return v.value0;
  });

  // output/Halogen.VDom.Types/index.js
  var Text = function() {
    function Text2(value0) {
      this.value0 = value0;
    }
    ;
    Text2.create = function(value0) {
      return new Text2(value0);
    };
    return Text2;
  }();
  var Elem = function() {
    function Elem2(value0, value1, value22, value32) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
    }
    ;
    Elem2.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return function(value32) {
            return new Elem2(value0, value1, value22, value32);
          };
        };
      };
    };
    return Elem2;
  }();
  var Keyed = function() {
    function Keyed2(value0, value1, value22, value32) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
    }
    ;
    Keyed2.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return function(value32) {
            return new Keyed2(value0, value1, value22, value32);
          };
        };
      };
    };
    return Keyed2;
  }();
  var Widget = function() {
    function Widget2(value0) {
      this.value0 = value0;
    }
    ;
    Widget2.create = function(value0) {
      return new Widget2(value0);
    };
    return Widget2;
  }();
  var Grafted = function() {
    function Grafted2(value0) {
      this.value0 = value0;
    }
    ;
    Grafted2.create = function(value0) {
      return new Grafted2(value0);
    };
    return Grafted2;
  }();
  var Graft = function() {
    function Graft2(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    Graft2.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return new Graft2(value0, value1, value22);
        };
      };
    };
    return Graft2;
  }();
  var unGraft = function(f) {
    return function($55) {
      return f($55);
    };
  };
  var graft = unsafeCoerce2;
  var bifunctorGraft = {
    bimap: function(f) {
      return function(g) {
        return unGraft(function(v) {
          return graft(/* @__PURE__ */ new Graft(function($57) {
            return f(v.value0($57));
          }, function($58) {
            return g(v.value1($58));
          }, v.value2));
        });
      };
    }
  };
  var bifunctorVDom = {
    bimap: function(v) {
      return function(v1) {
        return function(v2) {
          if (v2 instanceof Text) {
            return /* @__PURE__ */ new Text(v2.value0);
          }
          ;
          if (v2 instanceof Grafted) {
            return /* @__PURE__ */ new Grafted(bimap(bifunctorGraft)(v)(v1)(v2.value0));
          }
          ;
          return /* @__PURE__ */ new Grafted(graft(/* @__PURE__ */ new Graft(v, v1, v2)));
        };
      };
    }
  };
  var runGraft = unGraft(function(v) {
    var go2 = function(v2) {
      if (v2 instanceof Text) {
        return /* @__PURE__ */ new Text(v2.value0);
      }
      ;
      if (v2 instanceof Elem) {
        return /* @__PURE__ */ new Elem(v2.value0, v2.value1, v.value0(v2.value2), map(functorArray)(go2)(v2.value3));
      }
      ;
      if (v2 instanceof Keyed) {
        return /* @__PURE__ */ new Keyed(v2.value0, v2.value1, v.value0(v2.value2), map(functorArray)(map(functorTuple)(go2))(v2.value3));
      }
      ;
      if (v2 instanceof Widget) {
        return /* @__PURE__ */ new Widget(v.value1(v2.value0));
      }
      ;
      if (v2 instanceof Grafted) {
        return /* @__PURE__ */ new Grafted(bimap(bifunctorGraft)(v.value0)(v.value1)(v2.value0));
      }
      ;
      throw new Error("Failed pattern match at Halogen.VDom.Types (line 86, column 7 - line 86, column 27): " + [v2.constructor.name]);
    };
    return go2(v.value2);
  });

  // output/Halogen.VDom.Util/foreign.js
  var unsafeGetAny = function(key, obj) {
    return obj[key];
  };
  var unsafeHasAny = function(key, obj) {
    return obj.hasOwnProperty(key);
  };
  var unsafeSetAny = function(key, val, obj) {
    obj[key] = val;
  };
  var forE2 = function(a2, f) {
    var b2 = [];
    for (var i2 = 0; i2 < a2.length; i2++) {
      b2.push(f(i2, a2[i2]));
    }
    return b2;
  };
  var forEachE = function(a2, f) {
    for (var i2 = 0; i2 < a2.length; i2++) {
      f(a2[i2]);
    }
  };
  var forInE = function(o, f) {
    var ks = Object.keys(o);
    for (var i2 = 0; i2 < ks.length; i2++) {
      var k = ks[i2];
      f(k, o[k]);
    }
  };
  var diffWithIxE = function(a1, a2, f1, f2, f3) {
    var a3 = [];
    var l1 = a1.length;
    var l2 = a2.length;
    var i2 = 0;
    while (1) {
      if (i2 < l1) {
        if (i2 < l2) {
          a3.push(f1(i2, a1[i2], a2[i2]));
        } else {
          f2(i2, a1[i2]);
        }
      } else if (i2 < l2) {
        a3.push(f3(i2, a2[i2]));
      } else {
        break;
      }
      i2++;
    }
    return a3;
  };
  var strMapWithIxE = function(as, fk, f) {
    var o = {};
    for (var i2 = 0; i2 < as.length; i2++) {
      var a2 = as[i2];
      var k = fk(a2);
      o[k] = f(k, i2, a2);
    }
    return o;
  };
  var diffWithKeyAndIxE = function(o1, as, fk, f1, f2, f3) {
    var o2 = {};
    for (var i2 = 0; i2 < as.length; i2++) {
      var a2 = as[i2];
      var k = fk(a2);
      if (o1.hasOwnProperty(k)) {
        o2[k] = f1(k, i2, o1[k], a2);
      } else {
        o2[k] = f3(k, i2, a2);
      }
    }
    for (var k in o1) {
      if (k in o2) {
        continue;
      }
      f2(k, o1[k]);
    }
    return o2;
  };
  var refEq2 = function(a2, b2) {
    return a2 === b2;
  };
  var createTextNode = function(s, doc) {
    return doc.createTextNode(s);
  };
  var setTextContent = function(s, n) {
    n.textContent = s;
  };
  var createElement = function(ns, name16, doc) {
    if (ns != null) {
      return doc.createElementNS(ns, name16);
    } else {
      return doc.createElement(name16);
    }
  };
  var insertChildIx = function(i2, a2, b2) {
    var n = b2.childNodes.item(i2) || null;
    if (n !== a2) {
      b2.insertBefore(a2, n);
    }
  };
  var removeChild = function(a2, b2) {
    if (b2 && a2.parentNode === b2) {
      b2.removeChild(a2);
    }
  };
  var parentNode = function(a2) {
    return a2.parentNode;
  };
  var setAttribute = function(ns, attr3, val, el) {
    if (ns != null) {
      el.setAttributeNS(ns, attr3, val);
    } else {
      el.setAttribute(attr3, val);
    }
  };
  var removeAttribute = function(ns, attr3, el) {
    if (ns != null) {
      el.removeAttributeNS(ns, attr3);
    } else {
      el.removeAttribute(attr3);
    }
  };
  var hasAttribute = function(ns, attr3, el) {
    if (ns != null) {
      return el.hasAttributeNS(ns, attr3);
    } else {
      return el.hasAttribute(attr3);
    }
  };
  var addEventListener = function(ev, listener, el) {
    el.addEventListener(ev, listener, false);
  };
  var removeEventListener = function(ev, listener, el) {
    el.removeEventListener(ev, listener, false);
  };
  var jsUndefined = void 0;

  // output/Foreign.Object.ST/foreign.js
  var _new2 = function() {
    return {};
  };
  var peekImpl2 = function(just) {
    return function(nothing) {
      return function(k) {
        return function(m) {
          return function() {
            return {}.hasOwnProperty.call(m, k) ? just(m[k]) : nothing;
          };
        };
      };
    };
  };

  // output/Foreign.Object.ST/index.js
  var peek3 = peekImpl2(Just.create)(Nothing.value);
  var $$new2 = _new2;

  // output/Halogen.VDom.Util/index.js
  var unsafeLookup = unsafeGetAny;
  var unsafeFreeze2 = unsafeCoerce2;
  var pokeMutMap = unsafeSetAny;
  var newMutMap = $$new2;

  // output/Web.DOM.Element/foreign.js
  var getProp = function(name16) {
    return function(doctype) {
      return doctype[name16];
    };
  };
  var _namespaceURI = getProp("namespaceURI");
  var _prefix = getProp("prefix");
  var localName = getProp("localName");
  var tagName = getProp("tagName");

  // output/Web.DOM.ParentNode/foreign.js
  var getEffProp = function(name16) {
    return function(node) {
      return function() {
        return node[name16];
      };
    };
  };
  var children = getEffProp("children");
  var _firstElementChild = getEffProp("firstElementChild");
  var _lastElementChild = getEffProp("lastElementChild");
  var childElementCount = getEffProp("childElementCount");
  var _querySelector = function(selector) {
    return function(node) {
      return function() {
        return node.querySelector(selector);
      };
    };
  };

  // output/Web.DOM.ParentNode/index.js
  var querySelector = function(qs) {
    var $0 = map(functorEffect)(toMaybe);
    var $1 = _querySelector(qs);
    return function($2) {
      return $0($1($2));
    };
  };
  var lastElementChild = function() {
    var $3 = map(functorEffect)(toMaybe);
    return function($4) {
      return $3(_lastElementChild($4));
    };
  }();
  var firstElementChild = function() {
    var $5 = map(functorEffect)(toMaybe);
    return function($6) {
      return $5(_firstElementChild($6));
    };
  }();

  // output/Web.DOM.ShadowRoot/foreign.js
  var _mode = function(el) {
    return el.mode;
  };

  // output/Web.DOM.ShadowRoot/index.js
  var Open = function() {
    function Open2() {
    }
    ;
    Open2.value = new Open2();
    return Open2;
  }();
  var Closed = function() {
    function Closed2() {
    }
    ;
    Closed2.value = new Closed2();
    return Closed2;
  }();
  var mode = function() {
    var modeFromString = function(v) {
      if (v === "open") {
        return /* @__PURE__ */ new Just(Open.value);
      }
      ;
      if (v === "closed") {
        return /* @__PURE__ */ new Just(Closed.value);
      }
      ;
      return Nothing.value;
    };
    return function($4) {
      return modeFromString(_mode($4));
    };
  }();

  // output/Web.Internal.FFI/foreign.js
  var _unsafeReadProtoTagged = function(nothing, just, name16, value13) {
    if (typeof window !== "undefined") {
      var ty = window[name16];
      if (ty != null && value13 instanceof ty) {
        return just(value13);
      }
    }
    var obj = value13;
    while (obj != null) {
      var proto = Object.getPrototypeOf(obj);
      var constructorName = proto.constructor.name;
      if (constructorName === name16) {
        return just(value13);
      } else if (constructorName === "Object") {
        return nothing;
      }
      obj = proto;
    }
    return nothing;
  };

  // output/Web.Internal.FFI/index.js
  var unsafeReadProtoTagged = function(name16) {
    return function(value13) {
      return _unsafeReadProtoTagged(Nothing.value, Just.create, name16, value13);
    };
  };

  // output/Web.DOM.Element/index.js
  var toNode = unsafeCoerce2;
  var fromParentNode = unsafeReadProtoTagged("Element");
  var fromNonDocumentTypeChildNode = unsafeReadProtoTagged("Element");
  var fromNode = unsafeReadProtoTagged("Element");
  var fromEventTarget = unsafeReadProtoTagged("Element");
  var fromChildNode = unsafeReadProtoTagged("Element");

  // output/Halogen.VDom.DOM/index.js
  var haltWidget = function(v) {
    return halt(v.widget);
  };
  var patchWidget = function(state3, vdom) {
    if (vdom instanceof Grafted) {
      return patchWidget(state3, runGraft(vdom.value0));
    }
    ;
    if (vdom instanceof Widget) {
      var res = step2(state3.widget, vdom.value0);
      var res$prime = unStep(function(v) {
        return mkStep(/* @__PURE__ */ new Step2(v.value0, {
          build: state3.build,
          widget: res
        }, patchWidget, haltWidget));
      })(res);
      return res$prime;
    }
    ;
    haltWidget(state3);
    return state3.build(vdom);
  };
  var haltText = function(v) {
    var parent2 = parentNode(v.node);
    return removeChild(v.node, parent2);
  };
  var patchText = function(state3, vdom) {
    if (vdom instanceof Grafted) {
      return patchText(state3, runGraft(vdom.value0));
    }
    ;
    if (vdom instanceof Text) {
      if (state3.value === vdom.value0) {
        return mkStep(/* @__PURE__ */ new Step2(state3.node, state3, patchText, haltText));
      }
      ;
      if (otherwise) {
        var nextState = {
          build: state3.build,
          node: state3.node,
          value: vdom.value0
        };
        setTextContent(vdom.value0, state3.node);
        return mkStep(/* @__PURE__ */ new Step2(state3.node, nextState, patchText, haltText));
      }
      ;
    }
    ;
    haltText(state3);
    return state3.build(vdom);
  };
  var haltKeyed = function(v) {
    var parent2 = parentNode(v.node);
    removeChild(v.node, parent2);
    forInE(v.children, function(v1, s) {
      return halt(s);
    });
    return halt(v.attrs);
  };
  var haltElem = function(v) {
    var parent2 = parentNode(v.node);
    removeChild(v.node, parent2);
    forEachE(v.children, halt);
    return halt(v.attrs);
  };
  var eqElemSpec = function(ns1, v, ns2, v1) {
    var $58 = v === v1;
    if ($58) {
      if (ns1 instanceof Just && (ns2 instanceof Just && ns1.value0 === ns2.value0)) {
        return true;
      }
      ;
      if (ns1 instanceof Nothing && ns2 instanceof Nothing) {
        return true;
      }
      ;
      return false;
    }
    ;
    return false;
  };
  var patchElem = function(state3, vdom) {
    if (vdom instanceof Grafted) {
      return patchElem(state3, runGraft(vdom.value0));
    }
    ;
    if (vdom instanceof Elem && eqElemSpec(state3.ns, state3.name, vdom.value0, vdom.value1)) {
      var v = length4(vdom.value3);
      var v1 = length4(state3.children);
      if (v1 === 0 && v === 0) {
        var attrs2 = step2(state3.attrs, vdom.value2);
        var nextState = {
          build: state3.build,
          node: state3.node,
          attrs: attrs2,
          ns: vdom.value0,
          name: vdom.value1,
          children: state3.children
        };
        return mkStep(/* @__PURE__ */ new Step2(state3.node, nextState, patchElem, haltElem));
      }
      ;
      var onThis = function(v2, s) {
        return halt(s);
      };
      var onThese = function(ix, s, v2) {
        var res = step2(s, v2);
        insertChildIx(ix, extract2(res), state3.node);
        return res;
      };
      var onThat = function(ix, v2) {
        var res = state3.build(v2);
        insertChildIx(ix, extract2(res), state3.node);
        return res;
      };
      var children2 = diffWithIxE(state3.children, vdom.value3, onThese, onThis, onThat);
      var attrs2 = step2(state3.attrs, vdom.value2);
      var nextState = {
        build: state3.build,
        node: state3.node,
        attrs: attrs2,
        ns: vdom.value0,
        name: vdom.value1,
        children: children2
      };
      return mkStep(/* @__PURE__ */ new Step2(state3.node, nextState, patchElem, haltElem));
    }
    ;
    haltElem(state3);
    return state3.build(vdom);
  };
  var patchKeyed = function(state3, vdom) {
    if (vdom instanceof Grafted) {
      return patchKeyed(state3, runGraft(vdom.value0));
    }
    ;
    if (vdom instanceof Keyed && eqElemSpec(state3.ns, state3.name, vdom.value0, vdom.value1)) {
      var v = length4(vdom.value3);
      if (state3.length === 0 && v === 0) {
        var attrs2 = step2(state3.attrs, vdom.value2);
        var nextState = {
          build: state3.build,
          node: state3.node,
          attrs: attrs2,
          ns: vdom.value0,
          name: vdom.value1,
          children: state3.children,
          length: 0
        };
        return mkStep(/* @__PURE__ */ new Step2(state3.node, nextState, patchKeyed, haltKeyed));
      }
      ;
      var onThis = function(v2, s) {
        return halt(s);
      };
      var onThese = function(v2, ix$prime, s, v3) {
        var res = step2(s, v3.value1);
        insertChildIx(ix$prime, extract2(res), state3.node);
        return res;
      };
      var onThat = function(v2, ix, v3) {
        var res = state3.build(v3.value1);
        insertChildIx(ix, extract2(res), state3.node);
        return res;
      };
      var children2 = diffWithKeyAndIxE(state3.children, vdom.value3, fst, onThese, onThis, onThat);
      var attrs2 = step2(state3.attrs, vdom.value2);
      var nextState = {
        build: state3.build,
        node: state3.node,
        attrs: attrs2,
        ns: vdom.value0,
        name: vdom.value1,
        children: children2,
        length: v
      };
      return mkStep(/* @__PURE__ */ new Step2(state3.node, nextState, patchKeyed, haltKeyed));
    }
    ;
    haltKeyed(state3);
    return state3.build(vdom);
  };
  var buildWidget = function(v, build, w) {
    var res = v.buildWidget(v)(w);
    var res$prime = unStep(function(v1) {
      return mkStep(/* @__PURE__ */ new Step2(v1.value0, {
        build,
        widget: res
      }, patchWidget, haltWidget));
    })(res);
    return res$prime;
  };
  var buildText = function(v, build, s) {
    var node = createTextNode(s, v.document);
    var state3 = {
      build,
      node,
      value: s
    };
    return mkStep(/* @__PURE__ */ new Step2(node, state3, patchText, haltText));
  };
  var buildKeyed = function(v, build, ns1, name1, as1, ch1) {
    var el = createElement(toNullable(ns1), name1, v.document);
    var node = toNode(el);
    var onChild = function(v1, ix, v2) {
      var res = build(v2.value1);
      insertChildIx(ix, extract2(res), node);
      return res;
    };
    var children2 = strMapWithIxE(ch1, fst, onChild);
    var attrs = v.buildAttributes(el)(as1);
    var state3 = {
      build,
      node,
      attrs,
      ns: ns1,
      name: name1,
      children: children2,
      length: length4(ch1)
    };
    return mkStep(/* @__PURE__ */ new Step2(node, state3, patchKeyed, haltKeyed));
  };
  var buildElem = function(v, build, ns1, name1, as1, ch1) {
    var el = createElement(toNullable(ns1), name1, v.document);
    var node = toNode(el);
    var onChild = function(ix, child) {
      var res = build(child);
      insertChildIx(ix, extract2(res), node);
      return res;
    };
    var children2 = forE2(ch1, onChild);
    var attrs = v.buildAttributes(el)(as1);
    var state3 = {
      build,
      node,
      attrs,
      ns: ns1,
      name: name1,
      children: children2
    };
    return mkStep(/* @__PURE__ */ new Step2(node, state3, patchElem, haltElem));
  };
  var buildVDom = function(spec) {
    var build = function(v) {
      if (v instanceof Text) {
        return buildText(spec, build, v.value0);
      }
      ;
      if (v instanceof Elem) {
        return buildElem(spec, build, v.value0, v.value1, v.value2, v.value3);
      }
      ;
      if (v instanceof Keyed) {
        return buildKeyed(spec, build, v.value0, v.value1, v.value2, v.value3);
      }
      ;
      if (v instanceof Widget) {
        return buildWidget(spec, build, v.value0);
      }
      ;
      if (v instanceof Grafted) {
        return build(runGraft(v.value0));
      }
      ;
      throw new Error("Failed pattern match at Halogen.VDom.DOM (line 58, column 27 - line 63, column 52): " + [v.constructor.name]);
    };
    return build;
  };

  // output/Foreign/foreign.js
  var typeOf = function(value13) {
    return typeof value13;
  };
  var tagOf = function(value13) {
    return Object.prototype.toString.call(value13).slice(8, -1);
  };
  var isArray = Array.isArray || function(value13) {
    return Object.prototype.toString.call(value13) === "[object Array]";
  };

  // output/Effect.Exception/foreign.js
  var error = function(msg) {
    return new Error(msg);
  };
  var stackImpl = function(just) {
    return function(nothing) {
      return function(e2) {
        return e2.stack ? just(e2.stack) : nothing;
      };
    };
  };
  var throwException = function(e2) {
    return function() {
      throw e2;
    };
  };
  var catchException = function(c) {
    return function(t) {
      return function() {
        try {
          return t();
        } catch (e2) {
          if (e2 instanceof Error || Object.prototype.toString.call(e2) === "[object Error]") {
            return c(e2)();
          } else {
            return c(new Error(e2.toString()))();
          }
        }
      };
    };
  };

  // output/Effect.Exception/index.js
  var $$throw = function($2) {
    return throwException(error($2));
  };
  var stack = stackImpl(Just.create)(Nothing.value);

  // output/Control.Monad.Error.Class/index.js
  var throwError = function(dict) {
    return dict.throwError;
  };
  var monadThrowMaybe = {
    throwError: $$const(Nothing.value),
    Monad0: function() {
      return monadMaybe;
    }
  };
  var monadThrowEither = {
    throwError: Left.create,
    Monad0: function() {
      return monadEither;
    }
  };
  var monadThrowEffect = {
    throwError: throwException,
    Monad0: function() {
      return monadEffect;
    }
  };
  var monadErrorEffect = {
    catchError: flip(catchException),
    MonadThrow0: function() {
      return monadThrowEffect;
    }
  };
  var catchError = function(dict) {
    return dict.catchError;
  };
  var $$try = function(dictMonadError) {
    return function(a2) {
      return catchError(dictMonadError)(map(dictMonadError.MonadThrow0().Monad0().Bind1().Apply0().Functor0())(Right.create)(a2))(function() {
        var $21 = pure(dictMonadError.MonadThrow0().Monad0().Applicative0());
        return function($22) {
          return $21(Left.create($22));
        };
      }());
    };
  };

  // output/Control.Monad.Reader.Class/index.js
  var monadAskFun = {
    ask: identity(categoryFn),
    Monad0: function() {
      return monadFn;
    }
  };
  var monadReaderFun = {
    local: composeFlipped(semigroupoidFn),
    MonadAsk0: function() {
      return monadAskFun;
    }
  };

  // output/Effect.Class/index.js
  var monadEffectEffect = {
    liftEffect: identity(categoryFn),
    Monad0: function() {
      return monadEffect;
    }
  };
  var liftEffect = function(dict) {
    return dict.liftEffect;
  };

  // output/Control.Monad.Except.Trans/index.js
  var ExceptT = function(x) {
    return x;
  };
  var withExceptT = function(dictFunctor) {
    return function(f) {
      return function(v) {
        var mapLeft = function(v1) {
          return function(v2) {
            if (v2 instanceof Right) {
              return /* @__PURE__ */ new Right(v2.value0);
            }
            ;
            if (v2 instanceof Left) {
              return /* @__PURE__ */ new Left(v1(v2.value0));
            }
            ;
            throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 43, column 3 - line 43, column 32): " + [v1.constructor.name, v2.constructor.name]);
          };
        };
        return map(dictFunctor)(mapLeft(f))(v);
      };
    };
  };
  var runExceptT = function(v) {
    return v;
  };
  var mapExceptT = function(f) {
    return function(v) {
      return f(v);
    };
  };
  var functorExceptT = function(dictFunctor) {
    return {
      map: function(f) {
        return mapExceptT(map(dictFunctor)(map(functorEither)(f)));
      }
    };
  };
  var monadExceptT = function(dictMonad) {
    return {
      Applicative0: function() {
        return applicativeExceptT(dictMonad);
      },
      Bind1: function() {
        return bindExceptT(dictMonad);
      }
    };
  };
  var bindExceptT = function(dictMonad) {
    return {
      bind: function(v) {
        return function(k) {
          return bind(dictMonad.Bind1())(v)(either(function() {
            var $91 = pure(dictMonad.Applicative0());
            return function($92) {
              return $91(Left.create($92));
            };
          }())(function(a2) {
            var v1 = k(a2);
            return v1;
          }));
        };
      },
      Apply0: function() {
        return applyExceptT(dictMonad);
      }
    };
  };
  var applyExceptT = function(dictMonad) {
    return {
      apply: ap(monadExceptT(dictMonad)),
      Functor0: function() {
        return functorExceptT(dictMonad.Bind1().Apply0().Functor0());
      }
    };
  };
  var applicativeExceptT = function(dictMonad) {
    return {
      pure: function() {
        var $93 = pure(dictMonad.Applicative0());
        return function($94) {
          return ExceptT($93(Right.create($94)));
        };
      }(),
      Apply0: function() {
        return applyExceptT(dictMonad);
      }
    };
  };
  var monadThrowExceptT = function(dictMonad) {
    return {
      throwError: function() {
        var $103 = pure(dictMonad.Applicative0());
        return function($104) {
          return ExceptT($103(Left.create($104)));
        };
      }(),
      Monad0: function() {
        return monadExceptT(dictMonad);
      }
    };
  };

  // output/Data.Int/foreign.js
  var fromNumberImpl = function(just) {
    return function(nothing) {
      return function(n) {
        return (n | 0) === n ? just(n) : nothing;
      };
    };
  };
  var fromStringAsImpl = function(just) {
    return function(nothing) {
      return function(radix) {
        var digits;
        if (radix < 11) {
          digits = "[0-" + (radix - 1).toString() + "]";
        } else if (radix === 11) {
          digits = "[0-9a]";
        } else {
          digits = "[0-9a-" + String.fromCharCode(86 + radix) + "]";
        }
        var pattern3 = new RegExp("^[\\+\\-]?" + digits + "+$", "i");
        return function(s) {
          if (pattern3.test(s)) {
            var i2 = parseInt(s, radix);
            return (i2 | 0) === i2 ? just(i2) : nothing;
          } else {
            return nothing;
          }
        };
      };
    };
  };

  // output/Data.Number/foreign.js
  var isNaN2 = Number.isNaN;
  var isFinite = Number.isFinite;

  // output/Math/foreign.js
  var tau = 2 * Math.PI;

  // output/Data.Int/index.js
  var Even = function() {
    function Even2() {
    }
    ;
    Even2.value = new Even2();
    return Even2;
  }();
  var Odd = function() {
    function Odd2() {
    }
    ;
    Odd2.value = new Odd2();
    return Odd2;
  }();
  var fromStringAs = fromStringAsImpl(Just.create)(Nothing.value);
  var fromString = fromStringAs(10);
  var fromNumber = fromNumberImpl(Just.create)(Nothing.value);
  var eqParity = {
    eq: function(x) {
      return function(y) {
        if (x instanceof Even && y instanceof Even) {
          return true;
        }
        ;
        if (x instanceof Odd && y instanceof Odd) {
          return true;
        }
        ;
        return false;
      };
    }
  };
  var ordParity = {
    compare: function(x) {
      return function(y) {
        if (x instanceof Even && y instanceof Even) {
          return EQ.value;
        }
        ;
        if (x instanceof Even) {
          return LT.value;
        }
        ;
        if (y instanceof Even) {
          return GT.value;
        }
        ;
        if (x instanceof Odd && y instanceof Odd) {
          return EQ.value;
        }
        ;
        throw new Error("Failed pattern match at Data.Int (line 109, column 1 - line 109, column 40): " + [x.constructor.name, y.constructor.name]);
      };
    },
    Eq0: function() {
      return eqParity;
    }
  };
  var semiringParity = {
    zero: Even.value,
    add: function(x) {
      return function(y) {
        var $19 = eq(eqParity)(x)(y);
        if ($19) {
          return Even.value;
        }
        ;
        return Odd.value;
      };
    },
    one: Odd.value,
    mul: function(v) {
      return function(v1) {
        if (v instanceof Odd && v1 instanceof Odd) {
          return Odd.value;
        }
        ;
        return Even.value;
      };
    }
  };
  var ringParity = {
    sub: add(semiringParity),
    Semiring0: function() {
      return semiringParity;
    }
  };
  var divisionRingParity = {
    recip: identity(categoryFn),
    Ring0: function() {
      return ringParity;
    }
  };
  var boundedParity = {
    bottom: Even.value,
    top: Odd.value,
    Ord0: function() {
      return ordParity;
    }
  };

  // output/Partial.Unsafe/foreign.js
  var _unsafePartial = function(f) {
    return f();
  };

  // output/Partial/foreign.js
  var _crashWith = function(msg) {
    throw new Error(msg);
  };

  // output/Partial/index.js
  var crashWith = function(dictPartial) {
    return _crashWith;
  };

  // output/Partial.Unsafe/index.js
  var unsafePartial = _unsafePartial;
  var unsafeCrashWith = function(msg) {
    return unsafePartial(function(dictPartial) {
      return crashWith()(msg);
    });
  };

  // output/Data.List.NonEmpty/index.js
  var zipWith4 = function(f) {
    return function(v) {
      return function(v1) {
        return /* @__PURE__ */ new NonEmpty(f(v.value0)(v1.value0), zipWith(f)(v.value1)(v1.value1));
      };
    };
  };
  var zip4 = zipWith4(Tuple.create);
  var wrappedOperation2 = function(name16) {
    return function(f) {
      return function(v) {
        return function(v1) {
          var v2 = f(/* @__PURE__ */ new Cons(v.value0, v.value1))(/* @__PURE__ */ new Cons(v1.value0, v1.value1));
          if (v2 instanceof Cons) {
            return /* @__PURE__ */ new NonEmpty(v2.value0, v2.value1);
          }
          ;
          if (v2 instanceof Nil) {
            return unsafeCrashWith("Impossible: empty list in NonEmptyList " + name16);
          }
          ;
          throw new Error("Failed pattern match at Data.List.NonEmpty (line 110, column 3 - line 112, column 81): " + [v2.constructor.name]);
        };
      };
    };
  };
  var wrappedOperation = function(name16) {
    return function(f) {
      return function(v) {
        var v1 = f(/* @__PURE__ */ new Cons(v.value0, v.value1));
        if (v1 instanceof Cons) {
          return /* @__PURE__ */ new NonEmpty(v1.value0, v1.value1);
        }
        ;
        if (v1 instanceof Nil) {
          return unsafeCrashWith("Impossible: empty list in NonEmptyList " + name16);
        }
        ;
        throw new Error("Failed pattern match at Data.List.NonEmpty (line 97, column 3 - line 99, column 81): " + [v1.constructor.name]);
      };
    };
  };
  var unionBy2 = function() {
    var $166 = wrappedOperation2("unionBy");
    return function($167) {
      return $166(unionBy($167));
    };
  }();
  var sortBy3 = function() {
    var $170 = wrappedOperation("sortBy");
    return function($171) {
      return $170(sortBy($171));
    };
  }();
  var singleton6 = function() {
    var $172 = singleton2(plusList);
    return function($173) {
      return NonEmptyList($172($173));
    };
  }();
  var reverse3 = wrappedOperation("reverse")(reverse);
  var nubByEq2 = function() {
    var $174 = wrappedOperation("nubByEq");
    return function($175) {
      return $174(nubByEq($175));
    };
  }();
  var nubBy2 = function() {
    var $176 = wrappedOperation("nubBy");
    return function($177) {
      return $176(nubBy($177));
    };
  }();
  var mapWithIndex3 = mapWithIndex(functorWithIndexNonEmptyList);
  var lift3 = function(f) {
    return function(v) {
      return f(/* @__PURE__ */ new Cons(v.value0, v.value1));
    };
  };
  var intersectBy2 = function() {
    var $184 = wrappedOperation2("intersectBy");
    return function($185) {
      return $184(intersectBy($185));
    };
  }();
  var groupBy2 = function() {
    var $187 = wrappedOperation("groupBy");
    return function($188) {
      return $187(groupBy($188));
    };
  }();
  var cons3 = function(y) {
    return function(v) {
      return /* @__PURE__ */ new NonEmpty(y, /* @__PURE__ */ new Cons(v.value0, v.value1));
    };
  };
  var concatMap4 = flip(bind(bindNonEmptyList));
  var catMaybes4 = lift3(catMaybes);

  // output/Data.String.CodeUnits/foreign.js
  var _charAt = function(just) {
    return function(nothing) {
      return function(i2) {
        return function(s) {
          return i2 >= 0 && i2 < s.length ? just(s.charAt(i2)) : nothing;
        };
      };
    };
  };
  var _toChar = function(just) {
    return function(nothing) {
      return function(s) {
        return s.length === 1 ? just(s) : nothing;
      };
    };
  };
  var _indexOf = function(just) {
    return function(nothing) {
      return function(x) {
        return function(s) {
          var i2 = s.indexOf(x);
          return i2 === -1 ? nothing : just(i2);
        };
      };
    };
  };
  var _indexOfStartingAt = function(just) {
    return function(nothing) {
      return function(x) {
        return function(startAt) {
          return function(s) {
            if (startAt < 0 || startAt > s.length)
              return nothing;
            var i2 = s.indexOf(x, startAt);
            return i2 === -1 ? nothing : just(i2);
          };
        };
      };
    };
  };
  var _lastIndexOf = function(just) {
    return function(nothing) {
      return function(x) {
        return function(s) {
          var i2 = s.lastIndexOf(x);
          return i2 === -1 ? nothing : just(i2);
        };
      };
    };
  };
  var _lastIndexOfStartingAt = function(just) {
    return function(nothing) {
      return function(x) {
        return function(startAt) {
          return function(s) {
            var i2 = s.lastIndexOf(x, startAt);
            return i2 === -1 ? nothing : just(i2);
          };
        };
      };
    };
  };

  // output/Data.String.CodeUnits/index.js
  var toChar = _toChar(Just.create)(Nothing.value);
  var lastIndexOf$prime = _lastIndexOfStartingAt(Just.create)(Nothing.value);
  var lastIndexOf = _lastIndexOf(Just.create)(Nothing.value);
  var indexOf$prime = _indexOfStartingAt(Just.create)(Nothing.value);
  var indexOf = _indexOf(Just.create)(Nothing.value);
  var charAt2 = _charAt(Just.create)(Nothing.value);

  // output/Foreign/index.js
  var ForeignError = function() {
    function ForeignError2(value0) {
      this.value0 = value0;
    }
    ;
    ForeignError2.create = function(value0) {
      return new ForeignError2(value0);
    };
    return ForeignError2;
  }();
  var TypeMismatch = function() {
    function TypeMismatch2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    TypeMismatch2.create = function(value0) {
      return function(value1) {
        return new TypeMismatch2(value0, value1);
      };
    };
    return TypeMismatch2;
  }();
  var ErrorAtIndex = function() {
    function ErrorAtIndex2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    ErrorAtIndex2.create = function(value0) {
      return function(value1) {
        return new ErrorAtIndex2(value0, value1);
      };
    };
    return ErrorAtIndex2;
  }();
  var ErrorAtProperty = function() {
    function ErrorAtProperty2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    ErrorAtProperty2.create = function(value0) {
      return function(value1) {
        return new ErrorAtProperty2(value0, value1);
      };
    };
    return ErrorAtProperty2;
  }();
  var unsafeToForeign = unsafeCoerce2;
  var unsafeFromForeign = unsafeCoerce2;
  var fail = function(dictMonad) {
    var $118 = throwError(monadThrowExceptT(dictMonad));
    return function($119) {
      return $118(singleton6($119));
    };
  };
  var unsafeReadTagged = function(dictMonad) {
    return function(tag) {
      return function(value13) {
        if (tagOf(value13) === tag) {
          return pure(applicativeExceptT(dictMonad))(unsafeFromForeign(value13));
        }
        ;
        if (otherwise) {
          return fail(dictMonad)(/* @__PURE__ */ new TypeMismatch(tag, tagOf(value13)));
        }
        ;
        throw new Error("Failed pattern match at Foreign (line 110, column 1 - line 110, column 71): " + [tag.constructor.name, value13.constructor.name]);
      };
    };
  };
  var readBoolean = function(dictMonad) {
    return unsafeReadTagged(dictMonad)("Boolean");
  };
  var readNumber = function(dictMonad) {
    return unsafeReadTagged(dictMonad)("Number");
  };
  var readInt = function(dictMonad) {
    return function(value13) {
      var error4 = /* @__PURE__ */ new Left(singleton6(/* @__PURE__ */ new TypeMismatch("Int", tagOf(value13))));
      var fromNumber2 = function() {
        var $120 = maybe(error4)(pure(applicativeEither));
        return function($121) {
          return $120(fromNumber($121));
        };
      }();
      return mapExceptT(map(dictMonad.Bind1().Apply0().Functor0())(either($$const(error4))(fromNumber2)))(readNumber(dictMonad)(value13));
    };
  };
  var readString = function(dictMonad) {
    return unsafeReadTagged(dictMonad)("String");
  };

  // output/Foreign.Object/foreign.js
  var _foldM = function(bind2) {
    return function(f) {
      return function(mz) {
        return function(m) {
          var acc = mz;
          function g(k2) {
            return function(z) {
              return f(z)(k2)(m[k2]);
            };
          }
          for (var k in m) {
            if (hasOwnProperty.call(m, k)) {
              acc = bind2(acc)(g(k));
            }
          }
          return acc;
        };
      };
    };
  };
  var all3 = function(f) {
    return function(m) {
      for (var k in m) {
        if (hasOwnProperty.call(m, k) && !f(k)(m[k]))
          return false;
      }
      return true;
    };
  };
  var _lookup = function(no, yes, k, m) {
    return k in m ? yes(m[k]) : no;
  };
  var toArrayWithKey = function toArrayWithKey2(f) {
    return function(m) {
      var r = [];
      for (var k in m) {
        if (hasOwnProperty.call(m, k)) {
          r.push(f(k)(m[k]));
        }
      }
      return r;
    };
  };
  var keys = Object.keys || toArrayWithKey(function(k) {
    return function() {
      return k;
    };
  });

  // output/Data.Function.Uncurried/foreign.js
  var runFn4 = function(fn) {
    return function(a2) {
      return function(b2) {
        return function(c) {
          return function(d) {
            return fn(a2, b2, c, d);
          };
        };
      };
    };
  };

  // output/Foreign.Object/index.js
  var values2 = toArrayWithKey(function(v) {
    return function(v1) {
      return v1;
    };
  });
  var toAscUnfoldable = function(dictUnfoldable) {
    var $39 = toUnfoldable2(dictUnfoldable);
    var $40 = sortWith(ordString)(fst);
    var $41 = toArrayWithKey(Tuple.create);
    return function($42) {
      return $39($40($41($42)));
    };
  };
  var toAscArray2 = toAscUnfoldable(unfoldableArray);
  var toArray = toArrayWithKey(Tuple.create);
  var member = runFn4(_lookup)(false)($$const(true));
  var lookup2 = runFn4(_lookup)(Nothing.value)(Just.create);
  var isEmpty = all3(function(v) {
    return function(v1) {
      return false;
    };
  });
  var fold2 = _foldM(applyFlipped);

  // output/Web.Event.EventTarget/foreign.js
  var eventListener = function(fn) {
    return function() {
      return function(event) {
        return fn(event)();
      };
    };
  };
  var addEventListener2 = function(type) {
    return function(listener) {
      return function(useCapture) {
        return function(target7) {
          return function() {
            return target7.addEventListener(type, listener, useCapture);
          };
        };
      };
    };
  };
  var removeEventListener2 = function(type) {
    return function(listener) {
      return function(useCapture) {
        return function(target7) {
          return function() {
            return target7.removeEventListener(type, listener, useCapture);
          };
        };
      };
    };
  };

  // output/Halogen.VDom.DOM.Prop/index.js
  var Created = function() {
    function Created2(value0) {
      this.value0 = value0;
    }
    ;
    Created2.create = function(value0) {
      return new Created2(value0);
    };
    return Created2;
  }();
  var Removed = function() {
    function Removed2(value0) {
      this.value0 = value0;
    }
    ;
    Removed2.create = function(value0) {
      return new Removed2(value0);
    };
    return Removed2;
  }();
  var Attribute = function() {
    function Attribute2(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    Attribute2.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return new Attribute2(value0, value1, value22);
        };
      };
    };
    return Attribute2;
  }();
  var Property = function() {
    function Property2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Property2.create = function(value0) {
      return function(value1) {
        return new Property2(value0, value1);
      };
    };
    return Property2;
  }();
  var Handler = function() {
    function Handler2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Handler2.create = function(value0) {
      return function(value1) {
        return new Handler2(value0, value1);
      };
    };
    return Handler2;
  }();
  var Ref = function() {
    function Ref2(value0) {
      this.value0 = value0;
    }
    ;
    Ref2.create = function(value0) {
      return new Ref2(value0);
    };
    return Ref2;
  }();
  var unsafeGetProperty = unsafeGetAny;
  var setProperty = unsafeSetAny;
  var removeProperty = function(key, el) {
    var v = hasAttribute($$null3, key, el);
    if (v) {
      return removeAttribute($$null3, key, el);
    }
    ;
    var v1 = typeOf(unsafeGetAny(key, el));
    if (v1 === "string") {
      return unsafeSetAny(key, "", el);
    }
    ;
    if (key === "rowSpan") {
      return unsafeSetAny(key, 1, el);
    }
    ;
    if (key === "colSpan") {
      return unsafeSetAny(key, 1, el);
    }
    ;
    return unsafeSetAny(key, jsUndefined, el);
  };
  var propToStrKey = function(v) {
    if (v instanceof Attribute && v.value0 instanceof Just) {
      return "attr/" + (v.value0.value0 + (":" + v.value1));
    }
    ;
    if (v instanceof Attribute) {
      return "attr/:" + v.value1;
    }
    ;
    if (v instanceof Property) {
      return "prop/" + v.value0;
    }
    ;
    if (v instanceof Handler) {
      return "handler/" + v.value0;
    }
    ;
    if (v instanceof Ref) {
      return "ref";
    }
    ;
    throw new Error("Failed pattern match at Halogen.VDom.DOM.Prop (line 182, column 16 - line 187, column 16): " + [v.constructor.name]);
  };
  var propFromString = unsafeCoerce2;
  var propFromNumber = unsafeCoerce2;
  var propFromInt = unsafeCoerce2;
  var propFromBoolean = unsafeCoerce2;
  var functorProp = {
    map: function(v) {
      return function(v1) {
        if (v1 instanceof Handler) {
          return /* @__PURE__ */ new Handler(v1.value0, map(functorFn)(map(functorMaybe)(v))(v1.value1));
        }
        ;
        if (v1 instanceof Ref) {
          return /* @__PURE__ */ new Ref(map(functorFn)(map(functorMaybe)(v))(v1.value0));
        }
        ;
        return v1;
      };
    }
  };
  var buildProp = function(emit) {
    return function(el) {
      var removeProp = function(prevEvents) {
        return function(v, v1) {
          if (v1 instanceof Attribute) {
            return removeAttribute(toNullable(v1.value0), v1.value1, el);
          }
          ;
          if (v1 instanceof Property) {
            return removeProperty(v1.value0, el);
          }
          ;
          if (v1 instanceof Handler) {
            var handler3 = unsafeLookup(v1.value0, prevEvents);
            return removeEventListener(v1.value0, fst(handler3), el);
          }
          ;
          if (v1 instanceof Ref) {
            return unit;
          }
          ;
          throw new Error("Failed pattern match at Halogen.VDom.DOM.Prop (line 169, column 5 - line 179, column 18): " + [v1.constructor.name]);
        };
      };
      var mbEmit = function(v) {
        if (v instanceof Just) {
          return emit(v.value0)();
        }
        ;
        return unit;
      };
      var haltProp = function(state3) {
        var v = lookup2("ref")(state3.props);
        if (v instanceof Just && v.value0 instanceof Ref) {
          return mbEmit(v.value0.value0(/* @__PURE__ */ new Removed(el)));
        }
        ;
        return unit;
      };
      var diffProp = function(prevEvents, events) {
        return function(v, v1, v11, v2) {
          if (v11 instanceof Attribute && v2 instanceof Attribute) {
            var $57 = v11.value2 === v2.value2;
            if ($57) {
              return v2;
            }
            ;
            setAttribute(toNullable(v2.value0), v2.value1, v2.value2, el);
            return v2;
          }
          ;
          if (v11 instanceof Property && v2 instanceof Property) {
            var v4 = refEq2(v11.value1, v2.value1);
            if (v4) {
              return v2;
            }
            ;
            if (v2.value0 === "value") {
              var elVal = unsafeGetProperty("value", el);
              var $66 = refEq2(elVal, v2.value1);
              if ($66) {
                return v2;
              }
              ;
              setProperty(v2.value0, v2.value1, el);
              return v2;
            }
            ;
            setProperty(v2.value0, v2.value1, el);
            return v2;
          }
          ;
          if (v11 instanceof Handler && v2 instanceof Handler) {
            var handler3 = unsafeLookup(v2.value0, prevEvents);
            write(v2.value1)(snd(handler3))();
            pokeMutMap(v2.value0, handler3, events);
            return v2;
          }
          ;
          return v2;
        };
      };
      var applyProp = function(events) {
        return function(v, v1, v2) {
          if (v2 instanceof Attribute) {
            setAttribute(toNullable(v2.value0), v2.value1, v2.value2, el);
            return v2;
          }
          ;
          if (v2 instanceof Property) {
            setProperty(v2.value0, v2.value1, el);
            return v2;
          }
          ;
          if (v2 instanceof Handler) {
            var v3 = unsafeGetAny(v2.value0, events);
            if (unsafeHasAny(v2.value0, events)) {
              write(v2.value1)(snd(v3))();
              return v2;
            }
            ;
            var ref3 = $$new(v2.value1)();
            var listener = eventListener(function(ev) {
              return function __do2() {
                var f$prime = read(ref3)();
                return mbEmit(f$prime(ev));
              };
            })();
            pokeMutMap(v2.value0, /* @__PURE__ */ new Tuple(listener, ref3), events);
            addEventListener(v2.value0, listener, el);
            return v2;
          }
          ;
          if (v2 instanceof Ref) {
            mbEmit(v2.value0(/* @__PURE__ */ new Created(el)));
            return v2;
          }
          ;
          throw new Error("Failed pattern match at Halogen.VDom.DOM.Prop (line 113, column 5 - line 135, column 15): " + [v2.constructor.name]);
        };
      };
      var patchProp = function(state3, ps2) {
        var events = newMutMap();
        var onThis = removeProp(state3.events);
        var onThese = diffProp(state3.events, events);
        var onThat = applyProp(events);
        var props = diffWithKeyAndIxE(state3.props, ps2, propToStrKey, onThese, onThis, onThat);
        var nextState = {
          events: unsafeFreeze2(events),
          props
        };
        return mkStep(/* @__PURE__ */ new Step2(unit, nextState, patchProp, haltProp));
      };
      var renderProp = function(ps1) {
        var events = newMutMap();
        var ps1$prime = strMapWithIxE(ps1, propToStrKey, applyProp(events));
        var state3 = {
          events: unsafeFreeze2(events),
          props: ps1$prime
        };
        return mkStep(/* @__PURE__ */ new Step2(unit, state3, patchProp, haltProp));
      };
      return renderProp;
    };
  };

  // output/Halogen.HTML.Core/index.js
  var HTML = function(x) {
    return x;
  };
  var toPropValue = function(dict) {
    return dict.toPropValue;
  };
  var text = function($20) {
    return HTML(Text.create($20));
  };
  var ref = function(f) {
    return /* @__PURE__ */ new Ref(function($21) {
      return f(function(v) {
        if (v instanceof Created) {
          return /* @__PURE__ */ new Just(v.value0);
        }
        ;
        if (v instanceof Removed) {
          return Nothing.value;
        }
        ;
        throw new Error("Failed pattern match at Halogen.HTML.Core (line 103, column 21 - line 105, column 23): " + [v.constructor.name]);
      }($21));
    });
  };
  var prop = function(dictIsProp) {
    return function(v) {
      var $22 = Property.create(v);
      var $23 = toPropValue(dictIsProp);
      return function($24) {
        return $22($23($24));
      };
    };
  };
  var keyed = function(ns) {
    return function(name16) {
      return function(props) {
        return function(children2) {
          return /* @__PURE__ */ new Keyed(ns, name16, props, children2);
        };
      };
    };
  };
  var isPropString = {
    toPropValue: propFromString
  };
  var isPropStepValue = {
    toPropValue: function($28) {
      return propFromString(renderStepValue($28));
    }
  };
  var isPropScopeValue = {
    toPropValue: function($29) {
      return propFromString(renderScopeValue($29));
    }
  };
  var isPropPreloadValue = {
    toPropValue: function($30) {
      return propFromString(renderPreloadValue($30));
    }
  };
  var isPropOnOff = {
    toPropValue: function($32) {
      return propFromString(renderOnOff($32));
    }
  };
  var isPropNumber = {
    toPropValue: propFromNumber
  };
  var isPropMediaType = {
    toPropValue: function() {
      var $35 = unwrap();
      return function($36) {
        return propFromString($35($36));
      };
    }()
  };
  var isPropInt = {
    toPropValue: propFromInt
  };
  var isPropInputAcceptType = {
    toPropValue: function($39) {
      return propFromString(renderInputAcceptType($39));
    }
  };
  var isPropFormMethod = {
    toPropValue: function($40) {
      return propFromString(renderFormMethod($40));
    }
  };
  var isPropBoolean = {
    toPropValue: propFromBoolean
  };
  var handler = Handler.create;
  var element = function(ns) {
    return function(name16) {
      return function(props) {
        return function(children2) {
          return /* @__PURE__ */ new Elem(ns, name16, props, children2);
        };
      };
    };
  };
  var bifunctorHTML = {
    bimap: function(f) {
      return function(g) {
        return function(v) {
          return bimap(bifunctorVDom)(map(functorArray)(map(functorProp)(map(functorInput)(g))))(f)(v);
        };
      };
    }
  };
  var functorHTML = {
    map: rmap(bifunctorHTML)
  };
  var attr = function(ns) {
    return function(v) {
      return Attribute.create(ns)(v);
    };
  };

  // output/Control.Applicative.Free/index.js
  var Pure = function() {
    function Pure2(value0) {
      this.value0 = value0;
    }
    ;
    Pure2.create = function(value0) {
      return new Pure2(value0);
    };
    return Pure2;
  }();
  var Lift = function() {
    function Lift3(value0) {
      this.value0 = value0;
    }
    ;
    Lift3.create = function(value0) {
      return new Lift3(value0);
    };
    return Lift3;
  }();
  var Ap = function() {
    function Ap2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Ap2.create = function(value0) {
      return function(value1) {
        return new Ap2(value0, value1);
      };
    };
    return Ap2;
  }();
  var mkAp = function(fba) {
    return function(fb) {
      return /* @__PURE__ */ new Ap(fba, fb);
    };
  };
  var liftFreeAp = Lift.create;
  var goLeft = function($copy_dictApplicative) {
    return function($copy_fStack) {
      return function($copy_valStack) {
        return function($copy_nat) {
          return function($copy_func) {
            return function($copy_count) {
              var $tco_var_dictApplicative = $copy_dictApplicative;
              var $tco_var_fStack = $copy_fStack;
              var $tco_var_valStack = $copy_valStack;
              var $tco_var_nat = $copy_nat;
              var $tco_var_func = $copy_func;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(dictApplicative, fStack, valStack, nat, func, count) {
                if (func instanceof Pure) {
                  $tco_done = true;
                  return /* @__PURE__ */ new Tuple(/* @__PURE__ */ new Cons({
                    func: pure(dictApplicative)(func.value0),
                    count
                  }, fStack), valStack);
                }
                ;
                if (func instanceof Lift) {
                  $tco_done = true;
                  return /* @__PURE__ */ new Tuple(/* @__PURE__ */ new Cons({
                    func: nat(func.value0),
                    count
                  }, fStack), valStack);
                }
                ;
                if (func instanceof Ap) {
                  $tco_var_dictApplicative = dictApplicative;
                  $tco_var_fStack = fStack;
                  $tco_var_valStack = cons3(func.value1)(valStack);
                  $tco_var_nat = nat;
                  $tco_var_func = func.value0;
                  $copy_count = count + 1 | 0;
                  return;
                }
                ;
                throw new Error("Failed pattern match at Control.Applicative.Free (line 102, column 41 - line 105, column 81): " + [func.constructor.name]);
              }
              ;
              while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_dictApplicative, $tco_var_fStack, $tco_var_valStack, $tco_var_nat, $tco_var_func, $copy_count);
              }
              ;
              return $tco_result;
            };
          };
        };
      };
    };
  };
  var goApply = function($copy_dictApplicative) {
    return function($copy_fStack) {
      return function($copy_vals) {
        return function($copy_gVal) {
          var $tco_var_dictApplicative = $copy_dictApplicative;
          var $tco_var_fStack = $copy_fStack;
          var $tco_var_vals = $copy_vals;
          var $tco_done = false;
          var $tco_result;
          function $tco_loop(dictApplicative, fStack, vals, gVal) {
            if (fStack instanceof Nil) {
              $tco_done = true;
              return /* @__PURE__ */ new Left(gVal);
            }
            ;
            if (fStack instanceof Cons) {
              var gRes = apply(dictApplicative.Apply0())(fStack.value0.func)(gVal);
              var $14 = fStack.value0.count === 1;
              if ($14) {
                if (fStack.value1 instanceof Nil) {
                  $tco_done = true;
                  return /* @__PURE__ */ new Left(gRes);
                }
                ;
                $tco_var_dictApplicative = dictApplicative;
                $tco_var_fStack = fStack.value1;
                $tco_var_vals = vals;
                $copy_gVal = gRes;
                return;
              }
              ;
              if (vals instanceof Nil) {
                $tco_done = true;
                return /* @__PURE__ */ new Left(gRes);
              }
              ;
              if (vals instanceof Cons) {
                $tco_done = true;
                return /* @__PURE__ */ new Right(/* @__PURE__ */ new Tuple(/* @__PURE__ */ new Cons({
                  func: gRes,
                  count: fStack.value0.count - 1 | 0
                }, fStack.value1), /* @__PURE__ */ new NonEmpty(vals.value0, vals.value1)));
              }
              ;
              throw new Error("Failed pattern match at Control.Applicative.Free (line 83, column 11 - line 88, column 50): " + [vals.constructor.name]);
            }
            ;
            throw new Error("Failed pattern match at Control.Applicative.Free (line 72, column 3 - line 88, column 50): " + [fStack.constructor.name]);
          }
          ;
          while (!$tco_done) {
            $tco_result = $tco_loop($tco_var_dictApplicative, $tco_var_fStack, $tco_var_vals, $copy_gVal);
          }
          ;
          return $tco_result;
        };
      };
    };
  };
  var functorFreeAp = {
    map: function(f) {
      return function(x) {
        return mkAp(/* @__PURE__ */ new Pure(f))(x);
      };
    }
  };
  var foldFreeAp = function(dictApplicative) {
    return function(nat) {
      return function(z) {
        var go2 = function($copy_v) {
          var $tco_done = false;
          var $tco_result;
          function $tco_loop(v) {
            if (v.value1.value0 instanceof Pure) {
              var v1 = goApply(dictApplicative)(v.value0)(v.value1.value1)(pure(dictApplicative)(v.value1.value0.value0));
              if (v1 instanceof Left) {
                $tco_done = true;
                return v1.value0;
              }
              ;
              if (v1 instanceof Right) {
                $copy_v = v1.value0;
                return;
              }
              ;
              throw new Error("Failed pattern match at Control.Applicative.Free (line 54, column 17 - line 56, column 24): " + [v1.constructor.name]);
            }
            ;
            if (v.value1.value0 instanceof Lift) {
              var v1 = goApply(dictApplicative)(v.value0)(v.value1.value1)(nat(v.value1.value0.value0));
              if (v1 instanceof Left) {
                $tco_done = true;
                return v1.value0;
              }
              ;
              if (v1 instanceof Right) {
                $copy_v = v1.value0;
                return;
              }
              ;
              throw new Error("Failed pattern match at Control.Applicative.Free (line 57, column 17 - line 59, column 24): " + [v1.constructor.name]);
            }
            ;
            if (v.value1.value0 instanceof Ap) {
              var nextVals = /* @__PURE__ */ new NonEmpty(v.value1.value0.value1, v.value1.value1);
              $copy_v = goLeft(dictApplicative)(v.value0)(nextVals)(nat)(v.value1.value0.value0)(1);
              return;
            }
            ;
            throw new Error("Failed pattern match at Control.Applicative.Free (line 53, column 5 - line 62, column 47): " + [v.value1.value0.constructor.name]);
          }
          ;
          while (!$tco_done) {
            $tco_result = $tco_loop($copy_v);
          }
          ;
          return $tco_result;
        };
        return go2(/* @__PURE__ */ new Tuple(Nil.value, singleton6(z)));
      };
    };
  };
  var retractFreeAp = function(dictApplicative) {
    return foldFreeAp(dictApplicative)(identity(categoryFn));
  };
  var applyFreeAp = {
    apply: function(fba) {
      return function(fb) {
        return mkAp(fba)(fb);
      };
    },
    Functor0: function() {
      return functorFreeAp;
    }
  };
  var applicativeFreeAp = {
    pure: Pure.create,
    Apply0: function() {
      return applyFreeAp;
    }
  };
  var hoistFreeAp = function(f) {
    return foldFreeAp(applicativeFreeAp)(function($37) {
      return liftFreeAp(f($37));
    });
  };

  // output/Data.CatQueue/index.js
  var CatQueue = function() {
    function CatQueue2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    CatQueue2.create = function(value0) {
      return function(value1) {
        return new CatQueue2(value0, value1);
      };
    };
    return CatQueue2;
  }();
  var uncons4 = function($copy_v) {
    var $tco_done = false;
    var $tco_result;
    function $tco_loop(v) {
      if (v.value0 instanceof Nil && v.value1 instanceof Nil) {
        $tco_done = true;
        return Nothing.value;
      }
      ;
      if (v.value0 instanceof Nil) {
        $copy_v = /* @__PURE__ */ new CatQueue(reverse(v.value1), Nil.value);
        return;
      }
      ;
      if (v.value0 instanceof Cons) {
        $tco_done = true;
        return /* @__PURE__ */ new Just(/* @__PURE__ */ new Tuple(v.value0.value0, /* @__PURE__ */ new CatQueue(v.value0.value1, v.value1)));
      }
      ;
      throw new Error("Failed pattern match at Data.CatQueue (line 83, column 1 - line 83, column 63): " + [v.constructor.name]);
    }
    ;
    while (!$tco_done) {
      $tco_result = $tco_loop($copy_v);
    }
    ;
    return $tco_result;
  };
  var snoc2 = function(v) {
    return function(a2) {
      return /* @__PURE__ */ new CatQueue(v.value0, /* @__PURE__ */ new Cons(a2, v.value1));
    };
  };
  var $$null4 = function(v) {
    if (v.value0 instanceof Nil && v.value1 instanceof Nil) {
      return true;
    }
    ;
    return false;
  };
  var functorCatQueue = {
    map: function(f) {
      return function(v) {
        return /* @__PURE__ */ new CatQueue(map(functorList)(f)(v.value0), map(functorList)(f)(v.value1));
      };
    }
  };
  var foldableCatQueue = {
    foldMap: function(dictMonoid) {
      return foldMapDefaultL(foldableCatQueue)(dictMonoid);
    },
    foldr: function(f) {
      return foldrDefault(foldableCatQueue)(f);
    },
    foldl: function(f) {
      var go2 = function($copy_acc) {
        return function($copy_q) {
          var $tco_var_acc = $copy_acc;
          var $tco_done = false;
          var $tco_result;
          function $tco_loop(acc, q2) {
            var v = uncons4(q2);
            if (v instanceof Just) {
              $tco_var_acc = f(acc)(v.value0.value0);
              $copy_q = v.value0.value1;
              return;
            }
            ;
            if (v instanceof Nothing) {
              $tco_done = true;
              return acc;
            }
            ;
            throw new Error("Failed pattern match at Data.CatQueue (line 148, column 16 - line 150, column 22): " + [v.constructor.name]);
          }
          ;
          while (!$tco_done) {
            $tco_result = $tco_loop($tco_var_acc, $copy_q);
          }
          ;
          return $tco_result;
        };
      };
      return go2;
    }
  };
  var semigroupCatQueue = {
    append: foldl(foldableCatQueue)(snoc2)
  };
  var empty5 = /* @__PURE__ */ new CatQueue(Nil.value, Nil.value);
  var monoidCatQueue = {
    mempty: empty5,
    Semigroup0: function() {
      return semigroupCatQueue;
    }
  };
  var singleton8 = snoc2(empty5);
  var monadCatQueue = {
    Applicative0: function() {
      return applicativeCatQueue;
    },
    Bind1: function() {
      return bindCatQueue;
    }
  };
  var bindCatQueue = {
    bind: flip(foldMap(foldableCatQueue)(monoidCatQueue)),
    Apply0: function() {
      return applyCatQueue;
    }
  };
  var applyCatQueue = {
    apply: ap(monadCatQueue),
    Functor0: function() {
      return functorCatQueue;
    }
  };
  var applicativeCatQueue = {
    pure: singleton8,
    Apply0: function() {
      return applyCatQueue;
    }
  };
  var altCatQueue = {
    alt: append(semigroupCatQueue),
    Functor0: function() {
      return functorCatQueue;
    }
  };

  // output/Data.CatList/index.js
  var CatNil = function() {
    function CatNil2() {
    }
    ;
    CatNil2.value = new CatNil2();
    return CatNil2;
  }();
  var CatCons = function() {
    function CatCons2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    CatCons2.create = function(value0) {
      return function(value1) {
        return new CatCons2(value0, value1);
      };
    };
    return CatCons2;
  }();
  var link = function(v) {
    return function(v1) {
      if (v instanceof CatNil) {
        return v1;
      }
      ;
      if (v1 instanceof CatNil) {
        return v;
      }
      ;
      if (v instanceof CatCons) {
        return /* @__PURE__ */ new CatCons(v.value0, snoc2(v.value1)(v1));
      }
      ;
      throw new Error("Failed pattern match at Data.CatList (line 109, column 1 - line 109, column 54): " + [v.constructor.name, v1.constructor.name]);
    };
  };
  var foldr3 = function(k) {
    return function(b2) {
      return function(q2) {
        var foldl3 = function($copy_v) {
          return function($copy_c) {
            return function($copy_v1) {
              var $tco_var_v = $copy_v;
              var $tco_var_c = $copy_c;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(v, c, v1) {
                if (v1 instanceof Nil) {
                  $tco_done = true;
                  return c;
                }
                ;
                if (v1 instanceof Cons) {
                  $tco_var_v = v;
                  $tco_var_c = v(c)(v1.value0);
                  $copy_v1 = v1.value1;
                  return;
                }
                ;
                throw new Error("Failed pattern match at Data.CatList (line 125, column 3 - line 125, column 59): " + [v.constructor.name, c.constructor.name, v1.constructor.name]);
              }
              ;
              while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_v, $tco_var_c, $copy_v1);
              }
              ;
              return $tco_result;
            };
          };
        };
        var go2 = function($copy_xs) {
          return function($copy_ys) {
            var $tco_var_xs = $copy_xs;
            var $tco_done1 = false;
            var $tco_result;
            function $tco_loop(xs, ys) {
              var v = uncons4(xs);
              if (v instanceof Nothing) {
                $tco_done1 = true;
                return foldl3(function(x) {
                  return function(i2) {
                    return i2(x);
                  };
                })(b2)(ys);
              }
              ;
              if (v instanceof Just) {
                $tco_var_xs = v.value0.value1;
                $copy_ys = /* @__PURE__ */ new Cons(k(v.value0.value0), ys);
                return;
              }
              ;
              throw new Error("Failed pattern match at Data.CatList (line 121, column 14 - line 123, column 67): " + [v.constructor.name]);
            }
            ;
            while (!$tco_done1) {
              $tco_result = $tco_loop($tco_var_xs, $copy_ys);
            }
            ;
            return $tco_result;
          };
        };
        return go2(q2)(Nil.value);
      };
    };
  };
  var uncons5 = function(v) {
    if (v instanceof CatNil) {
      return Nothing.value;
    }
    ;
    if (v instanceof CatCons) {
      return /* @__PURE__ */ new Just(/* @__PURE__ */ new Tuple(v.value0, function() {
        var $45 = $$null4(v.value1);
        if ($45) {
          return CatNil.value;
        }
        ;
        return foldr3(link)(CatNil.value)(v.value1);
      }()));
    }
    ;
    throw new Error("Failed pattern match at Data.CatList (line 100, column 1 - line 100, column 61): " + [v.constructor.name]);
  };
  var foldableCatList = {
    foldMap: function(dictMonoid) {
      return foldMapDefaultL(foldableCatList)(dictMonoid);
    },
    foldr: function(f) {
      return function(s) {
        return function(l) {
          return foldrDefault(foldableCatList)(f)(s)(l);
        };
      };
    },
    foldl: function(f) {
      var go2 = function($copy_acc) {
        return function($copy_q) {
          var $tco_var_acc = $copy_acc;
          var $tco_done = false;
          var $tco_result;
          function $tco_loop(acc, q2) {
            var v = uncons5(q2);
            if (v instanceof Just) {
              $tco_var_acc = f(acc)(v.value0.value0);
              $copy_q = v.value0.value1;
              return;
            }
            ;
            if (v instanceof Nothing) {
              $tco_done = true;
              return acc;
            }
            ;
            throw new Error("Failed pattern match at Data.CatList (line 157, column 16 - line 159, column 22): " + [v.constructor.name]);
          }
          ;
          while (!$tco_done) {
            $tco_result = $tco_loop($tco_var_acc, $copy_q);
          }
          ;
          return $tco_result;
        };
      };
      return go2;
    }
  };
  var length6 = length(foldableCatList)(semiringInt);
  var foldMap2 = function(dictMonoid) {
    return function(v) {
      return function(v1) {
        if (v1 instanceof CatNil) {
          return mempty(dictMonoid);
        }
        ;
        if (v1 instanceof CatCons) {
          var d = function() {
            var $54 = $$null4(v1.value1);
            if ($54) {
              return CatNil.value;
            }
            ;
            return foldr3(link)(CatNil.value)(v1.value1);
          }();
          return append(dictMonoid.Semigroup0())(v(v1.value0))(foldMap2(dictMonoid)(v)(d));
        }
        ;
        throw new Error("Failed pattern match at Data.CatList (line 135, column 1 - line 135, column 62): " + [v.constructor.name, v1.constructor.name]);
      };
    };
  };
  var empty6 = CatNil.value;
  var append2 = link;
  var cons4 = function(a2) {
    return function(cat) {
      return append2(/* @__PURE__ */ new CatCons(a2, empty5))(cat);
    };
  };
  var functorCatList = {
    map: function(v) {
      return function(v1) {
        if (v1 instanceof CatNil) {
          return CatNil.value;
        }
        ;
        if (v1 instanceof CatCons) {
          var d = function() {
            var $59 = $$null4(v1.value1);
            if ($59) {
              return CatNil.value;
            }
            ;
            return foldr3(link)(CatNil.value)(v1.value1);
          }();
          return cons4(v(v1.value0))(map(functorCatList)(v)(d));
        }
        ;
        throw new Error("Failed pattern match at Data.CatList (line 185, column 1 - line 189, column 26): " + [v.constructor.name, v1.constructor.name]);
      };
    }
  };
  var singleton9 = function(a2) {
    return cons4(a2)(CatNil.value);
  };
  var semigroupCatList = {
    append: append2
  };
  var monoidCatList = {
    mempty: CatNil.value,
    Semigroup0: function() {
      return semigroupCatList;
    }
  };
  var monadCatList = {
    Applicative0: function() {
      return applicativeCatList;
    },
    Bind1: function() {
      return bindCatList;
    }
  };
  var bindCatList = {
    bind: flip(foldMap2(monoidCatList)),
    Apply0: function() {
      return applyCatList;
    }
  };
  var applyCatList = {
    apply: ap(monadCatList),
    Functor0: function() {
      return functorCatList;
    }
  };
  var applicativeCatList = {
    pure: singleton9,
    Apply0: function() {
      return applyCatList;
    }
  };
  var snoc3 = function(cat) {
    return function(a2) {
      return append2(cat)(/* @__PURE__ */ new CatCons(a2, empty5));
    };
  };

  // output/Control.Monad.Free/index.js
  var Free = function() {
    function Free2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Free2.create = function(value0) {
      return function(value1) {
        return new Free2(value0, value1);
      };
    };
    return Free2;
  }();
  var Return = function() {
    function Return2(value0) {
      this.value0 = value0;
    }
    ;
    Return2.create = function(value0) {
      return new Return2(value0);
    };
    return Return2;
  }();
  var Bind = function() {
    function Bind2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Bind2.create = function(value0) {
      return function(value1) {
        return new Bind2(value0, value1);
      };
    };
    return Bind2;
  }();
  var toView = function($copy_v) {
    var $tco_done = false;
    var $tco_result;
    function $tco_loop(v) {
      var runExpF = function(v22) {
        return v22;
      };
      var concatF = function(v22) {
        return function(r) {
          return /* @__PURE__ */ new Free(v22.value0, append(semigroupCatList)(v22.value1)(r));
        };
      };
      if (v.value0 instanceof Return) {
        var v2 = uncons5(v.value1);
        if (v2 instanceof Nothing) {
          $tco_done = true;
          return /* @__PURE__ */ new Return(v.value0.value0);
        }
        ;
        if (v2 instanceof Just) {
          $copy_v = concatF(runExpF(v2.value0.value0)(v.value0.value0))(v2.value0.value1);
          return;
        }
        ;
        throw new Error("Failed pattern match at Control.Monad.Free (line 227, column 7 - line 231, column 64): " + [v2.constructor.name]);
      }
      ;
      if (v.value0 instanceof Bind) {
        $tco_done = true;
        return /* @__PURE__ */ new Bind(v.value0.value0, function(a2) {
          return concatF(v.value0.value1(a2))(v.value1);
        });
      }
      ;
      throw new Error("Failed pattern match at Control.Monad.Free (line 225, column 3 - line 233, column 56): " + [v.value0.constructor.name]);
    }
    ;
    while (!$tco_done) {
      $tco_result = $tco_loop($copy_v);
    }
    ;
    return $tco_result;
  };
  var fromView = function(f) {
    return /* @__PURE__ */ new Free(f, empty6);
  };
  var freeMonad = {
    Applicative0: function() {
      return freeApplicative;
    },
    Bind1: function() {
      return freeBind;
    }
  };
  var freeFunctor = {
    map: function(k) {
      return function(f) {
        return bindFlipped(freeBind)(function() {
          var $119 = pure(freeApplicative);
          return function($120) {
            return $119(k($120));
          };
        }())(f);
      };
    }
  };
  var freeBind = {
    bind: function(v) {
      return function(k) {
        return /* @__PURE__ */ new Free(v.value0, snoc3(v.value1)(k));
      };
    },
    Apply0: function() {
      return freeApply;
    }
  };
  var freeApply = {
    apply: ap(freeMonad),
    Functor0: function() {
      return freeFunctor;
    }
  };
  var freeApplicative = {
    pure: function($121) {
      return fromView(Return.create($121));
    },
    Apply0: function() {
      return freeApply;
    }
  };
  var liftF = function(f) {
    return fromView(/* @__PURE__ */ new Bind(f, function() {
      var $122 = pure(freeApplicative);
      return function($123) {
        return $122($123);
      };
    }()));
  };
  var foldFree = function(dictMonadRec) {
    return function(k) {
      var go2 = function(f) {
        var v = toView(f);
        if (v instanceof Return) {
          return map(dictMonadRec.Monad0().Bind1().Apply0().Functor0())(Done.create)(pure(dictMonadRec.Monad0().Applicative0())(v.value0));
        }
        ;
        if (v instanceof Bind) {
          return map(dictMonadRec.Monad0().Bind1().Apply0().Functor0())(function($135) {
            return Loop.create(v.value1($135));
          })(k(v.value0));
        }
        ;
        throw new Error("Failed pattern match at Control.Monad.Free (line 158, column 10 - line 160, column 37): " + [v.constructor.name]);
      };
      return tailRecM(dictMonadRec)(go2);
    };
  };

  // output/Control.Monad.List.Trans/index.js
  var Yield = function() {
    function Yield2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Yield2.create = function(value0) {
      return function(value1) {
        return new Yield2(value0, value1);
      };
    };
    return Yield2;
  }();
  var Skip = function() {
    function Skip2(value0) {
      this.value0 = value0;
    }
    ;
    Skip2.create = function(value0) {
      return new Skip2(value0);
    };
    return Skip2;
  }();
  var Done2 = function() {
    function Done3() {
    }
    ;
    Done3.value = new Done3();
    return Done3;
  }();

  // output/Control.Monad.RWS.Trans/index.js
  var RWSResult = function() {
    function RWSResult2(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    RWSResult2.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return new RWSResult2(value0, value1, value22);
        };
      };
    };
    return RWSResult2;
  }();

  // output/Effect.Aff/foreign.js
  var Aff = function() {
    var EMPTY = {};
    var PURE = "Pure";
    var THROW = "Throw";
    var CATCH = "Catch";
    var SYNC = "Sync";
    var ASYNC = "Async";
    var BIND = "Bind";
    var BRACKET = "Bracket";
    var FORK = "Fork";
    var SEQ = "Sequential";
    var MAP = "Map";
    var APPLY = "Apply";
    var ALT = "Alt";
    var CONS = "Cons";
    var RESUME = "Resume";
    var RELEASE = "Release";
    var FINALIZER = "Finalizer";
    var FINALIZED = "Finalized";
    var FORKED = "Forked";
    var FIBER = "Fiber";
    var THUNK = "Thunk";
    function Aff2(tag, _1, _2, _3) {
      this.tag = tag;
      this._1 = _1;
      this._2 = _2;
      this._3 = _3;
    }
    function AffCtr(tag) {
      var fn = function(_1, _2, _3) {
        return new Aff2(tag, _1, _2, _3);
      };
      fn.tag = tag;
      return fn;
    }
    function nonCanceler2(error4) {
      return new Aff2(PURE, void 0);
    }
    function runEff(eff) {
      try {
        eff();
      } catch (error4) {
        setTimeout(function() {
          throw error4;
        }, 0);
      }
    }
    function runSync(left, right, eff) {
      try {
        return right(eff());
      } catch (error4) {
        return left(error4);
      }
    }
    function runAsync(left, eff, k) {
      try {
        return eff(k)();
      } catch (error4) {
        k(left(error4))();
        return nonCanceler2;
      }
    }
    var Scheduler = function() {
      var limit = 1024;
      var size4 = 0;
      var ix = 0;
      var queue = new Array(limit);
      var draining = false;
      function drain() {
        var thunk4;
        draining = true;
        while (size4 !== 0) {
          size4--;
          thunk4 = queue[ix];
          queue[ix] = void 0;
          ix = (ix + 1) % limit;
          thunk4();
        }
        draining = false;
      }
      return {
        isDraining: function() {
          return draining;
        },
        enqueue: function(cb) {
          var i2, tmp;
          if (size4 === limit) {
            tmp = draining;
            drain();
            draining = tmp;
          }
          queue[(ix + size4) % limit] = cb;
          size4++;
          if (!draining) {
            drain();
          }
        }
      };
    }();
    function Supervisor(util) {
      var fibers = {};
      var fiberId = 0;
      var count = 0;
      return {
        register: function(fiber) {
          var fid = fiberId++;
          fiber.onComplete({
            rethrow: true,
            handler: function(result) {
              return function() {
                count--;
                delete fibers[fid];
              };
            }
          })();
          fibers[fid] = fiber;
          count++;
        },
        isEmpty: function() {
          return count === 0;
        },
        killAll: function(killError, cb) {
          return function() {
            if (count === 0) {
              return cb();
            }
            var killCount = 0;
            var kills = {};
            function kill2(fid) {
              kills[fid] = fibers[fid].kill(killError, function(result) {
                return function() {
                  delete kills[fid];
                  killCount--;
                  if (util.isLeft(result) && util.fromLeft(result)) {
                    setTimeout(function() {
                      throw util.fromLeft(result);
                    }, 0);
                  }
                  if (killCount === 0) {
                    cb();
                  }
                };
              })();
            }
            for (var k in fibers) {
              if (fibers.hasOwnProperty(k)) {
                killCount++;
                kill2(k);
              }
            }
            fibers = {};
            fiberId = 0;
            count = 0;
            return function(error4) {
              return new Aff2(SYNC, function() {
                for (var k2 in kills) {
                  if (kills.hasOwnProperty(k2)) {
                    kills[k2]();
                  }
                }
              });
            };
          };
        }
      };
    }
    var SUSPENDED = 0;
    var CONTINUE = 1;
    var STEP_BIND = 2;
    var STEP_RESULT = 3;
    var PENDING = 4;
    var RETURN = 5;
    var COMPLETED = 6;
    function Fiber(util, supervisor, aff) {
      var runTick = 0;
      var status = SUSPENDED;
      var step5 = aff;
      var fail2 = null;
      var interrupt = null;
      var bhead = null;
      var btail = null;
      var attempts = null;
      var bracketCount = 0;
      var joinId = 0;
      var joins = null;
      var rethrow = true;
      function run3(localRunTick) {
        var tmp, result, attempt2;
        while (true) {
          tmp = null;
          result = null;
          attempt2 = null;
          switch (status) {
            case STEP_BIND:
              status = CONTINUE;
              try {
                step5 = bhead(step5);
                if (btail === null) {
                  bhead = null;
                } else {
                  bhead = btail._1;
                  btail = btail._2;
                }
              } catch (e2) {
                status = RETURN;
                fail2 = util.left(e2);
                step5 = null;
              }
              break;
            case STEP_RESULT:
              if (util.isLeft(step5)) {
                status = RETURN;
                fail2 = step5;
                step5 = null;
              } else if (bhead === null) {
                status = RETURN;
              } else {
                status = STEP_BIND;
                step5 = util.fromRight(step5);
              }
              break;
            case CONTINUE:
              switch (step5.tag) {
                case BIND:
                  if (bhead) {
                    btail = new Aff2(CONS, bhead, btail);
                  }
                  bhead = step5._2;
                  status = CONTINUE;
                  step5 = step5._1;
                  break;
                case PURE:
                  if (bhead === null) {
                    status = RETURN;
                    step5 = util.right(step5._1);
                  } else {
                    status = STEP_BIND;
                    step5 = step5._1;
                  }
                  break;
                case SYNC:
                  status = STEP_RESULT;
                  step5 = runSync(util.left, util.right, step5._1);
                  break;
                case ASYNC:
                  status = PENDING;
                  step5 = runAsync(util.left, step5._1, function(result2) {
                    return function() {
                      if (runTick !== localRunTick) {
                        return;
                      }
                      runTick++;
                      Scheduler.enqueue(function() {
                        if (runTick !== localRunTick + 1) {
                          return;
                        }
                        status = STEP_RESULT;
                        step5 = result2;
                        run3(runTick);
                      });
                    };
                  });
                  return;
                case THROW:
                  status = RETURN;
                  fail2 = util.left(step5._1);
                  step5 = null;
                  break;
                case CATCH:
                  if (bhead === null) {
                    attempts = new Aff2(CONS, step5, attempts, interrupt);
                  } else {
                    attempts = new Aff2(CONS, step5, new Aff2(CONS, new Aff2(RESUME, bhead, btail), attempts, interrupt), interrupt);
                  }
                  bhead = null;
                  btail = null;
                  status = CONTINUE;
                  step5 = step5._1;
                  break;
                case BRACKET:
                  bracketCount++;
                  if (bhead === null) {
                    attempts = new Aff2(CONS, step5, attempts, interrupt);
                  } else {
                    attempts = new Aff2(CONS, step5, new Aff2(CONS, new Aff2(RESUME, bhead, btail), attempts, interrupt), interrupt);
                  }
                  bhead = null;
                  btail = null;
                  status = CONTINUE;
                  step5 = step5._1;
                  break;
                case FORK:
                  status = STEP_RESULT;
                  tmp = Fiber(util, supervisor, step5._2);
                  if (supervisor) {
                    supervisor.register(tmp);
                  }
                  if (step5._1) {
                    tmp.run();
                  }
                  step5 = util.right(tmp);
                  break;
                case SEQ:
                  status = CONTINUE;
                  step5 = sequential2(util, supervisor, step5._1);
                  break;
              }
              break;
            case RETURN:
              bhead = null;
              btail = null;
              if (attempts === null) {
                status = COMPLETED;
                step5 = interrupt || fail2 || step5;
              } else {
                tmp = attempts._3;
                attempt2 = attempts._1;
                attempts = attempts._2;
                switch (attempt2.tag) {
                  case CATCH:
                    if (interrupt && interrupt !== tmp && bracketCount === 0) {
                      status = RETURN;
                    } else if (fail2) {
                      status = CONTINUE;
                      step5 = attempt2._2(util.fromLeft(fail2));
                      fail2 = null;
                    }
                    break;
                  case RESUME:
                    if (interrupt && interrupt !== tmp && bracketCount === 0 || fail2) {
                      status = RETURN;
                    } else {
                      bhead = attempt2._1;
                      btail = attempt2._2;
                      status = STEP_BIND;
                      step5 = util.fromRight(step5);
                    }
                    break;
                  case BRACKET:
                    bracketCount--;
                    if (fail2 === null) {
                      result = util.fromRight(step5);
                      attempts = new Aff2(CONS, new Aff2(RELEASE, attempt2._2, result), attempts, tmp);
                      if (interrupt === tmp || bracketCount > 0) {
                        status = CONTINUE;
                        step5 = attempt2._3(result);
                      }
                    }
                    break;
                  case RELEASE:
                    attempts = new Aff2(CONS, new Aff2(FINALIZED, step5, fail2), attempts, interrupt);
                    status = CONTINUE;
                    if (interrupt && interrupt !== tmp && bracketCount === 0) {
                      step5 = attempt2._1.killed(util.fromLeft(interrupt))(attempt2._2);
                    } else if (fail2) {
                      step5 = attempt2._1.failed(util.fromLeft(fail2))(attempt2._2);
                    } else {
                      step5 = attempt2._1.completed(util.fromRight(step5))(attempt2._2);
                    }
                    fail2 = null;
                    bracketCount++;
                    break;
                  case FINALIZER:
                    bracketCount++;
                    attempts = new Aff2(CONS, new Aff2(FINALIZED, step5, fail2), attempts, interrupt);
                    status = CONTINUE;
                    step5 = attempt2._1;
                    break;
                  case FINALIZED:
                    bracketCount--;
                    status = RETURN;
                    step5 = attempt2._1;
                    fail2 = attempt2._2;
                    break;
                }
              }
              break;
            case COMPLETED:
              for (var k in joins) {
                if (joins.hasOwnProperty(k)) {
                  rethrow = rethrow && joins[k].rethrow;
                  runEff(joins[k].handler(step5));
                }
              }
              joins = null;
              if (interrupt && fail2) {
                setTimeout(function() {
                  throw util.fromLeft(fail2);
                }, 0);
              } else if (util.isLeft(step5) && rethrow) {
                setTimeout(function() {
                  if (rethrow) {
                    throw util.fromLeft(step5);
                  }
                }, 0);
              }
              return;
            case SUSPENDED:
              status = CONTINUE;
              break;
            case PENDING:
              return;
          }
        }
      }
      function onComplete(join4) {
        return function() {
          if (status === COMPLETED) {
            rethrow = rethrow && join4.rethrow;
            join4.handler(step5)();
            return function() {
            };
          }
          var jid = joinId++;
          joins = joins || {};
          joins[jid] = join4;
          return function() {
            if (joins !== null) {
              delete joins[jid];
            }
          };
        };
      }
      function kill2(error4, cb) {
        return function() {
          if (status === COMPLETED) {
            cb(util.right(void 0))();
            return function() {
            };
          }
          var canceler = onComplete({
            rethrow: false,
            handler: function() {
              return cb(util.right(void 0));
            }
          })();
          switch (status) {
            case SUSPENDED:
              interrupt = util.left(error4);
              status = COMPLETED;
              step5 = interrupt;
              run3(runTick);
              break;
            case PENDING:
              if (interrupt === null) {
                interrupt = util.left(error4);
              }
              if (bracketCount === 0) {
                if (status === PENDING) {
                  attempts = new Aff2(CONS, new Aff2(FINALIZER, step5(error4)), attempts, interrupt);
                }
                status = RETURN;
                step5 = null;
                fail2 = null;
                run3(++runTick);
              }
              break;
            default:
              if (interrupt === null) {
                interrupt = util.left(error4);
              }
              if (bracketCount === 0) {
                status = RETURN;
                step5 = null;
                fail2 = null;
              }
          }
          return canceler;
        };
      }
      function join3(cb) {
        return function() {
          var canceler = onComplete({
            rethrow: false,
            handler: cb
          })();
          if (status === SUSPENDED) {
            run3(runTick);
          }
          return canceler;
        };
      }
      return {
        kill: kill2,
        join: join3,
        onComplete,
        isSuspended: function() {
          return status === SUSPENDED;
        },
        run: function() {
          if (status === SUSPENDED) {
            if (!Scheduler.isDraining()) {
              Scheduler.enqueue(function() {
                run3(runTick);
              });
            } else {
              run3(runTick);
            }
          }
        }
      };
    }
    function runPar(util, supervisor, par, cb) {
      var fiberId = 0;
      var fibers = {};
      var killId = 0;
      var kills = {};
      var early = new Error("[ParAff] Early exit");
      var interrupt = null;
      var root = EMPTY;
      function kill2(error4, par2, cb2) {
        var step5 = par2;
        var head4 = null;
        var tail2 = null;
        var count = 0;
        var kills2 = {};
        var tmp, kid;
        loop:
          while (true) {
            tmp = null;
            switch (step5.tag) {
              case FORKED:
                if (step5._3 === EMPTY) {
                  tmp = fibers[step5._1];
                  kills2[count++] = tmp.kill(error4, function(result) {
                    return function() {
                      count--;
                      if (count === 0) {
                        cb2(result)();
                      }
                    };
                  });
                }
                if (head4 === null) {
                  break loop;
                }
                step5 = head4._2;
                if (tail2 === null) {
                  head4 = null;
                } else {
                  head4 = tail2._1;
                  tail2 = tail2._2;
                }
                break;
              case MAP:
                step5 = step5._2;
                break;
              case APPLY:
              case ALT:
                if (head4) {
                  tail2 = new Aff2(CONS, head4, tail2);
                }
                head4 = step5;
                step5 = step5._1;
                break;
            }
          }
        if (count === 0) {
          cb2(util.right(void 0))();
        } else {
          kid = 0;
          tmp = count;
          for (; kid < tmp; kid++) {
            kills2[kid] = kills2[kid]();
          }
        }
        return kills2;
      }
      function join3(result, head4, tail2) {
        var fail2, step5, lhs, rhs, tmp, kid;
        if (util.isLeft(result)) {
          fail2 = result;
          step5 = null;
        } else {
          step5 = result;
          fail2 = null;
        }
        loop:
          while (true) {
            lhs = null;
            rhs = null;
            tmp = null;
            kid = null;
            if (interrupt !== null) {
              return;
            }
            if (head4 === null) {
              cb(fail2 || step5)();
              return;
            }
            if (head4._3 !== EMPTY) {
              return;
            }
            switch (head4.tag) {
              case MAP:
                if (fail2 === null) {
                  head4._3 = util.right(head4._1(util.fromRight(step5)));
                  step5 = head4._3;
                } else {
                  head4._3 = fail2;
                }
                break;
              case APPLY:
                lhs = head4._1._3;
                rhs = head4._2._3;
                if (fail2) {
                  head4._3 = fail2;
                  tmp = true;
                  kid = killId++;
                  kills[kid] = kill2(early, fail2 === lhs ? head4._2 : head4._1, function() {
                    return function() {
                      delete kills[kid];
                      if (tmp) {
                        tmp = false;
                      } else if (tail2 === null) {
                        join3(fail2, null, null);
                      } else {
                        join3(fail2, tail2._1, tail2._2);
                      }
                    };
                  });
                  if (tmp) {
                    tmp = false;
                    return;
                  }
                } else if (lhs === EMPTY || rhs === EMPTY) {
                  return;
                } else {
                  step5 = util.right(util.fromRight(lhs)(util.fromRight(rhs)));
                  head4._3 = step5;
                }
                break;
              case ALT:
                lhs = head4._1._3;
                rhs = head4._2._3;
                if (lhs === EMPTY && util.isLeft(rhs) || rhs === EMPTY && util.isLeft(lhs)) {
                  return;
                }
                if (lhs !== EMPTY && util.isLeft(lhs) && rhs !== EMPTY && util.isLeft(rhs)) {
                  fail2 = step5 === lhs ? rhs : lhs;
                  step5 = null;
                  head4._3 = fail2;
                } else {
                  head4._3 = step5;
                  tmp = true;
                  kid = killId++;
                  kills[kid] = kill2(early, step5 === lhs ? head4._2 : head4._1, function() {
                    return function() {
                      delete kills[kid];
                      if (tmp) {
                        tmp = false;
                      } else if (tail2 === null) {
                        join3(step5, null, null);
                      } else {
                        join3(step5, tail2._1, tail2._2);
                      }
                    };
                  });
                  if (tmp) {
                    tmp = false;
                    return;
                  }
                }
                break;
            }
            if (tail2 === null) {
              head4 = null;
            } else {
              head4 = tail2._1;
              tail2 = tail2._2;
            }
          }
      }
      function resolve(fiber) {
        return function(result) {
          return function() {
            delete fibers[fiber._1];
            fiber._3 = result;
            join3(result, fiber._2._1, fiber._2._2);
          };
        };
      }
      function run3() {
        var status = CONTINUE;
        var step5 = par;
        var head4 = null;
        var tail2 = null;
        var tmp, fid;
        loop:
          while (true) {
            tmp = null;
            fid = null;
            switch (status) {
              case CONTINUE:
                switch (step5.tag) {
                  case MAP:
                    if (head4) {
                      tail2 = new Aff2(CONS, head4, tail2);
                    }
                    head4 = new Aff2(MAP, step5._1, EMPTY, EMPTY);
                    step5 = step5._2;
                    break;
                  case APPLY:
                    if (head4) {
                      tail2 = new Aff2(CONS, head4, tail2);
                    }
                    head4 = new Aff2(APPLY, EMPTY, step5._2, EMPTY);
                    step5 = step5._1;
                    break;
                  case ALT:
                    if (head4) {
                      tail2 = new Aff2(CONS, head4, tail2);
                    }
                    head4 = new Aff2(ALT, EMPTY, step5._2, EMPTY);
                    step5 = step5._1;
                    break;
                  default:
                    fid = fiberId++;
                    status = RETURN;
                    tmp = step5;
                    step5 = new Aff2(FORKED, fid, new Aff2(CONS, head4, tail2), EMPTY);
                    tmp = Fiber(util, supervisor, tmp);
                    tmp.onComplete({
                      rethrow: false,
                      handler: resolve(step5)
                    })();
                    fibers[fid] = tmp;
                    if (supervisor) {
                      supervisor.register(tmp);
                    }
                }
                break;
              case RETURN:
                if (head4 === null) {
                  break loop;
                }
                if (head4._1 === EMPTY) {
                  head4._1 = step5;
                  status = CONTINUE;
                  step5 = head4._2;
                  head4._2 = EMPTY;
                } else {
                  head4._2 = step5;
                  step5 = head4;
                  if (tail2 === null) {
                    head4 = null;
                  } else {
                    head4 = tail2._1;
                    tail2 = tail2._2;
                  }
                }
            }
          }
        root = step5;
        for (fid = 0; fid < fiberId; fid++) {
          fibers[fid].run();
        }
      }
      function cancel(error4, cb2) {
        interrupt = util.left(error4);
        var innerKills;
        for (var kid in kills) {
          if (kills.hasOwnProperty(kid)) {
            innerKills = kills[kid];
            for (kid in innerKills) {
              if (innerKills.hasOwnProperty(kid)) {
                innerKills[kid]();
              }
            }
          }
        }
        kills = null;
        var newKills = kill2(error4, root, cb2);
        return function(killError) {
          return new Aff2(ASYNC, function(killCb) {
            return function() {
              for (var kid2 in newKills) {
                if (newKills.hasOwnProperty(kid2)) {
                  newKills[kid2]();
                }
              }
              return nonCanceler2;
            };
          });
        };
      }
      run3();
      return function(killError) {
        return new Aff2(ASYNC, function(killCb) {
          return function() {
            return cancel(killError, killCb);
          };
        });
      };
    }
    function sequential2(util, supervisor, par) {
      return new Aff2(ASYNC, function(cb) {
        return function() {
          return runPar(util, supervisor, par, cb);
        };
      });
    }
    Aff2.EMPTY = EMPTY;
    Aff2.Pure = AffCtr(PURE);
    Aff2.Throw = AffCtr(THROW);
    Aff2.Catch = AffCtr(CATCH);
    Aff2.Sync = AffCtr(SYNC);
    Aff2.Async = AffCtr(ASYNC);
    Aff2.Bind = AffCtr(BIND);
    Aff2.Bracket = AffCtr(BRACKET);
    Aff2.Fork = AffCtr(FORK);
    Aff2.Seq = AffCtr(SEQ);
    Aff2.ParMap = AffCtr(MAP);
    Aff2.ParApply = AffCtr(APPLY);
    Aff2.ParAlt = AffCtr(ALT);
    Aff2.Fiber = Fiber;
    Aff2.Supervisor = Supervisor;
    Aff2.Scheduler = Scheduler;
    Aff2.nonCanceler = nonCanceler2;
    return Aff2;
  }();
  var _pure = Aff.Pure;
  var _throwError = Aff.Throw;
  var _catchError = function(aff) {
    return function(k) {
      return Aff.Catch(aff, k);
    };
  };
  var _map = function(f) {
    return function(aff) {
      if (aff.tag === Aff.Pure.tag) {
        return Aff.Pure(f(aff._1));
      } else {
        return Aff.Bind(aff, function(value13) {
          return Aff.Pure(f(value13));
        });
      }
    };
  };
  var _bind = function(aff) {
    return function(k) {
      return Aff.Bind(aff, k);
    };
  };
  var _fork = function(immediate) {
    return function(aff) {
      return Aff.Fork(immediate, aff);
    };
  };
  var _liftEffect = Aff.Sync;
  var _parAffMap = function(f) {
    return function(aff) {
      return Aff.ParMap(f, aff);
    };
  };
  var _parAffApply = function(aff1) {
    return function(aff2) {
      return Aff.ParApply(aff1, aff2);
    };
  };
  var _parAffAlt = function(aff1) {
    return function(aff2) {
      return Aff.ParAlt(aff1, aff2);
    };
  };
  var makeAff = Aff.Async;
  var generalBracket = function(acquire) {
    return function(options2) {
      return function(k) {
        return Aff.Bracket(acquire, options2, k);
      };
    };
  };
  var _makeFiber = function(util, aff) {
    return function() {
      return Aff.Fiber(util, null, aff);
    };
  };
  var _delay = function() {
    function setDelay(n, k) {
      if (n === 0 && typeof setImmediate !== "undefined") {
        return setImmediate(k);
      } else {
        return setTimeout(k, n);
      }
    }
    function clearDelay(n, t) {
      if (n === 0 && typeof clearImmediate !== "undefined") {
        return clearImmediate(t);
      } else {
        return clearTimeout(t);
      }
    }
    return function(right, ms) {
      return Aff.Async(function(cb) {
        return function() {
          var timer = setDelay(ms, cb(right()));
          return function() {
            return Aff.Sync(function() {
              return right(clearDelay(ms, timer));
            });
          };
        };
      });
    };
  }();
  var _sequential = Aff.Seq;

  // output/Data.Functor.Costar/index.js
  var functorCostar = {
    map: function(f) {
      return function(v) {
        return function($48) {
          return f(v($48));
        };
      };
    }
  };
  var invariantCostar = {
    imap: imapF(functorCostar)
  };

  // output/Control.Parallel.Class/index.js
  var sequential = function(dict) {
    return dict.sequential;
  };
  var parallel = function(dict) {
    return dict.parallel;
  };

  // output/Control.Parallel/index.js
  var parTraverse_ = function(dictParallel) {
    return function(dictFoldable) {
      return function(f) {
        var $17 = sequential(dictParallel);
        var $18 = traverse_(dictParallel.Applicative1())(dictFoldable)(function() {
          var $20 = parallel(dictParallel);
          return function($21) {
            return $20(f($21));
          };
        }());
        return function($19) {
          return $17($18($19));
        };
      };
    };
  };
  var parSequence_ = function(dictParallel) {
    return function(dictFoldable) {
      return parTraverse_(dictParallel)(dictFoldable)(identity(categoryFn));
    };
  };

  // output/Data.Time.Duration/index.js
  var Seconds = function(x) {
    return x;
  };
  var Minutes = function(x) {
    return x;
  };
  var Milliseconds = function(x) {
    return x;
  };
  var Hours = function(x) {
    return x;
  };
  var Days = function(x) {
    return x;
  };
  var durationSeconds = {
    fromDuration: over()()(Seconds)(function(v) {
      return v * 1e3;
    }),
    toDuration: over()()(Milliseconds)(function(v) {
      return v / 1e3;
    })
  };
  var durationMinutes = {
    fromDuration: over()()(Minutes)(function(v) {
      return v * 6e4;
    }),
    toDuration: over()()(Milliseconds)(function(v) {
      return v / 6e4;
    })
  };
  var durationMilliseconds = {
    fromDuration: identity(categoryFn),
    toDuration: identity(categoryFn)
  };
  var durationHours = {
    fromDuration: over()()(Hours)(function(v) {
      return v * 36e5;
    }),
    toDuration: over()()(Milliseconds)(function(v) {
      return v / 36e5;
    })
  };
  var durationDays = {
    fromDuration: over()()(Days)(function(v) {
      return v * 864e5;
    }),
    toDuration: over()()(Milliseconds)(function(v) {
      return v / 864e5;
    })
  };

  // output/Effect.Unsafe/foreign.js
  var unsafePerformEffect = function(f) {
    return f();
  };

  // output/Effect.Aff/index.js
  var Canceler = function(x) {
    return x;
  };
  var suspendAff = _fork(false);
  var functorParAff = {
    map: _parAffMap
  };
  var functorAff = {
    map: _map
  };
  var forkAff = _fork(true);
  var ffiUtil = function() {
    var unsafeFromRight = function(v) {
      if (v instanceof Right) {
        return v.value0;
      }
      ;
      if (v instanceof Left) {
        return unsafeCrashWith("unsafeFromRight: Left");
      }
      ;
      throw new Error("Failed pattern match at Effect.Aff (line 404, column 21 - line 406, column 54): " + [v.constructor.name]);
    };
    var unsafeFromLeft = function(v) {
      if (v instanceof Left) {
        return v.value0;
      }
      ;
      if (v instanceof Right) {
        return unsafeCrashWith("unsafeFromLeft: Right");
      }
      ;
      throw new Error("Failed pattern match at Effect.Aff (line 399, column 20 - line 401, column 54): " + [v.constructor.name]);
    };
    var isLeft2 = function(v) {
      if (v instanceof Left) {
        return true;
      }
      ;
      if (v instanceof Right) {
        return false;
      }
      ;
      throw new Error("Failed pattern match at Effect.Aff (line 394, column 12 - line 396, column 20): " + [v.constructor.name]);
    };
    return {
      isLeft: isLeft2,
      fromLeft: unsafeFromLeft,
      fromRight: unsafeFromRight,
      left: Left.create,
      right: Right.create
    };
  }();
  var makeFiber = function(aff) {
    return _makeFiber(ffiUtil, aff);
  };
  var launchAff = function(aff) {
    return function __do2() {
      var fiber = makeFiber(aff)();
      fiber.run();
      return fiber;
    };
  };
  var launchAff_ = function() {
    var $40 = $$void(functorEffect);
    return function($41) {
      return $40(launchAff($41));
    };
  }();
  var bracket = function(acquire) {
    return function(completed) {
      return generalBracket(acquire)({
        killed: $$const(completed),
        failed: $$const(completed),
        completed: $$const(completed)
      });
    };
  };
  var applyParAff = {
    apply: _parAffApply,
    Functor0: function() {
      return functorParAff;
    }
  };
  var monadAff = {
    Applicative0: function() {
      return applicativeAff;
    },
    Bind1: function() {
      return bindAff;
    }
  };
  var bindAff = {
    bind: _bind,
    Apply0: function() {
      return applyAff;
    }
  };
  var applyAff = {
    apply: ap(monadAff),
    Functor0: function() {
      return functorAff;
    }
  };
  var applicativeAff = {
    pure: _pure,
    Apply0: function() {
      return applyAff;
    }
  };
  var $$finally = function(fin) {
    return function(a2) {
      return bracket(pure(applicativeAff)(unit))($$const(fin))($$const(a2));
    };
  };
  var monadEffectAff = {
    liftEffect: _liftEffect,
    Monad0: function() {
      return monadAff;
    }
  };
  var effectCanceler = function() {
    var $42 = liftEffect(monadEffectAff);
    return function($43) {
      return Canceler($$const($42($43)));
    };
  }();
  var joinFiber = function(v) {
    return makeAff(function(k) {
      return map(functorEffect)(effectCanceler)(v.join(k));
    });
  };
  var functorFiber = {
    map: function(f) {
      return function(t) {
        return unsafePerformEffect(makeFiber(map(functorAff)(f)(joinFiber(t))));
      };
    }
  };
  var killFiber = function(e2) {
    return function(v) {
      return bind(bindAff)(liftEffect(monadEffectAff)(v.isSuspended))(function(v1) {
        if (v1) {
          return liftEffect(monadEffectAff)($$void(functorEffect)(v.kill(e2, $$const(pure(applicativeEffect)(unit)))));
        }
        ;
        return makeAff(function(k) {
          return map(functorEffect)(effectCanceler)(v.kill(e2, k));
        });
      });
    };
  };
  var fiberCanceler = function() {
    var $44 = flip(killFiber);
    return function($45) {
      return Canceler($44($45));
    };
  }();
  var monadThrowAff = {
    throwError: _throwError,
    Monad0: function() {
      return monadAff;
    }
  };
  var monadErrorAff = {
    catchError: _catchError,
    MonadThrow0: function() {
      return monadThrowAff;
    }
  };
  var attempt = $$try(monadErrorAff);
  var runAff = function(k) {
    return function(aff) {
      return launchAff(bindFlipped(bindAff)(function() {
        var $46 = liftEffect(monadEffectAff);
        return function($47) {
          return $46(k($47));
        };
      }())($$try(monadErrorAff)(aff)));
    };
  };
  var runAff_ = function(k) {
    return function(aff) {
      return $$void(functorEffect)(runAff(k)(aff));
    };
  };
  var parallelAff = {
    parallel: unsafeCoerce2,
    sequential: _sequential,
    Monad0: function() {
      return monadAff;
    },
    Applicative1: function() {
      return applicativeParAff;
    }
  };
  var applicativeParAff = {
    pure: function() {
      var $50 = parallel(parallelAff);
      var $51 = pure(applicativeAff);
      return function($52) {
        return $50($51($52));
      };
    }(),
    Apply0: function() {
      return applyParAff;
    }
  };
  var semigroupCanceler = {
    append: function(v) {
      return function(v1) {
        return function(err) {
          return parSequence_(parallelAff)(foldableArray)([v(err), v1(err)]);
        };
      };
    }
  };
  var monadRecAff = {
    tailRecM: function(k) {
      var go2 = function(a2) {
        return bind(bindAff)(k(a2))(function(res) {
          if (res instanceof Done) {
            return pure(applicativeAff)(res.value0);
          }
          ;
          if (res instanceof Loop) {
            return go2(res.value0);
          }
          ;
          throw new Error("Failed pattern match at Effect.Aff (line 102, column 7 - line 104, column 22): " + [res.constructor.name]);
        });
      };
      return go2;
    },
    Monad0: function() {
      return monadAff;
    }
  };
  var nonCanceler = $$const(pure(applicativeAff)(unit));
  var monoidCanceler = {
    mempty: nonCanceler,
    Semigroup0: function() {
      return semigroupCanceler;
    }
  };
  var never = makeAff(function(v) {
    return pure(applicativeEffect)(mempty(monoidCanceler));
  });
  var apathize = function() {
    var $54 = map(functorAff)($$const(unit));
    return function($55) {
      return $54(attempt($55));
    };
  }();
  var altParAff = {
    alt: _parAffAlt,
    Functor0: function() {
      return functorParAff;
    }
  };
  var altAff = {
    alt: function(a1) {
      return function(a2) {
        return catchError(monadErrorAff)(a1)($$const(a2));
      };
    },
    Functor0: function() {
      return functorAff;
    }
  };
  var plusAff = {
    empty: throwError(monadThrowAff)(error("Always fails")),
    Alt0: function() {
      return altAff;
    }
  };
  var plusParAff = {
    empty: parallel(parallelAff)(empty(plusAff)),
    Alt0: function() {
      return altParAff;
    }
  };

  // output/Effect.Aff.Class/index.js
  var monadAffAff = {
    liftAff: identity(categoryFn),
    MonadEffect0: function() {
      return monadEffectAff;
    }
  };

  // output/Halogen.Query.ChildQuery/index.js
  var ChildQuery = function() {
    function ChildQuery3(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    ChildQuery3.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return new ChildQuery3(value0, value1, value22);
        };
      };
    };
    return ChildQuery3;
  }();
  var unChildQueryBox = unsafeCoerce2;

  // output/Unsafe.Reference/foreign.js
  var reallyUnsafeRefEq = function(a2) {
    return function(b2) {
      return a2 === b2;
    };
  };

  // output/Unsafe.Reference/index.js
  var unsafeRefEq = reallyUnsafeRefEq;

  // output/Halogen.Subscription/index.js
  var unsubscribe = function(v) {
    return v;
  };
  var subscribe = function(v) {
    return function(k) {
      return v(function() {
        var $55 = $$void(functorEffect);
        return function($56) {
          return $55(k($56));
        };
      }());
    };
  };
  var semigroupSubscription = semigroupEffect(semigroupUnit);
  var notify = function(v) {
    return function(a2) {
      return v(a2);
    };
  };
  var monoidSubscription = monoidEffect(monoidUnit);
  var makeEmitter = coerce();
  var create = function __do() {
    var subscribers = $$new([])();
    return {
      emitter: function(k) {
        return function __do2() {
          modify_2(function(v) {
            return append(semigroupArray)(v)([k]);
          })(subscribers)();
          return modify_2(deleteBy2(unsafeRefEq)(k))(subscribers);
        };
      },
      listener: function(a2) {
        return bind(bindEffect)(read(subscribers))(traverse_(applicativeEffect)(foldableArray)(function(k) {
          return k(a2);
        }));
      }
    };
  };

  // output/Halogen.Query.HalogenM/index.js
  var SubscriptionId = function(x) {
    return x;
  };
  var ForkId = function(x) {
    return x;
  };
  var State = function() {
    function State2(value0) {
      this.value0 = value0;
    }
    ;
    State2.create = function(value0) {
      return new State2(value0);
    };
    return State2;
  }();
  var Subscribe = function() {
    function Subscribe2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Subscribe2.create = function(value0) {
      return function(value1) {
        return new Subscribe2(value0, value1);
      };
    };
    return Subscribe2;
  }();
  var Unsubscribe = function() {
    function Unsubscribe2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Unsubscribe2.create = function(value0) {
      return function(value1) {
        return new Unsubscribe2(value0, value1);
      };
    };
    return Unsubscribe2;
  }();
  var Lift2 = function() {
    function Lift3(value0) {
      this.value0 = value0;
    }
    ;
    Lift3.create = function(value0) {
      return new Lift3(value0);
    };
    return Lift3;
  }();
  var ChildQuery2 = function() {
    function ChildQuery3(value0) {
      this.value0 = value0;
    }
    ;
    ChildQuery3.create = function(value0) {
      return new ChildQuery3(value0);
    };
    return ChildQuery3;
  }();
  var Raise = function() {
    function Raise2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Raise2.create = function(value0) {
      return function(value1) {
        return new Raise2(value0, value1);
      };
    };
    return Raise2;
  }();
  var Par = function() {
    function Par2(value0) {
      this.value0 = value0;
    }
    ;
    Par2.create = function(value0) {
      return new Par2(value0);
    };
    return Par2;
  }();
  var Fork = function() {
    function Fork2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Fork2.create = function(value0) {
      return function(value1) {
        return new Fork2(value0, value1);
      };
    };
    return Fork2;
  }();
  var Kill = function() {
    function Kill2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Kill2.create = function(value0) {
      return function(value1) {
        return new Kill2(value0, value1);
      };
    };
    return Kill2;
  }();
  var GetRef = function() {
    function GetRef2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    GetRef2.create = function(value0) {
      return function(value1) {
        return new GetRef2(value0, value1);
      };
    };
    return GetRef2;
  }();
  var HalogenM = function(x) {
    return x;
  };
  var ordSubscriptionId = ordInt;
  var ordForkId = ordInt;
  var monadHalogenM = freeMonad;
  var monadStateHalogenM = {
    state: function($136) {
      return HalogenM(liftF(State.create($136)));
    },
    Monad0: function() {
      return monadHalogenM;
    }
  };
  var getRef = function(p2) {
    return liftF(/* @__PURE__ */ new GetRef(p2, identity(categoryFn)));
  };
  var functorHalogenM = freeFunctor;
  var applicativeHalogenM = freeApplicative;

  // output/Halogen.Query.HalogenQ/index.js
  var Initialize = function() {
    function Initialize2(value0) {
      this.value0 = value0;
    }
    ;
    Initialize2.create = function(value0) {
      return new Initialize2(value0);
    };
    return Initialize2;
  }();
  var Finalize = function() {
    function Finalize2(value0) {
      this.value0 = value0;
    }
    ;
    Finalize2.create = function(value0) {
      return new Finalize2(value0);
    };
    return Finalize2;
  }();
  var Receive = function() {
    function Receive2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Receive2.create = function(value0) {
      return function(value1) {
        return new Receive2(value0, value1);
      };
    };
    return Receive2;
  }();
  var Action2 = function() {
    function Action3(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Action3.create = function(value0) {
      return function(value1) {
        return new Action3(value0, value1);
      };
    };
    return Action3;
  }();
  var Query = function() {
    function Query2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Query2.create = function(value0) {
      return function(value1) {
        return new Query2(value0, value1);
      };
    };
    return Query2;
  }();

  // output/Halogen.VDom.Thunk/index.js
  var Thunk = function() {
    function Thunk2(value0, value1, value22, value32) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
    }
    ;
    Thunk2.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return function(value32) {
            return new Thunk2(value0, value1, value22, value32);
          };
        };
      };
    };
    return Thunk2;
  }();
  var unsafeThunkId = unsafeCoerce2;
  var unsafeEqThunk = function(v, v1) {
    return refEq2(v.value0, v1.value0) && (refEq2(v.value1, v1.value1) && v.value1(v.value3, v1.value3));
  };
  var thunk = function(tid, eqFn, f, a2) {
    return /* @__PURE__ */ new Thunk(tid, eqFn, f, a2);
  };
  var thunk2 = function() {
    var eqFn = function(a2, b2) {
      return refEq2(a2["_1"], b2["_1"]) && refEq2(a2["_2"], b2["_2"]);
    };
    return function(f, a2, b2) {
      return thunk(unsafeThunkId(f), eqFn, function(v) {
        return f(v["_1"])(v["_2"]);
      }, {
        "_1": a2,
        "_2": b2
      });
    };
  }();
  var thunk3 = function() {
    var eqFn = function(a2, b2) {
      return refEq2(a2["_1"], b2["_1"]) && (refEq2(a2["_2"], b2["_2"]) && refEq2(a2["_3"], b2["_3"]));
    };
    return function(f, a2, b2, c) {
      return thunk(unsafeThunkId(f), eqFn, function(v) {
        return f(v["_1"])(v["_2"])(v["_3"]);
      }, {
        "_1": a2,
        "_2": b2,
        "_3": c
      });
    };
  }();
  var runThunk = function(v) {
    return v.value2(v.value3);
  };
  var buildThunk = function(toVDom) {
    var haltThunk = function(state3) {
      return halt(state3.vdom);
    };
    var patchThunk = function(state3, t2) {
      var $43 = unsafeEqThunk(state3.thunk, t2);
      if ($43) {
        return mkStep(/* @__PURE__ */ new Step2(extract2(state3.vdom), state3, patchThunk, haltThunk));
      }
      ;
      var vdom = step2(state3.vdom, toVDom(runThunk(t2)));
      return mkStep(/* @__PURE__ */ new Step2(extract2(vdom), {
        vdom,
        thunk: t2
      }, patchThunk, haltThunk));
    };
    var renderThunk = function(spec) {
      return function(t) {
        var vdom = buildVDom(spec)(toVDom(runThunk(t)));
        return mkStep(/* @__PURE__ */ new Step2(extract2(vdom), {
          thunk: t,
          vdom
        }, patchThunk, haltThunk));
      };
    };
    return renderThunk;
  };

  // output/Halogen.Component/index.js
  var ComponentSlot = function() {
    function ComponentSlot2(value0) {
      this.value0 = value0;
    }
    ;
    ComponentSlot2.create = function(value0) {
      return new ComponentSlot2(value0);
    };
    return ComponentSlot2;
  }();
  var ThunkSlot = function() {
    function ThunkSlot2(value0) {
      this.value0 = value0;
    }
    ;
    ThunkSlot2.create = function(value0) {
      return new ThunkSlot2(value0);
    };
    return ThunkSlot2;
  }();
  var unComponentSlot = unsafeCoerce2;
  var unComponent = unsafeCoerce2;
  var mkEval = function(args) {
    return function(v) {
      if (v instanceof Initialize) {
        return voidLeft(functorHalogenM)(traverse_(applicativeHalogenM)(foldableMaybe)(args.handleAction)(args.initialize))(v.value0);
      }
      ;
      if (v instanceof Finalize) {
        return voidLeft(functorHalogenM)(traverse_(applicativeHalogenM)(foldableMaybe)(args.handleAction)(args.finalize))(v.value0);
      }
      ;
      if (v instanceof Receive) {
        return voidLeft(functorHalogenM)(traverse_(applicativeHalogenM)(foldableMaybe)(args.handleAction)(args.receive(v.value0)))(v.value1);
      }
      ;
      if (v instanceof Action2) {
        return voidLeft(functorHalogenM)(args.handleAction(v.value0))(v.value1);
      }
      ;
      if (v instanceof Query) {
        return unCoyoneda(function(g) {
          var $25 = map(functorHalogenM)(maybe(v.value1(unit))(g));
          return function($26) {
            return $25(args.handleQuery($26));
          };
        })(v.value0);
      }
      ;
      throw new Error("Failed pattern match at Halogen.Component (line 182, column 15 - line 192, column 70): " + [v.constructor.name]);
    };
  };
  var mkComponent = unsafeCoerce2;
  var defaultEval = {
    handleAction: $$const(pure(applicativeHalogenM)(unit)),
    handleQuery: $$const(pure(applicativeHalogenM)(Nothing.value)),
    receive: $$const(Nothing.value),
    initialize: Nothing.value,
    finalize: Nothing.value
  };

  // output/Halogen.HTML.Elements/index.js
  var keyedNS = function() {
    var $12 = pure(applicativeMaybe);
    return function($13) {
      return keyed($12($13));
    };
  }();
  var keyed2 = keyed(Nothing.value);
  var elementNS = function() {
    var $14 = pure(applicativeMaybe);
    return function($15) {
      return element($14($15));
    };
  }();
  var element2 = element(Nothing.value);
  var em = element2("em");
  var em_ = em([]);
  var embed = element2("embed");
  var embed_ = embed([]);
  var fieldset = element2("fieldset");
  var fieldset_ = fieldset([]);
  var figcaption = element2("figcaption");
  var figcaption_ = figcaption([]);
  var figure = element2("figure");
  var figure_ = figure([]);
  var footer = element2("footer");
  var footer_ = footer([]);
  var form = element2("form");
  var form_ = form([]);
  var h1 = element2("h1");
  var h1_ = h1([]);
  var h2 = element2("h2");
  var h2_ = h2([]);
  var h3 = element2("h3");
  var h3_ = h3([]);
  var h4 = element2("h4");
  var h4_ = h4([]);
  var h5 = element2("h5");
  var h5_ = h5([]);
  var h6 = element2("h6");
  var h6_ = h6([]);
  var head2 = element2("head");
  var head_ = head2([]);
  var header = element2("header");
  var header_ = header([]);
  var hr = function(props) {
    return element2("hr")(props)([]);
  };
  var hr_ = hr([]);
  var html = element2("html");
  var html_ = html([]);
  var i = element2("i");
  var i_ = i([]);
  var ins = element2("ins");
  var ins_ = ins([]);
  var kbd = element2("kbd");
  var kbd_ = kbd([]);
  var label = element2("label");
  var label_ = label([]);
  var legend = element2("legend");
  var legend_ = legend([]);
  var li = element2("li");
  var li_ = li([]);
  var main = element2("main");
  var main_ = main([]);
  var map2 = element2("map");
  var map_2 = map2([]);
  var mark = element2("mark");
  var mark_ = mark([]);
  var menu = element2("menu");
  var menu_ = menu([]);
  var menuitem = element2("menuitem");
  var menuitem_ = menuitem([]);
  var meter = element2("meter");
  var meter_ = meter([]);
  var nav = element2("nav");
  var nav_ = nav([]);
  var noscript = element2("noscript");
  var noscript_ = noscript([]);
  var object = element2("object");
  var object_ = object([]);
  var ol = element2("ol");
  var ol_ = ol([]);
  var optgroup = element2("optgroup");
  var optgroup_ = optgroup([]);
  var option = element2("option");
  var option_ = option([]);
  var output = element2("output");
  var output_ = output([]);
  var p = element2("p");
  var p_ = p([]);
  var pre = element2("pre");
  var pre_ = pre([]);
  var progress = element2("progress");
  var progress_ = progress([]);
  var q = element2("q");
  var q_ = q([]);
  var rp = element2("rp");
  var rp_ = rp([]);
  var rt = element2("rt");
  var rt_ = rt([]);
  var ruby = element2("ruby");
  var ruby_ = ruby([]);
  var samp = element2("samp");
  var samp_ = samp([]);
  var script = element2("script");
  var script_ = script([]);
  var section = element2("section");
  var section_ = section([]);
  var select = element2("select");
  var select_ = select([]);
  var small = element2("small");
  var small_ = small([]);
  var span2 = element2("span");
  var span_ = span2([]);
  var strong = element2("strong");
  var strong_ = strong([]);
  var style = element2("style");
  var style_ = style([]);
  var sub2 = element2("sub");
  var sub_ = sub2([]);
  var summary = element2("summary");
  var summary_ = summary([]);
  var sup = element2("sup");
  var sup_ = sup([]);
  var table = element2("table");
  var table_ = table([]);
  var tbody = element2("tbody");
  var tbody_ = tbody([]);
  var td = element2("td");
  var td_ = td([]);
  var tfoot = element2("tfoot");
  var tfoot_ = tfoot([]);
  var th = element2("th");
  var th_ = th([]);
  var thead = element2("thead");
  var thead_ = thead([]);
  var time = element2("time");
  var time_ = time([]);
  var title = element2("title");
  var title_ = title([]);
  var tr = element2("tr");
  var tr_ = tr([]);
  var u = element2("u");
  var u_ = u([]);
  var ul = element2("ul");
  var ul_ = ul([]);
  var $$var = element2("var");
  var var_ = $$var([]);
  var video = element2("video");
  var video_ = video([]);
  var dt = element2("dt");
  var dt_ = dt([]);
  var dl = element2("dl");
  var dl_ = dl([]);
  var div2 = element2("div");
  var div_ = div2([]);
  var dialog = element2("dialog");
  var dialog_ = dialog([]);
  var dfn = element2("dfn");
  var dfn_ = dfn([]);
  var details = element2("details");
  var details_ = details([]);
  var del = element2("del");
  var del_ = del([]);
  var dd = element2("dd");
  var dd_ = dd([]);
  var datalist = element2("datalist");
  var datalist_ = datalist([]);
  var colgroup = element2("colgroup");
  var colgroup_ = colgroup([]);
  var code = element2("code");
  var code_ = code([]);
  var cite = element2("cite");
  var cite_ = cite([]);
  var caption = element2("caption");
  var caption_ = caption([]);
  var button = element2("button");
  var button_ = button([]);
  var br = function(props) {
    return element2("br")(props)([]);
  };
  var br_ = br([]);
  var body = element2("body");
  var body_ = body([]);
  var blockquote = element2("blockquote");
  var blockquote_ = blockquote([]);
  var bdo = element2("bdo");
  var bdo_ = bdo([]);
  var bdi = element2("bdi");
  var bdi_ = bdi([]);
  var b = element2("b");
  var b_ = b([]);
  var audio = element2("audio");
  var audio_ = audio([]);
  var aside = element2("aside");
  var aside_ = aside([]);
  var article = element2("article");
  var article_ = article([]);
  var address = element2("address");
  var address_ = address([]);
  var abbr = element2("abbr");
  var abbr_ = abbr([]);
  var a = element2("a");
  var a_ = a([]);

  // output/Control.Monad.Except/index.js
  var withExcept = withExceptT(functorIdentity);
  var runExcept = function() {
    var $0 = unwrap();
    return function($1) {
      return $0(runExceptT($1));
    };
  }();

  // output/Foreign.Index/foreign.js
  var unsafeReadPropImpl = function(f, s, key, value13) {
    return value13 == null ? f : s(value13[key]);
  };

  // output/Foreign.Index/index.js
  var unsafeReadProp = function(dictMonad) {
    return function(k) {
      return function(value13) {
        return unsafeReadPropImpl(fail(dictMonad)(/* @__PURE__ */ new TypeMismatch("object", typeOf(value13))), pure(applicativeExceptT(dictMonad)), k, value13);
      };
    };
  };
  var readProp = function(dictMonad) {
    return unsafeReadProp(dictMonad);
  };

  // output/Web.Clipboard.ClipboardEvent.EventTypes/index.js
  var paste = "paste";
  var cut = "cut";
  var copy = "copy";

  // output/Web.Event.Event/foreign.js
  var _currentTarget = function(e2) {
    return e2.currentTarget;
  };

  // output/Data.Enum/foreign.js
  var toCharCode = function(c) {
    return c.charCodeAt(0);
  };
  var fromCharCode = function(c) {
    return String.fromCharCode(c);
  };

  // output/Data.Enum/index.js
  var enumUnit = {
    succ: $$const(Nothing.value),
    pred: $$const(Nothing.value),
    Ord0: function() {
      return ordUnit;
    }
  };
  var defaultSucc = function(toEnum$prime) {
    return function(fromEnum$prime) {
      return function(a2) {
        return toEnum$prime(fromEnum$prime(a2) + 1 | 0);
      };
    };
  };
  var defaultPred = function(toEnum$prime) {
    return function(fromEnum$prime) {
      return function(a2) {
        return toEnum$prime(fromEnum$prime(a2) - 1 | 0);
      };
    };
  };
  var charToEnum = function(v) {
    if (v >= bottom(boundedInt) && v <= top(boundedInt)) {
      return /* @__PURE__ */ new Just(fromCharCode(v));
    }
    ;
    return Nothing.value;
  };
  var enumChar = {
    succ: defaultSucc(charToEnum)(toCharCode),
    pred: defaultPred(charToEnum)(toCharCode),
    Ord0: function() {
      return ordChar;
    }
  };
  var boundedEnumUnit = {
    cardinality: 1,
    toEnum: function(v) {
      if (v === 0) {
        return /* @__PURE__ */ new Just(unit);
      }
      ;
      return Nothing.value;
    },
    fromEnum: $$const(0),
    Bounded0: function() {
      return boundedUnit;
    },
    Enum1: function() {
      return enumUnit;
    }
  };
  var boundedEnumChar = {
    cardinality: toCharCode(top(boundedChar)) - toCharCode(bottom(boundedChar)) | 0,
    toEnum: charToEnum,
    fromEnum: toCharCode,
    Bounded0: function() {
      return boundedChar;
    },
    Enum1: function() {
      return enumChar;
    }
  };

  // output/Web.Event.EventPhase/index.js
  var None = function() {
    function None3() {
    }
    ;
    None3.value = new None3();
    return None3;
  }();
  var Capturing = function() {
    function Capturing2() {
    }
    ;
    Capturing2.value = new Capturing2();
    return Capturing2;
  }();
  var AtTarget = function() {
    function AtTarget2() {
    }
    ;
    AtTarget2.value = new AtTarget2();
    return AtTarget2;
  }();
  var Bubbling = function() {
    function Bubbling2() {
    }
    ;
    Bubbling2.value = new Bubbling2();
    return Bubbling2;
  }();
  var toEnumEventPhase = function(v) {
    if (v === 0) {
      return /* @__PURE__ */ new Just(None.value);
    }
    ;
    if (v === 1) {
      return /* @__PURE__ */ new Just(Capturing.value);
    }
    ;
    if (v === 2) {
      return /* @__PURE__ */ new Just(AtTarget.value);
    }
    ;
    if (v === 3) {
      return /* @__PURE__ */ new Just(Bubbling.value);
    }
    ;
    return Nothing.value;
  };
  var fromEnumEventPhase = function(v) {
    if (v instanceof None) {
      return 0;
    }
    ;
    if (v instanceof Capturing) {
      return 1;
    }
    ;
    if (v instanceof AtTarget) {
      return 2;
    }
    ;
    if (v instanceof Bubbling) {
      return 3;
    }
    ;
    throw new Error("Failed pattern match at Web.Event.EventPhase (line 40, column 3 - line 44, column 18): " + [v.constructor.name]);
  };
  var eqEventPhase = {
    eq: function(x) {
      return function(y) {
        if (x instanceof None && y instanceof None) {
          return true;
        }
        ;
        if (x instanceof Capturing && y instanceof Capturing) {
          return true;
        }
        ;
        if (x instanceof AtTarget && y instanceof AtTarget) {
          return true;
        }
        ;
        if (x instanceof Bubbling && y instanceof Bubbling) {
          return true;
        }
        ;
        return false;
      };
    }
  };
  var ordEventPhase = {
    compare: function(x) {
      return function(y) {
        if (x instanceof None && y instanceof None) {
          return EQ.value;
        }
        ;
        if (x instanceof None) {
          return LT.value;
        }
        ;
        if (y instanceof None) {
          return GT.value;
        }
        ;
        if (x instanceof Capturing && y instanceof Capturing) {
          return EQ.value;
        }
        ;
        if (x instanceof Capturing) {
          return LT.value;
        }
        ;
        if (y instanceof Capturing) {
          return GT.value;
        }
        ;
        if (x instanceof AtTarget && y instanceof AtTarget) {
          return EQ.value;
        }
        ;
        if (x instanceof AtTarget) {
          return LT.value;
        }
        ;
        if (y instanceof AtTarget) {
          return GT.value;
        }
        ;
        if (x instanceof Bubbling && y instanceof Bubbling) {
          return EQ.value;
        }
        ;
        throw new Error("Failed pattern match at Web.Event.EventPhase (line 14, column 1 - line 14, column 48): " + [x.constructor.name, y.constructor.name]);
      };
    },
    Eq0: function() {
      return eqEventPhase;
    }
  };
  var enumEventPhase = {
    succ: defaultSucc(toEnumEventPhase)(fromEnumEventPhase),
    pred: defaultPred(toEnumEventPhase)(fromEnumEventPhase),
    Ord0: function() {
      return ordEventPhase;
    }
  };
  var boundedEventPhase = {
    bottom: None.value,
    top: Bubbling.value,
    Ord0: function() {
      return ordEventPhase;
    }
  };

  // output/Web.Event.Event/index.js
  var currentTarget = function($5) {
    return toMaybe(_currentTarget($5));
  };

  // output/Web.HTML.Event.DragEvent.EventTypes/index.js
  var drop3 = "drop";
  var dragstart = "dragstart";
  var dragover = "dragover";
  var dragleave = "dragleave";
  var dragexit = "dragexit";
  var dragenter = "dragenter";
  var dragend = "dragend";
  var drag = "drag";

  // output/Web.HTML.Event.EventTypes/index.js
  var select2 = "select";
  var load = "load";
  var invalid = "invalid";
  var input = "input";
  var error2 = "error";
  var domcontentloaded = "DOMContentLoaded";
  var change = "change";
  var blur = "blur";

  // output/Web.HTML.HTMLInputElement/foreign.js
  var _form = function(input3) {
    return function() {
      return input3.form;
    };
  };
  var _files = function(input3) {
    return function() {
      return input3.files;
    };
  };
  var _list = function(input3) {
    return function() {
      return input3.list;
    };
  };
  var stepUpBy = function(n) {
    return function(input3) {
      return function() {
        input3.stepUp(n);
      };
    };
  };
  var stepDownBy = function(n) {
    return function(input3) {
      return function() {
        input3.stepDown(n);
      };
    };
  };

  // output/Web.HTML.SelectionMode/index.js
  var Preserve = function() {
    function Preserve2() {
    }
    ;
    Preserve2.value = new Preserve2();
    return Preserve2;
  }();
  var Select = function() {
    function Select2() {
    }
    ;
    Select2.value = new Select2();
    return Select2;
  }();
  var Start = function() {
    function Start2() {
    }
    ;
    Start2.value = new Start2();
    return Start2;
  }();
  var End = function() {
    function End2() {
    }
    ;
    End2.value = new End2();
    return End2;
  }();

  // output/Web.HTML.HTMLInputElement/index.js
  var stepUp$prime = stepUpBy;
  var stepUp = stepUp$prime(1);
  var stepDown$prime = stepDownBy;
  var stepDown = stepDown$prime(1);
  var list = function() {
    var $0 = map(functorEffect)(toMaybe);
    return function($1) {
      return $0(_list($1));
    };
  }();
  var fromParentNode2 = unsafeReadProtoTagged("HTMLInputElement");
  var fromNonDocumentTypeChildNode2 = unsafeReadProtoTagged("HTMLInputElement");
  var fromNode2 = unsafeReadProtoTagged("HTMLInputElement");
  var fromHTMLElement = unsafeReadProtoTagged("HTMLInputElement");
  var fromEventTarget2 = unsafeReadProtoTagged("HTMLInputElement");
  var fromElement = unsafeReadProtoTagged("HTMLInputElement");
  var fromChildNode2 = unsafeReadProtoTagged("HTMLInputElement");
  var form2 = function() {
    var $2 = map(functorEffect)(toMaybe);
    return function($3) {
      return $2(_form($3));
    };
  }();
  var files = function() {
    var $4 = map(functorEffect)(toMaybe);
    return function($5) {
      return $4(_files($5));
    };
  }();

  // output/Web.UIEvent.FocusEvent.EventTypes/index.js
  var focusout = "focusout";
  var focusin = "focusin";
  var focus = "focus";

  // output/Web.UIEvent.KeyboardEvent.EventTypes/index.js
  var keyup = "keyup";
  var keydown = "keydown";

  // output/Web.UIEvent.MouseEvent.EventTypes/index.js
  var mouseup = "mouseup";
  var mouseover = "mouseover";
  var mouseout = "mouseout";
  var mousemove = "mousemove";
  var mouseleave = "mouseleave";
  var mouseenter = "mouseenter";
  var mousedown = "mousedown";
  var dblclick = "dblclick";
  var click = "click";

  // output/Web.UIEvent.WheelEvent.EventTypes/index.js
  var wheel = "wheel";

  // output/Halogen.HTML.Events/index.js
  var wheelHandler = unsafeCoerce2;
  var touchHandler = unsafeCoerce2;
  var mouseHandler = unsafeCoerce2;
  var keyHandler = unsafeCoerce2;
  var handler$prime = function(et) {
    return function(f) {
      return handler(et)(function(ev) {
        return map(functorMaybe)(Action.create)(f(ev));
      });
    };
  };
  var handler2 = function(et) {
    return function(f) {
      return handler(et)(function(ev) {
        return /* @__PURE__ */ new Just(/* @__PURE__ */ new Action(f(ev)));
      });
    };
  };
  var onAbort = handler2("abort");
  var onChange = handler2(change);
  var onClick = function() {
    var $1 = handler2(click);
    return function($2) {
      return $1(mouseHandler($2));
    };
  }();
  var onDoubleClick = function() {
    var $3 = handler2(dblclick);
    return function($4) {
      return $3(mouseHandler($4));
    };
  }();
  var onError = handler2(error2);
  var onInput = handler2(input);
  var onInvalid = handler2(invalid);
  var onKeyDown = function() {
    var $9 = handler2(keydown);
    return function($10) {
      return $9(keyHandler($10));
    };
  }();
  var onKeyUp = function() {
    var $11 = handler2(keyup);
    return function($12) {
      return $11(keyHandler($12));
    };
  }();
  var onLoad = handler2(load);
  var onMouseDown = function() {
    var $13 = handler2(mousedown);
    return function($14) {
      return $13(mouseHandler($14));
    };
  }();
  var onMouseEnter = function() {
    var $15 = handler2(mouseenter);
    return function($16) {
      return $15(mouseHandler($16));
    };
  }();
  var onMouseLeave = function() {
    var $17 = handler2(mouseleave);
    return function($18) {
      return $17(mouseHandler($18));
    };
  }();
  var onMouseMove = function() {
    var $19 = handler2(mousemove);
    return function($20) {
      return $19(mouseHandler($20));
    };
  }();
  var onMouseOut = function() {
    var $21 = handler2(mouseout);
    return function($22) {
      return $21(mouseHandler($22));
    };
  }();
  var onMouseOver = function() {
    var $23 = handler2(mouseover);
    return function($24) {
      return $23(mouseHandler($24));
    };
  }();
  var onMouseUp = function() {
    var $25 = handler2(mouseup);
    return function($26) {
      return $25(mouseHandler($26));
    };
  }();
  var onReset = handler2("reset");
  var onResize = handler2("resize");
  var onScroll = handler2("scroll");
  var onSelect = handler2(select2);
  var onSubmit = handler2("submit");
  var onTouchCancel = function() {
    var $27 = handler2("touchcancel");
    return function($28) {
      return $27(touchHandler($28));
    };
  }();
  var onTouchEnd = function() {
    var $29 = handler2("touchend");
    return function($30) {
      return $29(touchHandler($30));
    };
  }();
  var onTouchEnter = function() {
    var $31 = handler2("touchenter");
    return function($32) {
      return $31(touchHandler($32));
    };
  }();
  var onTouchLeave = function() {
    var $33 = handler2("touchleave");
    return function($34) {
      return $33(touchHandler($34));
    };
  }();
  var onTouchMove = function() {
    var $35 = handler2("touchmove");
    return function($36) {
      return $35(touchHandler($36));
    };
  }();
  var onTouchStart = function() {
    var $37 = handler2("touchstart");
    return function($38) {
      return $37(touchHandler($38));
    };
  }();
  var onTransitionEnd = handler2("transitionend");
  var onWheel = function() {
    var $39 = handler2(wheel);
    return function($40) {
      return $39(wheelHandler($40));
    };
  }();
  var focusHandler = unsafeCoerce2;
  var onBlur = function() {
    var $41 = handler2(blur);
    return function($42) {
      return $41(focusHandler($42));
    };
  }();
  var onFocus = function() {
    var $43 = handler2(focus);
    return function($44) {
      return $43(focusHandler($44));
    };
  }();
  var onFocusIn = function() {
    var $45 = handler2(focusin);
    return function($46) {
      return $45(focusHandler($46));
    };
  }();
  var onFocusOut = function() {
    var $47 = handler2(focusout);
    return function($48) {
      return $47(focusHandler($48));
    };
  }();
  var dragHandler = unsafeCoerce2;
  var onDrag = function() {
    var $49 = handler2(drag);
    return function($50) {
      return $49(dragHandler($50));
    };
  }();
  var onDragEnd = function() {
    var $51 = handler2(dragend);
    return function($52) {
      return $51(dragHandler($52));
    };
  }();
  var onDragEnter = function() {
    var $53 = handler2(dragenter);
    return function($54) {
      return $53(dragHandler($54));
    };
  }();
  var onDragExit = function() {
    var $55 = handler2(dragexit);
    return function($56) {
      return $55(dragHandler($56));
    };
  }();
  var onDragLeave = function() {
    var $57 = handler2(dragleave);
    return function($58) {
      return $57(dragHandler($58));
    };
  }();
  var onDragOver = function() {
    var $59 = handler2(dragover);
    return function($60) {
      return $59(dragHandler($60));
    };
  }();
  var onDragStart = function() {
    var $61 = handler2(dragstart);
    return function($62) {
      return $61(dragHandler($62));
    };
  }();
  var onDrop = function() {
    var $63 = handler2(drop3);
    return function($64) {
      return $63(dragHandler($64));
    };
  }();
  var clipboardHandler = unsafeCoerce2;
  var onCopy = function() {
    var $65 = handler2(copy);
    return function($66) {
      return $65(clipboardHandler($66));
    };
  }();
  var onCut = function() {
    var $67 = handler2(cut);
    return function($68) {
      return $67(clipboardHandler($68));
    };
  }();
  var onPaste = function() {
    var $69 = handler2(paste);
    return function($70) {
      return $69(clipboardHandler($70));
    };
  }();
  var addForeignPropHandler = function(key) {
    return function(prop3) {
      return function(reader) {
        return function(f) {
          var go2 = function(a2) {
            return composeKleisliFlipped(bindExceptT(monadIdentity))(reader)(readProp(monadIdentity)(prop3))(unsafeToForeign(a2));
          };
          return handler$prime(key)(composeKleisli(bindMaybe)(currentTarget)(function(e2) {
            return either($$const(Nothing.value))(function($71) {
              return Just.create(f($71));
            })(runExcept(go2(e2)));
          }));
        };
      };
    };
  };
  var onChecked = addForeignPropHandler(change)("checked")(readBoolean(monadIdentity));
  var onSelectedIndexChange = addForeignPropHandler(change)("selectedIndex")(readInt(monadIdentity));
  var onValueChange = addForeignPropHandler(change)("value")(readString(monadIdentity));
  var onValueInput = addForeignPropHandler(input)("value")(readString(monadIdentity));

  // output/App.Button/index.js
  var Increment = function() {
    function Increment2() {
    }
    ;
    Increment2.value = new Increment2();
    return Increment2;
  }();
  var render = function(state3) {
    return div_([p_([text("You clicked " + (show(showInt)(state3.count) + " times"))]), button([onClick(function(v) {
      return Increment.value;
    })])([text("Click me")])]);
  };
  var handleAction = function(v) {
    return modify_(monadStateHalogenM)(function(st) {
      var $6 = {};
      for (var $7 in st) {
        if ({}.hasOwnProperty.call(st, $7)) {
          $6[$7] = st[$7];
        }
        ;
      }
      ;
      $6.count = st.count + 1 | 0;
      return $6;
    });
  };
  var component = mkComponent({
    initialState: function(v) {
      return {
        count: 0
      };
    },
    render,
    "eval": mkEval({
      handleAction,
      handleQuery: defaultEval.handleQuery,
      receive: defaultEval.receive,
      initialize: defaultEval.initialize,
      finalize: defaultEval.finalize
    })
  });

  // output/Web.HTML/foreign.js
  function _window() {
    return window;
  }

  // output/Web.HTML.HTMLAnchorElement/index.js
  var fromParentNode3 = unsafeReadProtoTagged("HTMLAnchorElement");
  var fromNonDocumentTypeChildNode3 = unsafeReadProtoTagged("HTMLAnchorElement");
  var fromNode3 = unsafeReadProtoTagged("HTMLAnchorElement");
  var fromHTMLElement2 = unsafeReadProtoTagged("HTMLAnchorElement");
  var fromEventTarget3 = unsafeReadProtoTagged("HTMLAnchorElement");
  var fromElement2 = unsafeReadProtoTagged("HTMLAnchorElement");
  var fromChildNode3 = unsafeReadProtoTagged("HTMLAnchorElement");

  // output/Web.HTML.HTMLAreaElement/index.js
  var fromParentNode4 = unsafeReadProtoTagged("HTMLAreaElement");
  var fromNonDocumentTypeChildNode4 = unsafeReadProtoTagged("HTMLAreaElement");
  var fromNode4 = unsafeReadProtoTagged("HTMLAreaElement");
  var fromHTMLElement3 = unsafeReadProtoTagged("HTMLAreaElement");
  var fromEventTarget4 = unsafeReadProtoTagged("HTMLAreaElement");
  var fromElement3 = unsafeReadProtoTagged("HTMLAreaElement");
  var fromChildNode4 = unsafeReadProtoTagged("HTMLAreaElement");

  // output/Web.HTML.HTMLAudioElement/index.js
  var fromParentNode5 = unsafeReadProtoTagged("HTMLAudioElement");
  var fromNonDocumentTypeChildNode5 = unsafeReadProtoTagged("HTMLAudioElement");
  var fromNode5 = unsafeReadProtoTagged("HTMLAudioElement");
  var fromHTMLMediaElement = unsafeReadProtoTagged("HTMLAudioElement");
  var fromHTMLElement4 = unsafeReadProtoTagged("HTMLAudioElement");
  var fromEventTarget5 = unsafeReadProtoTagged("HTMLAudioElement");
  var fromElement4 = unsafeReadProtoTagged("HTMLAudioElement");
  var fromChildNode5 = unsafeReadProtoTagged("HTMLAudioElement");

  // output/Web.HTML.HTMLBRElement/index.js
  var fromParentNode6 = unsafeReadProtoTagged("HTMLBRElement");
  var fromNonDocumentTypeChildNode6 = unsafeReadProtoTagged("HTMLBRElement");
  var fromNode6 = unsafeReadProtoTagged("HTMLBRElement");
  var fromHTMLElement5 = unsafeReadProtoTagged("HTMLBRElement");
  var fromEventTarget6 = unsafeReadProtoTagged("HTMLBRElement");
  var fromElement5 = unsafeReadProtoTagged("HTMLBRElement");
  var fromChildNode6 = unsafeReadProtoTagged("HTMLBRElement");

  // output/Web.HTML.HTMLBaseElement/index.js
  var fromParentNode7 = unsafeReadProtoTagged("HTMLBaseElement");
  var fromNonDocumentTypeChildNode7 = unsafeReadProtoTagged("HTMLBaseElement");
  var fromNode7 = unsafeReadProtoTagged("HTMLBaseElement");
  var fromHTMLElement6 = unsafeReadProtoTagged("HTMLBaseElement");
  var fromEventTarget7 = unsafeReadProtoTagged("HTMLBaseElement");
  var fromElement6 = unsafeReadProtoTagged("HTMLBaseElement");
  var fromChildNode7 = unsafeReadProtoTagged("HTMLBaseElement");

  // output/Web.HTML.HTMLBodyElement/index.js
  var fromParentNode8 = unsafeReadProtoTagged("HTMLBodyElement");
  var fromNonDocumentTypeChildNode8 = unsafeReadProtoTagged("HTMLBodyElement");
  var fromNode8 = unsafeReadProtoTagged("HTMLBodyElement");
  var fromHTMLElement7 = unsafeReadProtoTagged("HTMLBodyElement");
  var fromEventTarget8 = unsafeReadProtoTagged("HTMLBodyElement");
  var fromElement7 = unsafeReadProtoTagged("HTMLBodyElement");
  var fromChildNode8 = unsafeReadProtoTagged("HTMLBodyElement");

  // output/Web.HTML.HTMLButtonElement/foreign.js
  var _form2 = function(button2) {
    return function() {
      return button2.form;
    };
  };

  // output/Web.HTML.HTMLButtonElement/index.js
  var fromParentNode9 = unsafeReadProtoTagged("HTMLButtonElement");
  var fromNonDocumentTypeChildNode9 = unsafeReadProtoTagged("HTMLButtonElement");
  var fromNode9 = unsafeReadProtoTagged("HTMLButtonElement");
  var fromHTMLElement8 = unsafeReadProtoTagged("HTMLButtonElement");
  var fromEventTarget9 = unsafeReadProtoTagged("HTMLButtonElement");
  var fromElement8 = unsafeReadProtoTagged("HTMLButtonElement");
  var fromChildNode9 = unsafeReadProtoTagged("HTMLButtonElement");
  var form3 = function() {
    var $0 = map(functorEffect)(toMaybe);
    return function($1) {
      return $0(_form2($1));
    };
  }();

  // output/Web.HTML.HTMLCanvasElement/index.js
  var fromParentNode10 = unsafeReadProtoTagged("HTMLCanvasElement");
  var fromNonDocumentTypeChildNode10 = unsafeReadProtoTagged("HTMLCanvasElement");
  var fromNode10 = unsafeReadProtoTagged("HTMLCanvasElement");
  var fromHTMLElement9 = unsafeReadProtoTagged("HTMLCanvasElement");
  var fromEventTarget10 = unsafeReadProtoTagged("HTMLCanvasElement");
  var fromElement9 = unsafeReadProtoTagged("HTMLCanvasElement");
  var fromChildNode10 = unsafeReadProtoTagged("HTMLCanvasElement");

  // output/Web.HTML.HTMLDListElement/index.js
  var fromParentNode11 = unsafeReadProtoTagged("HTMLDListElement");
  var fromNonDocumentTypeChildNode11 = unsafeReadProtoTagged("HTMLDListElement");
  var fromNode11 = unsafeReadProtoTagged("HTMLDListElement");
  var fromHTMLElement10 = unsafeReadProtoTagged("HTMLDListElement");
  var fromEventTarget11 = unsafeReadProtoTagged("HTMLDListElement");
  var fromElement10 = unsafeReadProtoTagged("HTMLDListElement");
  var fromChildNode11 = unsafeReadProtoTagged("HTMLDListElement");

  // output/Web.HTML.HTMLDataElement/index.js
  var fromParentNode12 = unsafeReadProtoTagged("HTMLDataElement");
  var fromNonDocumentTypeChildNode12 = unsafeReadProtoTagged("HTMLDataElement");
  var fromNode12 = unsafeReadProtoTagged("HTMLDataElement");
  var fromHTMLElement11 = unsafeReadProtoTagged("HTMLDataElement");
  var fromEventTarget12 = unsafeReadProtoTagged("HTMLDataElement");
  var fromElement11 = unsafeReadProtoTagged("HTMLDataElement");
  var fromChildNode12 = unsafeReadProtoTagged("HTMLDataElement");

  // output/Web.HTML.HTMLDataListElement/index.js
  var fromParentNode13 = unsafeReadProtoTagged("HTMLDataListElement");
  var fromNonDocumentTypeChildNode13 = unsafeReadProtoTagged("HTMLDataListElement");
  var fromNode13 = unsafeReadProtoTagged("HTMLDataListElement");
  var fromHTMLElement12 = unsafeReadProtoTagged("HTMLDataListElement");
  var fromEventTarget13 = unsafeReadProtoTagged("HTMLDataListElement");
  var fromElement12 = unsafeReadProtoTagged("HTMLDataListElement");
  var fromChildNode13 = unsafeReadProtoTagged("HTMLDataListElement");

  // output/Web.HTML.HTMLDivElement/index.js
  var fromParentNode14 = unsafeReadProtoTagged("HTMLDivElement");
  var fromNonDocumentTypeChildNode14 = unsafeReadProtoTagged("HTMLDivElement");
  var fromNode14 = unsafeReadProtoTagged("HTMLDivElement");
  var fromHTMLElement13 = unsafeReadProtoTagged("HTMLDivElement");
  var fromEventTarget14 = unsafeReadProtoTagged("HTMLDivElement");
  var fromElement13 = unsafeReadProtoTagged("HTMLDivElement");
  var fromChildNode14 = unsafeReadProtoTagged("HTMLDivElement");

  // output/Web.HTML.HTMLDocument/foreign.js
  var _head = function(doc) {
    return function() {
      return doc.head;
    };
  };
  var _body = function(doc) {
    return function() {
      return doc.body;
    };
  };
  var _readyState = function(doc) {
    return function() {
      return doc.readyState;
    };
  };
  var _activeElement = function(doc) {
    return function() {
      return doc.activeElement;
    };
  };
  var _currentScript = function(doc) {
    return function() {
      return doc.currentScript;
    };
  };

  // output/Web.HTML.HTMLDocument.ReadyState/index.js
  var Loading = function() {
    function Loading4() {
    }
    ;
    Loading4.value = new Loading4();
    return Loading4;
  }();
  var Interactive = function() {
    function Interactive2() {
    }
    ;
    Interactive2.value = new Interactive2();
    return Interactive2;
  }();
  var Complete = function() {
    function Complete2() {
    }
    ;
    Complete2.value = new Complete2();
    return Complete2;
  }();
  var parse = function(v) {
    if (v === "loading") {
      return /* @__PURE__ */ new Just(Loading.value);
    }
    ;
    if (v === "interactive") {
      return /* @__PURE__ */ new Just(Interactive.value);
    }
    ;
    if (v === "complete") {
      return /* @__PURE__ */ new Just(Complete.value);
    }
    ;
    return Nothing.value;
  };

  // output/Web.HTML.HTMLDocument/index.js
  var toParentNode = unsafeCoerce2;
  var toDocument = unsafeCoerce2;
  var readyState = function() {
    var $0 = map(functorEffect)(function() {
      var $2 = fromMaybe(Loading.value);
      return function($3) {
        return $2(parse($3));
      };
    }());
    return function($1) {
      return $0(_readyState($1));
    };
  }();
  var head3 = function() {
    var $4 = map(functorEffect)(toMaybe);
    return function($5) {
      return $4(_head($5));
    };
  }();
  var fromParentNode15 = unsafeReadProtoTagged("HTMLDocument");
  var fromNonElementParentNode = unsafeReadProtoTagged("HTMLDocument");
  var fromNode15 = unsafeReadProtoTagged("HTMLDocument");
  var fromEventTarget15 = unsafeReadProtoTagged("HTMLDocument");
  var fromDocument = unsafeReadProtoTagged("HTMLDocument");
  var currentScript = function() {
    var $6 = map(functorEffect)(toMaybe);
    return function($7) {
      return $6(_currentScript($7));
    };
  }();
  var body2 = function() {
    var $8 = map(functorEffect)(toMaybe);
    return function($9) {
      return $8(_body($9));
    };
  }();
  var activeElement = function() {
    var $10 = map(functorEffect)(toMaybe);
    return function($11) {
      return $10(_activeElement($11));
    };
  }();

  // output/Web.HTML.HTMLElement/foreign.js
  var _read = function(nothing, just, value13) {
    var tag = Object.prototype.toString.call(value13);
    if (tag.indexOf("[object HTML") === 0 && tag.indexOf("Element]") === tag.length - 8) {
      return just(value13);
    } else {
      return nothing;
    }
  };
  var _offsetParent = function(el) {
    return function() {
      return el.offsetParent;
    };
  };

  // output/Web.HTML.HTMLElement/index.js
  var toNode2 = unsafeCoerce2;
  var offsetParent = function() {
    var $0 = map(functorEffect)(toMaybe);
    return function($1) {
      return $0(_offsetParent($1));
    };
  }();
  var fromElement14 = function(x) {
    return _read(Nothing.value, Just.create, x);
  };

  // output/Web.HTML.HTMLEmbedElement/index.js
  var fromParentNode16 = unsafeReadProtoTagged("HTMLEmbedElement");
  var fromNonDocumentTypeChildNode15 = unsafeReadProtoTagged("HTMLEmbedElement");
  var fromNode16 = unsafeReadProtoTagged("HTMLEmbedElement");
  var fromHTMLElement14 = unsafeReadProtoTagged("HTMLEmbedElement");
  var fromEventTarget16 = unsafeReadProtoTagged("HTMLEmbedElement");
  var fromElement15 = unsafeReadProtoTagged("HTMLEmbedElement");
  var fromChildNode15 = unsafeReadProtoTagged("HTMLEmbedElement");

  // output/Web.HTML.HTMLFieldSetElement/foreign.js
  var _form3 = function(fieldset2) {
    return function() {
      return fieldset2.form;
    };
  };

  // output/Web.HTML.HTMLFieldSetElement/index.js
  var fromParentNode17 = unsafeReadProtoTagged("HTMLFieldSetElement");
  var fromNonDocumentTypeChildNode16 = unsafeReadProtoTagged("HTMLFieldSetElement");
  var fromNode17 = unsafeReadProtoTagged("HTMLFieldSetElement");
  var fromHTMLElement15 = unsafeReadProtoTagged("HTMLFieldSetElement");
  var fromEventTarget17 = unsafeReadProtoTagged("HTMLFieldSetElement");
  var fromElement16 = unsafeReadProtoTagged("HTMLFieldSetElement");
  var fromChildNode16 = unsafeReadProtoTagged("HTMLFieldSetElement");
  var form4 = function() {
    var $0 = map(functorEffect)(toMaybe);
    return function($1) {
      return $0(_form3($1));
    };
  }();

  // output/Web.HTML.HTMLFormElement/index.js
  var fromParentNode18 = unsafeReadProtoTagged("HTMLFormElement");
  var fromNonDocumentTypeChildNode17 = unsafeReadProtoTagged("HTMLFormElement");
  var fromNode18 = unsafeReadProtoTagged("HTMLFormElement");
  var fromHTMLElement16 = unsafeReadProtoTagged("HTMLFormElement");
  var fromEventTarget18 = unsafeReadProtoTagged("HTMLFormElement");
  var fromElement17 = unsafeReadProtoTagged("HTMLFormElement");
  var fromChildNode17 = unsafeReadProtoTagged("HTMLFormElement");

  // output/Web.HTML.HTMLHRElement/index.js
  var fromParentNode19 = unsafeReadProtoTagged("HTMLHRElement");
  var fromNonDocumentTypeChildNode18 = unsafeReadProtoTagged("HTMLHRElement");
  var fromNode19 = unsafeReadProtoTagged("HTMLHRElement");
  var fromHTMLElement17 = unsafeReadProtoTagged("HTMLHRElement");
  var fromEventTarget19 = unsafeReadProtoTagged("HTMLHRElement");
  var fromElement18 = unsafeReadProtoTagged("HTMLHRElement");
  var fromChildNode18 = unsafeReadProtoTagged("HTMLHRElement");

  // output/Web.HTML.HTMLHeadElement/index.js
  var fromParentNode20 = unsafeReadProtoTagged("HTMLHeadElement");
  var fromNonDocumentTypeChildNode19 = unsafeReadProtoTagged("HTMLHeadElement");
  var fromNode20 = unsafeReadProtoTagged("HTMLHeadElement");
  var fromHTMLElement18 = unsafeReadProtoTagged("HTMLHeadElement");
  var fromEventTarget20 = unsafeReadProtoTagged("HTMLHeadElement");
  var fromElement19 = unsafeReadProtoTagged("HTMLHeadElement");
  var fromChildNode19 = unsafeReadProtoTagged("HTMLHeadElement");

  // output/Web.HTML.HTMLHeadingElement/index.js
  var fromParentNode21 = unsafeReadProtoTagged("HTMLHeadingElement");
  var fromNonDocumentTypeChildNode20 = unsafeReadProtoTagged("HTMLHeadingElement");
  var fromNode21 = unsafeReadProtoTagged("HTMLHeadingElement");
  var fromHTMLElement19 = unsafeReadProtoTagged("HTMLHeadingElement");
  var fromEventTarget21 = unsafeReadProtoTagged("HTMLHeadingElement");
  var fromElement20 = unsafeReadProtoTagged("HTMLHeadingElement");
  var fromChildNode20 = unsafeReadProtoTagged("HTMLHeadingElement");

  // output/Web.HTML.HTMLIFrameElement/foreign.js
  var _contentDocument = function(iframe2) {
    return function() {
      return iframe2.contentDocument;
    };
  };
  var _contentWindow = function(iframe2) {
    return function() {
      return iframe2.contentWindow;
    };
  };

  // output/Web.HTML.HTMLIFrameElement/index.js
  var fromParentNode22 = unsafeReadProtoTagged("HTMLIFrameElement");
  var fromNonDocumentTypeChildNode21 = unsafeReadProtoTagged("HTMLIFrameElement");
  var fromNode22 = unsafeReadProtoTagged("HTMLIFrameElement");
  var fromHTMLElement20 = unsafeReadProtoTagged("HTMLIFrameElement");
  var fromEventTarget22 = unsafeReadProtoTagged("HTMLIFrameElement");
  var fromElement21 = unsafeReadProtoTagged("HTMLIFrameElement");
  var fromChildNode21 = unsafeReadProtoTagged("HTMLIFrameElement");
  var contentWindow = function() {
    var $0 = map(functorEffect)(toMaybe);
    return function($1) {
      return $0(_contentWindow($1));
    };
  }();
  var contentDocument = function() {
    var $2 = map(functorEffect)(toMaybe);
    return function($3) {
      return $2(_contentDocument($3));
    };
  }();

  // output/Web.HTML.HTMLImageElement/foreign.js
  var _crossOrigin = function(image) {
    return image.crossOrigin;
  };
  var _decoding = function(image) {
    return image.decoding;
  };
  var _loading = function(image) {
    return image.loading;
  };

  // output/Effect.Uncurried/foreign.js
  var runEffectFn1 = function runEffectFn12(fn) {
    return function(a2) {
      return function() {
        return fn(a2);
      };
    };
  };

  // output/Web.HTML.HTMLImageElement.CORSMode/index.js
  var Anonymous2 = function() {
    function Anonymous3() {
    }
    ;
    Anonymous3.value = new Anonymous3();
    return Anonymous3;
  }();
  var UseCredentials2 = function() {
    function UseCredentials3() {
    }
    ;
    UseCredentials3.value = new UseCredentials3();
    return UseCredentials3;
  }();
  var parse2 = function(v) {
    if (v === "") {
      return /* @__PURE__ */ new Just(Anonymous2.value);
    }
    ;
    if (v === "anonymous") {
      return /* @__PURE__ */ new Just(Anonymous2.value);
    }
    ;
    if (v === "use-credentials") {
      return /* @__PURE__ */ new Just(UseCredentials2.value);
    }
    ;
    return Nothing.value;
  };

  // output/Web.HTML.HTMLImageElement.DecodingHint/index.js
  var Sync = function() {
    function Sync2() {
    }
    ;
    Sync2.value = new Sync2();
    return Sync2;
  }();
  var Async = function() {
    function Async2() {
    }
    ;
    Async2.value = new Async2();
    return Async2;
  }();
  var Auto = function() {
    function Auto2() {
    }
    ;
    Auto2.value = new Auto2();
    return Auto2;
  }();
  var parse3 = function(v) {
    if (v === "") {
      return /* @__PURE__ */ new Just(Auto.value);
    }
    ;
    if (v === "sync") {
      return /* @__PURE__ */ new Just(Sync.value);
    }
    ;
    if (v === "async") {
      return /* @__PURE__ */ new Just(Async.value);
    }
    ;
    if (v === "auto") {
      return /* @__PURE__ */ new Just(Auto.value);
    }
    ;
    return Nothing.value;
  };

  // output/Web.HTML.HTMLImageElement.Laziness/index.js
  var Eager = function() {
    function Eager2() {
    }
    ;
    Eager2.value = new Eager2();
    return Eager2;
  }();
  var Lazy = function() {
    function Lazy2() {
    }
    ;
    Lazy2.value = new Lazy2();
    return Lazy2;
  }();
  var parse4 = function(v) {
    if (v === "") {
      return /* @__PURE__ */ new Just(Eager.value);
    }
    ;
    if (v === "eager") {
      return /* @__PURE__ */ new Just(Eager.value);
    }
    ;
    if (v === "lazy") {
      return /* @__PURE__ */ new Just(Lazy.value);
    }
    ;
    return Nothing.value;
  };

  // output/Web.HTML.HTMLImageElement/index.js
  var loading = function() {
    var $0 = map(functorEffect)(function() {
      var $3 = fromMaybe(Eager.value);
      return function($4) {
        return $3(parse4($4));
      };
    }());
    var $1 = runEffectFn1(_loading);
    return function($2) {
      return $0($1($2));
    };
  }();
  var fromParentNode23 = unsafeReadProtoTagged("HTMLImageElement");
  var fromNonDocumentTypeChildNode22 = unsafeReadProtoTagged("HTMLImageElement");
  var fromNode23 = unsafeReadProtoTagged("HTMLImageElement");
  var fromHTMLElement21 = unsafeReadProtoTagged("HTMLImageElement");
  var fromEventTarget23 = unsafeReadProtoTagged("HTMLImageElement");
  var fromElement22 = unsafeReadProtoTagged("HTMLImageElement");
  var fromChildNode22 = unsafeReadProtoTagged("HTMLImageElement");
  var decoding = function() {
    var $5 = map(functorEffect)(function() {
      var $8 = fromMaybe(Auto.value);
      return function($9) {
        return $8(parse3($9));
      };
    }());
    var $6 = runEffectFn1(_decoding);
    return function($7) {
      return $5($6($7));
    };
  }();
  var crossOrigin = function() {
    var $10 = map(functorEffect)(composeKleisliFlipped(bindMaybe)(parse2)(toMaybe));
    var $11 = runEffectFn1(_crossOrigin);
    return function($12) {
      return $10($11($12));
    };
  }();

  // output/Web.HTML.HTMLKeygenElement/foreign.js
  var _form4 = function(keygen) {
    return function() {
      return keygen.form;
    };
  };

  // output/Web.HTML.HTMLKeygenElement/index.js
  var fromParentNode24 = unsafeReadProtoTagged("HTMLKeygenElement");
  var fromNonDocumentTypeChildNode23 = unsafeReadProtoTagged("HTMLKeygenElement");
  var fromNode24 = unsafeReadProtoTagged("HTMLKeygenElement");
  var fromHTMLElement22 = unsafeReadProtoTagged("HTMLKeygenElement");
  var fromEventTarget24 = unsafeReadProtoTagged("HTMLKeygenElement");
  var fromElement23 = unsafeReadProtoTagged("HTMLKeygenElement");
  var fromChildNode23 = unsafeReadProtoTagged("HTMLKeygenElement");
  var form5 = function() {
    var $0 = map(functorEffect)(toMaybe);
    return function($1) {
      return $0(_form4($1));
    };
  }();

  // output/Web.HTML.HTMLLIElement/index.js
  var fromParentNode25 = unsafeReadProtoTagged("HTMLLIElement");
  var fromNonDocumentTypeChildNode24 = unsafeReadProtoTagged("HTMLLIElement");
  var fromNode25 = unsafeReadProtoTagged("HTMLLIElement");
  var fromHTMLElement23 = unsafeReadProtoTagged("HTMLLIElement");
  var fromEventTarget25 = unsafeReadProtoTagged("HTMLLIElement");
  var fromElement24 = unsafeReadProtoTagged("HTMLLIElement");
  var fromChildNode24 = unsafeReadProtoTagged("HTMLLIElement");

  // output/Web.HTML.HTMLLabelElement/foreign.js
  var _form5 = function(label5) {
    return function() {
      return label5.form;
    };
  };
  var _control = function(label5) {
    return function() {
      return label5.control;
    };
  };

  // output/Web.HTML.HTMLLabelElement/index.js
  var fromParentNode26 = unsafeReadProtoTagged("HTMLLabelElement");
  var fromNonDocumentTypeChildNode25 = unsafeReadProtoTagged("HTMLLabelElement");
  var fromNode26 = unsafeReadProtoTagged("HTMLLabelElement");
  var fromHTMLElement24 = unsafeReadProtoTagged("HTMLLabelElement");
  var fromEventTarget26 = unsafeReadProtoTagged("HTMLLabelElement");
  var fromElement25 = unsafeReadProtoTagged("HTMLLabelElement");
  var fromChildNode25 = unsafeReadProtoTagged("HTMLLabelElement");
  var form6 = function() {
    var $0 = map(functorEffect)(toMaybe);
    return function($1) {
      return $0(_form5($1));
    };
  }();
  var control = function() {
    var $2 = map(functorEffect)(toMaybe);
    return function($3) {
      return $2(_control($3));
    };
  }();

  // output/Web.HTML.HTMLLegendElement/foreign.js
  var _form6 = function(le) {
    return function() {
      return le.form;
    };
  };

  // output/Web.HTML.HTMLLegendElement/index.js
  var fromParentNode27 = unsafeReadProtoTagged("HTMLLegendElement");
  var fromNonDocumentTypeChildNode26 = unsafeReadProtoTagged("HTMLLegendElement");
  var fromNode27 = unsafeReadProtoTagged("HTMLLegendElement");
  var fromHTMLElement25 = unsafeReadProtoTagged("HTMLLegendElement");
  var fromEventTarget27 = unsafeReadProtoTagged("HTMLLegendElement");
  var fromElement26 = unsafeReadProtoTagged("HTMLLegendElement");
  var fromChildNode26 = unsafeReadProtoTagged("HTMLLegendElement");
  var form7 = function() {
    var $0 = map(functorEffect)(toMaybe);
    return function($1) {
      return $0(_form6($1));
    };
  }();

  // output/Web.HTML.HTMLLinkElement/index.js
  var fromParentNode28 = unsafeReadProtoTagged("HTMLLinkElement");
  var fromNonDocumentTypeChildNode27 = unsafeReadProtoTagged("HTMLLinkElement");
  var fromNode28 = unsafeReadProtoTagged("HTMLLinkElement");
  var fromHTMLElement26 = unsafeReadProtoTagged("HTMLLinkElement");
  var fromEventTarget28 = unsafeReadProtoTagged("HTMLLinkElement");
  var fromElement27 = unsafeReadProtoTagged("HTMLLinkElement");
  var fromChildNode27 = unsafeReadProtoTagged("HTMLLinkElement");

  // output/Web.HTML.HTMLMapElement/index.js
  var fromParentNode29 = unsafeReadProtoTagged("HTMLMapElement");
  var fromNonDocumentTypeChildNode28 = unsafeReadProtoTagged("HTMLMapElement");
  var fromNode29 = unsafeReadProtoTagged("HTMLMapElement");
  var fromHTMLElement27 = unsafeReadProtoTagged("HTMLMapElement");
  var fromEventTarget29 = unsafeReadProtoTagged("HTMLMapElement");
  var fromElement28 = unsafeReadProtoTagged("HTMLMapElement");
  var fromChildNode28 = unsafeReadProtoTagged("HTMLMapElement");

  // output/Web.HTML.HTMLMediaElement.CanPlayType/index.js
  var Unspecified = function() {
    function Unspecified2() {
    }
    ;
    Unspecified2.value = new Unspecified2();
    return Unspecified2;
  }();
  var Maybe = function() {
    function Maybe2() {
    }
    ;
    Maybe2.value = new Maybe2();
    return Maybe2;
  }();
  var Probably = function() {
    function Probably2() {
    }
    ;
    Probably2.value = new Probably2();
    return Probably2;
  }();

  // output/Web.HTML.HTMLMediaElement.NetworkState/index.js
  var Empty = function() {
    function Empty2() {
    }
    ;
    Empty2.value = new Empty2();
    return Empty2;
  }();
  var Idle = function() {
    function Idle2() {
    }
    ;
    Idle2.value = new Idle2();
    return Idle2;
  }();
  var Loading2 = function() {
    function Loading4() {
    }
    ;
    Loading4.value = new Loading4();
    return Loading4;
  }();
  var NoSource = function() {
    function NoSource2() {
    }
    ;
    NoSource2.value = new NoSource2();
    return NoSource2;
  }();
  var toEnumNetworkState = function(v) {
    if (v === 0) {
      return /* @__PURE__ */ new Just(Empty.value);
    }
    ;
    if (v === 1) {
      return /* @__PURE__ */ new Just(Idle.value);
    }
    ;
    if (v === 2) {
      return /* @__PURE__ */ new Just(Loading2.value);
    }
    ;
    if (v === 3) {
      return /* @__PURE__ */ new Just(NoSource.value);
    }
    ;
    return Nothing.value;
  };
  var fromEnumNetworkState = function(v) {
    if (v instanceof Empty) {
      return 0;
    }
    ;
    if (v instanceof Idle) {
      return 1;
    }
    ;
    if (v instanceof Loading2) {
      return 2;
    }
    ;
    if (v instanceof NoSource) {
      return 3;
    }
    ;
    throw new Error("Failed pattern match at Web.HTML.HTMLMediaElement.NetworkState (line 46, column 3 - line 50, column 18): " + [v.constructor.name]);
  };
  var eqNetworkState = {
    eq: function(x) {
      return function(y) {
        if (x instanceof Empty && y instanceof Empty) {
          return true;
        }
        ;
        if (x instanceof Idle && y instanceof Idle) {
          return true;
        }
        ;
        if (x instanceof Loading2 && y instanceof Loading2) {
          return true;
        }
        ;
        if (x instanceof NoSource && y instanceof NoSource) {
          return true;
        }
        ;
        return false;
      };
    }
  };
  var ordNetworkState = {
    compare: function(x) {
      return function(y) {
        if (x instanceof Empty && y instanceof Empty) {
          return EQ.value;
        }
        ;
        if (x instanceof Empty) {
          return LT.value;
        }
        ;
        if (y instanceof Empty) {
          return GT.value;
        }
        ;
        if (x instanceof Idle && y instanceof Idle) {
          return EQ.value;
        }
        ;
        if (x instanceof Idle) {
          return LT.value;
        }
        ;
        if (y instanceof Idle) {
          return GT.value;
        }
        ;
        if (x instanceof Loading2 && y instanceof Loading2) {
          return EQ.value;
        }
        ;
        if (x instanceof Loading2) {
          return LT.value;
        }
        ;
        if (y instanceof Loading2) {
          return GT.value;
        }
        ;
        if (x instanceof NoSource && y instanceof NoSource) {
          return EQ.value;
        }
        ;
        throw new Error("Failed pattern match at Web.HTML.HTMLMediaElement.NetworkState (line 14, column 1 - line 14, column 52): " + [x.constructor.name, y.constructor.name]);
      };
    },
    Eq0: function() {
      return eqNetworkState;
    }
  };
  var enumNetworkState = {
    succ: defaultSucc(toEnumNetworkState)(fromEnumNetworkState),
    pred: defaultPred(toEnumNetworkState)(fromEnumNetworkState),
    Ord0: function() {
      return ordNetworkState;
    }
  };
  var boundedNetworkState = {
    bottom: Empty.value,
    top: NoSource.value,
    Ord0: function() {
      return ordNetworkState;
    }
  };

  // output/Web.HTML.HTMLMediaElement.ReadyState/index.js
  var HaveNothing = function() {
    function HaveNothing2() {
    }
    ;
    HaveNothing2.value = new HaveNothing2();
    return HaveNothing2;
  }();
  var HaveMetadata = function() {
    function HaveMetadata2() {
    }
    ;
    HaveMetadata2.value = new HaveMetadata2();
    return HaveMetadata2;
  }();
  var HaveCurrentData = function() {
    function HaveCurrentData2() {
    }
    ;
    HaveCurrentData2.value = new HaveCurrentData2();
    return HaveCurrentData2;
  }();
  var HaveFutureData = function() {
    function HaveFutureData2() {
    }
    ;
    HaveFutureData2.value = new HaveFutureData2();
    return HaveFutureData2;
  }();
  var HaveEnoughData = function() {
    function HaveEnoughData2() {
    }
    ;
    HaveEnoughData2.value = new HaveEnoughData2();
    return HaveEnoughData2;
  }();
  var toEnumReadyState = function(v) {
    if (v === 0) {
      return /* @__PURE__ */ new Just(HaveNothing.value);
    }
    ;
    if (v === 1) {
      return /* @__PURE__ */ new Just(HaveMetadata.value);
    }
    ;
    if (v === 2) {
      return /* @__PURE__ */ new Just(HaveCurrentData.value);
    }
    ;
    if (v === 3) {
      return /* @__PURE__ */ new Just(HaveFutureData.value);
    }
    ;
    if (v === 4) {
      return /* @__PURE__ */ new Just(HaveEnoughData.value);
    }
    ;
    return Nothing.value;
  };
  var fromEnumReadyState = function(v) {
    if (v instanceof HaveNothing) {
      return 0;
    }
    ;
    if (v instanceof HaveMetadata) {
      return 1;
    }
    ;
    if (v instanceof HaveCurrentData) {
      return 2;
    }
    ;
    if (v instanceof HaveFutureData) {
      return 3;
    }
    ;
    if (v instanceof HaveEnoughData) {
      return 4;
    }
    ;
    throw new Error("Failed pattern match at Web.HTML.HTMLMediaElement.ReadyState (line 49, column 3 - line 54, column 24): " + [v.constructor.name]);
  };
  var eqReadyState = {
    eq: function(x) {
      return function(y) {
        if (x instanceof HaveNothing && y instanceof HaveNothing) {
          return true;
        }
        ;
        if (x instanceof HaveMetadata && y instanceof HaveMetadata) {
          return true;
        }
        ;
        if (x instanceof HaveCurrentData && y instanceof HaveCurrentData) {
          return true;
        }
        ;
        if (x instanceof HaveFutureData && y instanceof HaveFutureData) {
          return true;
        }
        ;
        if (x instanceof HaveEnoughData && y instanceof HaveEnoughData) {
          return true;
        }
        ;
        return false;
      };
    }
  };
  var ordReadyState = {
    compare: function(x) {
      return function(y) {
        if (x instanceof HaveNothing && y instanceof HaveNothing) {
          return EQ.value;
        }
        ;
        if (x instanceof HaveNothing) {
          return LT.value;
        }
        ;
        if (y instanceof HaveNothing) {
          return GT.value;
        }
        ;
        if (x instanceof HaveMetadata && y instanceof HaveMetadata) {
          return EQ.value;
        }
        ;
        if (x instanceof HaveMetadata) {
          return LT.value;
        }
        ;
        if (y instanceof HaveMetadata) {
          return GT.value;
        }
        ;
        if (x instanceof HaveCurrentData && y instanceof HaveCurrentData) {
          return EQ.value;
        }
        ;
        if (x instanceof HaveCurrentData) {
          return LT.value;
        }
        ;
        if (y instanceof HaveCurrentData) {
          return GT.value;
        }
        ;
        if (x instanceof HaveFutureData && y instanceof HaveFutureData) {
          return EQ.value;
        }
        ;
        if (x instanceof HaveFutureData) {
          return LT.value;
        }
        ;
        if (y instanceof HaveFutureData) {
          return GT.value;
        }
        ;
        if (x instanceof HaveEnoughData && y instanceof HaveEnoughData) {
          return EQ.value;
        }
        ;
        throw new Error("Failed pattern match at Web.HTML.HTMLMediaElement.ReadyState (line 15, column 1 - line 15, column 48): " + [x.constructor.name, y.constructor.name]);
      };
    },
    Eq0: function() {
      return eqReadyState;
    }
  };
  var enumReadyState = {
    succ: defaultSucc(toEnumReadyState)(fromEnumReadyState),
    pred: defaultPred(toEnumReadyState)(fromEnumReadyState),
    Ord0: function() {
      return ordReadyState;
    }
  };
  var boundedReadyState = {
    bottom: HaveNothing.value,
    top: HaveEnoughData.value,
    Ord0: function() {
      return ordReadyState;
    }
  };

  // output/Web.HTML.HTMLMediaElement/index.js
  var fromParentNode30 = unsafeReadProtoTagged("HTMLMediaElement");
  var fromNonDocumentTypeChildNode29 = unsafeReadProtoTagged("HTMLMediaElement");
  var fromNode30 = unsafeReadProtoTagged("HTMLMediaElement");
  var fromHTMLElement28 = unsafeReadProtoTagged("HTMLMediaElement");
  var fromEventTarget30 = unsafeReadProtoTagged("HTMLMediaElement");
  var fromElement29 = unsafeReadProtoTagged("HTMLMediaElement");
  var fromChildNode29 = unsafeReadProtoTagged("HTMLMediaElement");

  // output/Web.HTML.HTMLMetaElement/index.js
  var fromParentNode31 = unsafeReadProtoTagged("HTMLMetaElement");
  var fromNonDocumentTypeChildNode30 = unsafeReadProtoTagged("HTMLMetaElement");
  var fromNode31 = unsafeReadProtoTagged("HTMLMetaElement");
  var fromHTMLElement29 = unsafeReadProtoTagged("HTMLMetaElement");
  var fromEventTarget31 = unsafeReadProtoTagged("HTMLMetaElement");
  var fromElement30 = unsafeReadProtoTagged("HTMLMetaElement");
  var fromChildNode30 = unsafeReadProtoTagged("HTMLMetaElement");

  // output/Web.HTML.HTMLMeterElement/index.js
  var fromParentNode32 = unsafeReadProtoTagged("HTMLMeterElement");
  var fromNonDocumentTypeChildNode31 = unsafeReadProtoTagged("HTMLMeterElement");
  var fromNode32 = unsafeReadProtoTagged("HTMLMeterElement");
  var fromHTMLElement30 = unsafeReadProtoTagged("HTMLMeterElement");
  var fromEventTarget32 = unsafeReadProtoTagged("HTMLMeterElement");
  var fromElement31 = unsafeReadProtoTagged("HTMLMeterElement");
  var fromChildNode31 = unsafeReadProtoTagged("HTMLMeterElement");

  // output/Web.HTML.HTMLModElement/index.js
  var fromParentNode33 = unsafeReadProtoTagged("HTMLModElement");
  var fromNonDocumentTypeChildNode32 = unsafeReadProtoTagged("HTMLModElement");
  var fromNode33 = unsafeReadProtoTagged("HTMLModElement");
  var fromHTMLElement31 = unsafeReadProtoTagged("HTMLModElement");
  var fromEventTarget33 = unsafeReadProtoTagged("HTMLModElement");
  var fromElement32 = unsafeReadProtoTagged("HTMLModElement");
  var fromChildNode32 = unsafeReadProtoTagged("HTMLModElement");

  // output/Web.HTML.HTMLOListElement/index.js
  var fromParentNode34 = unsafeReadProtoTagged("HTMLOListElement");
  var fromNonDocumentTypeChildNode33 = unsafeReadProtoTagged("HTMLOListElement");
  var fromNode34 = unsafeReadProtoTagged("HTMLOListElement");
  var fromHTMLElement32 = unsafeReadProtoTagged("HTMLOListElement");
  var fromEventTarget34 = unsafeReadProtoTagged("HTMLOListElement");
  var fromElement33 = unsafeReadProtoTagged("HTMLOListElement");
  var fromChildNode33 = unsafeReadProtoTagged("HTMLOListElement");

  // output/Web.HTML.HTMLObjectElement/foreign.js
  var _form7 = function(object2) {
    return function() {
      return object2.form;
    };
  };
  var _contentDocument2 = function(object2) {
    return function() {
      return object2.contentDocument;
    };
  };

  // output/Web.HTML.HTMLObjectElement/index.js
  var fromParentNode35 = unsafeReadProtoTagged("HTMLObjectElement");
  var fromNonDocumentTypeChildNode34 = unsafeReadProtoTagged("HTMLObjectElement");
  var fromNode35 = unsafeReadProtoTagged("HTMLObjectElement");
  var fromHTMLElement33 = unsafeReadProtoTagged("HTMLObjectElement");
  var fromEventTarget35 = unsafeReadProtoTagged("HTMLObjectElement");
  var fromElement34 = unsafeReadProtoTagged("HTMLObjectElement");
  var fromChildNode34 = unsafeReadProtoTagged("HTMLObjectElement");
  var form8 = function() {
    var $0 = map(functorEffect)(toMaybe);
    return function($1) {
      return $0(_form7($1));
    };
  }();
  var contentDocument2 = function() {
    var $2 = map(functorEffect)(toMaybe);
    return function($3) {
      return $2(_contentDocument2($3));
    };
  }();

  // output/Web.HTML.HTMLOptGroupElement/index.js
  var fromParentNode36 = unsafeReadProtoTagged("HTMLOptGroupElement");
  var fromNonDocumentTypeChildNode35 = unsafeReadProtoTagged("HTMLOptGroupElement");
  var fromNode36 = unsafeReadProtoTagged("HTMLOptGroupElement");
  var fromHTMLElement34 = unsafeReadProtoTagged("HTMLOptGroupElement");
  var fromEventTarget36 = unsafeReadProtoTagged("HTMLOptGroupElement");
  var fromElement35 = unsafeReadProtoTagged("HTMLOptGroupElement");
  var fromChildNode35 = unsafeReadProtoTagged("HTMLOptGroupElement");

  // output/Web.HTML.HTMLOptionElement/foreign.js
  var _form8 = function(option2) {
    return function() {
      return option2.form;
    };
  };

  // output/Web.HTML.HTMLOptionElement/index.js
  var fromParentNode37 = unsafeReadProtoTagged("HTMLOptionElement");
  var fromNonDocumentTypeChildNode36 = unsafeReadProtoTagged("HTMLOptionElement");
  var fromNode37 = unsafeReadProtoTagged("HTMLOptionElement");
  var fromHTMLElement35 = unsafeReadProtoTagged("HTMLOptionElement");
  var fromEventTarget37 = unsafeReadProtoTagged("HTMLOptionElement");
  var fromElement36 = unsafeReadProtoTagged("HTMLOptionElement");
  var fromChildNode36 = unsafeReadProtoTagged("HTMLOptionElement");
  var form9 = function() {
    var $0 = map(functorEffect)(toMaybe);
    return function($1) {
      return $0(_form8($1));
    };
  }();

  // output/Web.HTML.HTMLOutputElement/foreign.js
  var _form9 = function(output2) {
    return function() {
      return output2.form;
    };
  };

  // output/Web.HTML.HTMLOutputElement/index.js
  var fromParentNode38 = unsafeReadProtoTagged("HTMLOutputElement");
  var fromNonDocumentTypeChildNode37 = unsafeReadProtoTagged("HTMLOutputElement");
  var fromNode38 = unsafeReadProtoTagged("HTMLOutputElement");
  var fromHTMLElement36 = unsafeReadProtoTagged("HTMLOutputElement");
  var fromEventTarget38 = unsafeReadProtoTagged("HTMLOutputElement");
  var fromElement37 = unsafeReadProtoTagged("HTMLOutputElement");
  var fromChildNode37 = unsafeReadProtoTagged("HTMLOutputElement");
  var form10 = function() {
    var $0 = map(functorEffect)(toMaybe);
    return function($1) {
      return $0(_form9($1));
    };
  }();

  // output/Web.HTML.HTMLParagraphElement/index.js
  var fromParentNode39 = unsafeReadProtoTagged("HTMLParagraphElement");
  var fromNonDocumentTypeChildNode38 = unsafeReadProtoTagged("HTMLParagraphElement");
  var fromNode39 = unsafeReadProtoTagged("HTMLParagraphElement");
  var fromHTMLElement37 = unsafeReadProtoTagged("HTMLParagraphElement");
  var fromEventTarget39 = unsafeReadProtoTagged("HTMLParagraphElement");
  var fromElement38 = unsafeReadProtoTagged("HTMLParagraphElement");
  var fromChildNode38 = unsafeReadProtoTagged("HTMLParagraphElement");

  // output/Web.HTML.HTMLParamElement/index.js
  var fromParentNode40 = unsafeReadProtoTagged("HTMLParamElement");
  var fromNonDocumentTypeChildNode39 = unsafeReadProtoTagged("HTMLParamElement");
  var fromNode40 = unsafeReadProtoTagged("HTMLParamElement");
  var fromHTMLElement38 = unsafeReadProtoTagged("HTMLParamElement");
  var fromEventTarget40 = unsafeReadProtoTagged("HTMLParamElement");
  var fromElement39 = unsafeReadProtoTagged("HTMLParamElement");
  var fromChildNode39 = unsafeReadProtoTagged("HTMLParamElement");

  // output/Web.HTML.HTMLPreElement/index.js
  var fromParentNode41 = unsafeReadProtoTagged("HTMLPreElement");
  var fromNonDocumentTypeChildNode40 = unsafeReadProtoTagged("HTMLPreElement");
  var fromNode41 = unsafeReadProtoTagged("HTMLPreElement");
  var fromHTMLElement39 = unsafeReadProtoTagged("HTMLPreElement");
  var fromEventTarget41 = unsafeReadProtoTagged("HTMLPreElement");
  var fromElement40 = unsafeReadProtoTagged("HTMLPreElement");
  var fromChildNode40 = unsafeReadProtoTagged("HTMLPreElement");

  // output/Web.HTML.HTMLProgressElement/index.js
  var fromParentNode42 = unsafeReadProtoTagged("HTMLProgressElement");
  var fromNonDocumentTypeChildNode41 = unsafeReadProtoTagged("HTMLProgressElement");
  var fromNode42 = unsafeReadProtoTagged("HTMLProgressElement");
  var fromHTMLElement40 = unsafeReadProtoTagged("HTMLProgressElement");
  var fromEventTarget42 = unsafeReadProtoTagged("HTMLProgressElement");
  var fromElement41 = unsafeReadProtoTagged("HTMLProgressElement");
  var fromChildNode41 = unsafeReadProtoTagged("HTMLProgressElement");

  // output/Web.HTML.HTMLQuoteElement/index.js
  var fromParentNode43 = unsafeReadProtoTagged("HTMLQuoteElement");
  var fromNonDocumentTypeChildNode42 = unsafeReadProtoTagged("HTMLQuoteElement");
  var fromNode43 = unsafeReadProtoTagged("HTMLQuoteElement");
  var fromHTMLElement41 = unsafeReadProtoTagged("HTMLQuoteElement");
  var fromEventTarget43 = unsafeReadProtoTagged("HTMLQuoteElement");
  var fromElement42 = unsafeReadProtoTagged("HTMLQuoteElement");
  var fromChildNode42 = unsafeReadProtoTagged("HTMLQuoteElement");

  // output/Web.HTML.HTMLScriptElement/index.js
  var fromParentNode44 = unsafeReadProtoTagged("HTMLScriptElement");
  var fromNonDocumentTypeChildNode43 = unsafeReadProtoTagged("HTMLScriptElement");
  var fromNode44 = unsafeReadProtoTagged("HTMLScriptElement");
  var fromHTMLElement42 = unsafeReadProtoTagged("HTMLScriptElement");
  var fromEventTarget44 = unsafeReadProtoTagged("HTMLScriptElement");
  var fromElement43 = unsafeReadProtoTagged("HTMLScriptElement");
  var fromChildNode43 = unsafeReadProtoTagged("HTMLScriptElement");

  // output/Web.HTML.HTMLSelectElement/foreign.js
  var _form10 = function(select5) {
    return function() {
      return select5.form;
    };
  };

  // output/Web.HTML.HTMLSelectElement/index.js
  var fromParentNode45 = unsafeReadProtoTagged("HTMLSelectElement");
  var fromNonDocumentTypeChildNode44 = unsafeReadProtoTagged("HTMLSelectElement");
  var fromNode45 = unsafeReadProtoTagged("HTMLSelectElement");
  var fromHTMLElement43 = unsafeReadProtoTagged("HTMLSelectElement");
  var fromEventTarget45 = unsafeReadProtoTagged("HTMLSelectElement");
  var fromElement44 = unsafeReadProtoTagged("HTMLSelectElement");
  var fromChildNode44 = unsafeReadProtoTagged("HTMLSelectElement");
  var form11 = function() {
    var $0 = map(functorEffect)(toMaybe);
    return function($1) {
      return $0(_form10($1));
    };
  }();

  // output/Web.HTML.HTMLSourceElement/index.js
  var fromParentNode46 = unsafeReadProtoTagged("HTMLSourceElement");
  var fromNonDocumentTypeChildNode45 = unsafeReadProtoTagged("HTMLSourceElement");
  var fromNode46 = unsafeReadProtoTagged("HTMLSourceElement");
  var fromHTMLElement44 = unsafeReadProtoTagged("HTMLSourceElement");
  var fromEventTarget46 = unsafeReadProtoTagged("HTMLSourceElement");
  var fromElement45 = unsafeReadProtoTagged("HTMLSourceElement");
  var fromChildNode45 = unsafeReadProtoTagged("HTMLSourceElement");

  // output/Web.HTML.HTMLSpanElement/index.js
  var fromParentNode47 = unsafeReadProtoTagged("HTMLSpanElement");
  var fromNonDocumentTypeChildNode46 = unsafeReadProtoTagged("HTMLSpanElement");
  var fromNode47 = unsafeReadProtoTagged("HTMLSpanElement");
  var fromHTMLElement45 = unsafeReadProtoTagged("HTMLSpanElement");
  var fromEventTarget47 = unsafeReadProtoTagged("HTMLSpanElement");
  var fromElement46 = unsafeReadProtoTagged("HTMLSpanElement");
  var fromChildNode46 = unsafeReadProtoTagged("HTMLSpanElement");

  // output/Web.HTML.HTMLStyleElement/index.js
  var fromParentNode48 = unsafeReadProtoTagged("HTMLStyleElement");
  var fromNonDocumentTypeChildNode47 = unsafeReadProtoTagged("HTMLStyleElement");
  var fromNode48 = unsafeReadProtoTagged("HTMLStyleElement");
  var fromHTMLElement46 = unsafeReadProtoTagged("HTMLStyleElement");
  var fromEventTarget48 = unsafeReadProtoTagged("HTMLStyleElement");
  var fromElement47 = unsafeReadProtoTagged("HTMLStyleElement");
  var fromChildNode47 = unsafeReadProtoTagged("HTMLStyleElement");

  // output/Web.HTML.HTMLTableCaptionElement/index.js
  var fromParentNode49 = unsafeReadProtoTagged("HTMLTableCaptionElement");
  var fromNonDocumentTypeChildNode48 = unsafeReadProtoTagged("HTMLTableCaptionElement");
  var fromNode49 = unsafeReadProtoTagged("HTMLTableCaptionElement");
  var fromHTMLElement47 = unsafeReadProtoTagged("HTMLTableCaptionElement");
  var fromEventTarget49 = unsafeReadProtoTagged("HTMLTableCaptionElement");
  var fromElement48 = unsafeReadProtoTagged("HTMLTableCaptionElement");
  var fromChildNode48 = unsafeReadProtoTagged("HTMLTableCaptionElement");

  // output/Web.HTML.HTMLTableCellElement/index.js
  var fromParentNode50 = unsafeReadProtoTagged("HTMLTableCellElement");
  var fromNonDocumentTypeChildNode49 = unsafeReadProtoTagged("HTMLTableCellElement");
  var fromNode50 = unsafeReadProtoTagged("HTMLTableCellElement");
  var fromHTMLElement48 = unsafeReadProtoTagged("HTMLTableCellElement");
  var fromEventTarget50 = unsafeReadProtoTagged("HTMLTableCellElement");
  var fromElement49 = unsafeReadProtoTagged("HTMLTableCellElement");
  var fromChildNode49 = unsafeReadProtoTagged("HTMLTableCellElement");

  // output/Web.HTML.HTMLTableColElement/index.js
  var fromParentNode51 = unsafeReadProtoTagged("HTMLTableColElement");
  var fromNonDocumentTypeChildNode50 = unsafeReadProtoTagged("HTMLTableColElement");
  var fromNode51 = unsafeReadProtoTagged("HTMLTableColElement");
  var fromHTMLElement49 = unsafeReadProtoTagged("HTMLTableColElement");
  var fromEventTarget51 = unsafeReadProtoTagged("HTMLTableColElement");
  var fromElement50 = unsafeReadProtoTagged("HTMLTableColElement");
  var fromChildNode50 = unsafeReadProtoTagged("HTMLTableColElement");

  // output/Web.HTML.HTMLTableDataCellElement/index.js
  var fromParentNode52 = unsafeReadProtoTagged("HTMLTableDataCellElement");
  var fromNonDocumentTypeChildNode51 = unsafeReadProtoTagged("HTMLTableDataCellElement");
  var fromNode52 = unsafeReadProtoTagged("HTMLTableDataCellElement");
  var fromHTMLTableCellElement = unsafeReadProtoTagged("HTMLTableDataCellElement");
  var fromHTMLElement50 = unsafeReadProtoTagged("HTMLTableDataCellElement");
  var fromEventTarget52 = unsafeReadProtoTagged("HTMLTableDataCellElement");
  var fromElement51 = unsafeReadProtoTagged("HTMLTableDataCellElement");
  var fromChildNode51 = unsafeReadProtoTagged("HTMLTableDataCellElement");

  // output/Web.HTML.HTMLTableElement/foreign.js
  var _caption = function(table2) {
    return function() {
      return table2.caption;
    };
  };
  var _tHead = function(table2) {
    return function() {
      return table2.tHead;
    };
  };
  var _tFoot = function(table2) {
    return function() {
      return table2.tFoot;
    };
  };
  var insertRowAt = function(index4) {
    return function(table2) {
      return function() {
        return table2.insertRow(index4);
      };
    };
  };

  // output/Web.HTML.HTMLTableElement/index.js
  var tHead = function() {
    var $0 = map(functorEffect)(toMaybe);
    return function($1) {
      return $0(_tHead($1));
    };
  }();
  var tFoot = function() {
    var $2 = map(functorEffect)(toMaybe);
    return function($3) {
      return $2(_tFoot($3));
    };
  }();
  var insertRow$prime = insertRowAt;
  var insertRow = insertRow$prime(-1 | 0);
  var fromParentNode53 = unsafeReadProtoTagged("HTMLTableElement");
  var fromNonDocumentTypeChildNode52 = unsafeReadProtoTagged("HTMLTableElement");
  var fromNode53 = unsafeReadProtoTagged("HTMLTableElement");
  var fromHTMLElement51 = unsafeReadProtoTagged("HTMLTableElement");
  var fromEventTarget53 = unsafeReadProtoTagged("HTMLTableElement");
  var fromElement52 = unsafeReadProtoTagged("HTMLTableElement");
  var fromChildNode52 = unsafeReadProtoTagged("HTMLTableElement");
  var caption2 = function() {
    var $7 = map(functorEffect)(toMaybe);
    return function($8) {
      return $7(_caption($8));
    };
  }();

  // output/Web.HTML.HTMLTableHeaderCellElement/index.js
  var fromParentNode54 = unsafeReadProtoTagged("HTMLTableHeaderCellElement");
  var fromNonDocumentTypeChildNode53 = unsafeReadProtoTagged("HTMLTableHeaderCellElement");
  var fromNode54 = unsafeReadProtoTagged("HTMLTableHeaderCellElement");
  var fromHTMLTableCellElement2 = unsafeReadProtoTagged("HTMLTableHeaderCellElement");
  var fromHTMLElement52 = unsafeReadProtoTagged("HTMLTableHeaderCellElement");
  var fromEventTarget54 = unsafeReadProtoTagged("HTMLTableHeaderCellElement");
  var fromElement53 = unsafeReadProtoTagged("HTMLTableHeaderCellElement");
  var fromChildNode53 = unsafeReadProtoTagged("HTMLTableHeaderCellElement");

  // output/Web.HTML.HTMLTableRowElement/foreign.js
  var insertCellAt = function(index4) {
    return function(row) {
      return function() {
        return row.insertCell(index4);
      };
    };
  };

  // output/Web.HTML.HTMLTableRowElement/index.js
  var insertCell$prime = insertCellAt;
  var insertCell = insertCell$prime(-1 | 0);
  var fromParentNode55 = unsafeReadProtoTagged("HTMLTableRowElement");
  var fromNonDocumentTypeChildNode54 = unsafeReadProtoTagged("HTMLTableRowElement");
  var fromNode55 = unsafeReadProtoTagged("HTMLTableRowElement");
  var fromHTMLElement53 = unsafeReadProtoTagged("HTMLTableRowElement");
  var fromEventTarget55 = unsafeReadProtoTagged("HTMLTableRowElement");
  var fromElement54 = unsafeReadProtoTagged("HTMLTableRowElement");
  var fromChildNode54 = unsafeReadProtoTagged("HTMLTableRowElement");

  // output/Web.HTML.HTMLTableSectionElement/foreign.js
  var insertRowAt2 = function(index4) {
    return function(section2) {
      return function() {
        return section2.insertRow(index4);
      };
    };
  };

  // output/Web.HTML.HTMLTableSectionElement/index.js
  var insertRow$prime2 = insertRowAt2;
  var insertRow2 = insertRow$prime2(-1 | 0);
  var fromParentNode56 = unsafeReadProtoTagged("HTMLTableSectionElement");
  var fromNonDocumentTypeChildNode55 = unsafeReadProtoTagged("HTMLTableSectionElement");
  var fromNode56 = unsafeReadProtoTagged("HTMLTableSectionElement");
  var fromHTMLElement54 = unsafeReadProtoTagged("HTMLTableSectionElement");
  var fromEventTarget56 = unsafeReadProtoTagged("HTMLTableSectionElement");
  var fromElement55 = unsafeReadProtoTagged("HTMLTableSectionElement");
  var fromChildNode55 = unsafeReadProtoTagged("HTMLTableSectionElement");

  // output/Web.HTML.HTMLTemplateElement/index.js
  var fromParentNode57 = unsafeReadProtoTagged("HTMLTemplateElement");
  var fromNonDocumentTypeChildNode56 = unsafeReadProtoTagged("HTMLTemplateElement");
  var fromNode57 = unsafeReadProtoTagged("HTMLTemplateElement");
  var fromHTMLElement55 = unsafeReadProtoTagged("HTMLTemplateElement");
  var fromEventTarget57 = unsafeReadProtoTagged("HTMLTemplateElement");
  var fromElement56 = unsafeReadProtoTagged("HTMLTemplateElement");
  var fromChildNode56 = unsafeReadProtoTagged("HTMLTemplateElement");

  // output/Web.HTML.HTMLTextAreaElement/foreign.js
  var _form11 = function(textarea2) {
    return function() {
      return textarea2.form;
    };
  };

  // output/Web.HTML.HTMLTextAreaElement/index.js
  var fromParentNode58 = unsafeReadProtoTagged("HTMLTextAreaElement");
  var fromNonDocumentTypeChildNode57 = unsafeReadProtoTagged("HTMLTextAreaElement");
  var fromNode58 = unsafeReadProtoTagged("HTMLTextAreaElement");
  var fromHTMLElement56 = unsafeReadProtoTagged("HTMLTextAreaElement");
  var fromEventTarget58 = unsafeReadProtoTagged("HTMLTextAreaElement");
  var fromElement57 = unsafeReadProtoTagged("HTMLTextAreaElement");
  var fromChildNode57 = unsafeReadProtoTagged("HTMLTextAreaElement");
  var form12 = function() {
    var $0 = map(functorEffect)(toMaybe);
    return function($1) {
      return $0(_form11($1));
    };
  }();

  // output/Web.HTML.HTMLTimeElement/index.js
  var fromParentNode59 = unsafeReadProtoTagged("HTMLTimeElement");
  var fromNonDocumentTypeChildNode58 = unsafeReadProtoTagged("HTMLTimeElement");
  var fromNode59 = unsafeReadProtoTagged("HTMLTimeElement");
  var fromHTMLElement57 = unsafeReadProtoTagged("HTMLTimeElement");
  var fromEventTarget59 = unsafeReadProtoTagged("HTMLTimeElement");
  var fromElement58 = unsafeReadProtoTagged("HTMLTimeElement");
  var fromChildNode58 = unsafeReadProtoTagged("HTMLTimeElement");

  // output/Web.HTML.HTMLTitleElement/index.js
  var fromParentNode60 = unsafeReadProtoTagged("HTMLTitleElement");
  var fromNonDocumentTypeChildNode59 = unsafeReadProtoTagged("HTMLTitleElement");
  var fromNode60 = unsafeReadProtoTagged("HTMLTitleElement");
  var fromHTMLElement58 = unsafeReadProtoTagged("HTMLTitleElement");
  var fromEventTarget60 = unsafeReadProtoTagged("HTMLTitleElement");
  var fromElement59 = unsafeReadProtoTagged("HTMLTitleElement");
  var fromChildNode59 = unsafeReadProtoTagged("HTMLTitleElement");

  // output/Web.HTML.HTMLTrackElement.ReadyState/index.js
  var None2 = function() {
    function None3() {
    }
    ;
    None3.value = new None3();
    return None3;
  }();
  var Loading3 = function() {
    function Loading4() {
    }
    ;
    Loading4.value = new Loading4();
    return Loading4;
  }();
  var Loaded = function() {
    function Loaded2() {
    }
    ;
    Loaded2.value = new Loaded2();
    return Loaded2;
  }();
  var $$Error = function() {
    function $$Error2() {
    }
    ;
    $$Error2.value = new $$Error2();
    return $$Error2;
  }();
  var toEnumReadyState2 = function(v) {
    if (v === 0) {
      return /* @__PURE__ */ new Just(None2.value);
    }
    ;
    if (v === 1) {
      return /* @__PURE__ */ new Just(Loading3.value);
    }
    ;
    if (v === 2) {
      return /* @__PURE__ */ new Just(Loaded.value);
    }
    ;
    if (v === 3) {
      return /* @__PURE__ */ new Just($$Error.value);
    }
    ;
    return Nothing.value;
  };
  var fromEnumReadyState2 = function(v) {
    if (v instanceof None2) {
      return 0;
    }
    ;
    if (v instanceof Loading3) {
      return 1;
    }
    ;
    if (v instanceof Loaded) {
      return 2;
    }
    ;
    if (v instanceof $$Error) {
      return 3;
    }
    ;
    throw new Error("Failed pattern match at Web.HTML.HTMLTrackElement.ReadyState (line 46, column 3 - line 50, column 15): " + [v.constructor.name]);
  };
  var eqReadyState2 = {
    eq: function(x) {
      return function(y) {
        if (x instanceof None2 && y instanceof None2) {
          return true;
        }
        ;
        if (x instanceof Loading3 && y instanceof Loading3) {
          return true;
        }
        ;
        if (x instanceof Loaded && y instanceof Loaded) {
          return true;
        }
        ;
        if (x instanceof $$Error && y instanceof $$Error) {
          return true;
        }
        ;
        return false;
      };
    }
  };
  var ordReadyState2 = {
    compare: function(x) {
      return function(y) {
        if (x instanceof None2 && y instanceof None2) {
          return EQ.value;
        }
        ;
        if (x instanceof None2) {
          return LT.value;
        }
        ;
        if (y instanceof None2) {
          return GT.value;
        }
        ;
        if (x instanceof Loading3 && y instanceof Loading3) {
          return EQ.value;
        }
        ;
        if (x instanceof Loading3) {
          return LT.value;
        }
        ;
        if (y instanceof Loading3) {
          return GT.value;
        }
        ;
        if (x instanceof Loaded && y instanceof Loaded) {
          return EQ.value;
        }
        ;
        if (x instanceof Loaded) {
          return LT.value;
        }
        ;
        if (y instanceof Loaded) {
          return GT.value;
        }
        ;
        if (x instanceof $$Error && y instanceof $$Error) {
          return EQ.value;
        }
        ;
        throw new Error("Failed pattern match at Web.HTML.HTMLTrackElement.ReadyState (line 14, column 1 - line 14, column 48): " + [x.constructor.name, y.constructor.name]);
      };
    },
    Eq0: function() {
      return eqReadyState2;
    }
  };
  var enumReadyState2 = {
    succ: defaultSucc(toEnumReadyState2)(fromEnumReadyState2),
    pred: defaultPred(toEnumReadyState2)(fromEnumReadyState2),
    Ord0: function() {
      return ordReadyState2;
    }
  };
  var boundedReadyState2 = {
    bottom: None2.value,
    top: $$Error.value,
    Ord0: function() {
      return ordReadyState2;
    }
  };

  // output/Web.HTML.HTMLTrackElement/index.js
  var fromParentNode61 = unsafeReadProtoTagged("HTMLTrackElement");
  var fromNonDocumentTypeChildNode60 = unsafeReadProtoTagged("HTMLTrackElement");
  var fromNode61 = unsafeReadProtoTagged("HTMLTrackElement");
  var fromHTMLElement59 = unsafeReadProtoTagged("HTMLTrackElement");
  var fromEventTarget61 = unsafeReadProtoTagged("HTMLTrackElement");
  var fromElement60 = unsafeReadProtoTagged("HTMLTrackElement");
  var fromChildNode60 = unsafeReadProtoTagged("HTMLTrackElement");

  // output/Web.HTML.HTMLUListElement/index.js
  var fromParentNode62 = unsafeReadProtoTagged("HTMLUListElement");
  var fromNonDocumentTypeChildNode61 = unsafeReadProtoTagged("HTMLUListElement");
  var fromNode62 = unsafeReadProtoTagged("HTMLUListElement");
  var fromHTMLElement60 = unsafeReadProtoTagged("HTMLUListElement");
  var fromEventTarget62 = unsafeReadProtoTagged("HTMLUListElement");
  var fromElement61 = unsafeReadProtoTagged("HTMLUListElement");
  var fromChildNode61 = unsafeReadProtoTagged("HTMLUListElement");

  // output/Web.HTML.HTMLVideoElement/index.js
  var fromParentNode63 = unsafeReadProtoTagged("HTMLVideoElement");
  var fromNonDocumentTypeChildNode62 = unsafeReadProtoTagged("HTMLVideoElement");
  var fromNode63 = unsafeReadProtoTagged("HTMLVideoElement");
  var fromHTMLMediaElement2 = unsafeReadProtoTagged("HTMLVideoElement");
  var fromHTMLElement61 = unsafeReadProtoTagged("HTMLVideoElement");
  var fromEventTarget63 = unsafeReadProtoTagged("HTMLVideoElement");
  var fromElement62 = unsafeReadProtoTagged("HTMLVideoElement");
  var fromChildNode62 = unsafeReadProtoTagged("HTMLVideoElement");

  // output/Web.HTML.Window/foreign.js
  var document = function(window2) {
    return function() {
      return window2.document;
    };
  };

  // output/Web.HTML.Window/index.js
  var toEventTarget = unsafeCoerce2;
  var fromEventTarget64 = unsafeReadProtoTagged("Window");

  // output/Halogen.Aff.Util/index.js
  var selectElement = function(query2) {
    return bind(bindAff)(liftEffect(monadEffectAff)(bindFlipped(bindEffect)(composeKleisliFlipped(bindEffect)(function() {
      var $2 = querySelector(query2);
      return function($3) {
        return $2(toParentNode($3));
      };
    }())(document))(_window)))(function(mel) {
      return pure(applicativeAff)(bindFlipped(bindMaybe)(fromElement14)(mel));
    });
  };
  var runHalogenAff = runAff_(either(throwException)($$const(pure(applicativeEffect)(unit))));
  var awaitLoad = makeAff(function(callback) {
    return function __do2() {
      var rs = bindFlipped(bindEffect)(readyState)(bindFlipped(bindEffect)(document)(_window))();
      if (rs instanceof Loading) {
        var et = map(functorEffect)(toEventTarget)(_window)();
        var listener = eventListener(function(v) {
          return callback(/* @__PURE__ */ new Right(unit));
        })();
        addEventListener2(domcontentloaded)(listener)(false)(et)();
        return effectCanceler(removeEventListener2(domcontentloaded)(listener)(false)(et));
      }
      ;
      callback(/* @__PURE__ */ new Right(unit))();
      return nonCanceler;
    };
  });
  var awaitBody = discard(discardUnit)(bindAff)(awaitLoad)(function() {
    return bind(bindAff)(selectElement("body"))(function(body3) {
      return maybe(throwError(monadThrowAff)(error("Could not find body")))(pure(applicativeAff))(body3);
    });
  });

  // output/Control.Monad.Fork.Class/index.js
  var Completed = function() {
    function Completed2(value0) {
      this.value0 = value0;
    }
    ;
    Completed2.create = function(value0) {
      return new Completed2(value0);
    };
    return Completed2;
  }();
  var Failed = function() {
    function Failed2(value0) {
      this.value0 = value0;
    }
    ;
    Failed2.create = function(value0) {
      return new Failed2(value0);
    };
    return Failed2;
  }();
  var Killed = function() {
    function Killed2(value0) {
      this.value0 = value0;
    }
    ;
    Killed2.create = function(value0) {
      return new Killed2(value0);
    };
    return Killed2;
  }();
  var monadForkAff = {
    suspend: suspendAff,
    fork: forkAff,
    join: joinFiber,
    Monad0: function() {
      return monadAff;
    },
    Functor1: function() {
      return functorFiber;
    }
  };
  var fork = function(dict) {
    return dict.fork;
  };

  // output/Effect.Console/foreign.js
  var warn = function(s) {
    return function() {
      console.warn(s);
    };
  };

  // output/Halogen.HTML.Properties/index.js
  var ref2 = function() {
    var go2 = function(p2) {
      return function(mel) {
        return /* @__PURE__ */ new Just(/* @__PURE__ */ new RefUpdate(p2, mel));
      };
    };
    return function($9) {
      return ref(go2($9));
    };
  }();
  var prop2 = function(dictIsProp) {
    return prop(dictIsProp);
  };
  var readOnly3 = prop2(isPropBoolean)("readOnly");
  var rel4 = prop2(isPropString)("rel");
  var required4 = prop2(isPropBoolean)("required");
  var rowSpan2 = prop2(isPropInt)("rowSpan");
  var rows4 = prop2(isPropInt)("rows");
  var scope2 = prop2(isPropScopeValue)("scope");
  var selected2 = prop2(isPropBoolean)("selected");
  var selectedIndex2 = prop2(isPropInt)("selectedIndex");
  var spellcheck2 = prop2(isPropBoolean)("spellcheck");
  var src9 = prop2(isPropString)("src");
  var step4 = prop2(isPropStepValue)("step");
  var tabIndex2 = prop2(isPropInt)("tabIndex");
  var target6 = prop2(isPropString)("target");
  var title4 = prop2(isPropString)("title");
  var value12 = prop2(isPropString)("value");
  var width8 = prop2(isPropInt)("width");
  var preload2 = prop2(isPropPreloadValue)("preload");
  var poster2 = prop2(isPropString)("poster");
  var placeholder3 = prop2(isPropString)("placeholder");
  var pattern2 = prop2(isPropString)("pattern");
  var noValidate2 = prop2(isPropBoolean)("noValidate");
  var name15 = prop2(isPropString)("name");
  var muted2 = prop2(isPropBoolean)("muted");
  var multiple3 = prop2(isPropBoolean)("multiple");
  var min5 = prop2(isPropNumber)("min");
  var method2 = prop2(isPropFormMethod)("method");
  var max6 = prop2(isPropNumber)("max");
  var loop2 = prop2(isPropBoolean)("loop");
  var id2 = prop2(isPropString)("id");
  var href4 = prop2(isPropString)("href");
  var height8 = prop2(isPropInt)("height");
  var $$for = prop2(isPropString)("htmlFor");
  var enctype2 = prop2(isPropMediaType)("enctype");
  var draggable2 = prop2(isPropBoolean)("draggable");
  var download3 = prop2(isPropString)("download");
  var disabled10 = prop2(isPropBoolean)("disabled");
  var enabled = function() {
    var $10 = not(heytingAlgebraBoolean);
    return function($11) {
      return disabled10($10($11));
    };
  }();
  var controls2 = prop2(isPropBoolean)("controls");
  var cols2 = prop2(isPropInt)("cols");
  var colSpan2 = prop2(isPropInt)("colSpan");
  var classes = function() {
    var $12 = prop2(isPropString)("className");
    var $13 = joinWith(" ");
    var $14 = map(functorArray)(unwrap());
    return function($15) {
      return $12($13($14($15)));
    };
  }();
  var class_ = function() {
    var $16 = prop2(isPropString)("className");
    var $17 = unwrap();
    return function($18) {
      return $16($17($18));
    };
  }();
  var checked2 = prop2(isPropBoolean)("checked");
  var charset2 = prop2(isPropString)("charset");
  var autoplay2 = prop2(isPropBoolean)("autoplay");
  var autofocus6 = prop2(isPropBoolean)("autofocus");
  var autocomplete4 = function() {
    var $19 = prop2(isPropOnOff)("autocomplete");
    return function($20) {
      return $19(function(b2) {
        if (b2) {
          return On.value;
        }
        ;
        return Off.value;
      }($20));
    };
  }();
  var attrNS = function() {
    var $21 = pure(applicativeMaybe);
    return function($22) {
      return attr($21($22));
    };
  }();
  var attr2 = attr(Nothing.value);
  var list2 = attr2("list");
  var style2 = attr2("style");
  var alt5 = prop2(isPropString)("alt");
  var action2 = prop2(isPropString)("action");
  var accept2 = prop2(isPropInputAcceptType)("accept");

  // output/Halogen.Query/index.js
  var getHTMLElementRef = function() {
    var $13 = map(functorHalogenM)(function(v) {
      return bindFlipped(bindMaybe)(fromElement14)(v);
    });
    return function($14) {
      return $13(getRef($14));
    };
  }();

  // output/Halogen.Aff.Driver.State/index.js
  var unRenderStateX = unsafeCoerce2;
  var unDriverStateX = unsafeCoerce2;
  var renderStateX_ = function(dictApplicative) {
    return function(f) {
      return unDriverStateX(function(st) {
        return traverse_(dictApplicative)(foldableMaybe)(f)(st.rendering);
      });
    };
  };
  var mkRenderStateX = unsafeCoerce2;
  var renderStateX = function(dictFunctor) {
    return function(f) {
      return unDriverStateX(function(st) {
        return mkRenderStateX(f(st.rendering));
      });
    };
  };
  var mkDriverStateXRef = unsafeCoerce2;
  var mapDriverState = function(f) {
    return function(v) {
      return f(v);
    };
  };
  var initDriverState = function(component2) {
    return function(input3) {
      return function(handler3) {
        return function(lchs) {
          return function __do2() {
            var selfRef = $$new({})();
            var childrenIn = $$new(empty3)();
            var childrenOut = $$new(empty3)();
            var handlerRef = $$new(handler3)();
            var pendingQueries = $$new(/* @__PURE__ */ new Just(Nil.value))();
            var pendingOuts = $$new(/* @__PURE__ */ new Just(Nil.value))();
            var pendingHandlers = $$new(Nothing.value)();
            var fresh2 = $$new(1)();
            var subscriptions = $$new(/* @__PURE__ */ new Just(empty2))();
            var forks = $$new(empty2)();
            var ds = {
              component: component2,
              state: component2.initialState(input3),
              refs: empty2,
              children: empty3,
              childrenIn,
              childrenOut,
              selfRef,
              handlerRef,
              pendingQueries,
              pendingOuts,
              pendingHandlers,
              rendering: Nothing.value,
              fresh: fresh2,
              subscriptions,
              forks,
              lifecycleHandlers: lchs
            };
            write(ds)(selfRef)();
            return mkDriverStateXRef(selfRef);
          };
        };
      };
    };
  };

  // output/Halogen.Aff.Driver.Eval/index.js
  var unsubscribe3 = function(sid) {
    return function(ref3) {
      return function __do2() {
        var v = read(ref3)();
        var subs = read(v.subscriptions)();
        return traverse_(applicativeEffect)(foldableMaybe)(unsubscribe)(bindFlipped(bindMaybe)(lookup(ordSubscriptionId)(sid))(subs))();
      };
    };
  };
  var queueOrRun = function(ref3) {
    return function(au) {
      return bind(bindAff)(liftEffect(monadEffectAff)(read(ref3)))(function(v) {
        if (v instanceof Nothing) {
          return au;
        }
        ;
        if (v instanceof Just) {
          return liftEffect(monadEffectAff)(write(/* @__PURE__ */ new Just(/* @__PURE__ */ new Cons(au, v.value0)))(ref3));
        }
        ;
        throw new Error("Failed pattern match at Halogen.Aff.Driver.Eval (line 182, column 33 - line 184, column 57): " + [v.constructor.name]);
      });
    };
  };
  var handleLifecycle = function(lchs) {
    return function(f) {
      return discard(discardUnit)(bindAff)(liftEffect(monadEffectAff)(write({
        initializers: Nil.value,
        finalizers: Nil.value
      })(lchs)))(function() {
        return bind(bindAff)(liftEffect(monadEffectAff)(f))(function(result) {
          return bind(bindAff)(liftEffect(monadEffectAff)(read(lchs)))(function(v) {
            return discard(discardUnit)(bindAff)(traverse_(applicativeAff)(foldableList)(fork(monadForkAff))(v.finalizers))(function() {
              return discard(discardUnit)(bindAff)(parSequence_(parallelAff)(foldableList)(v.initializers))(function() {
                return pure(applicativeAff)(result);
              });
            });
          });
        });
      });
    };
  };
  var handleAff = runAff_(either(throwException)($$const(pure(applicativeEffect)(unit))));
  var fresh = function(f) {
    return function(ref3) {
      return bind(bindAff)(liftEffect(monadEffectAff)(read(ref3)))(function(v) {
        return liftEffect(monadEffectAff)(modify$prime(function(i2) {
          return {
            state: i2 + 1 | 0,
            value: f(i2)
          };
        })(v.fresh));
      });
    };
  };
  var evalQ = function(render2) {
    return function(ref3) {
      return function(q2) {
        return bind(bindAff)(liftEffect(monadEffectAff)(read(ref3)))(function(v) {
          return evalM(render2)(ref3)(v["component"]["eval"](/* @__PURE__ */ new Query(map(functorCoyoneda)(Just.create)(liftCoyoneda(q2)), $$const(Nothing.value))));
        });
      };
    };
  };
  var evalM = function(render2) {
    return function(initRef) {
      return function(v) {
        var evalChildQuery = function(ref3) {
          return function(cqb) {
            return bind(bindAff)(liftEffect(monadEffectAff)(read(ref3)))(function(v1) {
              return unChildQueryBox(function(v2) {
                var evalChild = function(v3) {
                  return parallel(parallelAff)(bind(bindAff)(liftEffect(monadEffectAff)(read(v3)))(function(dsx) {
                    return unDriverStateX(function(ds) {
                      return evalQ(render2)(ds.selfRef)(v2.value1);
                    })(dsx);
                  }));
                };
                return map(functorAff)(v2.value2)(sequential(parallelAff)(v2.value0(applicativeParAff)(evalChild)(v1.children)));
              })(cqb);
            });
          };
        };
        var go2 = function(ref3) {
          return function(v1) {
            if (v1 instanceof State) {
              return bind(bindAff)(liftEffect(monadEffectAff)(read(ref3)))(function(v2) {
                var v3 = v1.value0(v2.state);
                if (unsafeRefEq(v2.state)(v3.value1)) {
                  return pure(applicativeAff)(v3.value0);
                }
                ;
                if (otherwise) {
                  return discard(discardUnit)(bindAff)(liftEffect(monadEffectAff)(write({
                    component: v2.component,
                    state: v3.value1,
                    refs: v2.refs,
                    children: v2.children,
                    childrenIn: v2.childrenIn,
                    childrenOut: v2.childrenOut,
                    selfRef: v2.selfRef,
                    handlerRef: v2.handlerRef,
                    pendingQueries: v2.pendingQueries,
                    pendingOuts: v2.pendingOuts,
                    pendingHandlers: v2.pendingHandlers,
                    rendering: v2.rendering,
                    fresh: v2.fresh,
                    subscriptions: v2.subscriptions,
                    forks: v2.forks,
                    lifecycleHandlers: v2.lifecycleHandlers
                  })(ref3)))(function() {
                    return discard(discardUnit)(bindAff)(handleLifecycle(v2.lifecycleHandlers)(render2(v2.lifecycleHandlers)(ref3)))(function() {
                      return pure(applicativeAff)(v3.value0);
                    });
                  });
                }
                ;
                throw new Error("Failed pattern match at Halogen.Aff.Driver.Eval (line 86, column 7 - line 92, column 21): " + [v3.constructor.name]);
              });
            }
            ;
            if (v1 instanceof Subscribe) {
              return bind(bindAff)(fresh(SubscriptionId)(ref3))(function(sid) {
                return bind(bindAff)(liftEffect(monadEffectAff)(subscribe(v1.value0(sid))(function(act) {
                  return handleAff(evalF(render2)(ref3)(/* @__PURE__ */ new Action(act)));
                })))(function(finalize) {
                  return bind(bindAff)(liftEffect(monadEffectAff)(read(ref3)))(function(v2) {
                    return discard(discardUnit)(bindAff)(liftEffect(monadEffectAff)(modify_2(map(functorMaybe)(insert(ordSubscriptionId)(sid)(finalize)))(v2.subscriptions)))(function() {
                      return pure(applicativeAff)(v1.value1(sid));
                    });
                  });
                });
              });
            }
            ;
            if (v1 instanceof Unsubscribe) {
              return discard(discardUnit)(bindAff)(liftEffect(monadEffectAff)(unsubscribe3(v1.value0)(ref3)))(function() {
                return pure(applicativeAff)(v1.value1);
              });
            }
            ;
            if (v1 instanceof Lift2) {
              return v1.value0;
            }
            ;
            if (v1 instanceof ChildQuery2) {
              return evalChildQuery(ref3)(v1.value0);
            }
            ;
            if (v1 instanceof Raise) {
              return bind(bindAff)(liftEffect(monadEffectAff)(read(ref3)))(function(v2) {
                return bind(bindAff)(liftEffect(monadEffectAff)(read(v2.handlerRef)))(function(handler3) {
                  return discard(discardUnit)(bindAff)(queueOrRun(v2.pendingOuts)(handler3(v1.value0)))(function() {
                    return pure(applicativeAff)(v1.value1);
                  });
                });
              });
            }
            ;
            if (v1 instanceof Par) {
              return sequential(parallelAff)(retractFreeAp(applicativeParAff)(hoistFreeAp(function() {
                var $78 = parallel(parallelAff);
                var $79 = evalM(render2)(ref3);
                return function($80) {
                  return $78($79($80));
                };
              }())(v1.value0)));
            }
            ;
            if (v1 instanceof Fork) {
              return bind(bindAff)(fresh(ForkId)(ref3))(function(fid) {
                return bind(bindAff)(liftEffect(monadEffectAff)(read(ref3)))(function(v2) {
                  return bind(bindAff)(liftEffect(monadEffectAff)($$new(false)))(function(doneRef) {
                    return bind(bindAff)(fork(monadForkAff)($$finally(liftEffect(monadEffectAff)(function __do2() {
                      modify_2($$delete(ordForkId)(fid))(v2.forks)();
                      return write(true)(doneRef)();
                    }))(evalM(render2)(ref3)(v1.value0))))(function(fiber) {
                      return discard(discardUnit)(bindAff)(liftEffect(monadEffectAff)(unlessM(monadEffect)(read(doneRef))(modify_2(insert(ordForkId)(fid)(fiber))(v2.forks))))(function() {
                        return pure(applicativeAff)(v1.value1(fid));
                      });
                    });
                  });
                });
              });
            }
            ;
            if (v1 instanceof Kill) {
              return bind(bindAff)(liftEffect(monadEffectAff)(read(ref3)))(function(v2) {
                return bind(bindAff)(liftEffect(monadEffectAff)(read(v2.forks)))(function(forkMap) {
                  return discard(discardUnit)(bindAff)(traverse_(applicativeAff)(foldableMaybe)(killFiber(error("Cancelled")))(lookup(ordForkId)(v1.value0)(forkMap)))(function() {
                    return pure(applicativeAff)(v1.value1);
                  });
                });
              });
            }
            ;
            if (v1 instanceof GetRef) {
              return bind(bindAff)(liftEffect(monadEffectAff)(read(ref3)))(function(v2) {
                return pure(applicativeAff)(v1.value1(lookup(ordString)(v1.value0)(v2.refs)));
              });
            }
            ;
            throw new Error("Failed pattern match at Halogen.Aff.Driver.Eval (line 83, column 12 - line 133, column 33): " + [v1.constructor.name]);
          };
        };
        return foldFree(monadRecAff)(go2(initRef))(v);
      };
    };
  };
  var evalF = function(render2) {
    return function(ref3) {
      return function(v) {
        if (v instanceof RefUpdate) {
          return liftEffect(monadEffectAff)(flip(modify_2)(ref3)(mapDriverState(function(st) {
            return {
              component: st.component,
              state: st.state,
              refs: alter(ordString)($$const(v.value1))(v.value0)(st.refs),
              children: st.children,
              childrenIn: st.childrenIn,
              childrenOut: st.childrenOut,
              selfRef: st.selfRef,
              handlerRef: st.handlerRef,
              pendingQueries: st.pendingQueries,
              pendingOuts: st.pendingOuts,
              pendingHandlers: st.pendingHandlers,
              rendering: st.rendering,
              fresh: st.fresh,
              subscriptions: st.subscriptions,
              forks: st.forks,
              lifecycleHandlers: st.lifecycleHandlers
            };
          })));
        }
        ;
        if (v instanceof Action) {
          return bind(bindAff)(liftEffect(monadEffectAff)(read(ref3)))(function(v1) {
            return evalM(render2)(ref3)(v1["component"]["eval"](/* @__PURE__ */ new Action2(v.value0, unit)));
          });
        }
        ;
        throw new Error("Failed pattern match at Halogen.Aff.Driver.Eval (line 52, column 20 - line 58, column 62): " + [v.constructor.name]);
      };
    };
  };

  // output/Halogen.Aff.Driver/index.js
  var newLifecycleHandlers = $$new({
    initializers: Nil.value,
    finalizers: Nil.value
  });
  var handlePending = function(ref3) {
    return function __do2() {
      var queue = read(ref3)();
      write(Nothing.value)(ref3)();
      return for_(applicativeEffect)(foldableMaybe)(queue)(function() {
        var $28 = traverse_(applicativeAff)(foldableList)(fork(monadForkAff));
        return function($29) {
          return handleAff($28(reverse($29)));
        };
      }())();
    };
  };
  var cleanupSubscriptionsAndForks = function(v) {
    return function __do2() {
      bindFlipped(bindEffect)(traverse_(applicativeEffect)(foldableMaybe)(traverse_(applicativeEffect)(foldableMap)(unsubscribe)))(read(v.subscriptions))();
      write(Nothing.value)(v.subscriptions)();
      bindFlipped(bindEffect)(traverse_(applicativeEffect)(foldableMap)(function() {
        var $30 = killFiber(error("finalized"));
        return function($31) {
          return handleAff($30($31));
        };
      }()))(read(v.forks))();
      return write(empty2)(v.forks)();
    };
  };
  var runUI = function(renderSpec2) {
    return function(component2) {
      return function(i2) {
        var squashChildInitializers = function(lchs) {
          return function(preInits) {
            return unDriverStateX(function(st) {
              var parentInitializer = evalM(render2)(st.selfRef)(st["component"]["eval"](/* @__PURE__ */ new Initialize(unit)));
              return modify_2(function(handlers) {
                return {
                  initializers: /* @__PURE__ */ new Cons(discard(discardUnit)(bindAff)(parSequence_(parallelAff)(foldableList)(reverse(handlers.initializers)))(function() {
                    return discard(discardUnit)(bindAff)(parentInitializer)(function() {
                      return liftEffect(monadEffectAff)(function __do2() {
                        handlePending(st.pendingQueries)();
                        return handlePending(st.pendingOuts)();
                      });
                    });
                  }), preInits),
                  finalizers: handlers.finalizers
                };
              })(lchs);
            });
          };
        };
        var runComponent = function(lchs) {
          return function(handler3) {
            return function(j) {
              return unComponent(function(c) {
                return function __do2() {
                  var lchs$prime = newLifecycleHandlers();
                  var $$var2 = initDriverState(c)(j)(handler3)(lchs$prime)();
                  var pre2 = read(lchs)();
                  write({
                    initializers: Nil.value,
                    finalizers: pre2.finalizers
                  })(lchs)();
                  bindFlipped(bindEffect)(unDriverStateX(function() {
                    var $32 = render2(lchs);
                    return function($33) {
                      return $32(function(v) {
                        return v.selfRef;
                      }($33));
                    };
                  }()))(read($$var2))();
                  bindFlipped(bindEffect)(squashChildInitializers(lchs)(pre2.initializers))(read($$var2))();
                  return $$var2;
                };
              });
            };
          };
        };
        var renderChild = function(lchs) {
          return function(handler3) {
            return function(childrenInRef) {
              return function(childrenOutRef) {
                return unComponentSlot(function(slot) {
                  return function __do2() {
                    var childrenIn = map(functorEffect)(slot.pop)(read(childrenInRef))();
                    var $$var2 = function() {
                      if (childrenIn instanceof Just) {
                        write(childrenIn.value0.value1)(childrenInRef)();
                        var dsx = read(childrenIn.value0.value0)();
                        unDriverStateX(function(st) {
                          return function __do3() {
                            flip(write)(st.handlerRef)(function() {
                              var $34 = maybe(pure(applicativeAff)(unit))(handler3);
                              return function($35) {
                                return $34(slot.output($35));
                              };
                            }())();
                            return handleAff(evalM(render2)(st.selfRef)(st["component"]["eval"](/* @__PURE__ */ new Receive(slot.input, unit))))();
                          };
                        })(dsx)();
                        return childrenIn.value0.value0;
                      }
                      ;
                      if (childrenIn instanceof Nothing) {
                        return runComponent(lchs)(function() {
                          var $36 = maybe(pure(applicativeAff)(unit))(handler3);
                          return function($37) {
                            return $36(slot.output($37));
                          };
                        }())(slot.input)(slot.component)();
                      }
                      ;
                      throw new Error("Failed pattern match at Halogen.Aff.Driver (line 210, column 14 - line 219, column 98): " + [childrenIn.constructor.name]);
                    }();
                    var isDuplicate = map(functorEffect)(function($38) {
                      return isJust(slot.get($38));
                    })(read(childrenOutRef))();
                    when(applicativeEffect)(isDuplicate)(warn("Halogen: Duplicate slot address was detected during rendering, unexpected results may occur"))();
                    modify_2(slot.set($$var2))(childrenOutRef)();
                    return bind(bindEffect)(read($$var2))(renderStateX(functorEffect)(function(v) {
                      if (v instanceof Nothing) {
                        return $$throw("Halogen internal error: child was not initialized in renderChild");
                      }
                      ;
                      if (v instanceof Just) {
                        return pure(applicativeEffect)(renderSpec2.renderChild(v.value0));
                      }
                      ;
                      throw new Error("Failed pattern match at Halogen.Aff.Driver (line 224, column 37 - line 226, column 50): " + [v.constructor.name]);
                    }))();
                  };
                });
              };
            };
          };
        };
        var render2 = function(lchs) {
          return function($$var2) {
            return function __do2() {
              var v = read($$var2)();
              var shouldProcessHandlers = map(functorEffect)(isNothing)(read(v.pendingHandlers))();
              when(applicativeEffect)(shouldProcessHandlers)(write(/* @__PURE__ */ new Just(Nil.value))(v.pendingHandlers))();
              write(empty3)(v.childrenOut)();
              write(v.children)(v.childrenIn)();
              var selfRef = identity(categoryFn)(v.selfRef);
              var pendingQueries = identity(categoryFn)(v.pendingQueries);
              var pendingHandlers = identity(categoryFn)(v.pendingHandlers);
              var handler3 = function() {
                var $39 = queueOrRun(pendingHandlers);
                var $40 = $$void(functorAff);
                var $41 = evalF(render2)(selfRef);
                return function($42) {
                  return $39($40($41($42)));
                };
              }();
              var childHandler = function() {
                var $43 = queueOrRun(pendingQueries);
                return function($44) {
                  return $43(handler3(Action.create($44)));
                };
              }();
              var rendering = renderSpec2.render(function($45) {
                return handleAff(handler3($45));
              })(renderChild(lchs)(childHandler)(v.childrenIn)(v.childrenOut))(v.component.render(v.state))(v.rendering)();
              var children2 = read(v.childrenOut)();
              var childrenIn = read(v.childrenIn)();
              foreachSlot(applicativeEffect)(childrenIn)(function(v1) {
                return function __do3() {
                  var childDS = read(v1)();
                  renderStateX_(applicativeEffect)(renderSpec2.removeChild)(childDS)();
                  return finalize(lchs)(childDS)();
                };
              })();
              flip(modify_2)(v.selfRef)(mapDriverState(function(ds$prime) {
                return {
                  component: ds$prime.component,
                  state: ds$prime.state,
                  refs: ds$prime.refs,
                  children: children2,
                  childrenIn: ds$prime.childrenIn,
                  childrenOut: ds$prime.childrenOut,
                  selfRef: ds$prime.selfRef,
                  handlerRef: ds$prime.handlerRef,
                  pendingQueries: ds$prime.pendingQueries,
                  pendingOuts: ds$prime.pendingOuts,
                  pendingHandlers: ds$prime.pendingHandlers,
                  rendering: /* @__PURE__ */ new Just(rendering),
                  fresh: ds$prime.fresh,
                  subscriptions: ds$prime.subscriptions,
                  forks: ds$prime.forks,
                  lifecycleHandlers: ds$prime.lifecycleHandlers
                };
              }))();
              return when(applicativeEffect)(shouldProcessHandlers)(flip(tailRecM(monadRecEffect))(unit)(function(v1) {
                return function __do3() {
                  var handlers = read(pendingHandlers)();
                  write(/* @__PURE__ */ new Just(Nil.value))(pendingHandlers)();
                  traverse_(applicativeEffect)(foldableMaybe)(function() {
                    var $46 = traverse_(applicativeAff)(foldableList)(fork(monadForkAff));
                    return function($47) {
                      return handleAff($46(reverse($47)));
                    };
                  }())(handlers)();
                  var mmore = read(pendingHandlers)();
                  var $21 = maybe(false)($$null)(mmore);
                  if ($21) {
                    return voidLeft(functorEffect)(write(Nothing.value)(pendingHandlers))(/* @__PURE__ */ new Done(unit))();
                  }
                  ;
                  return /* @__PURE__ */ new Loop(unit);
                };
              }))();
            };
          };
        };
        var finalize = function(lchs) {
          return unDriverStateX(function(st) {
            return function __do2() {
              cleanupSubscriptionsAndForks(st)();
              var f = evalM(render2)(st.selfRef)(st["component"]["eval"](/* @__PURE__ */ new Finalize(unit)));
              modify_2(function(handlers) {
                return {
                  initializers: handlers.initializers,
                  finalizers: /* @__PURE__ */ new Cons(f, handlers.finalizers)
                };
              })(lchs)();
              return foreachSlot(applicativeEffect)(st.children)(function(v) {
                return function __do3() {
                  var dsx = read(v)();
                  return finalize(lchs)(dsx)();
                };
              })();
            };
          });
        };
        var evalDriver = function(disposed) {
          return function(ref3) {
            return function(q2) {
              return bind(bindAff)(liftEffect(monadEffectAff)(read(disposed)))(function(v) {
                if (v) {
                  return pure(applicativeAff)(Nothing.value);
                }
                ;
                return evalQ(render2)(ref3)(q2);
              });
            };
          };
        };
        var dispose = function(disposed) {
          return function(lchs) {
            return function(dsx) {
              return handleLifecycle(lchs)(function __do2() {
                var v = read(disposed)();
                if (v) {
                  return unit;
                }
                ;
                write(true)(disposed)();
                finalize(lchs)(dsx)();
                return unDriverStateX(function(v1) {
                  return function __do3() {
                    var v2 = liftEffect(monadEffectEffect)(read(v1.selfRef))();
                    return for_(applicativeEffect)(foldableMaybe)(v2.rendering)(renderSpec2.dispose)();
                  };
                })(dsx)();
              });
            };
          };
        };
        return bind(bindAff)(liftEffect(monadEffectAff)(newLifecycleHandlers))(function(lchs) {
          return bind(bindAff)(liftEffect(monadEffectAff)($$new(false)))(function(disposed) {
            return handleLifecycle(lchs)(function __do2() {
              var sio = create();
              var dsx = bindFlipped(bindEffect)(read)(runComponent(lchs)(function() {
                var $48 = liftEffect(monadEffectAff);
                var $49 = notify(sio.listener);
                return function($50) {
                  return $48($49($50));
                };
              }())(i2)(component2))();
              return unDriverStateX(function(st) {
                return pure(applicativeEffect)({
                  query: evalDriver(disposed)(st.selfRef),
                  messages: sio.emitter,
                  dispose: dispose(disposed)(lchs)(dsx)
                });
              })(dsx)();
            });
          });
        });
      };
    };
  };

  // output/Web.DOM.Node/foreign.js
  var getEffProp2 = function(name16) {
    return function(node) {
      return function() {
        return node[name16];
      };
    };
  };
  var baseURI = getEffProp2("baseURI");
  var _ownerDocument = getEffProp2("ownerDocument");
  var _parentNode = getEffProp2("parentNode");
  var _parentElement = getEffProp2("parentElement");
  var childNodes = getEffProp2("childNodes");
  var _firstChild = getEffProp2("firstChild");
  var _lastChild = getEffProp2("lastChild");
  var _previousSibling = getEffProp2("previousSibling");
  var _nextSibling = getEffProp2("nextSibling");
  var _nodeValue = getEffProp2("nodeValue");
  var textContent = getEffProp2("textContent");
  var insertBefore = function(node1) {
    return function(node2) {
      return function(parent2) {
        return function() {
          parent2.insertBefore(node1, node2);
        };
      };
    };
  };
  var appendChild = function(node) {
    return function(parent2) {
      return function() {
        parent2.appendChild(node);
      };
    };
  };
  var removeChild2 = function(node) {
    return function(parent2) {
      return function() {
        parent2.removeChild(node);
      };
    };
  };

  // output/Web.DOM.NodeType/index.js
  var ElementNode = function() {
    function ElementNode2() {
    }
    ;
    ElementNode2.value = new ElementNode2();
    return ElementNode2;
  }();
  var AttributeNode = function() {
    function AttributeNode2() {
    }
    ;
    AttributeNode2.value = new AttributeNode2();
    return AttributeNode2;
  }();
  var TextNode = function() {
    function TextNode2() {
    }
    ;
    TextNode2.value = new TextNode2();
    return TextNode2;
  }();
  var CDATASectionNode = function() {
    function CDATASectionNode2() {
    }
    ;
    CDATASectionNode2.value = new CDATASectionNode2();
    return CDATASectionNode2;
  }();
  var EntityReferenceNode = function() {
    function EntityReferenceNode2() {
    }
    ;
    EntityReferenceNode2.value = new EntityReferenceNode2();
    return EntityReferenceNode2;
  }();
  var EntityNode = function() {
    function EntityNode2() {
    }
    ;
    EntityNode2.value = new EntityNode2();
    return EntityNode2;
  }();
  var ProcessingInstructionNode = function() {
    function ProcessingInstructionNode2() {
    }
    ;
    ProcessingInstructionNode2.value = new ProcessingInstructionNode2();
    return ProcessingInstructionNode2;
  }();
  var CommentNode = function() {
    function CommentNode2() {
    }
    ;
    CommentNode2.value = new CommentNode2();
    return CommentNode2;
  }();
  var DocumentNode = function() {
    function DocumentNode2() {
    }
    ;
    DocumentNode2.value = new DocumentNode2();
    return DocumentNode2;
  }();
  var DocumentTypeNode = function() {
    function DocumentTypeNode2() {
    }
    ;
    DocumentTypeNode2.value = new DocumentTypeNode2();
    return DocumentTypeNode2;
  }();
  var DocumentFragmentNode = function() {
    function DocumentFragmentNode2() {
    }
    ;
    DocumentFragmentNode2.value = new DocumentFragmentNode2();
    return DocumentFragmentNode2;
  }();
  var NotationNode = function() {
    function NotationNode2() {
    }
    ;
    NotationNode2.value = new NotationNode2();
    return NotationNode2;
  }();
  var toEnumNodeType = function(v) {
    if (v === 1) {
      return /* @__PURE__ */ new Just(ElementNode.value);
    }
    ;
    if (v === 2) {
      return /* @__PURE__ */ new Just(AttributeNode.value);
    }
    ;
    if (v === 3) {
      return /* @__PURE__ */ new Just(TextNode.value);
    }
    ;
    if (v === 4) {
      return /* @__PURE__ */ new Just(CDATASectionNode.value);
    }
    ;
    if (v === 5) {
      return /* @__PURE__ */ new Just(EntityReferenceNode.value);
    }
    ;
    if (v === 6) {
      return /* @__PURE__ */ new Just(EntityNode.value);
    }
    ;
    if (v === 7) {
      return /* @__PURE__ */ new Just(ProcessingInstructionNode.value);
    }
    ;
    if (v === 8) {
      return /* @__PURE__ */ new Just(CommentNode.value);
    }
    ;
    if (v === 9) {
      return /* @__PURE__ */ new Just(DocumentNode.value);
    }
    ;
    if (v === 10) {
      return /* @__PURE__ */ new Just(DocumentTypeNode.value);
    }
    ;
    if (v === 11) {
      return /* @__PURE__ */ new Just(DocumentFragmentNode.value);
    }
    ;
    if (v === 12) {
      return /* @__PURE__ */ new Just(NotationNode.value);
    }
    ;
    return Nothing.value;
  };
  var fromEnumNodeType = function(v) {
    if (v instanceof ElementNode) {
      return 1;
    }
    ;
    if (v instanceof AttributeNode) {
      return 2;
    }
    ;
    if (v instanceof TextNode) {
      return 3;
    }
    ;
    if (v instanceof CDATASectionNode) {
      return 4;
    }
    ;
    if (v instanceof EntityReferenceNode) {
      return 5;
    }
    ;
    if (v instanceof EntityNode) {
      return 6;
    }
    ;
    if (v instanceof ProcessingInstructionNode) {
      return 7;
    }
    ;
    if (v instanceof CommentNode) {
      return 8;
    }
    ;
    if (v instanceof DocumentNode) {
      return 9;
    }
    ;
    if (v instanceof DocumentTypeNode) {
      return 10;
    }
    ;
    if (v instanceof DocumentFragmentNode) {
      return 11;
    }
    ;
    if (v instanceof NotationNode) {
      return 12;
    }
    ;
    throw new Error("Failed pattern match at Web.DOM.NodeType (line 68, column 1 - line 68, column 36): " + [v.constructor.name]);
  };
  var eqNodeType = {
    eq: function(x) {
      return function(y) {
        if (x instanceof ElementNode && y instanceof ElementNode) {
          return true;
        }
        ;
        if (x instanceof AttributeNode && y instanceof AttributeNode) {
          return true;
        }
        ;
        if (x instanceof TextNode && y instanceof TextNode) {
          return true;
        }
        ;
        if (x instanceof CDATASectionNode && y instanceof CDATASectionNode) {
          return true;
        }
        ;
        if (x instanceof EntityReferenceNode && y instanceof EntityReferenceNode) {
          return true;
        }
        ;
        if (x instanceof EntityNode && y instanceof EntityNode) {
          return true;
        }
        ;
        if (x instanceof ProcessingInstructionNode && y instanceof ProcessingInstructionNode) {
          return true;
        }
        ;
        if (x instanceof CommentNode && y instanceof CommentNode) {
          return true;
        }
        ;
        if (x instanceof DocumentNode && y instanceof DocumentNode) {
          return true;
        }
        ;
        if (x instanceof DocumentTypeNode && y instanceof DocumentTypeNode) {
          return true;
        }
        ;
        if (x instanceof DocumentFragmentNode && y instanceof DocumentFragmentNode) {
          return true;
        }
        ;
        if (x instanceof NotationNode && y instanceof NotationNode) {
          return true;
        }
        ;
        return false;
      };
    }
  };
  var ordNodeType = {
    compare: function(x) {
      return function(y) {
        return compare(ordInt)(fromEnumNodeType(x))(fromEnumNodeType(y));
      };
    },
    Eq0: function() {
      return eqNodeType;
    }
  };
  var enumNodeType = {
    succ: defaultSucc(toEnumNodeType)(fromEnumNodeType),
    pred: defaultPred(toEnumNodeType)(fromEnumNodeType),
    Ord0: function() {
      return ordNodeType;
    }
  };
  var boundedNodeType = {
    bottom: ElementNode.value,
    top: NotationNode.value,
    Ord0: function() {
      return ordNodeType;
    }
  };

  // output/Web.DOM.Node/index.js
  var previousSibling = function() {
    var $1 = map(functorEffect)(toMaybe);
    return function($2) {
      return $1(_previousSibling($2));
    };
  }();
  var parentNode2 = function() {
    var $3 = map(functorEffect)(toMaybe);
    return function($4) {
      return $3(_parentNode($4));
    };
  }();
  var parentElement = function() {
    var $5 = map(functorEffect)(toMaybe);
    return function($6) {
      return $5(_parentElement($6));
    };
  }();
  var ownerDocument = function() {
    var $7 = map(functorEffect)(toMaybe);
    return function($8) {
      return $7(_ownerDocument($8));
    };
  }();
  var nodeValue = function() {
    var $9 = map(functorEffect)(toMaybe);
    return function($10) {
      return $9(_nodeValue($10));
    };
  }();
  var nextSibling = function() {
    var $14 = map(functorEffect)(toMaybe);
    return function($15) {
      return $14(_nextSibling($15));
    };
  }();
  var lastChild = function() {
    var $22 = map(functorEffect)(toMaybe);
    return function($23) {
      return $22(_lastChild($23));
    };
  }();
  var fromEventTarget65 = unsafeReadProtoTagged("Node");
  var firstChild = function() {
    var $24 = map(functorEffect)(toMaybe);
    return function($25) {
      return $24(_firstChild($25));
    };
  }();

  // output/Halogen.VDom.Driver/index.js
  var substInParent = function(v) {
    return function(v1) {
      return function(v2) {
        if (v1 instanceof Just && v2 instanceof Just) {
          return $$void(functorEffect)(insertBefore(v)(v1.value0)(v2.value0));
        }
        ;
        if (v1 instanceof Nothing && v2 instanceof Just) {
          return $$void(functorEffect)(appendChild(v)(v2.value0));
        }
        ;
        return pure(applicativeEffect)(unit);
      };
    };
  };
  var removeChild3 = function(v) {
    return function __do2() {
      var npn = parentNode2(v.node)();
      return traverse_(applicativeEffect)(foldableMaybe)(function(pn) {
        return removeChild2(v.node)(pn);
      })(npn)();
    };
  };
  var mkSpec = function(handler3) {
    return function(renderChildRef) {
      return function(document2) {
        var getNode = unRenderStateX(function(v) {
          return v.node;
        });
        var done = function(st) {
          if (st instanceof Just) {
            return halt(st.value0);
          }
          ;
          return unit;
        };
        var buildWidget2 = function(spec) {
          var buildThunk2 = buildThunk(unwrap())(spec);
          var renderComponentSlot = function(cs) {
            var renderChild = read(renderChildRef)();
            var rsx = renderChild(cs)();
            var node = getNode(rsx);
            return mkStep(/* @__PURE__ */ new Step2(node, Nothing.value, patch, done));
          };
          var render2 = function(slot) {
            if (slot instanceof ComponentSlot) {
              return renderComponentSlot(slot.value0);
            }
            ;
            if (slot instanceof ThunkSlot) {
              var step5 = buildThunk2(slot.value0);
              return mkStep(/* @__PURE__ */ new Step2(extract2(step5), /* @__PURE__ */ new Just(step5), patch, done));
            }
            ;
            throw new Error("Failed pattern match at Halogen.VDom.Driver (line 85, column 7 - line 90, column 75): " + [slot.constructor.name]);
          };
          var patch = function(st, slot) {
            if (st instanceof Just) {
              if (slot instanceof ComponentSlot) {
                halt(st.value0);
                return renderComponentSlot(slot.value0);
              }
              ;
              if (slot instanceof ThunkSlot) {
                var step$prime = step2(st.value0, slot.value0);
                return mkStep(/* @__PURE__ */ new Step2(extract2(step$prime), /* @__PURE__ */ new Just(step$prime), patch, done));
              }
              ;
              throw new Error("Failed pattern match at Halogen.VDom.Driver (line 98, column 22 - line 104, column 79): " + [slot.constructor.name]);
            }
            ;
            return render2(slot);
          };
          return render2;
        };
        var buildAttributes = buildProp(handler3);
        return {
          buildWidget: buildWidget2,
          buildAttributes,
          document: document2
        };
      };
    };
  };
  var renderSpec = function(document2) {
    return function(container) {
      var render2 = function(handler3) {
        return function(child) {
          return function(v) {
            return function(v1) {
              if (v1 instanceof Nothing) {
                return function __do2() {
                  var renderChildRef = $$new(child)();
                  var spec = mkSpec(handler3)(renderChildRef)(document2);
                  var machine = buildVDom(spec)(v);
                  var node = extract2(machine);
                  $$void(functorEffect)(appendChild(node)(toNode2(container)))();
                  return {
                    machine,
                    node,
                    renderChildRef
                  };
                };
              }
              ;
              if (v1 instanceof Just) {
                return function __do2() {
                  write(child)(v1.value0.renderChildRef)();
                  var parent2 = parentNode2(v1.value0.node)();
                  var nextSib = nextSibling(v1.value0.node)();
                  var machine$prime = step2(v1.value0.machine, v);
                  var newNode = extract2(machine$prime);
                  when(applicativeEffect)(not(heytingAlgebraFunction(heytingAlgebraFunction(heytingAlgebraBoolean)))(unsafeRefEq)(v1.value0.node)(newNode))(substInParent(newNode)(nextSib)(parent2))();
                  return {
                    machine: machine$prime,
                    node: newNode,
                    renderChildRef: v1.value0.renderChildRef
                  };
                };
              }
              ;
              throw new Error("Failed pattern match at Halogen.VDom.Driver (line 159, column 5 - line 175, column 80): " + [v1.constructor.name]);
            };
          };
        };
      };
      return {
        render: render2,
        renderChild: identity(categoryFn),
        removeChild: removeChild3,
        dispose: removeChild3
      };
    };
  };
  var runUI2 = function(component2) {
    return function(i2) {
      return function(element3) {
        return bind(bindAff)(liftEffect(monadEffectAff)(map(functorEffect)(toDocument)(bindFlipped(bindEffect)(document)(_window))))(function(document2) {
          return runUI(renderSpec(document2)(element3))(component2)(i2);
        });
      };
    };
  };

  // output/Main/index.js
  var main2 = runHalogenAff(bind(bindAff)(awaitBody)(function(body3) {
    return runUI2(component)(unit)(body3);
  }));

  // dev/index.js
  main2();
})();
