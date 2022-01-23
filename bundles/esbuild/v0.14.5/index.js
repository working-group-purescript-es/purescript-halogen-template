(() => {
  // bundles/purs/index.js
  var PS = {};
  (function($PS) {
    "use strict";
    $PS["Data.Tuple"] = $PS["Data.Tuple"] || {};
    var exports = $PS["Data.Tuple"];
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
    var snd = function(v) {
      return v.value1;
    };
    var functorTuple = {
      map: function(f) {
        return function(m) {
          return new Tuple(m.value0, f(m.value1));
        };
      }
    };
    var fst = function(v) {
      return v.value0;
    };
    exports["Tuple"] = Tuple;
    exports["fst"] = fst;
    exports["snd"] = snd;
    exports["functorTuple"] = functorTuple;
  })(PS);
  (function(exports) {
    "use strict";
    exports.unit = {};
  })(PS["Data.Unit"] = PS["Data.Unit"] || {});
  (function($PS) {
    "use strict";
    $PS["Data.Unit"] = $PS["Data.Unit"] || {};
    var exports = $PS["Data.Unit"];
    var $foreign = $PS["Data.Unit"];
    exports["unit"] = $foreign.unit;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Control.Monad.State.Class"] = $PS["Control.Monad.State.Class"] || {};
    var exports = $PS["Control.Monad.State.Class"];
    var Data_Tuple = $PS["Data.Tuple"];
    var Data_Unit = $PS["Data.Unit"];
    var state = function(dict) {
      return dict.state;
    };
    var modify_ = function(dictMonadState) {
      return function(f) {
        return state(dictMonadState)(function(s) {
          return new Data_Tuple.Tuple(Data_Unit.unit, f(s));
        });
      };
    };
    exports["modify_"] = modify_;
  })(PS);
  (function(exports) {
    "use strict";
    exports.showIntImpl = function(n) {
      return n.toString();
    };
  })(PS["Data.Show"] = PS["Data.Show"] || {});
  (function($PS) {
    "use strict";
    $PS["Data.Show"] = $PS["Data.Show"] || {};
    var exports = $PS["Data.Show"];
    var $foreign = $PS["Data.Show"];
    var showInt = {
      show: $foreign.showIntImpl
    };
    var show = function(dict) {
      return dict.show;
    };
    exports["show"] = show;
    exports["showInt"] = showInt;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Control.Semigroupoid"] = $PS["Control.Semigroupoid"] || {};
    var exports = $PS["Control.Semigroupoid"];
    var semigroupoidFn = {
      compose: function(f) {
        return function(g) {
          return function(x) {
            return f(g(x));
          };
        };
      }
    };
    exports["semigroupoidFn"] = semigroupoidFn;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Control.Category"] = $PS["Control.Category"] || {};
    var exports = $PS["Control.Category"];
    var Control_Semigroupoid = $PS["Control.Semigroupoid"];
    var identity = function(dict) {
      return dict.identity;
    };
    var categoryFn = {
      identity: function(x) {
        return x;
      },
      Semigroupoid0: function() {
        return Control_Semigroupoid.semigroupoidFn;
      }
    };
    exports["identity"] = identity;
    exports["categoryFn"] = categoryFn;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Data.Function"] = $PS["Data.Function"] || {};
    var exports = $PS["Data.Function"];
    var flip = function(f) {
      return function(b) {
        return function(a) {
          return f(a)(b);
        };
      };
    };
    var $$const = function(a) {
      return function(v) {
        return a;
      };
    };
    exports["flip"] = flip;
    exports["const"] = $$const;
  })(PS);
  (function(exports) {
    "use strict";
    exports.arrayMap = function(f) {
      return function(arr) {
        var l = arr.length;
        var result = new Array(l);
        for (var i = 0; i < l; i++) {
          result[i] = f(arr[i]);
        }
        return result;
      };
    };
  })(PS["Data.Functor"] = PS["Data.Functor"] || {});
  (function($PS) {
    "use strict";
    $PS["Data.Functor"] = $PS["Data.Functor"] || {};
    var exports = $PS["Data.Functor"];
    var $foreign = $PS["Data.Functor"];
    var Data_Function = $PS["Data.Function"];
    var Data_Unit = $PS["Data.Unit"];
    var map = function(dict) {
      return dict.map;
    };
    var $$void = function(dictFunctor) {
      return map(dictFunctor)(Data_Function["const"](Data_Unit.unit));
    };
    var voidLeft = function(dictFunctor) {
      return function(f) {
        return function(x) {
          return map(dictFunctor)(Data_Function["const"](x))(f);
        };
      };
    };
    var functorArray = {
      map: $foreign.arrayMap
    };
    exports["map"] = map;
    exports["void"] = $$void;
    exports["voidLeft"] = voidLeft;
    exports["functorArray"] = functorArray;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Control.Apply"] = $PS["Control.Apply"] || {};
    var exports = $PS["Control.Apply"];
    var Control_Category = $PS["Control.Category"];
    var Data_Function = $PS["Data.Function"];
    var Data_Functor = $PS["Data.Functor"];
    var apply = function(dict) {
      return dict.apply;
    };
    var applySecond = function(dictApply) {
      return function(a) {
        return function(b) {
          return apply(dictApply)(Data_Functor.map(dictApply.Functor0())(Data_Function["const"](Control_Category.identity(Control_Category.categoryFn)))(a))(b);
        };
      };
    };
    exports["apply"] = apply;
    exports["applySecond"] = applySecond;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Control.Applicative"] = $PS["Control.Applicative"] || {};
    var exports = $PS["Control.Applicative"];
    var Control_Apply = $PS["Control.Apply"];
    var Data_Unit = $PS["Data.Unit"];
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
            return pure(dictApplicative)(Data_Unit.unit);
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
            return pure(dictApplicative)(Data_Unit.unit);
          }
          ;
          throw new Error("Failed pattern match at Control.Applicative (line 61, column 1 - line 61, column 63): " + [v.constructor.name, v1.constructor.name]);
        };
      };
    };
    var liftA1 = function(dictApplicative) {
      return function(f) {
        return function(a) {
          return Control_Apply.apply(dictApplicative.Apply0())(pure(dictApplicative)(f))(a);
        };
      };
    };
    exports["pure"] = pure;
    exports["liftA1"] = liftA1;
    exports["unless"] = unless;
    exports["when"] = when;
  })(PS);
  (function(exports) {
    "use strict";
    exports.unsafeCoerce = function(x) {
      return x;
    };
  })(PS["Unsafe.Coerce"] = PS["Unsafe.Coerce"] || {});
  (function($PS) {
    "use strict";
    $PS["Unsafe.Coerce"] = $PS["Unsafe.Coerce"] || {};
    var exports = $PS["Unsafe.Coerce"];
    var $foreign = $PS["Unsafe.Coerce"];
    exports["unsafeCoerce"] = $foreign.unsafeCoerce;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Data.Exists"] = $PS["Data.Exists"] || {};
    var exports = $PS["Data.Exists"];
    var Unsafe_Coerce = $PS["Unsafe.Coerce"];
    var runExists = Unsafe_Coerce.unsafeCoerce;
    var mkExists = Unsafe_Coerce.unsafeCoerce;
    exports["mkExists"] = mkExists;
    exports["runExists"] = runExists;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Data.Coyoneda"] = $PS["Data.Coyoneda"] || {};
    var exports = $PS["Data.Coyoneda"];
    var Control_Category = $PS["Control.Category"];
    var Data_Exists = $PS["Data.Exists"];
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
    var Coyoneda = function(x) {
      return x;
    };
    var unCoyoneda = function(f) {
      return function(v) {
        return Data_Exists.runExists(function(v1) {
          return f(v1.value0)(v1.value1);
        })(v);
      };
    };
    var coyoneda = function(k) {
      return function(fi) {
        return Coyoneda(Data_Exists.mkExists(new CoyonedaF(k, fi)));
      };
    };
    var functorCoyoneda = {
      map: function(f) {
        return function(v) {
          return Data_Exists.runExists(function(v1) {
            return coyoneda(function($84) {
              return f(v1.value0($84));
            })(v1.value1);
          })(v);
        };
      }
    };
    var liftCoyoneda = coyoneda(Control_Category.identity(Control_Category.categoryFn));
    exports["unCoyoneda"] = unCoyoneda;
    exports["liftCoyoneda"] = liftCoyoneda;
    exports["functorCoyoneda"] = functorCoyoneda;
  })(PS);
  (function(exports) {
    "use strict";
    exports.foldrArray = function(f) {
      return function(init) {
        return function(xs) {
          var acc = init;
          var len = xs.length;
          for (var i = len - 1; i >= 0; i--) {
            acc = f(xs[i])(acc);
          }
          return acc;
        };
      };
    };
    exports.foldlArray = function(f) {
      return function(init) {
        return function(xs) {
          var acc = init;
          var len = xs.length;
          for (var i = 0; i < len; i++) {
            acc = f(acc)(xs[i]);
          }
          return acc;
        };
      };
    };
  })(PS["Data.Foldable"] = PS["Data.Foldable"] || {});
  (function($PS) {
    "use strict";
    $PS["Data.Maybe"] = $PS["Data.Maybe"] || {};
    var exports = $PS["Data.Maybe"];
    var Control_Category = $PS["Control.Category"];
    var Data_Function = $PS["Data.Function"];
    var Data_Functor = $PS["Data.Functor"];
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
    var isNothing = maybe(true)(Data_Function["const"](false));
    var isJust = maybe(false)(Data_Function["const"](true));
    var functorMaybe = {
      map: function(v) {
        return function(v1) {
          if (v1 instanceof Just) {
            return new Just(v(v1.value0));
          }
          ;
          return Nothing.value;
        };
      }
    };
    var fromMaybe = function(a) {
      return maybe(a)(Control_Category.identity(Control_Category.categoryFn));
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
            return Data_Functor.map(functorMaybe)(v.value0)(v1);
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
    exports["Nothing"] = Nothing;
    exports["Just"] = Just;
    exports["maybe"] = maybe;
    exports["fromMaybe"] = fromMaybe;
    exports["isJust"] = isJust;
    exports["isNothing"] = isNothing;
    exports["fromJust"] = fromJust;
    exports["functorMaybe"] = functorMaybe;
    exports["bindMaybe"] = bindMaybe;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Data.Monoid"] = $PS["Data.Monoid"] || {};
    var exports = $PS["Data.Monoid"];
    var mempty = function(dict) {
      return dict.mempty;
    };
    exports["mempty"] = mempty;
  })(PS);
  (function(exports) {
    "use strict";
    exports.concatArray = function(xs) {
      return function(ys) {
        if (xs.length === 0)
          return ys;
        if (ys.length === 0)
          return xs;
        return xs.concat(ys);
      };
    };
  })(PS["Data.Semigroup"] = PS["Data.Semigroup"] || {});
  (function($PS) {
    "use strict";
    $PS["Data.Semigroup"] = $PS["Data.Semigroup"] || {};
    var exports = $PS["Data.Semigroup"];
    var $foreign = $PS["Data.Semigroup"];
    var semigroupArray = {
      append: $foreign.concatArray
    };
    var append = function(dict) {
      return dict.append;
    };
    exports["append"] = append;
    exports["semigroupArray"] = semigroupArray;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Data.Foldable"] = $PS["Data.Foldable"] || {};
    var exports = $PS["Data.Foldable"];
    var $foreign = $PS["Data.Foldable"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Control_Apply = $PS["Control.Apply"];
    var Data_Function = $PS["Data.Function"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Data_Monoid = $PS["Data.Monoid"];
    var Data_Semigroup = $PS["Data.Semigroup"];
    var Data_Unit = $PS["Data.Unit"];
    var foldr = function(dict) {
      return dict.foldr;
    };
    var traverse_ = function(dictApplicative) {
      return function(dictFoldable) {
        return function(f) {
          return foldr(dictFoldable)(function() {
            var $316 = Control_Apply.applySecond(dictApplicative.Apply0());
            return function($317) {
              return $316(f($317));
            };
          }())(Control_Applicative.pure(dictApplicative)(Data_Unit.unit));
        };
      };
    };
    var for_ = function(dictApplicative) {
      return function(dictFoldable) {
        return Data_Function.flip(traverse_(dictApplicative)(dictFoldable));
      };
    };
    var foldl = function(dict) {
      return dict.foldl;
    };
    var foldableMaybe = {
      foldr: function(v) {
        return function(z) {
          return function(v1) {
            if (v1 instanceof Data_Maybe.Nothing) {
              return z;
            }
            ;
            if (v1 instanceof Data_Maybe.Just) {
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
            if (v1 instanceof Data_Maybe.Nothing) {
              return z;
            }
            ;
            if (v1 instanceof Data_Maybe.Just) {
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
            if (v1 instanceof Data_Maybe.Nothing) {
              return Data_Monoid.mempty(dictMonoid);
            }
            ;
            if (v1 instanceof Data_Maybe.Just) {
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
              return Data_Semigroup.append(dictMonoid.Semigroup0())(f(x))(acc);
            };
          })(Data_Monoid.mempty(dictMonoid));
        };
      };
    };
    var foldableArray = {
      foldr: $foreign.foldrArray,
      foldl: $foreign.foldlArray,
      foldMap: function(dictMonoid) {
        return foldMapDefaultR(foldableArray)(dictMonoid);
      }
    };
    var foldMap = function(dict) {
      return dict.foldMap;
    };
    exports["foldr"] = foldr;
    exports["foldl"] = foldl;
    exports["foldMap"] = foldMap;
    exports["traverse_"] = traverse_;
    exports["for_"] = for_;
    exports["foldableArray"] = foldableArray;
    exports["foldableMaybe"] = foldableMaybe;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Control.Bind"] = $PS["Control.Bind"] || {};
    var exports = $PS["Control.Bind"];
    var Data_Function = $PS["Data.Function"];
    var discard = function(dict) {
      return dict.discard;
    };
    var bind = function(dict) {
      return dict.bind;
    };
    var bindFlipped = function(dictBind) {
      return Data_Function.flip(bind(dictBind));
    };
    var composeKleisliFlipped = function(dictBind) {
      return function(f) {
        return function(g) {
          return function(a) {
            return bindFlipped(dictBind)(f)(g(a));
          };
        };
      };
    };
    var discardUnit = {
      discard: function(dictBind) {
        return bind(dictBind);
      }
    };
    exports["bind"] = bind;
    exports["bindFlipped"] = bindFlipped;
    exports["discard"] = discard;
    exports["composeKleisliFlipped"] = composeKleisliFlipped;
    exports["discardUnit"] = discardUnit;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Control.Monad"] = $PS["Control.Monad"] || {};
    var exports = $PS["Control.Monad"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Control_Bind = $PS["Control.Bind"];
    var unlessM = function(dictMonad) {
      return function(mb) {
        return function(m) {
          return Control_Bind.bind(dictMonad.Bind1())(mb)(function(b) {
            return Control_Applicative.unless(dictMonad.Applicative0())(b)(m);
          });
        };
      };
    };
    var ap = function(dictMonad) {
      return function(f) {
        return function(a) {
          return Control_Bind.bind(dictMonad.Bind1())(f)(function(f$prime) {
            return Control_Bind.bind(dictMonad.Bind1())(a)(function(a$prime) {
              return Control_Applicative.pure(dictMonad.Applicative0())(f$prime(a$prime));
            });
          });
        };
      };
    };
    exports["unlessM"] = unlessM;
    exports["ap"] = ap;
  })(PS);
  (function(exports) {
    "use strict";
    exports.pureE = function(a) {
      return function() {
        return a;
      };
    };
    exports.bindE = function(a) {
      return function(f) {
        return function() {
          return f(a())();
        };
      };
    };
  })(PS["Effect"] = PS["Effect"] || {});
  (function($PS) {
    "use strict";
    $PS["Effect"] = $PS["Effect"] || {};
    var exports = $PS["Effect"];
    var $foreign = $PS["Effect"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Control_Monad = $PS["Control.Monad"];
    var monadEffect = {
      Applicative0: function() {
        return applicativeEffect;
      },
      Bind1: function() {
        return bindEffect;
      }
    };
    var bindEffect = {
      bind: $foreign.bindE,
      Apply0: function() {
        return applyEffect;
      }
    };
    var applyEffect = {
      apply: Control_Monad.ap(monadEffect),
      Functor0: function() {
        return functorEffect;
      }
    };
    var applicativeEffect = {
      pure: $foreign.pureE,
      Apply0: function() {
        return applyEffect;
      }
    };
    var functorEffect = {
      map: Control_Applicative.liftA1(applicativeEffect)
    };
    exports["functorEffect"] = functorEffect;
    exports["applicativeEffect"] = applicativeEffect;
    exports["bindEffect"] = bindEffect;
    exports["monadEffect"] = monadEffect;
  })(PS);
  (function(exports) {
    "use strict";
    exports.new = function(val) {
      return function() {
        return { value: val };
      };
    };
    exports.read = function(ref) {
      return function() {
        return ref.value;
      };
    };
    exports.modifyImpl = function(f) {
      return function(ref) {
        return function() {
          var t = f(ref.value);
          ref.value = t.state;
          return t.value;
        };
      };
    };
    exports.write = function(val) {
      return function(ref) {
        return function() {
          ref.value = val;
        };
      };
    };
  })(PS["Effect.Ref"] = PS["Effect.Ref"] || {});
  (function($PS) {
    "use strict";
    $PS["Effect.Ref"] = $PS["Effect.Ref"] || {};
    var exports = $PS["Effect.Ref"];
    var $foreign = $PS["Effect.Ref"];
    var Data_Functor = $PS["Data.Functor"];
    var Effect = $PS["Effect"];
    var modify$prime = $foreign.modifyImpl;
    var modify = function(f) {
      return modify$prime(function(s) {
        var s$prime = f(s);
        return {
          state: s$prime,
          value: s$prime
        };
      });
    };
    var modify_ = function(f) {
      return function(s) {
        return Data_Functor["void"](Effect.functorEffect)(modify(f)(s));
      };
    };
    exports["modify'"] = modify$prime;
    exports["modify_"] = modify_;
    exports["new"] = $foreign["new"];
    exports["read"] = $foreign.read;
    exports["write"] = $foreign.write;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Control.Monad.Rec.Class"] = $PS["Control.Monad.Rec.Class"] || {};
    var exports = $PS["Control.Monad.Rec.Class"];
    var Control_Bind = $PS["Control.Bind"];
    var Data_Functor = $PS["Data.Functor"];
    var Effect = $PS["Effect"];
    var Effect_Ref = $PS["Effect.Ref"];
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
      function Done2(value0) {
        this.value0 = value0;
      }
      ;
      Done2.create = function(value0) {
        return new Done2(value0);
      };
      return Done2;
    }();
    var tailRecM = function(dict) {
      return dict.tailRecM;
    };
    var monadRecEffect = {
      tailRecM: function(f) {
        return function(a) {
          var fromDone = function(v) {
            if (v instanceof Done) {
              return v.value0;
            }
            ;
            throw new Error("Failed pattern match at Control.Monad.Rec.Class (line 113, column 30 - line 113, column 44): " + [v.constructor.name]);
          };
          return function __do() {
            var r = Control_Bind.bindFlipped(Effect.bindEffect)(Effect_Ref["new"])(f(a))();
            (function() {
              while (!function __do2() {
                var v = Effect_Ref.read(r)();
                if (v instanceof Loop) {
                  var e = f(v.value0)();
                  Effect_Ref.write(e)(r)();
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
            return Data_Functor.map(Effect.functorEffect)(fromDone)(Effect_Ref.read(r))();
          };
        };
      },
      Monad0: function() {
        return Effect.monadEffect;
      }
    };
    exports["Loop"] = Loop;
    exports["Done"] = Done;
    exports["tailRecM"] = tailRecM;
    exports["monadRecEffect"] = monadRecEffect;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Data.List.Types"] = $PS["Data.List.Types"] || {};
    var exports = $PS["Data.List.Types"];
    var Control_Apply = $PS["Control.Apply"];
    var Data_Foldable = $PS["Data.Foldable"];
    var Data_Function = $PS["Data.Function"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_Monoid = $PS["Data.Monoid"];
    var Data_Semigroup = $PS["Data.Semigroup"];
    var Nil = function() {
      function Nil2() {
      }
      ;
      Nil2.value = new Nil2();
      return Nil2;
    }();
    var Cons = function() {
      function Cons2(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
      }
      ;
      Cons2.create = function(value0) {
        return function(value1) {
          return new Cons2(value0, value1);
        };
      };
      return Cons2;
    }();
    var NonEmptyList = function(x) {
      return x;
    };
    var listMap = function(f) {
      var chunkedRevMap = function($copy_chunksAcc) {
        return function($copy_v) {
          var $tco_var_chunksAcc = $copy_chunksAcc;
          var $tco_done = false;
          var $tco_result;
          function $tco_loop(chunksAcc, v) {
            if (v instanceof Cons && (v.value1 instanceof Cons && v.value1.value1 instanceof Cons)) {
              $tco_var_chunksAcc = new Cons(v, chunksAcc);
              $copy_v = v.value1.value1.value1;
              return;
            }
            ;
            var unrolledMap = function(v1) {
              if (v1 instanceof Cons && (v1.value1 instanceof Cons && v1.value1.value1 instanceof Nil)) {
                return new Cons(f(v1.value0), new Cons(f(v1.value1.value0), Nil.value));
              }
              ;
              if (v1 instanceof Cons && v1.value1 instanceof Nil) {
                return new Cons(f(v1.value0), Nil.value);
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
                    $copy_acc = new Cons(f(v1.value0.value0), new Cons(f(v1.value0.value1.value0), new Cons(f(v1.value0.value1.value1.value0), acc)));
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
    var foldableList = {
      foldr: function(f) {
        return function(b) {
          var rev = function() {
            var go = function($copy_acc) {
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
                    $tco_var_acc = new Cons(v.value0, acc);
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
            return go(Nil.value);
          }();
          var $205 = Data_Foldable.foldl(foldableList)(Data_Function.flip(f))(b);
          return function($206) {
            return $205(rev($206));
          };
        };
      },
      foldl: function(f) {
        var go = function($copy_b) {
          return function($copy_v) {
            var $tco_var_b = $copy_b;
            var $tco_done1 = false;
            var $tco_result;
            function $tco_loop(b, v) {
              if (v instanceof Nil) {
                $tco_done1 = true;
                return b;
              }
              ;
              if (v instanceof Cons) {
                $tco_var_b = f(b)(v.value0);
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
        return go;
      },
      foldMap: function(dictMonoid) {
        return function(f) {
          return Data_Foldable.foldl(foldableList)(function(acc) {
            var $207 = Data_Semigroup.append(dictMonoid.Semigroup0())(acc);
            return function($208) {
              return $207(f($208));
            };
          })(Data_Monoid.mempty(dictMonoid));
        };
      }
    };
    var semigroupList = {
      append: function(xs) {
        return function(ys) {
          return Data_Foldable.foldr(foldableList)(Cons.create)(ys)(xs);
        };
      }
    };
    var applyList = {
      apply: function(v) {
        return function(v1) {
          if (v instanceof Nil) {
            return Nil.value;
          }
          ;
          if (v instanceof Cons) {
            return Data_Semigroup.append(semigroupList)(Data_Functor.map(functorList)(v.value0)(v1))(Control_Apply.apply(applyList)(v.value1)(v1));
          }
          ;
          throw new Error("Failed pattern match at Data.List.Types (line 158, column 1 - line 160, column 48): " + [v.constructor.name, v1.constructor.name]);
        };
      },
      Functor0: function() {
        return functorList;
      }
    };
    var applicativeList = {
      pure: function(a) {
        return new Cons(a, Nil.value);
      },
      Apply0: function() {
        return applyList;
      }
    };
    var altList = {
      alt: Data_Semigroup.append(semigroupList),
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
    exports["Nil"] = Nil;
    exports["Cons"] = Cons;
    exports["NonEmptyList"] = NonEmptyList;
    exports["semigroupList"] = semigroupList;
    exports["foldableList"] = foldableList;
    exports["applicativeList"] = applicativeList;
    exports["plusList"] = plusList;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Data.List"] = $PS["Data.List"] || {};
    var exports = $PS["Data.List"];
    var Data_List_Types = $PS["Data.List.Types"];
    var reverse = function() {
      var go = function($copy_acc) {
        return function($copy_v) {
          var $tco_var_acc = $copy_acc;
          var $tco_done = false;
          var $tco_result;
          function $tco_loop(acc, v) {
            if (v instanceof Data_List_Types.Nil) {
              $tco_done = true;
              return acc;
            }
            ;
            if (v instanceof Data_List_Types.Cons) {
              $tco_var_acc = new Data_List_Types.Cons(v.value0, acc);
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
      return go(Data_List_Types.Nil.value);
    }();
    var $$null = function(v) {
      if (v instanceof Data_List_Types.Nil) {
        return true;
      }
      ;
      return false;
    };
    exports["null"] = $$null;
    exports["reverse"] = reverse;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Data.CatQueue"] = $PS["Data.CatQueue"] || {};
    var exports = $PS["Data.CatQueue"];
    var Data_List = $PS["Data.List"];
    var Data_List_Types = $PS["Data.List.Types"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Data_Tuple = $PS["Data.Tuple"];
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
    var uncons = function($copy_v) {
      var $tco_done = false;
      var $tco_result;
      function $tco_loop(v) {
        if (v.value0 instanceof Data_List_Types.Nil && v.value1 instanceof Data_List_Types.Nil) {
          $tco_done = true;
          return Data_Maybe.Nothing.value;
        }
        ;
        if (v.value0 instanceof Data_List_Types.Nil) {
          $copy_v = new CatQueue(Data_List.reverse(v.value1), Data_List_Types.Nil.value);
          return;
        }
        ;
        if (v.value0 instanceof Data_List_Types.Cons) {
          $tco_done = true;
          return new Data_Maybe.Just(new Data_Tuple.Tuple(v.value0.value0, new CatQueue(v.value0.value1, v.value1)));
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
    var snoc = function(v) {
      return function(a) {
        return new CatQueue(v.value0, new Data_List_Types.Cons(a, v.value1));
      };
    };
    var $$null = function(v) {
      if (v.value0 instanceof Data_List_Types.Nil && v.value1 instanceof Data_List_Types.Nil) {
        return true;
      }
      ;
      return false;
    };
    var empty = new CatQueue(Data_List_Types.Nil.value, Data_List_Types.Nil.value);
    exports["empty"] = empty;
    exports["null"] = $$null;
    exports["snoc"] = snoc;
    exports["uncons"] = uncons;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Data.CatList"] = $PS["Data.CatList"] || {};
    var exports = $PS["Data.CatList"];
    var Data_CatQueue = $PS["Data.CatQueue"];
    var Data_List_Types = $PS["Data.List.Types"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Data_Tuple = $PS["Data.Tuple"];
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
          return new CatCons(v.value0, Data_CatQueue.snoc(v.value1)(v1));
        }
        ;
        throw new Error("Failed pattern match at Data.CatList (line 109, column 1 - line 109, column 54): " + [v.constructor.name, v1.constructor.name]);
      };
    };
    var foldr = function(k) {
      return function(b) {
        return function(q) {
          var foldl = function($copy_v) {
            return function($copy_c) {
              return function($copy_v1) {
                var $tco_var_v = $copy_v;
                var $tco_var_c = $copy_c;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(v, c, v1) {
                  if (v1 instanceof Data_List_Types.Nil) {
                    $tco_done = true;
                    return c;
                  }
                  ;
                  if (v1 instanceof Data_List_Types.Cons) {
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
          var go = function($copy_xs) {
            return function($copy_ys) {
              var $tco_var_xs = $copy_xs;
              var $tco_done1 = false;
              var $tco_result;
              function $tco_loop(xs, ys) {
                var v = Data_CatQueue.uncons(xs);
                if (v instanceof Data_Maybe.Nothing) {
                  $tco_done1 = true;
                  return foldl(function(x) {
                    return function(i) {
                      return i(x);
                    };
                  })(b)(ys);
                }
                ;
                if (v instanceof Data_Maybe.Just) {
                  $tco_var_xs = v.value0.value1;
                  $copy_ys = new Data_List_Types.Cons(k(v.value0.value0), ys);
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
          return go(q)(Data_List_Types.Nil.value);
        };
      };
    };
    var uncons = function(v) {
      if (v instanceof CatNil) {
        return Data_Maybe.Nothing.value;
      }
      ;
      if (v instanceof CatCons) {
        return new Data_Maybe.Just(new Data_Tuple.Tuple(v.value0, function() {
          var $45 = Data_CatQueue["null"](v.value1);
          if ($45) {
            return CatNil.value;
          }
          ;
          return foldr(link)(CatNil.value)(v.value1);
        }()));
      }
      ;
      throw new Error("Failed pattern match at Data.CatList (line 100, column 1 - line 100, column 61): " + [v.constructor.name]);
    };
    var empty = CatNil.value;
    var append = link;
    var semigroupCatList = {
      append
    };
    var snoc = function(cat) {
      return function(a) {
        return append(cat)(new CatCons(a, Data_CatQueue.empty));
      };
    };
    exports["empty"] = empty;
    exports["snoc"] = snoc;
    exports["uncons"] = uncons;
    exports["semigroupCatList"] = semigroupCatList;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Control.Monad.Free"] = $PS["Control.Monad.Free"] || {};
    var exports = $PS["Control.Monad.Free"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Control_Bind = $PS["Control.Bind"];
    var Control_Monad = $PS["Control.Monad"];
    var Control_Monad_Rec_Class = $PS["Control.Monad.Rec.Class"];
    var Data_CatList = $PS["Data.CatList"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Data_Semigroup = $PS["Data.Semigroup"];
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
            return new Free(v22.value0, Data_Semigroup.append(Data_CatList.semigroupCatList)(v22.value1)(r));
          };
        };
        if (v.value0 instanceof Return) {
          var v2 = Data_CatList.uncons(v.value1);
          if (v2 instanceof Data_Maybe.Nothing) {
            $tco_done = true;
            return new Return(v.value0.value0);
          }
          ;
          if (v2 instanceof Data_Maybe.Just) {
            $copy_v = concatF(runExpF(v2.value0.value0)(v.value0.value0))(v2.value0.value1);
            return;
          }
          ;
          throw new Error("Failed pattern match at Control.Monad.Free (line 227, column 7 - line 231, column 64): " + [v2.constructor.name]);
        }
        ;
        if (v.value0 instanceof Bind) {
          $tco_done = true;
          return new Bind(v.value0.value0, function(a) {
            return concatF(v.value0.value1(a))(v.value1);
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
      return new Free(f, Data_CatList.empty);
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
          return Control_Bind.bindFlipped(freeBind)(function() {
            var $119 = Control_Applicative.pure(freeApplicative);
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
          return new Free(v.value0, Data_CatList.snoc(v.value1)(k));
        };
      },
      Apply0: function() {
        return freeApply;
      }
    };
    var freeApply = {
      apply: Control_Monad.ap(freeMonad),
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
      return fromView(new Bind(f, function() {
        var $122 = Control_Applicative.pure(freeApplicative);
        return function($123) {
          return $122($123);
        };
      }()));
    };
    var foldFree = function(dictMonadRec) {
      return function(k) {
        var go = function(f) {
          var v = toView(f);
          if (v instanceof Return) {
            return Data_Functor.map(dictMonadRec.Monad0().Bind1().Apply0().Functor0())(Control_Monad_Rec_Class.Done.create)(Control_Applicative.pure(dictMonadRec.Monad0().Applicative0())(v.value0));
          }
          ;
          if (v instanceof Bind) {
            return Data_Functor.map(dictMonadRec.Monad0().Bind1().Apply0().Functor0())(function($135) {
              return Control_Monad_Rec_Class.Loop.create(v.value1($135));
            })(k(v.value0));
          }
          ;
          throw new Error("Failed pattern match at Control.Monad.Free (line 158, column 10 - line 160, column 37): " + [v.constructor.name]);
        };
        return Control_Monad_Rec_Class.tailRecM(dictMonadRec)(go);
      };
    };
    exports["liftF"] = liftF;
    exports["foldFree"] = foldFree;
    exports["freeFunctor"] = freeFunctor;
    exports["freeApplicative"] = freeApplicative;
    exports["freeMonad"] = freeMonad;
  })(PS);
  (function(exports) {
    "use strict";
    var unsafeCompareImpl = function(lt) {
      return function(eq) {
        return function(gt) {
          return function(x) {
            return function(y) {
              return x < y ? lt : x === y ? eq : gt;
            };
          };
        };
      };
    };
    exports.ordIntImpl = unsafeCompareImpl;
    exports.ordStringImpl = unsafeCompareImpl;
  })(PS["Data.Ord"] = PS["Data.Ord"] || {});
  (function(exports) {
    "use strict";
    var refEq = function(r1) {
      return function(r2) {
        return r1 === r2;
      };
    };
    exports.eqIntImpl = refEq;
    exports.eqStringImpl = refEq;
  })(PS["Data.Eq"] = PS["Data.Eq"] || {});
  (function($PS) {
    "use strict";
    $PS["Data.Eq"] = $PS["Data.Eq"] || {};
    var exports = $PS["Data.Eq"];
    var $foreign = $PS["Data.Eq"];
    var eqString = {
      eq: $foreign.eqStringImpl
    };
    var eqInt = {
      eq: $foreign.eqIntImpl
    };
    exports["eqInt"] = eqInt;
    exports["eqString"] = eqString;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Data.Ordering"] = $PS["Data.Ordering"] || {};
    var exports = $PS["Data.Ordering"];
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
    exports["LT"] = LT;
    exports["GT"] = GT;
    exports["EQ"] = EQ;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Data.Ord"] = $PS["Data.Ord"] || {};
    var exports = $PS["Data.Ord"];
    var $foreign = $PS["Data.Ord"];
    var Data_Eq = $PS["Data.Eq"];
    var Data_Ordering = $PS["Data.Ordering"];
    var ordString = {
      compare: $foreign.ordStringImpl(Data_Ordering.LT.value)(Data_Ordering.EQ.value)(Data_Ordering.GT.value),
      Eq0: function() {
        return Data_Eq.eqString;
      }
    };
    var ordInt = {
      compare: $foreign.ordIntImpl(Data_Ordering.LT.value)(Data_Ordering.EQ.value)(Data_Ordering.GT.value),
      Eq0: function() {
        return Data_Eq.eqInt;
      }
    };
    var compare = function(dict) {
      return dict.compare;
    };
    exports["compare"] = compare;
    exports["ordInt"] = ordInt;
    exports["ordString"] = ordString;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Halogen.Query.HalogenM"] = $PS["Halogen.Query.HalogenM"] || {};
    var exports = $PS["Halogen.Query.HalogenM"];
    var Control_Monad_Free = $PS["Control.Monad.Free"];
    var Data_Ord = $PS["Data.Ord"];
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
    var Lift = function() {
      function Lift2(value0) {
        this.value0 = value0;
      }
      ;
      Lift2.create = function(value0) {
        return new Lift2(value0);
      };
      return Lift2;
    }();
    var ChildQuery = function() {
      function ChildQuery2(value0) {
        this.value0 = value0;
      }
      ;
      ChildQuery2.create = function(value0) {
        return new ChildQuery2(value0);
      };
      return ChildQuery2;
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
    var ordSubscriptionId = Data_Ord.ordInt;
    var ordForkId = Data_Ord.ordInt;
    var monadHalogenM = Control_Monad_Free.freeMonad;
    var monadStateHalogenM = {
      state: function($136) {
        return HalogenM(Control_Monad_Free.liftF(State.create($136)));
      },
      Monad0: function() {
        return monadHalogenM;
      }
    };
    var functorHalogenM = Control_Monad_Free.freeFunctor;
    var applicativeHalogenM = Control_Monad_Free.freeApplicative;
    exports["State"] = State;
    exports["Subscribe"] = Subscribe;
    exports["Unsubscribe"] = Unsubscribe;
    exports["Lift"] = Lift;
    exports["ChildQuery"] = ChildQuery;
    exports["Raise"] = Raise;
    exports["Par"] = Par;
    exports["Fork"] = Fork;
    exports["Kill"] = Kill;
    exports["GetRef"] = GetRef;
    exports["SubscriptionId"] = SubscriptionId;
    exports["ForkId"] = ForkId;
    exports["functorHalogenM"] = functorHalogenM;
    exports["applicativeHalogenM"] = applicativeHalogenM;
    exports["monadStateHalogenM"] = monadStateHalogenM;
    exports["ordSubscriptionId"] = ordSubscriptionId;
    exports["ordForkId"] = ordForkId;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Halogen.Query.HalogenQ"] = $PS["Halogen.Query.HalogenQ"] || {};
    var exports = $PS["Halogen.Query.HalogenQ"];
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
    var Action = function() {
      function Action2(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
      }
      ;
      Action2.create = function(value0) {
        return function(value1) {
          return new Action2(value0, value1);
        };
      };
      return Action2;
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
    exports["Initialize"] = Initialize;
    exports["Finalize"] = Finalize;
    exports["Receive"] = Receive;
    exports["Action"] = Action;
    exports["Query"] = Query;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Halogen.Component"] = $PS["Halogen.Component"] || {};
    var exports = $PS["Halogen.Component"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Data_Coyoneda = $PS["Data.Coyoneda"];
    var Data_Foldable = $PS["Data.Foldable"];
    var Data_Function = $PS["Data.Function"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Data_Unit = $PS["Data.Unit"];
    var Halogen_Query_HalogenM = $PS["Halogen.Query.HalogenM"];
    var Halogen_Query_HalogenQ = $PS["Halogen.Query.HalogenQ"];
    var Unsafe_Coerce = $PS["Unsafe.Coerce"];
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
    var unComponentSlot = Unsafe_Coerce.unsafeCoerce;
    var unComponent = Unsafe_Coerce.unsafeCoerce;
    var mkEval = function(args) {
      return function(v) {
        if (v instanceof Halogen_Query_HalogenQ.Initialize) {
          return Data_Functor.voidLeft(Halogen_Query_HalogenM.functorHalogenM)(Data_Foldable.traverse_(Halogen_Query_HalogenM.applicativeHalogenM)(Data_Foldable.foldableMaybe)(args.handleAction)(args.initialize))(v.value0);
        }
        ;
        if (v instanceof Halogen_Query_HalogenQ.Finalize) {
          return Data_Functor.voidLeft(Halogen_Query_HalogenM.functorHalogenM)(Data_Foldable.traverse_(Halogen_Query_HalogenM.applicativeHalogenM)(Data_Foldable.foldableMaybe)(args.handleAction)(args.finalize))(v.value0);
        }
        ;
        if (v instanceof Halogen_Query_HalogenQ.Receive) {
          return Data_Functor.voidLeft(Halogen_Query_HalogenM.functorHalogenM)(Data_Foldable.traverse_(Halogen_Query_HalogenM.applicativeHalogenM)(Data_Foldable.foldableMaybe)(args.handleAction)(args.receive(v.value0)))(v.value1);
        }
        ;
        if (v instanceof Halogen_Query_HalogenQ.Action) {
          return Data_Functor.voidLeft(Halogen_Query_HalogenM.functorHalogenM)(args.handleAction(v.value0))(v.value1);
        }
        ;
        if (v instanceof Halogen_Query_HalogenQ.Query) {
          return Data_Coyoneda.unCoyoneda(function(g) {
            var $25 = Data_Functor.map(Halogen_Query_HalogenM.functorHalogenM)(Data_Maybe.maybe(v.value1(Data_Unit.unit))(g));
            return function($26) {
              return $25(args.handleQuery($26));
            };
          })(v.value0);
        }
        ;
        throw new Error("Failed pattern match at Halogen.Component (line 182, column 15 - line 192, column 70): " + [v.constructor.name]);
      };
    };
    var mkComponent = Unsafe_Coerce.unsafeCoerce;
    var defaultEval = {
      handleAction: Data_Function["const"](Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(Data_Unit.unit)),
      handleQuery: Data_Function["const"](Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(Data_Maybe.Nothing.value)),
      receive: Data_Function["const"](Data_Maybe.Nothing.value),
      initialize: Data_Maybe.Nothing.value,
      finalize: Data_Maybe.Nothing.value
    };
    exports["mkComponent"] = mkComponent;
    exports["unComponent"] = unComponent;
    exports["mkEval"] = mkEval;
    exports["defaultEval"] = defaultEval;
    exports["ComponentSlot"] = ComponentSlot;
    exports["ThunkSlot"] = ThunkSlot;
    exports["unComponentSlot"] = unComponentSlot;
  })(PS);
  (function(exports) {
    "use strict";
    exports["null"] = null;
    exports.nullable = function(a, r, f) {
      return a == null ? r : f(a);
    };
    exports.notNull = function(x) {
      return x;
    };
  })(PS["Data.Nullable"] = PS["Data.Nullable"] || {});
  (function($PS) {
    "use strict";
    $PS["Data.Nullable"] = $PS["Data.Nullable"] || {};
    var exports = $PS["Data.Nullable"];
    var $foreign = $PS["Data.Nullable"];
    var Data_Maybe = $PS["Data.Maybe"];
    var toNullable = Data_Maybe.maybe($foreign["null"])($foreign.notNull);
    var toMaybe = function(n) {
      return $foreign.nullable(n, Data_Maybe.Nothing.value, Data_Maybe.Just.create);
    };
    exports["toMaybe"] = toMaybe;
    exports["toNullable"] = toNullable;
    exports["null"] = $foreign["null"];
  })(PS);
  (function(exports) {
    "use strict";
    exports.typeOf = function(value) {
      return typeof value;
    };
  })(PS["Foreign"] = PS["Foreign"] || {});
  (function($PS) {
    "use strict";
    $PS["Foreign"] = $PS["Foreign"] || {};
    var exports = $PS["Foreign"];
    var $foreign = $PS["Foreign"];
    exports["typeOf"] = $foreign.typeOf;
  })(PS);
  (function(exports) {
    "use strict";
    exports._lookup = function(no, yes, k, m) {
      return k in m ? yes(m[k]) : no;
    };
  })(PS["Foreign.Object"] = PS["Foreign.Object"] || {});
  (function(exports) {
    "use strict";
    exports.runFn4 = function(fn) {
      return function(a) {
        return function(b) {
          return function(c) {
            return function(d) {
              return fn(a, b, c, d);
            };
          };
        };
      };
    };
  })(PS["Data.Function.Uncurried"] = PS["Data.Function.Uncurried"] || {});
  (function($PS) {
    "use strict";
    $PS["Data.Function.Uncurried"] = $PS["Data.Function.Uncurried"] || {};
    var exports = $PS["Data.Function.Uncurried"];
    var $foreign = $PS["Data.Function.Uncurried"];
    exports["runFn4"] = $foreign.runFn4;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Foreign.Object"] = $PS["Foreign.Object"] || {};
    var exports = $PS["Foreign.Object"];
    var $foreign = $PS["Foreign.Object"];
    var Data_Function_Uncurried = $PS["Data.Function.Uncurried"];
    var Data_Maybe = $PS["Data.Maybe"];
    var lookup = Data_Function_Uncurried.runFn4($foreign["_lookup"])(Data_Maybe.Nothing.value)(Data_Maybe.Just.create);
    exports["lookup"] = lookup;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Halogen.VDom.Machine"] = $PS["Halogen.VDom.Machine"] || {};
    var exports = $PS["Halogen.VDom.Machine"];
    var Unsafe_Coerce = $PS["Unsafe.Coerce"];
    var Step = function() {
      function Step2(value0, value1, value2, value3) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
      }
      ;
      Step2.create = function(value0) {
        return function(value1) {
          return function(value2) {
            return function(value3) {
              return new Step2(value0, value1, value2, value3);
            };
          };
        };
      };
      return Step2;
    }();
    var unStep = Unsafe_Coerce.unsafeCoerce;
    var step = function(v, a) {
      return v.value2(v.value1, a);
    };
    var mkStep = Unsafe_Coerce.unsafeCoerce;
    var halt = function(v) {
      return v.value3(v.value1);
    };
    var extract = unStep(function(v) {
      return v.value0;
    });
    exports["Step"] = Step;
    exports["mkStep"] = mkStep;
    exports["unStep"] = unStep;
    exports["extract"] = extract;
    exports["step"] = step;
    exports["halt"] = halt;
  })(PS);
  (function(exports) {
    "use strict";
    exports.unsafeGetAny = function(key, obj) {
      return obj[key];
    };
    exports.unsafeHasAny = function(key, obj) {
      return obj.hasOwnProperty(key);
    };
    exports.unsafeSetAny = function(key, val, obj) {
      obj[key] = val;
    };
    exports.forE = function(a, f) {
      var b = [];
      for (var i = 0; i < a.length; i++) {
        b.push(f(i, a[i]));
      }
      return b;
    };
    exports.forEachE = function(a, f) {
      for (var i = 0; i < a.length; i++) {
        f(a[i]);
      }
    };
    exports.forInE = function(o, f) {
      var ks = Object.keys(o);
      for (var i = 0; i < ks.length; i++) {
        var k = ks[i];
        f(k, o[k]);
      }
    };
    exports.diffWithIxE = function(a1, a2, f1, f2, f3) {
      var a3 = [];
      var l1 = a1.length;
      var l2 = a2.length;
      var i = 0;
      while (1) {
        if (i < l1) {
          if (i < l2) {
            a3.push(f1(i, a1[i], a2[i]));
          } else {
            f2(i, a1[i]);
          }
        } else if (i < l2) {
          a3.push(f3(i, a2[i]));
        } else {
          break;
        }
        i++;
      }
      return a3;
    };
    exports.strMapWithIxE = function(as, fk, f) {
      var o = {};
      for (var i = 0; i < as.length; i++) {
        var a = as[i];
        var k = fk(a);
        o[k] = f(k, i, a);
      }
      return o;
    };
    exports.diffWithKeyAndIxE = function(o1, as, fk, f1, f2, f3) {
      var o2 = {};
      for (var i = 0; i < as.length; i++) {
        var a = as[i];
        var k = fk(a);
        if (o1.hasOwnProperty(k)) {
          o2[k] = f1(k, i, o1[k], a);
        } else {
          o2[k] = f3(k, i, a);
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
    exports.refEq = function(a, b) {
      return a === b;
    };
    exports.createTextNode = function(s, doc) {
      return doc.createTextNode(s);
    };
    exports.setTextContent = function(s, n) {
      n.textContent = s;
    };
    exports.createElement = function(ns, name, doc) {
      if (ns != null) {
        return doc.createElementNS(ns, name);
      } else {
        return doc.createElement(name);
      }
    };
    exports.insertChildIx = function(i, a, b) {
      var n = b.childNodes.item(i) || null;
      if (n !== a) {
        b.insertBefore(a, n);
      }
    };
    exports.removeChild = function(a, b) {
      if (b && a.parentNode === b) {
        b.removeChild(a);
      }
    };
    exports.parentNode = function(a) {
      return a.parentNode;
    };
    exports.setAttribute = function(ns, attr, val, el) {
      if (ns != null) {
        el.setAttributeNS(ns, attr, val);
      } else {
        el.setAttribute(attr, val);
      }
    };
    exports.removeAttribute = function(ns, attr, el) {
      if (ns != null) {
        el.removeAttributeNS(ns, attr);
      } else {
        el.removeAttribute(attr);
      }
    };
    exports.hasAttribute = function(ns, attr, el) {
      if (ns != null) {
        return el.hasAttributeNS(ns, attr);
      } else {
        return el.hasAttribute(attr);
      }
    };
    exports.addEventListener = function(ev, listener, el) {
      el.addEventListener(ev, listener, false);
    };
    exports.removeEventListener = function(ev, listener, el) {
      el.removeEventListener(ev, listener, false);
    };
    exports.jsUndefined = void 0;
  })(PS["Halogen.VDom.Util"] = PS["Halogen.VDom.Util"] || {});
  (function(exports) {
    "use strict";
    exports["new"] = function() {
      return {};
    };
  })(PS["Foreign.Object.ST"] = PS["Foreign.Object.ST"] || {});
  (function($PS) {
    "use strict";
    $PS["Foreign.Object.ST"] = $PS["Foreign.Object.ST"] || {};
    var exports = $PS["Foreign.Object.ST"];
    var $foreign = $PS["Foreign.Object.ST"];
    exports["new"] = $foreign["new"];
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Halogen.VDom.Util"] = $PS["Halogen.VDom.Util"] || {};
    var exports = $PS["Halogen.VDom.Util"];
    var $foreign = $PS["Halogen.VDom.Util"];
    var Foreign_Object_ST = $PS["Foreign.Object.ST"];
    var Unsafe_Coerce = $PS["Unsafe.Coerce"];
    var unsafeLookup = $foreign.unsafeGetAny;
    var unsafeFreeze = Unsafe_Coerce.unsafeCoerce;
    var pokeMutMap = $foreign.unsafeSetAny;
    var newMutMap = Foreign_Object_ST["new"];
    exports["newMutMap"] = newMutMap;
    exports["pokeMutMap"] = pokeMutMap;
    exports["unsafeFreeze"] = unsafeFreeze;
    exports["unsafeLookup"] = unsafeLookup;
    exports["unsafeGetAny"] = $foreign.unsafeGetAny;
    exports["unsafeHasAny"] = $foreign.unsafeHasAny;
    exports["unsafeSetAny"] = $foreign.unsafeSetAny;
    exports["forE"] = $foreign.forE;
    exports["forEachE"] = $foreign.forEachE;
    exports["forInE"] = $foreign.forInE;
    exports["diffWithIxE"] = $foreign.diffWithIxE;
    exports["diffWithKeyAndIxE"] = $foreign.diffWithKeyAndIxE;
    exports["strMapWithIxE"] = $foreign.strMapWithIxE;
    exports["refEq"] = $foreign.refEq;
    exports["createTextNode"] = $foreign.createTextNode;
    exports["setTextContent"] = $foreign.setTextContent;
    exports["createElement"] = $foreign.createElement;
    exports["insertChildIx"] = $foreign.insertChildIx;
    exports["removeChild"] = $foreign.removeChild;
    exports["parentNode"] = $foreign.parentNode;
    exports["setAttribute"] = $foreign.setAttribute;
    exports["removeAttribute"] = $foreign.removeAttribute;
    exports["hasAttribute"] = $foreign.hasAttribute;
    exports["addEventListener"] = $foreign.addEventListener;
    exports["removeEventListener"] = $foreign.removeEventListener;
    exports["jsUndefined"] = $foreign.jsUndefined;
  })(PS);
  (function(exports) {
    "use strict";
    exports.eventListener = function(fn) {
      return function() {
        return function(event) {
          return fn(event)();
        };
      };
    };
    exports.addEventListener = function(type) {
      return function(listener) {
        return function(useCapture) {
          return function(target) {
            return function() {
              return target.addEventListener(type, listener, useCapture);
            };
          };
        };
      };
    };
    exports.removeEventListener = function(type) {
      return function(listener) {
        return function(useCapture) {
          return function(target) {
            return function() {
              return target.removeEventListener(type, listener, useCapture);
            };
          };
        };
      };
    };
  })(PS["Web.Event.EventTarget"] = PS["Web.Event.EventTarget"] || {});
  (function($PS) {
    "use strict";
    $PS["Web.Event.EventTarget"] = $PS["Web.Event.EventTarget"] || {};
    var exports = $PS["Web.Event.EventTarget"];
    var $foreign = $PS["Web.Event.EventTarget"];
    exports["eventListener"] = $foreign.eventListener;
    exports["addEventListener"] = $foreign.addEventListener;
    exports["removeEventListener"] = $foreign.removeEventListener;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Halogen.VDom.DOM.Prop"] = $PS["Halogen.VDom.DOM.Prop"] || {};
    var exports = $PS["Halogen.VDom.DOM.Prop"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Data_Nullable = $PS["Data.Nullable"];
    var Data_Tuple = $PS["Data.Tuple"];
    var Data_Unit = $PS["Data.Unit"];
    var Effect_Ref = $PS["Effect.Ref"];
    var Foreign = $PS["Foreign"];
    var Foreign_Object = $PS["Foreign.Object"];
    var Halogen_VDom_Machine = $PS["Halogen.VDom.Machine"];
    var Halogen_VDom_Util = $PS["Halogen.VDom.Util"];
    var Web_Event_EventTarget = $PS["Web.Event.EventTarget"];
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
      function Attribute2(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
      }
      ;
      Attribute2.create = function(value0) {
        return function(value1) {
          return function(value2) {
            return new Attribute2(value0, value1, value2);
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
    var unsafeGetProperty = Halogen_VDom_Util.unsafeGetAny;
    var setProperty = Halogen_VDom_Util.unsafeSetAny;
    var removeProperty = function(key, el) {
      var v = Halogen_VDom_Util.hasAttribute(Data_Nullable["null"], key, el);
      if (v) {
        return Halogen_VDom_Util.removeAttribute(Data_Nullable["null"], key, el);
      }
      ;
      var v1 = Foreign.typeOf(Halogen_VDom_Util.unsafeGetAny(key, el));
      if (v1 === "string") {
        return Halogen_VDom_Util.unsafeSetAny(key, "", el);
      }
      ;
      if (key === "rowSpan") {
        return Halogen_VDom_Util.unsafeSetAny(key, 1, el);
      }
      ;
      if (key === "colSpan") {
        return Halogen_VDom_Util.unsafeSetAny(key, 1, el);
      }
      ;
      return Halogen_VDom_Util.unsafeSetAny(key, Halogen_VDom_Util.jsUndefined, el);
    };
    var propToStrKey = function(v) {
      if (v instanceof Attribute && v.value0 instanceof Data_Maybe.Just) {
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
    var buildProp = function(emit) {
      return function(el) {
        var removeProp = function(prevEvents) {
          return function(v, v1) {
            if (v1 instanceof Attribute) {
              return Halogen_VDom_Util.removeAttribute(Data_Nullable.toNullable(v1.value0), v1.value1, el);
            }
            ;
            if (v1 instanceof Property) {
              return removeProperty(v1.value0, el);
            }
            ;
            if (v1 instanceof Handler) {
              var handler = Halogen_VDom_Util.unsafeLookup(v1.value0, prevEvents);
              return Halogen_VDom_Util.removeEventListener(v1.value0, Data_Tuple.fst(handler), el);
            }
            ;
            if (v1 instanceof Ref) {
              return Data_Unit.unit;
            }
            ;
            throw new Error("Failed pattern match at Halogen.VDom.DOM.Prop (line 169, column 5 - line 179, column 18): " + [v1.constructor.name]);
          };
        };
        var mbEmit = function(v) {
          if (v instanceof Data_Maybe.Just) {
            return emit(v.value0)();
          }
          ;
          return Data_Unit.unit;
        };
        var haltProp = function(state) {
          var v = Foreign_Object.lookup("ref")(state.props);
          if (v instanceof Data_Maybe.Just && v.value0 instanceof Ref) {
            return mbEmit(v.value0.value0(new Removed(el)));
          }
          ;
          return Data_Unit.unit;
        };
        var diffProp = function(prevEvents, events) {
          return function(v, v1, v11, v2) {
            if (v11 instanceof Attribute && v2 instanceof Attribute) {
              var $57 = v11.value2 === v2.value2;
              if ($57) {
                return v2;
              }
              ;
              Halogen_VDom_Util.setAttribute(Data_Nullable.toNullable(v2.value0), v2.value1, v2.value2, el);
              return v2;
            }
            ;
            if (v11 instanceof Property && v2 instanceof Property) {
              var v4 = Halogen_VDom_Util.refEq(v11.value1, v2.value1);
              if (v4) {
                return v2;
              }
              ;
              if (v2.value0 === "value") {
                var elVal = unsafeGetProperty("value", el);
                var $66 = Halogen_VDom_Util.refEq(elVal, v2.value1);
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
              var handler = Halogen_VDom_Util.unsafeLookup(v2.value0, prevEvents);
              Effect_Ref.write(v2.value1)(Data_Tuple.snd(handler))();
              Halogen_VDom_Util.pokeMutMap(v2.value0, handler, events);
              return v2;
            }
            ;
            return v2;
          };
        };
        var applyProp = function(events) {
          return function(v, v1, v2) {
            if (v2 instanceof Attribute) {
              Halogen_VDom_Util.setAttribute(Data_Nullable.toNullable(v2.value0), v2.value1, v2.value2, el);
              return v2;
            }
            ;
            if (v2 instanceof Property) {
              setProperty(v2.value0, v2.value1, el);
              return v2;
            }
            ;
            if (v2 instanceof Handler) {
              var v3 = Halogen_VDom_Util.unsafeGetAny(v2.value0, events);
              if (Halogen_VDom_Util.unsafeHasAny(v2.value0, events)) {
                Effect_Ref.write(v2.value1)(Data_Tuple.snd(v3))();
                return v2;
              }
              ;
              var ref = Effect_Ref["new"](v2.value1)();
              var listener = Web_Event_EventTarget.eventListener(function(ev) {
                return function __do() {
                  var f$prime = Effect_Ref.read(ref)();
                  return mbEmit(f$prime(ev));
                };
              })();
              Halogen_VDom_Util.pokeMutMap(v2.value0, new Data_Tuple.Tuple(listener, ref), events);
              Halogen_VDom_Util.addEventListener(v2.value0, listener, el);
              return v2;
            }
            ;
            if (v2 instanceof Ref) {
              mbEmit(v2.value0(new Created(el)));
              return v2;
            }
            ;
            throw new Error("Failed pattern match at Halogen.VDom.DOM.Prop (line 113, column 5 - line 135, column 15): " + [v2.constructor.name]);
          };
        };
        var patchProp = function(state, ps2) {
          var events = Halogen_VDom_Util.newMutMap();
          var onThis = removeProp(state.events);
          var onThese = diffProp(state.events, events);
          var onThat = applyProp(events);
          var props = Halogen_VDom_Util.diffWithKeyAndIxE(state.props, ps2, propToStrKey, onThese, onThis, onThat);
          var nextState = {
            events: Halogen_VDom_Util.unsafeFreeze(events),
            props
          };
          return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(Data_Unit.unit, nextState, patchProp, haltProp));
        };
        var renderProp = function(ps1) {
          var events = Halogen_VDom_Util.newMutMap();
          var ps1$prime = Halogen_VDom_Util.strMapWithIxE(ps1, propToStrKey, applyProp(events));
          var state = {
            events: Halogen_VDom_Util.unsafeFreeze(events),
            props: ps1$prime
          };
          return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(Data_Unit.unit, state, patchProp, haltProp));
        };
        return renderProp;
      };
    };
    exports["Handler"] = Handler;
    exports["buildProp"] = buildProp;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Data.Bifunctor"] = $PS["Data.Bifunctor"] || {};
    var exports = $PS["Data.Bifunctor"];
    var bimap = function(dict) {
      return dict.bimap;
    };
    exports["bimap"] = bimap;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Halogen.VDom.Types"] = $PS["Halogen.VDom.Types"] || {};
    var exports = $PS["Halogen.VDom.Types"];
    var Data_Bifunctor = $PS["Data.Bifunctor"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_Tuple = $PS["Data.Tuple"];
    var Unsafe_Coerce = $PS["Unsafe.Coerce"];
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
      function Elem2(value0, value1, value2, value3) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
      }
      ;
      Elem2.create = function(value0) {
        return function(value1) {
          return function(value2) {
            return function(value3) {
              return new Elem2(value0, value1, value2, value3);
            };
          };
        };
      };
      return Elem2;
    }();
    var Keyed = function() {
      function Keyed2(value0, value1, value2, value3) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
      }
      ;
      Keyed2.create = function(value0) {
        return function(value1) {
          return function(value2) {
            return function(value3) {
              return new Keyed2(value0, value1, value2, value3);
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
      function Graft2(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
      }
      ;
      Graft2.create = function(value0) {
        return function(value1) {
          return function(value2) {
            return new Graft2(value0, value1, value2);
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
    var graft = Unsafe_Coerce.unsafeCoerce;
    var bifunctorGraft = {
      bimap: function(f) {
        return function(g) {
          return unGraft(function(v) {
            return graft(new Graft(function($57) {
              return f(v.value0($57));
            }, function($58) {
              return g(v.value1($58));
            }, v.value2));
          });
        };
      }
    };
    var runGraft = unGraft(function(v) {
      var go = function(v2) {
        if (v2 instanceof Text) {
          return new Text(v2.value0);
        }
        ;
        if (v2 instanceof Elem) {
          return new Elem(v2.value0, v2.value1, v.value0(v2.value2), Data_Functor.map(Data_Functor.functorArray)(go)(v2.value3));
        }
        ;
        if (v2 instanceof Keyed) {
          return new Keyed(v2.value0, v2.value1, v.value0(v2.value2), Data_Functor.map(Data_Functor.functorArray)(Data_Functor.map(Data_Tuple.functorTuple)(go))(v2.value3));
        }
        ;
        if (v2 instanceof Widget) {
          return new Widget(v.value1(v2.value0));
        }
        ;
        if (v2 instanceof Grafted) {
          return new Grafted(Data_Bifunctor.bimap(bifunctorGraft)(v.value0)(v.value1)(v2.value0));
        }
        ;
        throw new Error("Failed pattern match at Halogen.VDom.Types (line 86, column 7 - line 86, column 27): " + [v2.constructor.name]);
      };
      return go(v.value2);
    });
    exports["Text"] = Text;
    exports["Elem"] = Elem;
    exports["Keyed"] = Keyed;
    exports["Widget"] = Widget;
    exports["Grafted"] = Grafted;
    exports["runGraft"] = runGraft;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Halogen.HTML.Core"] = $PS["Halogen.HTML.Core"] || {};
    var exports = $PS["Halogen.HTML.Core"];
    var Halogen_VDom_DOM_Prop = $PS["Halogen.VDom.DOM.Prop"];
    var Halogen_VDom_Types = $PS["Halogen.VDom.Types"];
    var HTML = function(x) {
      return x;
    };
    var text = function($20) {
      return HTML(Halogen_VDom_Types.Text.create($20));
    };
    var handler = Halogen_VDom_DOM_Prop.Handler.create;
    var element = function(ns) {
      return function(name) {
        return function(props) {
          return function(children) {
            return new Halogen_VDom_Types.Elem(ns, name, props, children);
          };
        };
      };
    };
    exports["text"] = text;
    exports["element"] = element;
    exports["handler"] = handler;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Halogen.HTML.Elements"] = $PS["Halogen.HTML.Elements"] || {};
    var exports = $PS["Halogen.HTML.Elements"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Halogen_HTML_Core = $PS["Halogen.HTML.Core"];
    var element = Halogen_HTML_Core.element(Data_Maybe.Nothing.value);
    var p = element("p");
    var p_ = p([]);
    var div = element("div");
    var div_ = div([]);
    var button = element("button");
    exports["button"] = button;
    exports["div_"] = div_;
    exports["p_"] = p_;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Halogen.Query.Input"] = $PS["Halogen.Query.Input"] || {};
    var exports = $PS["Halogen.Query.Input"];
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
      function Action2(value0) {
        this.value0 = value0;
      }
      ;
      Action2.create = function(value0) {
        return new Action2(value0);
      };
      return Action2;
    }();
    exports["RefUpdate"] = RefUpdate;
    exports["Action"] = Action;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Web.UIEvent.MouseEvent.EventTypes"] = $PS["Web.UIEvent.MouseEvent.EventTypes"] || {};
    var exports = $PS["Web.UIEvent.MouseEvent.EventTypes"];
    var click = "click";
    exports["click"] = click;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Halogen.HTML.Events"] = $PS["Halogen.HTML.Events"] || {};
    var exports = $PS["Halogen.HTML.Events"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Halogen_HTML_Core = $PS["Halogen.HTML.Core"];
    var Halogen_Query_Input = $PS["Halogen.Query.Input"];
    var Unsafe_Coerce = $PS["Unsafe.Coerce"];
    var Web_UIEvent_MouseEvent_EventTypes = $PS["Web.UIEvent.MouseEvent.EventTypes"];
    var mouseHandler = Unsafe_Coerce.unsafeCoerce;
    var handler = function(et) {
      return function(f) {
        return Halogen_HTML_Core.handler(et)(function(ev) {
          return new Data_Maybe.Just(new Halogen_Query_Input.Action(f(ev)));
        });
      };
    };
    var onClick = function() {
      var $1 = handler(Web_UIEvent_MouseEvent_EventTypes.click);
      return function($2) {
        return $1(mouseHandler($2));
      };
    }();
    exports["onClick"] = onClick;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["App.Button"] = $PS["App.Button"] || {};
    var exports = $PS["App.Button"];
    var Control_Monad_State_Class = $PS["Control.Monad.State.Class"];
    var Data_Show = $PS["Data.Show"];
    var Halogen_Component = $PS["Halogen.Component"];
    var Halogen_HTML_Core = $PS["Halogen.HTML.Core"];
    var Halogen_HTML_Elements = $PS["Halogen.HTML.Elements"];
    var Halogen_HTML_Events = $PS["Halogen.HTML.Events"];
    var Halogen_Query_HalogenM = $PS["Halogen.Query.HalogenM"];
    var Increment = function() {
      function Increment2() {
      }
      ;
      Increment2.value = new Increment2();
      return Increment2;
    }();
    var render = function(state) {
      return Halogen_HTML_Elements.div_([Halogen_HTML_Elements.p_([Halogen_HTML_Core.text("You clicked " + (Data_Show.show(Data_Show.showInt)(state.count) + " times"))]), Halogen_HTML_Elements.button([Halogen_HTML_Events.onClick(function(v) {
        return Increment.value;
      })])([Halogen_HTML_Core.text("Click me")])]);
    };
    var handleAction = function(v) {
      return Control_Monad_State_Class.modify_(Halogen_Query_HalogenM.monadStateHalogenM)(function(st) {
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
    var component = Halogen_Component.mkComponent({
      initialState: function(v) {
        return {
          count: 0
        };
      },
      render,
      "eval": Halogen_Component.mkEval({
        handleAction,
        handleQuery: Halogen_Component.defaultEval.handleQuery,
        receive: Halogen_Component.defaultEval.receive,
        initialize: Halogen_Component.defaultEval.initialize,
        finalize: Halogen_Component.defaultEval.finalize
      })
    });
    exports["component"] = component;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Data.Either"] = $PS["Data.Either"] || {};
    var exports = $PS["Data.Either"];
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
    exports["Left"] = Left;
    exports["Right"] = Right;
    exports["either"] = either;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Control.Plus"] = $PS["Control.Plus"] || {};
    var exports = $PS["Control.Plus"];
    var empty = function(dict) {
      return dict.empty;
    };
    exports["empty"] = empty;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Data.NonEmpty"] = $PS["Data.NonEmpty"] || {};
    var exports = $PS["Data.NonEmpty"];
    var Control_Plus = $PS["Control.Plus"];
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
    var singleton = function(dictPlus) {
      return function(a) {
        return new NonEmpty(a, Control_Plus.empty(dictPlus));
      };
    };
    exports["NonEmpty"] = NonEmpty;
    exports["singleton"] = singleton;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Data.List.NonEmpty"] = $PS["Data.List.NonEmpty"] || {};
    var exports = $PS["Data.List.NonEmpty"];
    var Data_List_Types = $PS["Data.List.Types"];
    var Data_NonEmpty = $PS["Data.NonEmpty"];
    var singleton = function() {
      var $172 = Data_NonEmpty.singleton(Data_List_Types.plusList);
      return function($173) {
        return Data_List_Types.NonEmptyList($172($173));
      };
    }();
    var cons = function(y) {
      return function(v) {
        return new Data_NonEmpty.NonEmpty(y, new Data_List_Types.Cons(v.value0, v.value1));
      };
    };
    exports["singleton"] = singleton;
    exports["cons"] = cons;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Control.Applicative.Free"] = $PS["Control.Applicative.Free"] || {};
    var exports = $PS["Control.Applicative.Free"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Control_Apply = $PS["Control.Apply"];
    var Control_Category = $PS["Control.Category"];
    var Data_Either = $PS["Data.Either"];
    var Data_List_NonEmpty = $PS["Data.List.NonEmpty"];
    var Data_List_Types = $PS["Data.List.Types"];
    var Data_NonEmpty = $PS["Data.NonEmpty"];
    var Data_Tuple = $PS["Data.Tuple"];
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
      function Lift2(value0) {
        this.value0 = value0;
      }
      ;
      Lift2.create = function(value0) {
        return new Lift2(value0);
      };
      return Lift2;
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
        return new Ap(fba, fb);
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
                    return new Data_Tuple.Tuple(new Data_List_Types.Cons({
                      func: Control_Applicative.pure(dictApplicative)(func.value0),
                      count
                    }, fStack), valStack);
                  }
                  ;
                  if (func instanceof Lift) {
                    $tco_done = true;
                    return new Data_Tuple.Tuple(new Data_List_Types.Cons({
                      func: nat(func.value0),
                      count
                    }, fStack), valStack);
                  }
                  ;
                  if (func instanceof Ap) {
                    $tco_var_dictApplicative = dictApplicative;
                    $tco_var_fStack = fStack;
                    $tco_var_valStack = Data_List_NonEmpty.cons(func.value1)(valStack);
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
              if (fStack instanceof Data_List_Types.Nil) {
                $tco_done = true;
                return new Data_Either.Left(gVal);
              }
              ;
              if (fStack instanceof Data_List_Types.Cons) {
                var gRes = Control_Apply.apply(dictApplicative.Apply0())(fStack.value0.func)(gVal);
                var $14 = fStack.value0.count === 1;
                if ($14) {
                  if (fStack.value1 instanceof Data_List_Types.Nil) {
                    $tco_done = true;
                    return new Data_Either.Left(gRes);
                  }
                  ;
                  $tco_var_dictApplicative = dictApplicative;
                  $tco_var_fStack = fStack.value1;
                  $tco_var_vals = vals;
                  $copy_gVal = gRes;
                  return;
                }
                ;
                if (vals instanceof Data_List_Types.Nil) {
                  $tco_done = true;
                  return new Data_Either.Left(gRes);
                }
                ;
                if (vals instanceof Data_List_Types.Cons) {
                  $tco_done = true;
                  return Data_Either.Right.create(new Data_Tuple.Tuple(new Data_List_Types.Cons({
                    func: gRes,
                    count: fStack.value0.count - 1 | 0
                  }, fStack.value1), new Data_NonEmpty.NonEmpty(vals.value0, vals.value1)));
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
          return mkAp(new Pure(f))(x);
        };
      }
    };
    var foldFreeAp = function(dictApplicative) {
      return function(nat) {
        return function(z) {
          var go = function($copy_v) {
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(v) {
              if (v.value1.value0 instanceof Pure) {
                var v1 = goApply(dictApplicative)(v.value0)(v.value1.value1)(Control_Applicative.pure(dictApplicative)(v.value1.value0.value0));
                if (v1 instanceof Data_Either.Left) {
                  $tco_done = true;
                  return v1.value0;
                }
                ;
                if (v1 instanceof Data_Either.Right) {
                  $copy_v = v1.value0;
                  return;
                }
                ;
                throw new Error("Failed pattern match at Control.Applicative.Free (line 54, column 17 - line 56, column 24): " + [v1.constructor.name]);
              }
              ;
              if (v.value1.value0 instanceof Lift) {
                var v1 = goApply(dictApplicative)(v.value0)(v.value1.value1)(nat(v.value1.value0.value0));
                if (v1 instanceof Data_Either.Left) {
                  $tco_done = true;
                  return v1.value0;
                }
                ;
                if (v1 instanceof Data_Either.Right) {
                  $copy_v = v1.value0;
                  return;
                }
                ;
                throw new Error("Failed pattern match at Control.Applicative.Free (line 57, column 17 - line 59, column 24): " + [v1.constructor.name]);
              }
              ;
              if (v.value1.value0 instanceof Ap) {
                var nextVals = new Data_NonEmpty.NonEmpty(v.value1.value0.value1, v.value1.value1);
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
          return go(new Data_Tuple.Tuple(Data_List_Types.Nil.value, Data_List_NonEmpty.singleton(z)));
        };
      };
    };
    var retractFreeAp = function(dictApplicative) {
      return foldFreeAp(dictApplicative)(Control_Category.identity(Control_Category.categoryFn));
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
    exports["retractFreeAp"] = retractFreeAp;
    exports["hoistFreeAp"] = hoistFreeAp;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Control.Monad.Error.Class"] = $PS["Control.Monad.Error.Class"] || {};
    var exports = $PS["Control.Monad.Error.Class"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Data_Either = $PS["Data.Either"];
    var Data_Functor = $PS["Data.Functor"];
    var throwError = function(dict) {
      return dict.throwError;
    };
    var catchError = function(dict) {
      return dict.catchError;
    };
    var $$try = function(dictMonadError) {
      return function(a) {
        return catchError(dictMonadError)(Data_Functor.map(dictMonadError.MonadThrow0().Monad0().Bind1().Apply0().Functor0())(Data_Either.Right.create)(a))(function() {
          var $21 = Control_Applicative.pure(dictMonadError.MonadThrow0().Monad0().Applicative0());
          return function($22) {
            return $21(Data_Either.Left.create($22));
          };
        }());
      };
    };
    exports["throwError"] = throwError;
    exports["try"] = $$try;
  })(PS);
  (function(exports) {
    "use strict";
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
      function nonCanceler(error) {
        return new Aff2(PURE, void 0);
      }
      function runEff(eff) {
        try {
          eff();
        } catch (error) {
          setTimeout(function() {
            throw error;
          }, 0);
        }
      }
      function runSync(left, right, eff) {
        try {
          return right(eff());
        } catch (error) {
          return left(error);
        }
      }
      function runAsync(left, eff, k) {
        try {
          return eff(k)();
        } catch (error) {
          k(left(error))();
          return nonCanceler;
        }
      }
      var Scheduler = function() {
        var limit = 1024;
        var size = 0;
        var ix = 0;
        var queue = new Array(limit);
        var draining = false;
        function drain() {
          var thunk;
          draining = true;
          while (size !== 0) {
            size--;
            thunk = queue[ix];
            queue[ix] = void 0;
            ix = (ix + 1) % limit;
            thunk();
          }
          draining = false;
        }
        return {
          isDraining: function() {
            return draining;
          },
          enqueue: function(cb) {
            var i, tmp;
            if (size === limit) {
              tmp = draining;
              drain();
              draining = tmp;
            }
            queue[(ix + size) % limit] = cb;
            size++;
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
              function kill(fid) {
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
                  kill(k);
                }
              }
              fibers = {};
              fiberId = 0;
              count = 0;
              return function(error) {
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
        var step = aff;
        var fail = null;
        var interrupt = null;
        var bhead = null;
        var btail = null;
        var attempts = null;
        var bracketCount = 0;
        var joinId = 0;
        var joins = null;
        var rethrow = true;
        function run(localRunTick) {
          var tmp, result, attempt;
          while (true) {
            tmp = null;
            result = null;
            attempt = null;
            switch (status) {
              case STEP_BIND:
                status = CONTINUE;
                try {
                  step = bhead(step);
                  if (btail === null) {
                    bhead = null;
                  } else {
                    bhead = btail._1;
                    btail = btail._2;
                  }
                } catch (e) {
                  status = RETURN;
                  fail = util.left(e);
                  step = null;
                }
                break;
              case STEP_RESULT:
                if (util.isLeft(step)) {
                  status = RETURN;
                  fail = step;
                  step = null;
                } else if (bhead === null) {
                  status = RETURN;
                } else {
                  status = STEP_BIND;
                  step = util.fromRight(step);
                }
                break;
              case CONTINUE:
                switch (step.tag) {
                  case BIND:
                    if (bhead) {
                      btail = new Aff2(CONS, bhead, btail);
                    }
                    bhead = step._2;
                    status = CONTINUE;
                    step = step._1;
                    break;
                  case PURE:
                    if (bhead === null) {
                      status = RETURN;
                      step = util.right(step._1);
                    } else {
                      status = STEP_BIND;
                      step = step._1;
                    }
                    break;
                  case SYNC:
                    status = STEP_RESULT;
                    step = runSync(util.left, util.right, step._1);
                    break;
                  case ASYNC:
                    status = PENDING;
                    step = runAsync(util.left, step._1, function(result2) {
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
                          step = result2;
                          run(runTick);
                        });
                      };
                    });
                    return;
                  case THROW:
                    status = RETURN;
                    fail = util.left(step._1);
                    step = null;
                    break;
                  case CATCH:
                    if (bhead === null) {
                      attempts = new Aff2(CONS, step, attempts, interrupt);
                    } else {
                      attempts = new Aff2(CONS, step, new Aff2(CONS, new Aff2(RESUME, bhead, btail), attempts, interrupt), interrupt);
                    }
                    bhead = null;
                    btail = null;
                    status = CONTINUE;
                    step = step._1;
                    break;
                  case BRACKET:
                    bracketCount++;
                    if (bhead === null) {
                      attempts = new Aff2(CONS, step, attempts, interrupt);
                    } else {
                      attempts = new Aff2(CONS, step, new Aff2(CONS, new Aff2(RESUME, bhead, btail), attempts, interrupt), interrupt);
                    }
                    bhead = null;
                    btail = null;
                    status = CONTINUE;
                    step = step._1;
                    break;
                  case FORK:
                    status = STEP_RESULT;
                    tmp = Fiber(util, supervisor, step._2);
                    if (supervisor) {
                      supervisor.register(tmp);
                    }
                    if (step._1) {
                      tmp.run();
                    }
                    step = util.right(tmp);
                    break;
                  case SEQ:
                    status = CONTINUE;
                    step = sequential(util, supervisor, step._1);
                    break;
                }
                break;
              case RETURN:
                bhead = null;
                btail = null;
                if (attempts === null) {
                  status = COMPLETED;
                  step = interrupt || fail || step;
                } else {
                  tmp = attempts._3;
                  attempt = attempts._1;
                  attempts = attempts._2;
                  switch (attempt.tag) {
                    case CATCH:
                      if (interrupt && interrupt !== tmp && bracketCount === 0) {
                        status = RETURN;
                      } else if (fail) {
                        status = CONTINUE;
                        step = attempt._2(util.fromLeft(fail));
                        fail = null;
                      }
                      break;
                    case RESUME:
                      if (interrupt && interrupt !== tmp && bracketCount === 0 || fail) {
                        status = RETURN;
                      } else {
                        bhead = attempt._1;
                        btail = attempt._2;
                        status = STEP_BIND;
                        step = util.fromRight(step);
                      }
                      break;
                    case BRACKET:
                      bracketCount--;
                      if (fail === null) {
                        result = util.fromRight(step);
                        attempts = new Aff2(CONS, new Aff2(RELEASE, attempt._2, result), attempts, tmp);
                        if (interrupt === tmp || bracketCount > 0) {
                          status = CONTINUE;
                          step = attempt._3(result);
                        }
                      }
                      break;
                    case RELEASE:
                      attempts = new Aff2(CONS, new Aff2(FINALIZED, step, fail), attempts, interrupt);
                      status = CONTINUE;
                      if (interrupt && interrupt !== tmp && bracketCount === 0) {
                        step = attempt._1.killed(util.fromLeft(interrupt))(attempt._2);
                      } else if (fail) {
                        step = attempt._1.failed(util.fromLeft(fail))(attempt._2);
                      } else {
                        step = attempt._1.completed(util.fromRight(step))(attempt._2);
                      }
                      fail = null;
                      bracketCount++;
                      break;
                    case FINALIZER:
                      bracketCount++;
                      attempts = new Aff2(CONS, new Aff2(FINALIZED, step, fail), attempts, interrupt);
                      status = CONTINUE;
                      step = attempt._1;
                      break;
                    case FINALIZED:
                      bracketCount--;
                      status = RETURN;
                      step = attempt._1;
                      fail = attempt._2;
                      break;
                  }
                }
                break;
              case COMPLETED:
                for (var k in joins) {
                  if (joins.hasOwnProperty(k)) {
                    rethrow = rethrow && joins[k].rethrow;
                    runEff(joins[k].handler(step));
                  }
                }
                joins = null;
                if (interrupt && fail) {
                  setTimeout(function() {
                    throw util.fromLeft(fail);
                  }, 0);
                } else if (util.isLeft(step) && rethrow) {
                  setTimeout(function() {
                    if (rethrow) {
                      throw util.fromLeft(step);
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
        function onComplete(join2) {
          return function() {
            if (status === COMPLETED) {
              rethrow = rethrow && join2.rethrow;
              join2.handler(step)();
              return function() {
              };
            }
            var jid = joinId++;
            joins = joins || {};
            joins[jid] = join2;
            return function() {
              if (joins !== null) {
                delete joins[jid];
              }
            };
          };
        }
        function kill(error, cb) {
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
                interrupt = util.left(error);
                status = COMPLETED;
                step = interrupt;
                run(runTick);
                break;
              case PENDING:
                if (interrupt === null) {
                  interrupt = util.left(error);
                }
                if (bracketCount === 0) {
                  if (status === PENDING) {
                    attempts = new Aff2(CONS, new Aff2(FINALIZER, step(error)), attempts, interrupt);
                  }
                  status = RETURN;
                  step = null;
                  fail = null;
                  run(++runTick);
                }
                break;
              default:
                if (interrupt === null) {
                  interrupt = util.left(error);
                }
                if (bracketCount === 0) {
                  status = RETURN;
                  step = null;
                  fail = null;
                }
            }
            return canceler;
          };
        }
        function join(cb) {
          return function() {
            var canceler = onComplete({
              rethrow: false,
              handler: cb
            })();
            if (status === SUSPENDED) {
              run(runTick);
            }
            return canceler;
          };
        }
        return {
          kill,
          join,
          onComplete,
          isSuspended: function() {
            return status === SUSPENDED;
          },
          run: function() {
            if (status === SUSPENDED) {
              if (!Scheduler.isDraining()) {
                Scheduler.enqueue(function() {
                  run(runTick);
                });
              } else {
                run(runTick);
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
        function kill(error, par2, cb2) {
          var step = par2;
          var head = null;
          var tail = null;
          var count = 0;
          var kills2 = {};
          var tmp, kid;
          loop:
            while (true) {
              tmp = null;
              switch (step.tag) {
                case FORKED:
                  if (step._3 === EMPTY) {
                    tmp = fibers[step._1];
                    kills2[count++] = tmp.kill(error, function(result) {
                      return function() {
                        count--;
                        if (count === 0) {
                          cb2(result)();
                        }
                      };
                    });
                  }
                  if (head === null) {
                    break loop;
                  }
                  step = head._2;
                  if (tail === null) {
                    head = null;
                  } else {
                    head = tail._1;
                    tail = tail._2;
                  }
                  break;
                case MAP:
                  step = step._2;
                  break;
                case APPLY:
                case ALT:
                  if (head) {
                    tail = new Aff2(CONS, head, tail);
                  }
                  head = step;
                  step = step._1;
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
        function join(result, head, tail) {
          var fail, step, lhs, rhs, tmp, kid;
          if (util.isLeft(result)) {
            fail = result;
            step = null;
          } else {
            step = result;
            fail = null;
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
              if (head === null) {
                cb(fail || step)();
                return;
              }
              if (head._3 !== EMPTY) {
                return;
              }
              switch (head.tag) {
                case MAP:
                  if (fail === null) {
                    head._3 = util.right(head._1(util.fromRight(step)));
                    step = head._3;
                  } else {
                    head._3 = fail;
                  }
                  break;
                case APPLY:
                  lhs = head._1._3;
                  rhs = head._2._3;
                  if (fail) {
                    head._3 = fail;
                    tmp = true;
                    kid = killId++;
                    kills[kid] = kill(early, fail === lhs ? head._2 : head._1, function() {
                      return function() {
                        delete kills[kid];
                        if (tmp) {
                          tmp = false;
                        } else if (tail === null) {
                          join(fail, null, null);
                        } else {
                          join(fail, tail._1, tail._2);
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
                    step = util.right(util.fromRight(lhs)(util.fromRight(rhs)));
                    head._3 = step;
                  }
                  break;
                case ALT:
                  lhs = head._1._3;
                  rhs = head._2._3;
                  if (lhs === EMPTY && util.isLeft(rhs) || rhs === EMPTY && util.isLeft(lhs)) {
                    return;
                  }
                  if (lhs !== EMPTY && util.isLeft(lhs) && rhs !== EMPTY && util.isLeft(rhs)) {
                    fail = step === lhs ? rhs : lhs;
                    step = null;
                    head._3 = fail;
                  } else {
                    head._3 = step;
                    tmp = true;
                    kid = killId++;
                    kills[kid] = kill(early, step === lhs ? head._2 : head._1, function() {
                      return function() {
                        delete kills[kid];
                        if (tmp) {
                          tmp = false;
                        } else if (tail === null) {
                          join(step, null, null);
                        } else {
                          join(step, tail._1, tail._2);
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
              if (tail === null) {
                head = null;
              } else {
                head = tail._1;
                tail = tail._2;
              }
            }
        }
        function resolve(fiber) {
          return function(result) {
            return function() {
              delete fibers[fiber._1];
              fiber._3 = result;
              join(result, fiber._2._1, fiber._2._2);
            };
          };
        }
        function run() {
          var status = CONTINUE;
          var step = par;
          var head = null;
          var tail = null;
          var tmp, fid;
          loop:
            while (true) {
              tmp = null;
              fid = null;
              switch (status) {
                case CONTINUE:
                  switch (step.tag) {
                    case MAP:
                      if (head) {
                        tail = new Aff2(CONS, head, tail);
                      }
                      head = new Aff2(MAP, step._1, EMPTY, EMPTY);
                      step = step._2;
                      break;
                    case APPLY:
                      if (head) {
                        tail = new Aff2(CONS, head, tail);
                      }
                      head = new Aff2(APPLY, EMPTY, step._2, EMPTY);
                      step = step._1;
                      break;
                    case ALT:
                      if (head) {
                        tail = new Aff2(CONS, head, tail);
                      }
                      head = new Aff2(ALT, EMPTY, step._2, EMPTY);
                      step = step._1;
                      break;
                    default:
                      fid = fiberId++;
                      status = RETURN;
                      tmp = step;
                      step = new Aff2(FORKED, fid, new Aff2(CONS, head, tail), EMPTY);
                      tmp = Fiber(util, supervisor, tmp);
                      tmp.onComplete({
                        rethrow: false,
                        handler: resolve(step)
                      })();
                      fibers[fid] = tmp;
                      if (supervisor) {
                        supervisor.register(tmp);
                      }
                  }
                  break;
                case RETURN:
                  if (head === null) {
                    break loop;
                  }
                  if (head._1 === EMPTY) {
                    head._1 = step;
                    status = CONTINUE;
                    step = head._2;
                    head._2 = EMPTY;
                  } else {
                    head._2 = step;
                    step = head;
                    if (tail === null) {
                      head = null;
                    } else {
                      head = tail._1;
                      tail = tail._2;
                    }
                  }
              }
            }
          root = step;
          for (fid = 0; fid < fiberId; fid++) {
            fibers[fid].run();
          }
        }
        function cancel(error, cb2) {
          interrupt = util.left(error);
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
          var newKills = kill(error, root, cb2);
          return function(killError) {
            return new Aff2(ASYNC, function(killCb) {
              return function() {
                for (var kid2 in newKills) {
                  if (newKills.hasOwnProperty(kid2)) {
                    newKills[kid2]();
                  }
                }
                return nonCanceler;
              };
            });
          };
        }
        run();
        return function(killError) {
          return new Aff2(ASYNC, function(killCb) {
            return function() {
              return cancel(killError, killCb);
            };
          });
        };
      }
      function sequential(util, supervisor, par) {
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
      Aff2.nonCanceler = nonCanceler;
      return Aff2;
    }();
    exports._pure = Aff.Pure;
    exports._throwError = Aff.Throw;
    exports._catchError = function(aff) {
      return function(k) {
        return Aff.Catch(aff, k);
      };
    };
    exports._map = function(f) {
      return function(aff) {
        if (aff.tag === Aff.Pure.tag) {
          return Aff.Pure(f(aff._1));
        } else {
          return Aff.Bind(aff, function(value) {
            return Aff.Pure(f(value));
          });
        }
      };
    };
    exports._bind = function(aff) {
      return function(k) {
        return Aff.Bind(aff, k);
      };
    };
    exports._fork = function(immediate) {
      return function(aff) {
        return Aff.Fork(immediate, aff);
      };
    };
    exports._liftEffect = Aff.Sync;
    exports._parAffMap = function(f) {
      return function(aff) {
        return Aff.ParMap(f, aff);
      };
    };
    exports._parAffApply = function(aff1) {
      return function(aff2) {
        return Aff.ParApply(aff1, aff2);
      };
    };
    exports.makeAff = Aff.Async;
    exports.generalBracket = function(acquire) {
      return function(options) {
        return function(k) {
          return Aff.Bracket(acquire, options, k);
        };
      };
    };
    exports._makeFiber = function(util, aff) {
      return function() {
        return Aff.Fiber(util, null, aff);
      };
    };
    exports._sequential = Aff.Seq;
  })(PS["Effect.Aff"] = PS["Effect.Aff"] || {});
  (function($PS) {
    "use strict";
    $PS["Control.Parallel.Class"] = $PS["Control.Parallel.Class"] || {};
    var exports = $PS["Control.Parallel.Class"];
    var sequential = function(dict) {
      return dict.sequential;
    };
    var parallel = function(dict) {
      return dict.parallel;
    };
    exports["parallel"] = parallel;
    exports["sequential"] = sequential;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Effect.Class"] = $PS["Effect.Class"] || {};
    var exports = $PS["Effect.Class"];
    var Control_Category = $PS["Control.Category"];
    var Effect = $PS["Effect"];
    var monadEffectEffect = {
      liftEffect: Control_Category.identity(Control_Category.categoryFn),
      Monad0: function() {
        return Effect.monadEffect;
      }
    };
    var liftEffect = function(dict) {
      return dict.liftEffect;
    };
    exports["liftEffect"] = liftEffect;
    exports["monadEffectEffect"] = monadEffectEffect;
  })(PS);
  (function(exports) {
    "use strict";
    exports.unsafePerformEffect = function(f) {
      return f();
    };
  })(PS["Effect.Unsafe"] = PS["Effect.Unsafe"] || {});
  (function($PS) {
    "use strict";
    $PS["Effect.Unsafe"] = $PS["Effect.Unsafe"] || {};
    var exports = $PS["Effect.Unsafe"];
    var $foreign = $PS["Effect.Unsafe"];
    exports["unsafePerformEffect"] = $foreign.unsafePerformEffect;
  })(PS);
  (function(exports) {
    "use strict";
    exports._unsafePartial = function(f) {
      return f();
    };
  })(PS["Partial.Unsafe"] = PS["Partial.Unsafe"] || {});
  (function(exports) {
    "use strict";
    exports._crashWith = function(msg) {
      throw new Error(msg);
    };
  })(PS["Partial"] = PS["Partial"] || {});
  (function($PS) {
    "use strict";
    $PS["Partial"] = $PS["Partial"] || {};
    var exports = $PS["Partial"];
    var $foreign = $PS["Partial"];
    var crashWith = function(dictPartial) {
      return $foreign["_crashWith"];
    };
    exports["crashWith"] = crashWith;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Partial.Unsafe"] = $PS["Partial.Unsafe"] || {};
    var exports = $PS["Partial.Unsafe"];
    var $foreign = $PS["Partial.Unsafe"];
    var Partial = $PS["Partial"];
    var unsafePartial = $foreign["_unsafePartial"];
    var unsafeCrashWith = function(msg) {
      return unsafePartial(function(dictPartial) {
        return Partial.crashWith()(msg);
      });
    };
    exports["unsafeCrashWith"] = unsafeCrashWith;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Effect.Aff"] = $PS["Effect.Aff"] || {};
    var exports = $PS["Effect.Aff"];
    var $foreign = $PS["Effect.Aff"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Control_Bind = $PS["Control.Bind"];
    var Control_Monad = $PS["Control.Monad"];
    var Control_Monad_Error_Class = $PS["Control.Monad.Error.Class"];
    var Control_Monad_Rec_Class = $PS["Control.Monad.Rec.Class"];
    var Control_Parallel_Class = $PS["Control.Parallel.Class"];
    var Data_Either = $PS["Data.Either"];
    var Data_Function = $PS["Data.Function"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_Unit = $PS["Data.Unit"];
    var Effect = $PS["Effect"];
    var Effect_Class = $PS["Effect.Class"];
    var Effect_Unsafe = $PS["Effect.Unsafe"];
    var Partial_Unsafe = $PS["Partial.Unsafe"];
    var Unsafe_Coerce = $PS["Unsafe.Coerce"];
    var Canceler = function(x) {
      return x;
    };
    var suspendAff = $foreign["_fork"](false);
    var functorParAff = {
      map: $foreign["_parAffMap"]
    };
    var functorAff = {
      map: $foreign["_map"]
    };
    var forkAff = $foreign["_fork"](true);
    var ffiUtil = function() {
      var unsafeFromRight = function(v) {
        if (v instanceof Data_Either.Right) {
          return v.value0;
        }
        ;
        if (v instanceof Data_Either.Left) {
          return Partial_Unsafe.unsafeCrashWith("unsafeFromRight: Left");
        }
        ;
        throw new Error("Failed pattern match at Effect.Aff (line 404, column 21 - line 406, column 54): " + [v.constructor.name]);
      };
      var unsafeFromLeft = function(v) {
        if (v instanceof Data_Either.Left) {
          return v.value0;
        }
        ;
        if (v instanceof Data_Either.Right) {
          return Partial_Unsafe.unsafeCrashWith("unsafeFromLeft: Right");
        }
        ;
        throw new Error("Failed pattern match at Effect.Aff (line 399, column 20 - line 401, column 54): " + [v.constructor.name]);
      };
      var isLeft = function(v) {
        if (v instanceof Data_Either.Left) {
          return true;
        }
        ;
        if (v instanceof Data_Either.Right) {
          return false;
        }
        ;
        throw new Error("Failed pattern match at Effect.Aff (line 394, column 12 - line 396, column 20): " + [v.constructor.name]);
      };
      return {
        isLeft,
        fromLeft: unsafeFromLeft,
        fromRight: unsafeFromRight,
        left: Data_Either.Left.create,
        right: Data_Either.Right.create
      };
    }();
    var makeFiber = function(aff) {
      return $foreign["_makeFiber"](ffiUtil, aff);
    };
    var launchAff = function(aff) {
      return function __do() {
        var fiber = makeFiber(aff)();
        fiber.run();
        return fiber;
      };
    };
    var bracket = function(acquire) {
      return function(completed) {
        return $foreign.generalBracket(acquire)({
          killed: Data_Function["const"](completed),
          failed: Data_Function["const"](completed),
          completed: Data_Function["const"](completed)
        });
      };
    };
    var applyParAff = {
      apply: $foreign["_parAffApply"],
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
      bind: $foreign["_bind"],
      Apply0: function() {
        return applyAff;
      }
    };
    var applyAff = {
      apply: Control_Monad.ap(monadAff),
      Functor0: function() {
        return functorAff;
      }
    };
    var applicativeAff = {
      pure: $foreign["_pure"],
      Apply0: function() {
        return applyAff;
      }
    };
    var $$finally = function(fin) {
      return function(a) {
        return bracket(Control_Applicative.pure(applicativeAff)(Data_Unit.unit))(Data_Function["const"](fin))(Data_Function["const"](a));
      };
    };
    var monadEffectAff = {
      liftEffect: $foreign["_liftEffect"],
      Monad0: function() {
        return monadAff;
      }
    };
    var effectCanceler = function() {
      var $42 = Effect_Class.liftEffect(monadEffectAff);
      return function($43) {
        return Canceler(Data_Function["const"]($42($43)));
      };
    }();
    var joinFiber = function(v) {
      return $foreign.makeAff(function(k) {
        return Data_Functor.map(Effect.functorEffect)(effectCanceler)(v.join(k));
      });
    };
    var functorFiber = {
      map: function(f) {
        return function(t) {
          return Effect_Unsafe.unsafePerformEffect(makeFiber(Data_Functor.map(functorAff)(f)(joinFiber(t))));
        };
      }
    };
    var killFiber = function(e) {
      return function(v) {
        return Control_Bind.bind(bindAff)(Effect_Class.liftEffect(monadEffectAff)(v.isSuspended))(function(v1) {
          if (v1) {
            return Effect_Class.liftEffect(monadEffectAff)(Data_Functor["void"](Effect.functorEffect)(v.kill(e, Data_Function["const"](Control_Applicative.pure(Effect.applicativeEffect)(Data_Unit.unit)))));
          }
          ;
          return $foreign.makeAff(function(k) {
            return Data_Functor.map(Effect.functorEffect)(effectCanceler)(v.kill(e, k));
          });
        });
      };
    };
    var monadThrowAff = {
      throwError: $foreign["_throwError"],
      Monad0: function() {
        return monadAff;
      }
    };
    var monadErrorAff = {
      catchError: $foreign["_catchError"],
      MonadThrow0: function() {
        return monadThrowAff;
      }
    };
    var runAff = function(k) {
      return function(aff) {
        return launchAff(Control_Bind.bindFlipped(bindAff)(function() {
          var $46 = Effect_Class.liftEffect(monadEffectAff);
          return function($47) {
            return $46(k($47));
          };
        }())(Control_Monad_Error_Class["try"](monadErrorAff)(aff)));
      };
    };
    var runAff_ = function(k) {
      return function(aff) {
        return Data_Functor["void"](Effect.functorEffect)(runAff(k)(aff));
      };
    };
    var parallelAff = {
      parallel: Unsafe_Coerce.unsafeCoerce,
      sequential: $foreign["_sequential"],
      Monad0: function() {
        return monadAff;
      },
      Applicative1: function() {
        return applicativeParAff;
      }
    };
    var applicativeParAff = {
      pure: function() {
        var $50 = Control_Parallel_Class.parallel(parallelAff);
        var $51 = Control_Applicative.pure(applicativeAff);
        return function($52) {
          return $50($51($52));
        };
      }(),
      Apply0: function() {
        return applyParAff;
      }
    };
    var monadRecAff = {
      tailRecM: function(k) {
        var go = function(a) {
          return Control_Bind.bind(bindAff)(k(a))(function(res) {
            if (res instanceof Control_Monad_Rec_Class.Done) {
              return Control_Applicative.pure(applicativeAff)(res.value0);
            }
            ;
            if (res instanceof Control_Monad_Rec_Class.Loop) {
              return go(res.value0);
            }
            ;
            throw new Error("Failed pattern match at Effect.Aff (line 102, column 7 - line 104, column 22): " + [res.constructor.name]);
          });
        };
        return go;
      },
      Monad0: function() {
        return monadAff;
      }
    };
    var nonCanceler = Data_Function["const"](Control_Applicative.pure(applicativeAff)(Data_Unit.unit));
    exports["runAff_"] = runAff_;
    exports["forkAff"] = forkAff;
    exports["suspendAff"] = suspendAff;
    exports["finally"] = $$finally;
    exports["killFiber"] = killFiber;
    exports["joinFiber"] = joinFiber;
    exports["nonCanceler"] = nonCanceler;
    exports["effectCanceler"] = effectCanceler;
    exports["functorAff"] = functorAff;
    exports["applicativeAff"] = applicativeAff;
    exports["bindAff"] = bindAff;
    exports["monadAff"] = monadAff;
    exports["monadRecAff"] = monadRecAff;
    exports["monadThrowAff"] = monadThrowAff;
    exports["monadEffectAff"] = monadEffectAff;
    exports["applicativeParAff"] = applicativeParAff;
    exports["parallelAff"] = parallelAff;
    exports["functorFiber"] = functorFiber;
    exports["makeAff"] = $foreign.makeAff;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Control.Monad.Fork.Class"] = $PS["Control.Monad.Fork.Class"] || {};
    var exports = $PS["Control.Monad.Fork.Class"];
    var Effect_Aff = $PS["Effect.Aff"];
    var monadForkAff = {
      suspend: Effect_Aff.suspendAff,
      fork: Effect_Aff.forkAff,
      join: Effect_Aff.joinFiber,
      Monad0: function() {
        return Effect_Aff.monadAff;
      },
      Functor1: function() {
        return Effect_Aff.functorFiber;
      }
    };
    var fork = function(dict) {
      return dict.fork;
    };
    exports["fork"] = fork;
    exports["monadForkAff"] = monadForkAff;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Control.Parallel"] = $PS["Control.Parallel"] || {};
    var exports = $PS["Control.Parallel"];
    var Control_Category = $PS["Control.Category"];
    var Control_Parallel_Class = $PS["Control.Parallel.Class"];
    var Data_Foldable = $PS["Data.Foldable"];
    var parTraverse_ = function(dictParallel) {
      return function(dictFoldable) {
        return function(f) {
          var $17 = Control_Parallel_Class.sequential(dictParallel);
          var $18 = Data_Foldable.traverse_(dictParallel.Applicative1())(dictFoldable)(function() {
            var $20 = Control_Parallel_Class.parallel(dictParallel);
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
        return parTraverse_(dictParallel)(dictFoldable)(Control_Category.identity(Control_Category.categoryFn));
      };
    };
    exports["parSequence_"] = parSequence_;
  })(PS);
  (function(exports) {
    "use strict";
    exports.length = function(xs) {
      return xs.length;
    };
    exports.findIndexImpl = function(just) {
      return function(nothing) {
        return function(f) {
          return function(xs) {
            for (var i = 0, l = xs.length; i < l; i++) {
              if (f(xs[i]))
                return just(i);
            }
            return nothing;
          };
        };
      };
    };
    exports._deleteAt = function(just) {
      return function(nothing) {
        return function(i) {
          return function(l) {
            if (i < 0 || i >= l.length)
              return nothing;
            var l1 = l.slice();
            l1.splice(i, 1);
            return just(l1);
          };
        };
      };
    };
  })(PS["Data.Array"] = PS["Data.Array"] || {});
  (function($PS) {
    "use strict";
    $PS["Data.Array"] = $PS["Data.Array"] || {};
    var exports = $PS["Data.Array"];
    var $foreign = $PS["Data.Array"];
    var Data_Maybe = $PS["Data.Maybe"];
    var findIndex = $foreign.findIndexImpl(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
    var deleteAt = $foreign["_deleteAt"](Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
    var deleteBy = function(v) {
      return function(v1) {
        return function(v2) {
          if (v2.length === 0) {
            return [];
          }
          ;
          return Data_Maybe.maybe(v2)(function(i) {
            return Data_Maybe.fromJust()(deleteAt(i)(v2));
          })(findIndex(v(v1))(v2));
        };
      };
    };
    exports["deleteBy"] = deleteBy;
    exports["length"] = $foreign.length;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Data.Boolean"] = $PS["Data.Boolean"] || {};
    var exports = $PS["Data.Boolean"];
    var otherwise = true;
    exports["otherwise"] = otherwise;
  })(PS);
  (function(exports) {
    "use strict";
    exports.boolConj = function(b1) {
      return function(b2) {
        return b1 && b2;
      };
    };
    exports.boolDisj = function(b1) {
      return function(b2) {
        return b1 || b2;
      };
    };
    exports.boolNot = function(b) {
      return !b;
    };
  })(PS["Data.HeytingAlgebra"] = PS["Data.HeytingAlgebra"] || {});
  (function($PS) {
    "use strict";
    $PS["Data.HeytingAlgebra"] = $PS["Data.HeytingAlgebra"] || {};
    var exports = $PS["Data.HeytingAlgebra"];
    var $foreign = $PS["Data.HeytingAlgebra"];
    var tt = function(dict) {
      return dict.tt;
    };
    var not = function(dict) {
      return dict.not;
    };
    var implies = function(dict) {
      return dict.implies;
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
      implies: function(a) {
        return function(b) {
          return disj(heytingAlgebraBoolean)(not(heytingAlgebraBoolean)(a))(b);
        };
      },
      conj: $foreign.boolConj,
      disj: $foreign.boolDisj,
      not: $foreign.boolNot
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
            return function(a) {
              return implies(dictHeytingAlgebra)(f(a))(g(a));
            };
          };
        },
        conj: function(f) {
          return function(g) {
            return function(a) {
              return conj(dictHeytingAlgebra)(f(a))(g(a));
            };
          };
        },
        disj: function(f) {
          return function(g) {
            return function(a) {
              return disj(dictHeytingAlgebra)(f(a))(g(a));
            };
          };
        },
        not: function(f) {
          return function(a) {
            return not(dictHeytingAlgebra)(f(a));
          };
        }
      };
    };
    exports["not"] = not;
    exports["heytingAlgebraBoolean"] = heytingAlgebraBoolean;
    exports["heytingAlgebraFunction"] = heytingAlgebraFunction;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Data.Map.Internal"] = $PS["Data.Map.Internal"] || {};
    var exports = $PS["Data.Map.Internal"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Data_Foldable = $PS["Data.Foldable"];
    var Data_List_Types = $PS["Data.List.Types"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Data_Ord = $PS["Data.Ord"];
    var Data_Ordering = $PS["Data.Ordering"];
    var Data_Semigroup = $PS["Data.Semigroup"];
    var Data_Tuple = $PS["Data.Tuple"];
    var Leaf = function() {
      function Leaf2() {
      }
      ;
      Leaf2.value = new Leaf2();
      return Leaf2;
    }();
    var Two = function() {
      function Two2(value0, value1, value2, value3) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
      }
      ;
      Two2.create = function(value0) {
        return function(value1) {
          return function(value2) {
            return function(value3) {
              return new Two2(value0, value1, value2, value3);
            };
          };
        };
      };
      return Two2;
    }();
    var Three = function() {
      function Three2(value0, value1, value2, value3, value4, value5, value6) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        this.value4 = value4;
        this.value5 = value5;
        this.value6 = value6;
      }
      ;
      Three2.create = function(value0) {
        return function(value1) {
          return function(value2) {
            return function(value3) {
              return function(value4) {
                return function(value5) {
                  return function(value6) {
                    return new Three2(value0, value1, value2, value3, value4, value5, value6);
                  };
                };
              };
            };
          };
        };
      };
      return Three2;
    }();
    var TwoLeft = function() {
      function TwoLeft2(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
      }
      ;
      TwoLeft2.create = function(value0) {
        return function(value1) {
          return function(value2) {
            return new TwoLeft2(value0, value1, value2);
          };
        };
      };
      return TwoLeft2;
    }();
    var TwoRight = function() {
      function TwoRight2(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
      }
      ;
      TwoRight2.create = function(value0) {
        return function(value1) {
          return function(value2) {
            return new TwoRight2(value0, value1, value2);
          };
        };
      };
      return TwoRight2;
    }();
    var ThreeLeft = function() {
      function ThreeLeft2(value0, value1, value2, value3, value4, value5) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        this.value4 = value4;
        this.value5 = value5;
      }
      ;
      ThreeLeft2.create = function(value0) {
        return function(value1) {
          return function(value2) {
            return function(value3) {
              return function(value4) {
                return function(value5) {
                  return new ThreeLeft2(value0, value1, value2, value3, value4, value5);
                };
              };
            };
          };
        };
      };
      return ThreeLeft2;
    }();
    var ThreeMiddle = function() {
      function ThreeMiddle2(value0, value1, value2, value3, value4, value5) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        this.value4 = value4;
        this.value5 = value5;
      }
      ;
      ThreeMiddle2.create = function(value0) {
        return function(value1) {
          return function(value2) {
            return function(value3) {
              return function(value4) {
                return function(value5) {
                  return new ThreeMiddle2(value0, value1, value2, value3, value4, value5);
                };
              };
            };
          };
        };
      };
      return ThreeMiddle2;
    }();
    var ThreeRight = function() {
      function ThreeRight2(value0, value1, value2, value3, value4, value5) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        this.value4 = value4;
        this.value5 = value5;
      }
      ;
      ThreeRight2.create = function(value0) {
        return function(value1) {
          return function(value2) {
            return function(value3) {
              return function(value4) {
                return function(value5) {
                  return new ThreeRight2(value0, value1, value2, value3, value4, value5);
                };
              };
            };
          };
        };
      };
      return ThreeRight2;
    }();
    var KickUp = function() {
      function KickUp2(value0, value1, value2, value3) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
      }
      ;
      KickUp2.create = function(value0) {
        return function(value1) {
          return function(value2) {
            return function(value3) {
              return new KickUp2(value0, value1, value2, value3);
            };
          };
        };
      };
      return KickUp2;
    }();
    var values = function(v) {
      if (v instanceof Leaf) {
        return Data_List_Types.Nil.value;
      }
      ;
      if (v instanceof Two) {
        return Data_Semigroup.append(Data_List_Types.semigroupList)(values(v.value0))(Data_Semigroup.append(Data_List_Types.semigroupList)(Control_Applicative.pure(Data_List_Types.applicativeList)(v.value2))(values(v.value3)));
      }
      ;
      if (v instanceof Three) {
        return Data_Semigroup.append(Data_List_Types.semigroupList)(values(v.value0))(Data_Semigroup.append(Data_List_Types.semigroupList)(Control_Applicative.pure(Data_List_Types.applicativeList)(v.value2))(Data_Semigroup.append(Data_List_Types.semigroupList)(values(v.value3))(Data_Semigroup.append(Data_List_Types.semigroupList)(Control_Applicative.pure(Data_List_Types.applicativeList)(v.value5))(values(v.value6)))));
      }
      ;
      throw new Error("Failed pattern match at Data.Map.Internal (line 626, column 1 - line 626, column 40): " + [v.constructor.name]);
    };
    var lookup = function(dictOrd) {
      return function(k) {
        var comp = Data_Ord.compare(dictOrd);
        var go = function($copy_v) {
          var $tco_done = false;
          var $tco_result;
          function $tco_loop(v) {
            if (v instanceof Leaf) {
              $tco_done = true;
              return Data_Maybe.Nothing.value;
            }
            ;
            if (v instanceof Two) {
              var v2 = comp(k)(v.value1);
              if (v2 instanceof Data_Ordering.EQ) {
                $tco_done = true;
                return new Data_Maybe.Just(v.value2);
              }
              ;
              if (v2 instanceof Data_Ordering.LT) {
                $copy_v = v.value0;
                return;
              }
              ;
              $copy_v = v.value3;
              return;
            }
            ;
            if (v instanceof Three) {
              var v3 = comp(k)(v.value1);
              if (v3 instanceof Data_Ordering.EQ) {
                $tco_done = true;
                return new Data_Maybe.Just(v.value2);
              }
              ;
              var v4 = comp(k)(v.value4);
              if (v4 instanceof Data_Ordering.EQ) {
                $tco_done = true;
                return new Data_Maybe.Just(v.value5);
              }
              ;
              if (v3 instanceof Data_Ordering.LT) {
                $copy_v = v.value0;
                return;
              }
              ;
              if (v4 instanceof Data_Ordering.GT) {
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
        return go;
      };
    };
    var fromZipper = function($copy_dictOrd) {
      return function($copy_v) {
        return function($copy_tree) {
          var $tco_var_dictOrd = $copy_dictOrd;
          var $tco_var_v = $copy_v;
          var $tco_done = false;
          var $tco_result;
          function $tco_loop(dictOrd, v, tree) {
            if (v instanceof Data_List_Types.Nil) {
              $tco_done = true;
              return tree;
            }
            ;
            if (v instanceof Data_List_Types.Cons) {
              if (v.value0 instanceof TwoLeft) {
                $tco_var_dictOrd = dictOrd;
                $tco_var_v = v.value1;
                $copy_tree = new Two(tree, v.value0.value0, v.value0.value1, v.value0.value2);
                return;
              }
              ;
              if (v.value0 instanceof TwoRight) {
                $tco_var_dictOrd = dictOrd;
                $tco_var_v = v.value1;
                $copy_tree = new Two(v.value0.value0, v.value0.value1, v.value0.value2, tree);
                return;
              }
              ;
              if (v.value0 instanceof ThreeLeft) {
                $tco_var_dictOrd = dictOrd;
                $tco_var_v = v.value1;
                $copy_tree = new Three(tree, v.value0.value0, v.value0.value1, v.value0.value2, v.value0.value3, v.value0.value4, v.value0.value5);
                return;
              }
              ;
              if (v.value0 instanceof ThreeMiddle) {
                $tco_var_dictOrd = dictOrd;
                $tco_var_v = v.value1;
                $copy_tree = new Three(v.value0.value0, v.value0.value1, v.value0.value2, tree, v.value0.value3, v.value0.value4, v.value0.value5);
                return;
              }
              ;
              if (v.value0 instanceof ThreeRight) {
                $tco_var_dictOrd = dictOrd;
                $tco_var_v = v.value1;
                $copy_tree = new Three(v.value0.value0, v.value0.value1, v.value0.value2, v.value0.value3, v.value0.value4, v.value0.value5, tree);
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
                if (v1 instanceof Data_List_Types.Nil) {
                  $tco_done = true;
                  return new Two(v2.value0, v2.value1, v2.value2, v2.value3);
                }
                ;
                if (v1 instanceof Data_List_Types.Cons) {
                  if (v1.value0 instanceof TwoLeft) {
                    $tco_done = true;
                    return fromZipper(dictOrd)(v1.value1)(new Three(v2.value0, v2.value1, v2.value2, v2.value3, v1.value0.value0, v1.value0.value1, v1.value0.value2));
                  }
                  ;
                  if (v1.value0 instanceof TwoRight) {
                    $tco_done = true;
                    return fromZipper(dictOrd)(v1.value1)(new Three(v1.value0.value0, v1.value0.value1, v1.value0.value2, v2.value0, v2.value1, v2.value2, v2.value3));
                  }
                  ;
                  if (v1.value0 instanceof ThreeLeft) {
                    $tco_var_v1 = v1.value1;
                    $copy_v2 = new KickUp(new Two(v2.value0, v2.value1, v2.value2, v2.value3), v1.value0.value0, v1.value0.value1, new Two(v1.value0.value2, v1.value0.value3, v1.value0.value4, v1.value0.value5));
                    return;
                  }
                  ;
                  if (v1.value0 instanceof ThreeMiddle) {
                    $tco_var_v1 = v1.value1;
                    $copy_v2 = new KickUp(new Two(v1.value0.value0, v1.value0.value1, v1.value0.value2, v2.value0), v2.value1, v2.value2, new Two(v2.value3, v1.value0.value3, v1.value0.value4, v1.value0.value5));
                    return;
                  }
                  ;
                  if (v1.value0 instanceof ThreeRight) {
                    $tco_var_v1 = v1.value1;
                    $copy_v2 = new KickUp(new Two(v1.value0.value0, v1.value0.value1, v1.value0.value2, v1.value0.value3), v1.value0.value4, v1.value0.value5, new Two(v2.value0, v2.value1, v2.value2, v2.value3));
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
          var comp = Data_Ord.compare(dictOrd);
          var down = function($copy_ctx) {
            return function($copy_v1) {
              var $tco_var_ctx = $copy_ctx;
              var $tco_done1 = false;
              var $tco_result;
              function $tco_loop(ctx, v1) {
                if (v1 instanceof Leaf) {
                  $tco_done1 = true;
                  return up(ctx)(new KickUp(Leaf.value, k, v, Leaf.value));
                }
                ;
                if (v1 instanceof Two) {
                  var v2 = comp(k)(v1.value1);
                  if (v2 instanceof Data_Ordering.EQ) {
                    $tco_done1 = true;
                    return fromZipper(dictOrd)(ctx)(new Two(v1.value0, k, v, v1.value3));
                  }
                  ;
                  if (v2 instanceof Data_Ordering.LT) {
                    $tco_var_ctx = new Data_List_Types.Cons(new TwoLeft(v1.value1, v1.value2, v1.value3), ctx);
                    $copy_v1 = v1.value0;
                    return;
                  }
                  ;
                  $tco_var_ctx = new Data_List_Types.Cons(new TwoRight(v1.value0, v1.value1, v1.value2), ctx);
                  $copy_v1 = v1.value3;
                  return;
                }
                ;
                if (v1 instanceof Three) {
                  var v3 = comp(k)(v1.value1);
                  if (v3 instanceof Data_Ordering.EQ) {
                    $tco_done1 = true;
                    return fromZipper(dictOrd)(ctx)(new Three(v1.value0, k, v, v1.value3, v1.value4, v1.value5, v1.value6));
                  }
                  ;
                  var v4 = comp(k)(v1.value4);
                  if (v4 instanceof Data_Ordering.EQ) {
                    $tco_done1 = true;
                    return fromZipper(dictOrd)(ctx)(new Three(v1.value0, v1.value1, v1.value2, v1.value3, k, v, v1.value6));
                  }
                  ;
                  if (v3 instanceof Data_Ordering.LT) {
                    $tco_var_ctx = new Data_List_Types.Cons(new ThreeLeft(v1.value1, v1.value2, v1.value3, v1.value4, v1.value5, v1.value6), ctx);
                    $copy_v1 = v1.value0;
                    return;
                  }
                  ;
                  if (v3 instanceof Data_Ordering.GT && v4 instanceof Data_Ordering.LT) {
                    $tco_var_ctx = new Data_List_Types.Cons(new ThreeMiddle(v1.value0, v1.value1, v1.value2, v1.value4, v1.value5, v1.value6), ctx);
                    $copy_v1 = v1.value3;
                    return;
                  }
                  ;
                  $tco_var_ctx = new Data_List_Types.Cons(new ThreeRight(v1.value0, v1.value1, v1.value2, v1.value3, v1.value4, v1.value5), ctx);
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
          return down(Data_List_Types.Nil.value);
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
              if (ctxs instanceof Data_List_Types.Nil) {
                $tco_done = true;
                return tree;
              }
              ;
              if (ctxs instanceof Data_List_Types.Cons) {
                if (ctxs.value0 instanceof TwoLeft && (ctxs.value0.value2 instanceof Leaf && tree instanceof Leaf)) {
                  $tco_done = true;
                  return fromZipper(dictOrd)(ctxs.value1)(new Two(Leaf.value, ctxs.value0.value0, ctxs.value0.value1, Leaf.value));
                }
                ;
                if (ctxs.value0 instanceof TwoRight && (ctxs.value0.value0 instanceof Leaf && tree instanceof Leaf)) {
                  $tco_done = true;
                  return fromZipper(dictOrd)(ctxs.value1)(new Two(Leaf.value, ctxs.value0.value1, ctxs.value0.value2, Leaf.value));
                }
                ;
                if (ctxs.value0 instanceof TwoLeft && ctxs.value0.value2 instanceof Two) {
                  $tco_var_ctxs = ctxs.value1;
                  $copy_tree = new Three(tree, ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2.value0, ctxs.value0.value2.value1, ctxs.value0.value2.value2, ctxs.value0.value2.value3);
                  return;
                }
                ;
                if (ctxs.value0 instanceof TwoRight && ctxs.value0.value0 instanceof Two) {
                  $tco_var_ctxs = ctxs.value1;
                  $copy_tree = new Three(ctxs.value0.value0.value0, ctxs.value0.value0.value1, ctxs.value0.value0.value2, ctxs.value0.value0.value3, ctxs.value0.value1, ctxs.value0.value2, tree);
                  return;
                }
                ;
                if (ctxs.value0 instanceof TwoLeft && ctxs.value0.value2 instanceof Three) {
                  $tco_done = true;
                  return fromZipper(dictOrd)(ctxs.value1)(new Two(new Two(tree, ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2.value0), ctxs.value0.value2.value1, ctxs.value0.value2.value2, new Two(ctxs.value0.value2.value3, ctxs.value0.value2.value4, ctxs.value0.value2.value5, ctxs.value0.value2.value6)));
                }
                ;
                if (ctxs.value0 instanceof TwoRight && ctxs.value0.value0 instanceof Three) {
                  $tco_done = true;
                  return fromZipper(dictOrd)(ctxs.value1)(new Two(new Two(ctxs.value0.value0.value0, ctxs.value0.value0.value1, ctxs.value0.value0.value2, ctxs.value0.value0.value3), ctxs.value0.value0.value4, ctxs.value0.value0.value5, new Two(ctxs.value0.value0.value6, ctxs.value0.value1, ctxs.value0.value2, tree)));
                }
                ;
                if (ctxs.value0 instanceof ThreeLeft && (ctxs.value0.value2 instanceof Leaf && (ctxs.value0.value5 instanceof Leaf && tree instanceof Leaf))) {
                  $tco_done = true;
                  return fromZipper(dictOrd)(ctxs.value1)(new Three(Leaf.value, ctxs.value0.value0, ctxs.value0.value1, Leaf.value, ctxs.value0.value3, ctxs.value0.value4, Leaf.value));
                }
                ;
                if (ctxs.value0 instanceof ThreeMiddle && (ctxs.value0.value0 instanceof Leaf && (ctxs.value0.value5 instanceof Leaf && tree instanceof Leaf))) {
                  $tco_done = true;
                  return fromZipper(dictOrd)(ctxs.value1)(new Three(Leaf.value, ctxs.value0.value1, ctxs.value0.value2, Leaf.value, ctxs.value0.value3, ctxs.value0.value4, Leaf.value));
                }
                ;
                if (ctxs.value0 instanceof ThreeRight && (ctxs.value0.value0 instanceof Leaf && (ctxs.value0.value3 instanceof Leaf && tree instanceof Leaf))) {
                  $tco_done = true;
                  return fromZipper(dictOrd)(ctxs.value1)(new Three(Leaf.value, ctxs.value0.value1, ctxs.value0.value2, Leaf.value, ctxs.value0.value4, ctxs.value0.value5, Leaf.value));
                }
                ;
                if (ctxs.value0 instanceof ThreeLeft && ctxs.value0.value2 instanceof Two) {
                  $tco_done = true;
                  return fromZipper(dictOrd)(ctxs.value1)(new Two(new Three(tree, ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2.value0, ctxs.value0.value2.value1, ctxs.value0.value2.value2, ctxs.value0.value2.value3), ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5));
                }
                ;
                if (ctxs.value0 instanceof ThreeMiddle && ctxs.value0.value0 instanceof Two) {
                  $tco_done = true;
                  return fromZipper(dictOrd)(ctxs.value1)(new Two(new Three(ctxs.value0.value0.value0, ctxs.value0.value0.value1, ctxs.value0.value0.value2, ctxs.value0.value0.value3, ctxs.value0.value1, ctxs.value0.value2, tree), ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5));
                }
                ;
                if (ctxs.value0 instanceof ThreeMiddle && ctxs.value0.value5 instanceof Two) {
                  $tco_done = true;
                  return fromZipper(dictOrd)(ctxs.value1)(new Two(ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2, new Three(tree, ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5.value0, ctxs.value0.value5.value1, ctxs.value0.value5.value2, ctxs.value0.value5.value3)));
                }
                ;
                if (ctxs.value0 instanceof ThreeRight && ctxs.value0.value3 instanceof Two) {
                  $tco_done = true;
                  return fromZipper(dictOrd)(ctxs.value1)(new Two(ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2, new Three(ctxs.value0.value3.value0, ctxs.value0.value3.value1, ctxs.value0.value3.value2, ctxs.value0.value3.value3, ctxs.value0.value4, ctxs.value0.value5, tree)));
                }
                ;
                if (ctxs.value0 instanceof ThreeLeft && ctxs.value0.value2 instanceof Three) {
                  $tco_done = true;
                  return fromZipper(dictOrd)(ctxs.value1)(new Three(new Two(tree, ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2.value0), ctxs.value0.value2.value1, ctxs.value0.value2.value2, new Two(ctxs.value0.value2.value3, ctxs.value0.value2.value4, ctxs.value0.value2.value5, ctxs.value0.value2.value6), ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5));
                }
                ;
                if (ctxs.value0 instanceof ThreeMiddle && ctxs.value0.value0 instanceof Three) {
                  $tco_done = true;
                  return fromZipper(dictOrd)(ctxs.value1)(new Three(new Two(ctxs.value0.value0.value0, ctxs.value0.value0.value1, ctxs.value0.value0.value2, ctxs.value0.value0.value3), ctxs.value0.value0.value4, ctxs.value0.value0.value5, new Two(ctxs.value0.value0.value6, ctxs.value0.value1, ctxs.value0.value2, tree), ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5));
                }
                ;
                if (ctxs.value0 instanceof ThreeMiddle && ctxs.value0.value5 instanceof Three) {
                  $tco_done = true;
                  return fromZipper(dictOrd)(ctxs.value1)(new Three(ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2, new Two(tree, ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5.value0), ctxs.value0.value5.value1, ctxs.value0.value5.value2, new Two(ctxs.value0.value5.value3, ctxs.value0.value5.value4, ctxs.value0.value5.value5, ctxs.value0.value5.value6)));
                }
                ;
                if (ctxs.value0 instanceof ThreeRight && ctxs.value0.value3 instanceof Three) {
                  $tco_done = true;
                  return fromZipper(dictOrd)(ctxs.value1)(new Three(ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2, new Two(ctxs.value0.value3.value0, ctxs.value0.value3.value1, ctxs.value0.value3.value2, ctxs.value0.value3.value3), ctxs.value0.value3.value4, ctxs.value0.value3.value5, new Two(ctxs.value0.value3.value6, ctxs.value0.value4, ctxs.value0.value5, tree)));
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
              if (m instanceof Two && (m.value0 instanceof Leaf && m.value3 instanceof Leaf)) {
                $tco_done1 = true;
                return up(ctx)(Leaf.value);
              }
              ;
              if (m instanceof Two) {
                $tco_var_ctx = new Data_List_Types.Cons(new TwoRight(m.value0, m.value1, m.value2), ctx);
                $copy_m = m.value3;
                return;
              }
              ;
              if (m instanceof Three && (m.value0 instanceof Leaf && (m.value3 instanceof Leaf && m.value6 instanceof Leaf))) {
                $tco_done1 = true;
                return up(new Data_List_Types.Cons(new TwoRight(Leaf.value, m.value1, m.value2), ctx))(Leaf.value);
              }
              ;
              if (m instanceof Three) {
                $tco_var_ctx = new Data_List_Types.Cons(new ThreeRight(m.value0, m.value1, m.value2, m.value3, m.value4, m.value5), ctx);
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
            if (m instanceof Two && m.value3 instanceof Leaf) {
              $tco_done2 = true;
              return {
                key: m.value1,
                value: m.value2
              };
            }
            ;
            if (m instanceof Two) {
              $copy_m = m.value3;
              return;
            }
            ;
            if (m instanceof Three && m.value6 instanceof Leaf) {
              $tco_done2 = true;
              return {
                key: m.value4,
                value: m.value5
              };
            }
            ;
            if (m instanceof Three) {
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
        var comp = Data_Ord.compare(dictOrd);
        var down = function($copy_ctx) {
          return function($copy_m) {
            var $tco_var_ctx = $copy_ctx;
            var $tco_done3 = false;
            var $tco_result;
            function $tco_loop(ctx, m) {
              if (m instanceof Leaf) {
                $tco_done3 = true;
                return Data_Maybe.Nothing.value;
              }
              ;
              if (m instanceof Two) {
                var v = comp(k)(m.value1);
                if (m.value3 instanceof Leaf && v instanceof Data_Ordering.EQ) {
                  $tco_done3 = true;
                  return new Data_Maybe.Just(new Data_Tuple.Tuple(m.value2, up(ctx)(Leaf.value)));
                }
                ;
                if (v instanceof Data_Ordering.EQ) {
                  var max = maxNode(m.value0);
                  $tco_done3 = true;
                  return new Data_Maybe.Just(new Data_Tuple.Tuple(m.value2, removeMaxNode(new Data_List_Types.Cons(new TwoLeft(max.key, max.value, m.value3), ctx))(m.value0)));
                }
                ;
                if (v instanceof Data_Ordering.LT) {
                  $tco_var_ctx = new Data_List_Types.Cons(new TwoLeft(m.value1, m.value2, m.value3), ctx);
                  $copy_m = m.value0;
                  return;
                }
                ;
                $tco_var_ctx = new Data_List_Types.Cons(new TwoRight(m.value0, m.value1, m.value2), ctx);
                $copy_m = m.value3;
                return;
              }
              ;
              if (m instanceof Three) {
                var leaves = function() {
                  if (m.value0 instanceof Leaf && (m.value3 instanceof Leaf && m.value6 instanceof Leaf)) {
                    return true;
                  }
                  ;
                  return false;
                }();
                var v = comp(k)(m.value4);
                var v3 = comp(k)(m.value1);
                if (leaves && v3 instanceof Data_Ordering.EQ) {
                  $tco_done3 = true;
                  return new Data_Maybe.Just(new Data_Tuple.Tuple(m.value2, fromZipper(dictOrd)(ctx)(new Two(Leaf.value, m.value4, m.value5, Leaf.value))));
                }
                ;
                if (leaves && v instanceof Data_Ordering.EQ) {
                  $tco_done3 = true;
                  return new Data_Maybe.Just(new Data_Tuple.Tuple(m.value5, fromZipper(dictOrd)(ctx)(new Two(Leaf.value, m.value1, m.value2, Leaf.value))));
                }
                ;
                if (v3 instanceof Data_Ordering.EQ) {
                  var max = maxNode(m.value0);
                  $tco_done3 = true;
                  return new Data_Maybe.Just(new Data_Tuple.Tuple(m.value2, removeMaxNode(new Data_List_Types.Cons(new ThreeLeft(max.key, max.value, m.value3, m.value4, m.value5, m.value6), ctx))(m.value0)));
                }
                ;
                if (v instanceof Data_Ordering.EQ) {
                  var max = maxNode(m.value3);
                  $tco_done3 = true;
                  return new Data_Maybe.Just(new Data_Tuple.Tuple(m.value5, removeMaxNode(new Data_List_Types.Cons(new ThreeMiddle(m.value0, m.value1, m.value2, max.key, max.value, m.value6), ctx))(m.value3)));
                }
                ;
                if (v3 instanceof Data_Ordering.LT) {
                  $tco_var_ctx = new Data_List_Types.Cons(new ThreeLeft(m.value1, m.value2, m.value3, m.value4, m.value5, m.value6), ctx);
                  $copy_m = m.value0;
                  return;
                }
                ;
                if (v3 instanceof Data_Ordering.GT && v instanceof Data_Ordering.LT) {
                  $tco_var_ctx = new Data_List_Types.Cons(new ThreeMiddle(m.value0, m.value1, m.value2, m.value4, m.value5, m.value6), ctx);
                  $copy_m = m.value3;
                  return;
                }
                ;
                $tco_var_ctx = new Data_List_Types.Cons(new ThreeRight(m.value0, m.value1, m.value2, m.value3, m.value4, m.value5), ctx);
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
        return down(Data_List_Types.Nil.value);
      };
    };
    var foldableMap = {
      foldl: function(f) {
        return function(z) {
          return function(m) {
            return Data_Foldable.foldl(Data_List_Types.foldableList)(f)(z)(values(m));
          };
        };
      },
      foldr: function(f) {
        return function(z) {
          return function(m) {
            return Data_Foldable.foldr(Data_List_Types.foldableList)(f)(z)(values(m));
          };
        };
      },
      foldMap: function(dictMonoid) {
        return function(f) {
          return function(m) {
            return Data_Foldable.foldMap(Data_List_Types.foldableList)(dictMonoid)(f)(values(m));
          };
        };
      }
    };
    var empty = Leaf.value;
    var $$delete = function(dictOrd) {
      return function(k) {
        return function(m) {
          return Data_Maybe.maybe(m)(Data_Tuple.snd)(pop(dictOrd)(k)(m));
        };
      };
    };
    var alter = function(dictOrd) {
      return function(f) {
        return function(k) {
          return function(m) {
            var v = f(lookup(dictOrd)(k)(m));
            if (v instanceof Data_Maybe.Nothing) {
              return $$delete(dictOrd)(k)(m);
            }
            ;
            if (v instanceof Data_Maybe.Just) {
              return insert(dictOrd)(k)(v.value0)(m);
            }
            ;
            throw new Error("Failed pattern match at Data.Map.Internal (line 563, column 15 - line 565, column 25): " + [v.constructor.name]);
          };
        };
      };
    };
    exports["empty"] = empty;
    exports["insert"] = insert;
    exports["lookup"] = lookup;
    exports["delete"] = $$delete;
    exports["alter"] = alter;
    exports["foldableMap"] = foldableMap;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Safe.Coerce"] = $PS["Safe.Coerce"] || {};
    var exports = $PS["Safe.Coerce"];
    var Unsafe_Coerce = $PS["Unsafe.Coerce"];
    var coerce = function(dictCoercible) {
      return Unsafe_Coerce.unsafeCoerce;
    };
    exports["coerce"] = coerce;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Data.Newtype"] = $PS["Data.Newtype"] || {};
    var exports = $PS["Data.Newtype"];
    var Safe_Coerce = $PS["Safe.Coerce"];
    var unwrap = function(dictNewtype) {
      return Safe_Coerce.coerce();
    };
    exports["unwrap"] = unwrap;
  })(PS);
  (function(exports) {
    "use strict";
    exports.warn = function(s) {
      return function() {
        console.warn(s);
      };
    };
  })(PS["Effect.Console"] = PS["Effect.Console"] || {});
  (function($PS) {
    "use strict";
    $PS["Effect.Console"] = $PS["Effect.Console"] || {};
    var exports = $PS["Effect.Console"];
    var $foreign = $PS["Effect.Console"];
    exports["warn"] = $foreign.warn;
  })(PS);
  (function(exports) {
    "use strict";
    exports.error = function(msg) {
      return new Error(msg);
    };
    exports.throwException = function(e) {
      return function() {
        throw e;
      };
    };
  })(PS["Effect.Exception"] = PS["Effect.Exception"] || {});
  (function($PS) {
    "use strict";
    $PS["Effect.Exception"] = $PS["Effect.Exception"] || {};
    var exports = $PS["Effect.Exception"];
    var $foreign = $PS["Effect.Exception"];
    var $$throw = function($2) {
      return $foreign.throwException($foreign.error($2));
    };
    exports["throw"] = $$throw;
    exports["error"] = $foreign.error;
    exports["throwException"] = $foreign.throwException;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Halogen.Data.Slot"] = $PS["Halogen.Data.Slot"] || {};
    var exports = $PS["Halogen.Data.Slot"];
    var Data_Foldable = $PS["Data.Foldable"];
    var Data_Map_Internal = $PS["Data.Map.Internal"];
    var foreachSlot = function(dictApplicative) {
      return function(v) {
        return function(k) {
          return Data_Foldable.traverse_(dictApplicative)(Data_Map_Internal.foldableMap)(function($37) {
            return k($37);
          })(v);
        };
      };
    };
    var empty = Data_Map_Internal.empty;
    exports["empty"] = empty;
    exports["foreachSlot"] = foreachSlot;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Halogen.Aff.Driver.State"] = $PS["Halogen.Aff.Driver.State"] || {};
    var exports = $PS["Halogen.Aff.Driver.State"];
    var Data_Foldable = $PS["Data.Foldable"];
    var Data_List_Types = $PS["Data.List.Types"];
    var Data_Map_Internal = $PS["Data.Map.Internal"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Effect_Ref = $PS["Effect.Ref"];
    var Halogen_Data_Slot = $PS["Halogen.Data.Slot"];
    var Unsafe_Coerce = $PS["Unsafe.Coerce"];
    var unRenderStateX = Unsafe_Coerce.unsafeCoerce;
    var unDriverStateX = Unsafe_Coerce.unsafeCoerce;
    var renderStateX_ = function(dictApplicative) {
      return function(f) {
        return unDriverStateX(function(st) {
          return Data_Foldable.traverse_(dictApplicative)(Data_Foldable.foldableMaybe)(f)(st.rendering);
        });
      };
    };
    var mkRenderStateX = Unsafe_Coerce.unsafeCoerce;
    var renderStateX = function(dictFunctor) {
      return function(f) {
        return unDriverStateX(function(st) {
          return mkRenderStateX(f(st.rendering));
        });
      };
    };
    var mkDriverStateXRef = Unsafe_Coerce.unsafeCoerce;
    var mapDriverState = function(f) {
      return function(v) {
        return f(v);
      };
    };
    var initDriverState = function(component) {
      return function(input) {
        return function(handler) {
          return function(lchs) {
            return function __do() {
              var selfRef = Effect_Ref["new"]({})();
              var childrenIn = Effect_Ref["new"](Halogen_Data_Slot.empty)();
              var childrenOut = Effect_Ref["new"](Halogen_Data_Slot.empty)();
              var handlerRef = Effect_Ref["new"](handler)();
              var pendingQueries = Effect_Ref["new"](new Data_Maybe.Just(Data_List_Types.Nil.value))();
              var pendingOuts = Effect_Ref["new"](new Data_Maybe.Just(Data_List_Types.Nil.value))();
              var pendingHandlers = Effect_Ref["new"](Data_Maybe.Nothing.value)();
              var fresh = Effect_Ref["new"](1)();
              var subscriptions = Effect_Ref["new"](new Data_Maybe.Just(Data_Map_Internal.empty))();
              var forks = Effect_Ref["new"](Data_Map_Internal.empty)();
              var ds = {
                component,
                state: component.initialState(input),
                refs: Data_Map_Internal.empty,
                children: Halogen_Data_Slot.empty,
                childrenIn,
                childrenOut,
                selfRef,
                handlerRef,
                pendingQueries,
                pendingOuts,
                pendingHandlers,
                rendering: Data_Maybe.Nothing.value,
                fresh,
                subscriptions,
                forks,
                lifecycleHandlers: lchs
              };
              Effect_Ref.write(ds)(selfRef)();
              return mkDriverStateXRef(selfRef);
            };
          };
        };
      };
    };
    exports["mapDriverState"] = mapDriverState;
    exports["unDriverStateX"] = unDriverStateX;
    exports["renderStateX"] = renderStateX;
    exports["renderStateX_"] = renderStateX_;
    exports["unRenderStateX"] = unRenderStateX;
    exports["initDriverState"] = initDriverState;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Halogen.Query.ChildQuery"] = $PS["Halogen.Query.ChildQuery"] || {};
    var exports = $PS["Halogen.Query.ChildQuery"];
    var Unsafe_Coerce = $PS["Unsafe.Coerce"];
    var unChildQueryBox = Unsafe_Coerce.unsafeCoerce;
    exports["unChildQueryBox"] = unChildQueryBox;
  })(PS);
  (function(exports) {
    "use strict";
    exports.reallyUnsafeRefEq = function(a) {
      return function(b) {
        return a === b;
      };
    };
  })(PS["Unsafe.Reference"] = PS["Unsafe.Reference"] || {});
  (function($PS) {
    "use strict";
    $PS["Unsafe.Reference"] = $PS["Unsafe.Reference"] || {};
    var exports = $PS["Unsafe.Reference"];
    var $foreign = $PS["Unsafe.Reference"];
    var unsafeRefEq = $foreign.reallyUnsafeRefEq;
    exports["unsafeRefEq"] = unsafeRefEq;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Halogen.Subscription"] = $PS["Halogen.Subscription"] || {};
    var exports = $PS["Halogen.Subscription"];
    var Control_Bind = $PS["Control.Bind"];
    var Data_Array = $PS["Data.Array"];
    var Data_Foldable = $PS["Data.Foldable"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_Semigroup = $PS["Data.Semigroup"];
    var Effect = $PS["Effect"];
    var Effect_Ref = $PS["Effect.Ref"];
    var Unsafe_Reference = $PS["Unsafe.Reference"];
    var unsubscribe = function(v) {
      return v;
    };
    var subscribe = function(v) {
      return function(k) {
        return v(function() {
          var $55 = Data_Functor["void"](Effect.functorEffect);
          return function($56) {
            return $55(k($56));
          };
        }());
      };
    };
    var notify = function(v) {
      return function(a) {
        return v(a);
      };
    };
    var create = function __do() {
      var subscribers = Effect_Ref["new"]([])();
      return {
        emitter: function(k) {
          return function __do2() {
            Effect_Ref.modify_(function(v) {
              return Data_Semigroup.append(Data_Semigroup.semigroupArray)(v)([k]);
            })(subscribers)();
            return Effect_Ref.modify_(Data_Array.deleteBy(Unsafe_Reference.unsafeRefEq)(k))(subscribers);
          };
        },
        listener: function(a) {
          return Control_Bind.bind(Effect.bindEffect)(Effect_Ref.read(subscribers))(Data_Foldable.traverse_(Effect.applicativeEffect)(Data_Foldable.foldableArray)(function(k) {
            return k(a);
          }));
        }
      };
    };
    exports["create"] = create;
    exports["notify"] = notify;
    exports["subscribe"] = subscribe;
    exports["unsubscribe"] = unsubscribe;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Halogen.Aff.Driver.Eval"] = $PS["Halogen.Aff.Driver.Eval"] || {};
    var exports = $PS["Halogen.Aff.Driver.Eval"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Control_Applicative_Free = $PS["Control.Applicative.Free"];
    var Control_Bind = $PS["Control.Bind"];
    var Control_Monad = $PS["Control.Monad"];
    var Control_Monad_Fork_Class = $PS["Control.Monad.Fork.Class"];
    var Control_Monad_Free = $PS["Control.Monad.Free"];
    var Control_Parallel = $PS["Control.Parallel"];
    var Control_Parallel_Class = $PS["Control.Parallel.Class"];
    var Data_Boolean = $PS["Data.Boolean"];
    var Data_Coyoneda = $PS["Data.Coyoneda"];
    var Data_Either = $PS["Data.Either"];
    var Data_Foldable = $PS["Data.Foldable"];
    var Data_Function = $PS["Data.Function"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_List_Types = $PS["Data.List.Types"];
    var Data_Map_Internal = $PS["Data.Map.Internal"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Data_Ord = $PS["Data.Ord"];
    var Data_Unit = $PS["Data.Unit"];
    var Effect = $PS["Effect"];
    var Effect_Aff = $PS["Effect.Aff"];
    var Effect_Class = $PS["Effect.Class"];
    var Effect_Exception = $PS["Effect.Exception"];
    var Effect_Ref = $PS["Effect.Ref"];
    var Halogen_Aff_Driver_State = $PS["Halogen.Aff.Driver.State"];
    var Halogen_Query_ChildQuery = $PS["Halogen.Query.ChildQuery"];
    var Halogen_Query_HalogenM = $PS["Halogen.Query.HalogenM"];
    var Halogen_Query_HalogenQ = $PS["Halogen.Query.HalogenQ"];
    var Halogen_Query_Input = $PS["Halogen.Query.Input"];
    var Halogen_Subscription = $PS["Halogen.Subscription"];
    var Unsafe_Reference = $PS["Unsafe.Reference"];
    var unsubscribe = function(sid) {
      return function(ref) {
        return function __do() {
          var v = Effect_Ref.read(ref)();
          var subs = Effect_Ref.read(v.subscriptions)();
          return Data_Foldable.traverse_(Effect.applicativeEffect)(Data_Foldable.foldableMaybe)(Halogen_Subscription.unsubscribe)(Control_Bind.bindFlipped(Data_Maybe.bindMaybe)(Data_Map_Internal.lookup(Halogen_Query_HalogenM.ordSubscriptionId)(sid))(subs))();
        };
      };
    };
    var queueOrRun = function(ref) {
      return function(au) {
        return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_Ref.read(ref)))(function(v) {
          if (v instanceof Data_Maybe.Nothing) {
            return au;
          }
          ;
          if (v instanceof Data_Maybe.Just) {
            return Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_Ref.write(new Data_Maybe.Just(new Data_List_Types.Cons(au, v.value0)))(ref));
          }
          ;
          throw new Error("Failed pattern match at Halogen.Aff.Driver.Eval (line 182, column 33 - line 184, column 57): " + [v.constructor.name]);
        });
      };
    };
    var handleLifecycle = function(lchs) {
      return function(f) {
        return Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_Ref.write({
          initializers: Data_List_Types.Nil.value,
          finalizers: Data_List_Types.Nil.value
        })(lchs)))(function() {
          return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(f))(function(result) {
            return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_Ref.read(lchs)))(function(v) {
              return Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(Data_Foldable.traverse_(Effect_Aff.applicativeAff)(Data_List_Types.foldableList)(Control_Monad_Fork_Class.fork(Control_Monad_Fork_Class.monadForkAff))(v.finalizers))(function() {
                return Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(Control_Parallel.parSequence_(Effect_Aff.parallelAff)(Data_List_Types.foldableList)(v.initializers))(function() {
                  return Control_Applicative.pure(Effect_Aff.applicativeAff)(result);
                });
              });
            });
          });
        });
      };
    };
    var handleAff = Effect_Aff.runAff_(Data_Either.either(Effect_Exception.throwException)(Data_Function["const"](Control_Applicative.pure(Effect.applicativeEffect)(Data_Unit.unit))));
    var fresh = function(f) {
      return function(ref) {
        return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_Ref.read(ref)))(function(v) {
          return Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_Ref["modify'"](function(i) {
            return {
              state: i + 1 | 0,
              value: f(i)
            };
          })(v.fresh));
        });
      };
    };
    var evalQ = function(render) {
      return function(ref) {
        return function(q) {
          return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_Ref.read(ref)))(function(v) {
            return evalM(render)(ref)(v["component"]["eval"](new Halogen_Query_HalogenQ.Query(Data_Functor.map(Data_Coyoneda.functorCoyoneda)(Data_Maybe.Just.create)(Data_Coyoneda.liftCoyoneda(q)), Data_Function["const"](Data_Maybe.Nothing.value))));
          });
        };
      };
    };
    var evalM = function(render) {
      return function(initRef) {
        return function(v) {
          var evalChildQuery = function(ref) {
            return function(cqb) {
              return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_Ref.read(ref)))(function(v1) {
                return Halogen_Query_ChildQuery.unChildQueryBox(function(v2) {
                  var evalChild = function(v3) {
                    return Control_Parallel_Class.parallel(Effect_Aff.parallelAff)(Control_Bind.bind(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_Ref.read(v3)))(function(dsx) {
                      return Halogen_Aff_Driver_State.unDriverStateX(function(ds) {
                        return evalQ(render)(ds.selfRef)(v2.value1);
                      })(dsx);
                    }));
                  };
                  return Data_Functor.map(Effect_Aff.functorAff)(v2.value2)(Control_Parallel_Class.sequential(Effect_Aff.parallelAff)(v2.value0(Effect_Aff.applicativeParAff)(evalChild)(v1.children)));
                })(cqb);
              });
            };
          };
          var go = function(ref) {
            return function(v1) {
              if (v1 instanceof Halogen_Query_HalogenM.State) {
                return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_Ref.read(ref)))(function(v2) {
                  var v3 = v1.value0(v2.state);
                  if (Unsafe_Reference.unsafeRefEq(v2.state)(v3.value1)) {
                    return Control_Applicative.pure(Effect_Aff.applicativeAff)(v3.value0);
                  }
                  ;
                  if (Data_Boolean.otherwise) {
                    return Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_Ref.write({
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
                    })(ref)))(function() {
                      return Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(handleLifecycle(v2.lifecycleHandlers)(render(v2.lifecycleHandlers)(ref)))(function() {
                        return Control_Applicative.pure(Effect_Aff.applicativeAff)(v3.value0);
                      });
                    });
                  }
                  ;
                  throw new Error("Failed pattern match at Halogen.Aff.Driver.Eval (line 86, column 7 - line 92, column 21): " + [v3.constructor.name]);
                });
              }
              ;
              if (v1 instanceof Halogen_Query_HalogenM.Subscribe) {
                return Control_Bind.bind(Effect_Aff.bindAff)(fresh(Halogen_Query_HalogenM.SubscriptionId)(ref))(function(sid) {
                  return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Halogen_Subscription.subscribe(v1.value0(sid))(function(act) {
                    return handleAff(evalF(render)(ref)(new Halogen_Query_Input.Action(act)));
                  })))(function(finalize) {
                    return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_Ref.read(ref)))(function(v2) {
                      return Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_Ref.modify_(Data_Functor.map(Data_Maybe.functorMaybe)(Data_Map_Internal.insert(Halogen_Query_HalogenM.ordSubscriptionId)(sid)(finalize)))(v2.subscriptions)))(function() {
                        return Control_Applicative.pure(Effect_Aff.applicativeAff)(v1.value1(sid));
                      });
                    });
                  });
                });
              }
              ;
              if (v1 instanceof Halogen_Query_HalogenM.Unsubscribe) {
                return Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(unsubscribe(v1.value0)(ref)))(function() {
                  return Control_Applicative.pure(Effect_Aff.applicativeAff)(v1.value1);
                });
              }
              ;
              if (v1 instanceof Halogen_Query_HalogenM.Lift) {
                return v1.value0;
              }
              ;
              if (v1 instanceof Halogen_Query_HalogenM.ChildQuery) {
                return evalChildQuery(ref)(v1.value0);
              }
              ;
              if (v1 instanceof Halogen_Query_HalogenM.Raise) {
                return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_Ref.read(ref)))(function(v2) {
                  return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_Ref.read(v2.handlerRef)))(function(handler) {
                    return Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(queueOrRun(v2.pendingOuts)(handler(v1.value0)))(function() {
                      return Control_Applicative.pure(Effect_Aff.applicativeAff)(v1.value1);
                    });
                  });
                });
              }
              ;
              if (v1 instanceof Halogen_Query_HalogenM.Par) {
                return Control_Parallel_Class.sequential(Effect_Aff.parallelAff)(Control_Applicative_Free.retractFreeAp(Effect_Aff.applicativeParAff)(Control_Applicative_Free.hoistFreeAp(function() {
                  var $78 = Control_Parallel_Class.parallel(Effect_Aff.parallelAff);
                  var $79 = evalM(render)(ref);
                  return function($80) {
                    return $78($79($80));
                  };
                }())(v1.value0)));
              }
              ;
              if (v1 instanceof Halogen_Query_HalogenM.Fork) {
                return Control_Bind.bind(Effect_Aff.bindAff)(fresh(Halogen_Query_HalogenM.ForkId)(ref))(function(fid) {
                  return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_Ref.read(ref)))(function(v2) {
                    return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_Ref["new"](false)))(function(doneRef) {
                      return Control_Bind.bind(Effect_Aff.bindAff)(Control_Monad_Fork_Class.fork(Control_Monad_Fork_Class.monadForkAff)(Effect_Aff["finally"](Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(function __do() {
                        Effect_Ref.modify_(Data_Map_Internal["delete"](Halogen_Query_HalogenM.ordForkId)(fid))(v2.forks)();
                        return Effect_Ref.write(true)(doneRef)();
                      }))(evalM(render)(ref)(v1.value0))))(function(fiber) {
                        return Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Control_Monad.unlessM(Effect.monadEffect)(Effect_Ref.read(doneRef))(Effect_Ref.modify_(Data_Map_Internal.insert(Halogen_Query_HalogenM.ordForkId)(fid)(fiber))(v2.forks))))(function() {
                          return Control_Applicative.pure(Effect_Aff.applicativeAff)(v1.value1(fid));
                        });
                      });
                    });
                  });
                });
              }
              ;
              if (v1 instanceof Halogen_Query_HalogenM.Kill) {
                return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_Ref.read(ref)))(function(v2) {
                  return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_Ref.read(v2.forks)))(function(forkMap) {
                    return Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(Data_Foldable.traverse_(Effect_Aff.applicativeAff)(Data_Foldable.foldableMaybe)(Effect_Aff.killFiber(Effect_Exception.error("Cancelled")))(Data_Map_Internal.lookup(Halogen_Query_HalogenM.ordForkId)(v1.value0)(forkMap)))(function() {
                      return Control_Applicative.pure(Effect_Aff.applicativeAff)(v1.value1);
                    });
                  });
                });
              }
              ;
              if (v1 instanceof Halogen_Query_HalogenM.GetRef) {
                return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_Ref.read(ref)))(function(v2) {
                  return Control_Applicative.pure(Effect_Aff.applicativeAff)(v1.value1(Data_Map_Internal.lookup(Data_Ord.ordString)(v1.value0)(v2.refs)));
                });
              }
              ;
              throw new Error("Failed pattern match at Halogen.Aff.Driver.Eval (line 83, column 12 - line 133, column 33): " + [v1.constructor.name]);
            };
          };
          return Control_Monad_Free.foldFree(Effect_Aff.monadRecAff)(go(initRef))(v);
        };
      };
    };
    var evalF = function(render) {
      return function(ref) {
        return function(v) {
          if (v instanceof Halogen_Query_Input.RefUpdate) {
            return Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Data_Function.flip(Effect_Ref.modify_)(ref)(Halogen_Aff_Driver_State.mapDriverState(function(st) {
              return {
                component: st.component,
                state: st.state,
                refs: Data_Map_Internal.alter(Data_Ord.ordString)(Data_Function["const"](v.value1))(v.value0)(st.refs),
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
          if (v instanceof Halogen_Query_Input.Action) {
            return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_Ref.read(ref)))(function(v1) {
              return evalM(render)(ref)(v1["component"]["eval"](new Halogen_Query_HalogenQ.Action(v.value0, Data_Unit.unit)));
            });
          }
          ;
          throw new Error("Failed pattern match at Halogen.Aff.Driver.Eval (line 52, column 20 - line 58, column 62): " + [v.constructor.name]);
        };
      };
    };
    exports["evalF"] = evalF;
    exports["evalQ"] = evalQ;
    exports["evalM"] = evalM;
    exports["handleLifecycle"] = handleLifecycle;
    exports["queueOrRun"] = queueOrRun;
    exports["handleAff"] = handleAff;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Halogen.Aff.Driver"] = $PS["Halogen.Aff.Driver"] || {};
    var exports = $PS["Halogen.Aff.Driver"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Control_Bind = $PS["Control.Bind"];
    var Control_Category = $PS["Control.Category"];
    var Control_Monad_Fork_Class = $PS["Control.Monad.Fork.Class"];
    var Control_Monad_Rec_Class = $PS["Control.Monad.Rec.Class"];
    var Control_Parallel = $PS["Control.Parallel"];
    var Data_Foldable = $PS["Data.Foldable"];
    var Data_Function = $PS["Data.Function"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_List = $PS["Data.List"];
    var Data_List_Types = $PS["Data.List.Types"];
    var Data_Map_Internal = $PS["Data.Map.Internal"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Data_Unit = $PS["Data.Unit"];
    var Effect = $PS["Effect"];
    var Effect_Aff = $PS["Effect.Aff"];
    var Effect_Class = $PS["Effect.Class"];
    var Effect_Console = $PS["Effect.Console"];
    var Effect_Exception = $PS["Effect.Exception"];
    var Effect_Ref = $PS["Effect.Ref"];
    var Halogen_Aff_Driver_Eval = $PS["Halogen.Aff.Driver.Eval"];
    var Halogen_Aff_Driver_State = $PS["Halogen.Aff.Driver.State"];
    var Halogen_Component = $PS["Halogen.Component"];
    var Halogen_Data_Slot = $PS["Halogen.Data.Slot"];
    var Halogen_Query_HalogenQ = $PS["Halogen.Query.HalogenQ"];
    var Halogen_Query_Input = $PS["Halogen.Query.Input"];
    var Halogen_Subscription = $PS["Halogen.Subscription"];
    var newLifecycleHandlers = Effect_Ref["new"]({
      initializers: Data_List_Types.Nil.value,
      finalizers: Data_List_Types.Nil.value
    });
    var handlePending = function(ref) {
      return function __do() {
        var queue = Effect_Ref.read(ref)();
        Effect_Ref.write(Data_Maybe.Nothing.value)(ref)();
        return Data_Foldable.for_(Effect.applicativeEffect)(Data_Foldable.foldableMaybe)(queue)(function() {
          var $28 = Data_Foldable.traverse_(Effect_Aff.applicativeAff)(Data_List_Types.foldableList)(Control_Monad_Fork_Class.fork(Control_Monad_Fork_Class.monadForkAff));
          return function($29) {
            return Halogen_Aff_Driver_Eval.handleAff($28(Data_List.reverse($29)));
          };
        }())();
      };
    };
    var cleanupSubscriptionsAndForks = function(v) {
      return function __do() {
        Control_Bind.bindFlipped(Effect.bindEffect)(Data_Foldable.traverse_(Effect.applicativeEffect)(Data_Foldable.foldableMaybe)(Data_Foldable.traverse_(Effect.applicativeEffect)(Data_Map_Internal.foldableMap)(Halogen_Subscription.unsubscribe)))(Effect_Ref.read(v.subscriptions))();
        Effect_Ref.write(Data_Maybe.Nothing.value)(v.subscriptions)();
        Control_Bind.bindFlipped(Effect.bindEffect)(Data_Foldable.traverse_(Effect.applicativeEffect)(Data_Map_Internal.foldableMap)(function() {
          var $30 = Effect_Aff.killFiber(Effect_Exception.error("finalized"));
          return function($31) {
            return Halogen_Aff_Driver_Eval.handleAff($30($31));
          };
        }()))(Effect_Ref.read(v.forks))();
        return Effect_Ref.write(Data_Map_Internal.empty)(v.forks)();
      };
    };
    var runUI = function(renderSpec) {
      return function(component) {
        return function(i) {
          var squashChildInitializers = function(lchs) {
            return function(preInits) {
              return Halogen_Aff_Driver_State.unDriverStateX(function(st) {
                var parentInitializer = Halogen_Aff_Driver_Eval.evalM(render)(st.selfRef)(st["component"]["eval"](new Halogen_Query_HalogenQ.Initialize(Data_Unit.unit)));
                return Effect_Ref.modify_(function(handlers) {
                  return {
                    initializers: new Data_List_Types.Cons(Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(Control_Parallel.parSequence_(Effect_Aff.parallelAff)(Data_List_Types.foldableList)(Data_List.reverse(handlers.initializers)))(function() {
                      return Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(parentInitializer)(function() {
                        return Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(function __do() {
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
            return function(handler) {
              return function(j) {
                return Halogen_Component.unComponent(function(c) {
                  return function __do() {
                    var lchs$prime = newLifecycleHandlers();
                    var $$var = Halogen_Aff_Driver_State.initDriverState(c)(j)(handler)(lchs$prime)();
                    var pre = Effect_Ref.read(lchs)();
                    Effect_Ref.write({
                      initializers: Data_List_Types.Nil.value,
                      finalizers: pre.finalizers
                    })(lchs)();
                    Control_Bind.bindFlipped(Effect.bindEffect)(Halogen_Aff_Driver_State.unDriverStateX(function() {
                      var $32 = render(lchs);
                      return function($33) {
                        return $32(function(v) {
                          return v.selfRef;
                        }($33));
                      };
                    }()))(Effect_Ref.read($$var))();
                    Control_Bind.bindFlipped(Effect.bindEffect)(squashChildInitializers(lchs)(pre.initializers))(Effect_Ref.read($$var))();
                    return $$var;
                  };
                });
              };
            };
          };
          var renderChild = function(lchs) {
            return function(handler) {
              return function(childrenInRef) {
                return function(childrenOutRef) {
                  return Halogen_Component.unComponentSlot(function(slot) {
                    return function __do() {
                      var childrenIn = Data_Functor.map(Effect.functorEffect)(slot.pop)(Effect_Ref.read(childrenInRef))();
                      var $$var = function() {
                        if (childrenIn instanceof Data_Maybe.Just) {
                          Effect_Ref.write(childrenIn.value0.value1)(childrenInRef)();
                          var dsx = Effect_Ref.read(childrenIn.value0.value0)();
                          Halogen_Aff_Driver_State.unDriverStateX(function(st) {
                            return function __do2() {
                              Data_Function.flip(Effect_Ref.write)(st.handlerRef)(function() {
                                var $34 = Data_Maybe.maybe(Control_Applicative.pure(Effect_Aff.applicativeAff)(Data_Unit.unit))(handler);
                                return function($35) {
                                  return $34(slot.output($35));
                                };
                              }())();
                              return Halogen_Aff_Driver_Eval.handleAff(Halogen_Aff_Driver_Eval.evalM(render)(st.selfRef)(st["component"]["eval"](new Halogen_Query_HalogenQ.Receive(slot.input, Data_Unit.unit))))();
                            };
                          })(dsx)();
                          return childrenIn.value0.value0;
                        }
                        ;
                        if (childrenIn instanceof Data_Maybe.Nothing) {
                          return runComponent(lchs)(function() {
                            var $36 = Data_Maybe.maybe(Control_Applicative.pure(Effect_Aff.applicativeAff)(Data_Unit.unit))(handler);
                            return function($37) {
                              return $36(slot.output($37));
                            };
                          }())(slot.input)(slot.component)();
                        }
                        ;
                        throw new Error("Failed pattern match at Halogen.Aff.Driver (line 210, column 14 - line 219, column 98): " + [childrenIn.constructor.name]);
                      }();
                      var isDuplicate = Data_Functor.map(Effect.functorEffect)(function($38) {
                        return Data_Maybe.isJust(slot.get($38));
                      })(Effect_Ref.read(childrenOutRef))();
                      Control_Applicative.when(Effect.applicativeEffect)(isDuplicate)(Effect_Console.warn("Halogen: Duplicate slot address was detected during rendering, unexpected results may occur"))();
                      Effect_Ref.modify_(slot.set($$var))(childrenOutRef)();
                      return Control_Bind.bind(Effect.bindEffect)(Effect_Ref.read($$var))(Halogen_Aff_Driver_State.renderStateX(Effect.functorEffect)(function(v) {
                        if (v instanceof Data_Maybe.Nothing) {
                          return Effect_Exception["throw"]("Halogen internal error: child was not initialized in renderChild");
                        }
                        ;
                        if (v instanceof Data_Maybe.Just) {
                          return Control_Applicative.pure(Effect.applicativeEffect)(renderSpec.renderChild(v.value0));
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
          var render = function(lchs) {
            return function($$var) {
              return function __do() {
                var v = Effect_Ref.read($$var)();
                var shouldProcessHandlers = Data_Functor.map(Effect.functorEffect)(Data_Maybe.isNothing)(Effect_Ref.read(v.pendingHandlers))();
                Control_Applicative.when(Effect.applicativeEffect)(shouldProcessHandlers)(Effect_Ref.write(new Data_Maybe.Just(Data_List_Types.Nil.value))(v.pendingHandlers))();
                Effect_Ref.write(Halogen_Data_Slot.empty)(v.childrenOut)();
                Effect_Ref.write(v.children)(v.childrenIn)();
                var selfRef = Control_Category.identity(Control_Category.categoryFn)(v.selfRef);
                var pendingQueries = Control_Category.identity(Control_Category.categoryFn)(v.pendingQueries);
                var pendingHandlers = Control_Category.identity(Control_Category.categoryFn)(v.pendingHandlers);
                var handler = function() {
                  var $39 = Halogen_Aff_Driver_Eval.queueOrRun(pendingHandlers);
                  var $40 = Data_Functor["void"](Effect_Aff.functorAff);
                  var $41 = Halogen_Aff_Driver_Eval.evalF(render)(selfRef);
                  return function($42) {
                    return $39($40($41($42)));
                  };
                }();
                var childHandler = function() {
                  var $43 = Halogen_Aff_Driver_Eval.queueOrRun(pendingQueries);
                  return function($44) {
                    return $43(handler(Halogen_Query_Input.Action.create($44)));
                  };
                }();
                var rendering = renderSpec.render(function($45) {
                  return Halogen_Aff_Driver_Eval.handleAff(handler($45));
                })(renderChild(lchs)(childHandler)(v.childrenIn)(v.childrenOut))(v.component.render(v.state))(v.rendering)();
                var children = Effect_Ref.read(v.childrenOut)();
                var childrenIn = Effect_Ref.read(v.childrenIn)();
                Halogen_Data_Slot.foreachSlot(Effect.applicativeEffect)(childrenIn)(function(v1) {
                  return function __do2() {
                    var childDS = Effect_Ref.read(v1)();
                    Halogen_Aff_Driver_State.renderStateX_(Effect.applicativeEffect)(renderSpec.removeChild)(childDS)();
                    return finalize(lchs)(childDS)();
                  };
                })();
                Data_Function.flip(Effect_Ref.modify_)(v.selfRef)(Halogen_Aff_Driver_State.mapDriverState(function(ds$prime) {
                  return {
                    component: ds$prime.component,
                    state: ds$prime.state,
                    refs: ds$prime.refs,
                    children,
                    childrenIn: ds$prime.childrenIn,
                    childrenOut: ds$prime.childrenOut,
                    selfRef: ds$prime.selfRef,
                    handlerRef: ds$prime.handlerRef,
                    pendingQueries: ds$prime.pendingQueries,
                    pendingOuts: ds$prime.pendingOuts,
                    pendingHandlers: ds$prime.pendingHandlers,
                    rendering: new Data_Maybe.Just(rendering),
                    fresh: ds$prime.fresh,
                    subscriptions: ds$prime.subscriptions,
                    forks: ds$prime.forks,
                    lifecycleHandlers: ds$prime.lifecycleHandlers
                  };
                }))();
                return Control_Applicative.when(Effect.applicativeEffect)(shouldProcessHandlers)(Data_Function.flip(Control_Monad_Rec_Class.tailRecM(Control_Monad_Rec_Class.monadRecEffect))(Data_Unit.unit)(function(v1) {
                  return function __do2() {
                    var handlers = Effect_Ref.read(pendingHandlers)();
                    Effect_Ref.write(new Data_Maybe.Just(Data_List_Types.Nil.value))(pendingHandlers)();
                    Data_Foldable.traverse_(Effect.applicativeEffect)(Data_Foldable.foldableMaybe)(function() {
                      var $46 = Data_Foldable.traverse_(Effect_Aff.applicativeAff)(Data_List_Types.foldableList)(Control_Monad_Fork_Class.fork(Control_Monad_Fork_Class.monadForkAff));
                      return function($47) {
                        return Halogen_Aff_Driver_Eval.handleAff($46(Data_List.reverse($47)));
                      };
                    }())(handlers)();
                    var mmore = Effect_Ref.read(pendingHandlers)();
                    var $21 = Data_Maybe.maybe(false)(Data_List["null"])(mmore);
                    if ($21) {
                      return Data_Functor.voidLeft(Effect.functorEffect)(Effect_Ref.write(Data_Maybe.Nothing.value)(pendingHandlers))(new Control_Monad_Rec_Class.Done(Data_Unit.unit))();
                    }
                    ;
                    return new Control_Monad_Rec_Class.Loop(Data_Unit.unit);
                  };
                }))();
              };
            };
          };
          var finalize = function(lchs) {
            return Halogen_Aff_Driver_State.unDriverStateX(function(st) {
              return function __do() {
                cleanupSubscriptionsAndForks(st)();
                var f = Halogen_Aff_Driver_Eval.evalM(render)(st.selfRef)(st["component"]["eval"](new Halogen_Query_HalogenQ.Finalize(Data_Unit.unit)));
                Effect_Ref.modify_(function(handlers) {
                  return {
                    initializers: handlers.initializers,
                    finalizers: new Data_List_Types.Cons(f, handlers.finalizers)
                  };
                })(lchs)();
                return Halogen_Data_Slot.foreachSlot(Effect.applicativeEffect)(st.children)(function(v) {
                  return function __do2() {
                    var dsx = Effect_Ref.read(v)();
                    return finalize(lchs)(dsx)();
                  };
                })();
              };
            });
          };
          var evalDriver = function(disposed) {
            return function(ref) {
              return function(q) {
                return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_Ref.read(disposed)))(function(v) {
                  if (v) {
                    return Control_Applicative.pure(Effect_Aff.applicativeAff)(Data_Maybe.Nothing.value);
                  }
                  ;
                  return Halogen_Aff_Driver_Eval.evalQ(render)(ref)(q);
                });
              };
            };
          };
          var dispose = function(disposed) {
            return function(lchs) {
              return function(dsx) {
                return Halogen_Aff_Driver_Eval.handleLifecycle(lchs)(function __do() {
                  var v = Effect_Ref.read(disposed)();
                  if (v) {
                    return Data_Unit.unit;
                  }
                  ;
                  Effect_Ref.write(true)(disposed)();
                  finalize(lchs)(dsx)();
                  return Halogen_Aff_Driver_State.unDriverStateX(function(v1) {
                    return function __do2() {
                      var v2 = Effect_Class.liftEffect(Effect_Class.monadEffectEffect)(Effect_Ref.read(v1.selfRef))();
                      return Data_Foldable.for_(Effect.applicativeEffect)(Data_Foldable.foldableMaybe)(v2.rendering)(renderSpec.dispose)();
                    };
                  })(dsx)();
                });
              };
            };
          };
          return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(newLifecycleHandlers))(function(lchs) {
            return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_Ref["new"](false)))(function(disposed) {
              return Halogen_Aff_Driver_Eval.handleLifecycle(lchs)(function __do() {
                var sio = Halogen_Subscription.create();
                var dsx = Control_Bind.bindFlipped(Effect.bindEffect)(Effect_Ref.read)(runComponent(lchs)(function() {
                  var $48 = Effect_Class.liftEffect(Effect_Aff.monadEffectAff);
                  var $49 = Halogen_Subscription.notify(sio.listener);
                  return function($50) {
                    return $48($49($50));
                  };
                }())(i)(component))();
                return Halogen_Aff_Driver_State.unDriverStateX(function(st) {
                  return Control_Applicative.pure(Effect.applicativeEffect)({
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
    exports["runUI"] = runUI;
  })(PS);
  (function(exports) {
    "use strict";
    exports._querySelector = function(selector) {
      return function(node) {
        return function() {
          return node.querySelector(selector);
        };
      };
    };
  })(PS["Web.DOM.ParentNode"] = PS["Web.DOM.ParentNode"] || {});
  (function($PS) {
    "use strict";
    $PS["Web.DOM.ParentNode"] = $PS["Web.DOM.ParentNode"] || {};
    var exports = $PS["Web.DOM.ParentNode"];
    var $foreign = $PS["Web.DOM.ParentNode"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_Nullable = $PS["Data.Nullable"];
    var Effect = $PS["Effect"];
    var querySelector = function(qs) {
      var $0 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
      var $1 = $foreign["_querySelector"](qs);
      return function($2) {
        return $0($1($2));
      };
    };
    exports["querySelector"] = querySelector;
  })(PS);
  (function(exports) {
    "use strict";
    exports.window = function() {
      return window;
    };
  })(PS["Web.HTML"] = PS["Web.HTML"] || {});
  (function($PS) {
    "use strict";
    $PS["Web.HTML"] = $PS["Web.HTML"] || {};
    var exports = $PS["Web.HTML"];
    var $foreign = $PS["Web.HTML"];
    exports["window"] = $foreign.window;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Web.HTML.Event.EventTypes"] = $PS["Web.HTML.Event.EventTypes"] || {};
    var exports = $PS["Web.HTML.Event.EventTypes"];
    var domcontentloaded = "DOMContentLoaded";
    exports["domcontentloaded"] = domcontentloaded;
  })(PS);
  (function(exports) {
    "use strict";
    exports._readyState = function(doc) {
      return function() {
        return doc.readyState;
      };
    };
  })(PS["Web.HTML.HTMLDocument"] = PS["Web.HTML.HTMLDocument"] || {});
  (function($PS) {
    "use strict";
    $PS["Web.HTML.HTMLDocument.ReadyState"] = $PS["Web.HTML.HTMLDocument.ReadyState"] || {};
    var exports = $PS["Web.HTML.HTMLDocument.ReadyState"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Loading = function() {
      function Loading2() {
      }
      ;
      Loading2.value = new Loading2();
      return Loading2;
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
        return new Data_Maybe.Just(Loading.value);
      }
      ;
      if (v === "interactive") {
        return new Data_Maybe.Just(Interactive.value);
      }
      ;
      if (v === "complete") {
        return new Data_Maybe.Just(Complete.value);
      }
      ;
      return Data_Maybe.Nothing.value;
    };
    exports["Loading"] = Loading;
    exports["parse"] = parse;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Web.HTML.HTMLDocument"] = $PS["Web.HTML.HTMLDocument"] || {};
    var exports = $PS["Web.HTML.HTMLDocument"];
    var $foreign = $PS["Web.HTML.HTMLDocument"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Effect = $PS["Effect"];
    var Unsafe_Coerce = $PS["Unsafe.Coerce"];
    var Web_HTML_HTMLDocument_ReadyState = $PS["Web.HTML.HTMLDocument.ReadyState"];
    var toParentNode = Unsafe_Coerce.unsafeCoerce;
    var toDocument = Unsafe_Coerce.unsafeCoerce;
    var readyState = function() {
      var $0 = Data_Functor.map(Effect.functorEffect)(function() {
        var $2 = Data_Maybe.fromMaybe(Web_HTML_HTMLDocument_ReadyState.Loading.value);
        return function($3) {
          return $2(Web_HTML_HTMLDocument_ReadyState.parse($3));
        };
      }());
      return function($1) {
        return $0($foreign["_readyState"]($1));
      };
    }();
    exports["toDocument"] = toDocument;
    exports["toParentNode"] = toParentNode;
    exports["readyState"] = readyState;
  })(PS);
  (function(exports) {
    "use strict";
    exports._read = function(nothing, just, value) {
      var tag = Object.prototype.toString.call(value);
      if (tag.indexOf("[object HTML") === 0 && tag.indexOf("Element]") === tag.length - 8) {
        return just(value);
      } else {
        return nothing;
      }
    };
  })(PS["Web.HTML.HTMLElement"] = PS["Web.HTML.HTMLElement"] || {});
  (function($PS) {
    "use strict";
    $PS["Web.HTML.HTMLElement"] = $PS["Web.HTML.HTMLElement"] || {};
    var exports = $PS["Web.HTML.HTMLElement"];
    var $foreign = $PS["Web.HTML.HTMLElement"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Unsafe_Coerce = $PS["Unsafe.Coerce"];
    var toNode = Unsafe_Coerce.unsafeCoerce;
    var fromElement = function(x) {
      return $foreign["_read"](Data_Maybe.Nothing.value, Data_Maybe.Just.create, x);
    };
    exports["fromElement"] = fromElement;
    exports["toNode"] = toNode;
  })(PS);
  (function(exports) {
    "use strict";
    exports.document = function(window2) {
      return function() {
        return window2.document;
      };
    };
  })(PS["Web.HTML.Window"] = PS["Web.HTML.Window"] || {});
  (function($PS) {
    "use strict";
    $PS["Web.HTML.Window"] = $PS["Web.HTML.Window"] || {};
    var exports = $PS["Web.HTML.Window"];
    var $foreign = $PS["Web.HTML.Window"];
    var Unsafe_Coerce = $PS["Unsafe.Coerce"];
    var toEventTarget = Unsafe_Coerce.unsafeCoerce;
    exports["toEventTarget"] = toEventTarget;
    exports["document"] = $foreign.document;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Halogen.Aff.Util"] = $PS["Halogen.Aff.Util"] || {};
    var exports = $PS["Halogen.Aff.Util"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Control_Bind = $PS["Control.Bind"];
    var Control_Monad_Error_Class = $PS["Control.Monad.Error.Class"];
    var Data_Either = $PS["Data.Either"];
    var Data_Function = $PS["Data.Function"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Data_Unit = $PS["Data.Unit"];
    var Effect = $PS["Effect"];
    var Effect_Aff = $PS["Effect.Aff"];
    var Effect_Class = $PS["Effect.Class"];
    var Effect_Exception = $PS["Effect.Exception"];
    var Web_DOM_ParentNode = $PS["Web.DOM.ParentNode"];
    var Web_Event_EventTarget = $PS["Web.Event.EventTarget"];
    var Web_HTML = $PS["Web.HTML"];
    var Web_HTML_Event_EventTypes = $PS["Web.HTML.Event.EventTypes"];
    var Web_HTML_HTMLDocument = $PS["Web.HTML.HTMLDocument"];
    var Web_HTML_HTMLDocument_ReadyState = $PS["Web.HTML.HTMLDocument.ReadyState"];
    var Web_HTML_HTMLElement = $PS["Web.HTML.HTMLElement"];
    var Web_HTML_Window = $PS["Web.HTML.Window"];
    var selectElement = function(query) {
      return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Control_Bind.bindFlipped(Effect.bindEffect)(Control_Bind.composeKleisliFlipped(Effect.bindEffect)(function() {
        var $2 = Web_DOM_ParentNode.querySelector(query);
        return function($3) {
          return $2(Web_HTML_HTMLDocument.toParentNode($3));
        };
      }())(Web_HTML_Window.document))(Web_HTML.window)))(function(mel) {
        return Control_Applicative.pure(Effect_Aff.applicativeAff)(Control_Bind.bindFlipped(Data_Maybe.bindMaybe)(Web_HTML_HTMLElement.fromElement)(mel));
      });
    };
    var runHalogenAff = Effect_Aff.runAff_(Data_Either.either(Effect_Exception.throwException)(Data_Function["const"](Control_Applicative.pure(Effect.applicativeEffect)(Data_Unit.unit))));
    var awaitLoad = Effect_Aff.makeAff(function(callback) {
      return function __do() {
        var rs = Control_Bind.bindFlipped(Effect.bindEffect)(Web_HTML_HTMLDocument.readyState)(Control_Bind.bindFlipped(Effect.bindEffect)(Web_HTML_Window.document)(Web_HTML.window))();
        if (rs instanceof Web_HTML_HTMLDocument_ReadyState.Loading) {
          var et = Data_Functor.map(Effect.functorEffect)(Web_HTML_Window.toEventTarget)(Web_HTML.window)();
          var listener = Web_Event_EventTarget.eventListener(function(v) {
            return callback(new Data_Either.Right(Data_Unit.unit));
          })();
          Web_Event_EventTarget.addEventListener(Web_HTML_Event_EventTypes.domcontentloaded)(listener)(false)(et)();
          return Effect_Aff.effectCanceler(Web_Event_EventTarget.removeEventListener(Web_HTML_Event_EventTypes.domcontentloaded)(listener)(false)(et));
        }
        ;
        callback(new Data_Either.Right(Data_Unit.unit))();
        return Effect_Aff.nonCanceler;
      };
    });
    var awaitBody = Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(awaitLoad)(function() {
      return Control_Bind.bind(Effect_Aff.bindAff)(selectElement("body"))(function(body) {
        return Data_Maybe.maybe(Control_Monad_Error_Class.throwError(Effect_Aff.monadThrowAff)(Effect_Exception.error("Could not find body")))(Control_Applicative.pure(Effect_Aff.applicativeAff))(body);
      });
    });
    exports["awaitBody"] = awaitBody;
    exports["runHalogenAff"] = runHalogenAff;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Web.DOM.Element"] = $PS["Web.DOM.Element"] || {};
    var exports = $PS["Web.DOM.Element"];
    var Unsafe_Coerce = $PS["Unsafe.Coerce"];
    var toNode = Unsafe_Coerce.unsafeCoerce;
    exports["toNode"] = toNode;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Halogen.VDom.DOM"] = $PS["Halogen.VDom.DOM"] || {};
    var exports = $PS["Halogen.VDom.DOM"];
    var Data_Array = $PS["Data.Array"];
    var Data_Boolean = $PS["Data.Boolean"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Data_Nullable = $PS["Data.Nullable"];
    var Data_Tuple = $PS["Data.Tuple"];
    var Halogen_VDom_Machine = $PS["Halogen.VDom.Machine"];
    var Halogen_VDom_Types = $PS["Halogen.VDom.Types"];
    var Halogen_VDom_Util = $PS["Halogen.VDom.Util"];
    var Web_DOM_Element = $PS["Web.DOM.Element"];
    var haltWidget = function(v) {
      return Halogen_VDom_Machine.halt(v.widget);
    };
    var patchWidget = function(state, vdom) {
      if (vdom instanceof Halogen_VDom_Types.Grafted) {
        return patchWidget(state, Halogen_VDom_Types.runGraft(vdom.value0));
      }
      ;
      if (vdom instanceof Halogen_VDom_Types.Widget) {
        var res = Halogen_VDom_Machine.step(state.widget, vdom.value0);
        var res$prime = Halogen_VDom_Machine.unStep(function(v) {
          return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(v.value0, {
            build: state.build,
            widget: res
          }, patchWidget, haltWidget));
        })(res);
        return res$prime;
      }
      ;
      haltWidget(state);
      return state.build(vdom);
    };
    var haltText = function(v) {
      var parent = Halogen_VDom_Util.parentNode(v.node);
      return Halogen_VDom_Util.removeChild(v.node, parent);
    };
    var patchText = function(state, vdom) {
      if (vdom instanceof Halogen_VDom_Types.Grafted) {
        return patchText(state, Halogen_VDom_Types.runGraft(vdom.value0));
      }
      ;
      if (vdom instanceof Halogen_VDom_Types.Text) {
        if (state.value === vdom.value0) {
          return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(state.node, state, patchText, haltText));
        }
        ;
        if (Data_Boolean.otherwise) {
          var nextState = {
            build: state.build,
            node: state.node,
            value: vdom.value0
          };
          Halogen_VDom_Util.setTextContent(vdom.value0, state.node);
          return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(state.node, nextState, patchText, haltText));
        }
        ;
      }
      ;
      haltText(state);
      return state.build(vdom);
    };
    var haltKeyed = function(v) {
      var parent = Halogen_VDom_Util.parentNode(v.node);
      Halogen_VDom_Util.removeChild(v.node, parent);
      Halogen_VDom_Util.forInE(v.children, function(v1, s) {
        return Halogen_VDom_Machine.halt(s);
      });
      return Halogen_VDom_Machine.halt(v.attrs);
    };
    var haltElem = function(v) {
      var parent = Halogen_VDom_Util.parentNode(v.node);
      Halogen_VDom_Util.removeChild(v.node, parent);
      Halogen_VDom_Util.forEachE(v.children, Halogen_VDom_Machine.halt);
      return Halogen_VDom_Machine.halt(v.attrs);
    };
    var eqElemSpec = function(ns1, v, ns2, v1) {
      var $58 = v === v1;
      if ($58) {
        if (ns1 instanceof Data_Maybe.Just && (ns2 instanceof Data_Maybe.Just && ns1.value0 === ns2.value0)) {
          return true;
        }
        ;
        if (ns1 instanceof Data_Maybe.Nothing && ns2 instanceof Data_Maybe.Nothing) {
          return true;
        }
        ;
        return false;
      }
      ;
      return false;
    };
    var patchElem = function(state, vdom) {
      if (vdom instanceof Halogen_VDom_Types.Grafted) {
        return patchElem(state, Halogen_VDom_Types.runGraft(vdom.value0));
      }
      ;
      if (vdom instanceof Halogen_VDom_Types.Elem && eqElemSpec(state.ns, state.name, vdom.value0, vdom.value1)) {
        var v = Data_Array.length(vdom.value3);
        var v1 = Data_Array.length(state.children);
        if (v1 === 0 && v === 0) {
          var attrs2 = Halogen_VDom_Machine.step(state.attrs, vdom.value2);
          var nextState = {
            build: state.build,
            node: state.node,
            attrs: attrs2,
            ns: vdom.value0,
            name: vdom.value1,
            children: state.children
          };
          return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(state.node, nextState, patchElem, haltElem));
        }
        ;
        var onThis = function(v2, s) {
          return Halogen_VDom_Machine.halt(s);
        };
        var onThese = function(ix, s, v2) {
          var res = Halogen_VDom_Machine.step(s, v2);
          Halogen_VDom_Util.insertChildIx(ix, Halogen_VDom_Machine.extract(res), state.node);
          return res;
        };
        var onThat = function(ix, v2) {
          var res = state.build(v2);
          Halogen_VDom_Util.insertChildIx(ix, Halogen_VDom_Machine.extract(res), state.node);
          return res;
        };
        var children2 = Halogen_VDom_Util.diffWithIxE(state.children, vdom.value3, onThese, onThis, onThat);
        var attrs2 = Halogen_VDom_Machine.step(state.attrs, vdom.value2);
        var nextState = {
          build: state.build,
          node: state.node,
          attrs: attrs2,
          ns: vdom.value0,
          name: vdom.value1,
          children: children2
        };
        return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(state.node, nextState, patchElem, haltElem));
      }
      ;
      haltElem(state);
      return state.build(vdom);
    };
    var patchKeyed = function(state, vdom) {
      if (vdom instanceof Halogen_VDom_Types.Grafted) {
        return patchKeyed(state, Halogen_VDom_Types.runGraft(vdom.value0));
      }
      ;
      if (vdom instanceof Halogen_VDom_Types.Keyed && eqElemSpec(state.ns, state.name, vdom.value0, vdom.value1)) {
        var v = Data_Array.length(vdom.value3);
        if (state.length === 0 && v === 0) {
          var attrs2 = Halogen_VDom_Machine.step(state.attrs, vdom.value2);
          var nextState = {
            build: state.build,
            node: state.node,
            attrs: attrs2,
            ns: vdom.value0,
            name: vdom.value1,
            children: state.children,
            length: 0
          };
          return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(state.node, nextState, patchKeyed, haltKeyed));
        }
        ;
        var onThis = function(v2, s) {
          return Halogen_VDom_Machine.halt(s);
        };
        var onThese = function(v2, ix$prime, s, v3) {
          var res = Halogen_VDom_Machine.step(s, v3.value1);
          Halogen_VDom_Util.insertChildIx(ix$prime, Halogen_VDom_Machine.extract(res), state.node);
          return res;
        };
        var onThat = function(v2, ix, v3) {
          var res = state.build(v3.value1);
          Halogen_VDom_Util.insertChildIx(ix, Halogen_VDom_Machine.extract(res), state.node);
          return res;
        };
        var children2 = Halogen_VDom_Util.diffWithKeyAndIxE(state.children, vdom.value3, Data_Tuple.fst, onThese, onThis, onThat);
        var attrs2 = Halogen_VDom_Machine.step(state.attrs, vdom.value2);
        var nextState = {
          build: state.build,
          node: state.node,
          attrs: attrs2,
          ns: vdom.value0,
          name: vdom.value1,
          children: children2,
          length: v
        };
        return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(state.node, nextState, patchKeyed, haltKeyed));
      }
      ;
      haltKeyed(state);
      return state.build(vdom);
    };
    var buildWidget = function(v, build, w) {
      var res = v.buildWidget(v)(w);
      var res$prime = Halogen_VDom_Machine.unStep(function(v1) {
        return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(v1.value0, {
          build,
          widget: res
        }, patchWidget, haltWidget));
      })(res);
      return res$prime;
    };
    var buildText = function(v, build, s) {
      var node = Halogen_VDom_Util.createTextNode(s, v.document);
      var state = {
        build,
        node,
        value: s
      };
      return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(node, state, patchText, haltText));
    };
    var buildKeyed = function(v, build, ns1, name1, as1, ch1) {
      var el = Halogen_VDom_Util.createElement(Data_Nullable.toNullable(ns1), name1, v.document);
      var node = Web_DOM_Element.toNode(el);
      var onChild = function(v1, ix, v2) {
        var res = build(v2.value1);
        Halogen_VDom_Util.insertChildIx(ix, Halogen_VDom_Machine.extract(res), node);
        return res;
      };
      var children = Halogen_VDom_Util.strMapWithIxE(ch1, Data_Tuple.fst, onChild);
      var attrs = v.buildAttributes(el)(as1);
      var state = {
        build,
        node,
        attrs,
        ns: ns1,
        name: name1,
        children,
        length: Data_Array.length(ch1)
      };
      return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(node, state, patchKeyed, haltKeyed));
    };
    var buildElem = function(v, build, ns1, name1, as1, ch1) {
      var el = Halogen_VDom_Util.createElement(Data_Nullable.toNullable(ns1), name1, v.document);
      var node = Web_DOM_Element.toNode(el);
      var onChild = function(ix, child) {
        var res = build(child);
        Halogen_VDom_Util.insertChildIx(ix, Halogen_VDom_Machine.extract(res), node);
        return res;
      };
      var children = Halogen_VDom_Util.forE(ch1, onChild);
      var attrs = v.buildAttributes(el)(as1);
      var state = {
        build,
        node,
        attrs,
        ns: ns1,
        name: name1,
        children
      };
      return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(node, state, patchElem, haltElem));
    };
    var buildVDom = function(spec) {
      var build = function(v) {
        if (v instanceof Halogen_VDom_Types.Text) {
          return buildText(spec, build, v.value0);
        }
        ;
        if (v instanceof Halogen_VDom_Types.Elem) {
          return buildElem(spec, build, v.value0, v.value1, v.value2, v.value3);
        }
        ;
        if (v instanceof Halogen_VDom_Types.Keyed) {
          return buildKeyed(spec, build, v.value0, v.value1, v.value2, v.value3);
        }
        ;
        if (v instanceof Halogen_VDom_Types.Widget) {
          return buildWidget(spec, build, v.value0);
        }
        ;
        if (v instanceof Halogen_VDom_Types.Grafted) {
          return build(Halogen_VDom_Types.runGraft(v.value0));
        }
        ;
        throw new Error("Failed pattern match at Halogen.VDom.DOM (line 58, column 27 - line 63, column 52): " + [v.constructor.name]);
      };
      return build;
    };
    exports["buildVDom"] = buildVDom;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Halogen.VDom.Thunk"] = $PS["Halogen.VDom.Thunk"] || {};
    var exports = $PS["Halogen.VDom.Thunk"];
    var Halogen_VDom_DOM = $PS["Halogen.VDom.DOM"];
    var Halogen_VDom_Machine = $PS["Halogen.VDom.Machine"];
    var Halogen_VDom_Util = $PS["Halogen.VDom.Util"];
    var Thunk = function() {
      function Thunk2(value0, value1, value2, value3) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
      }
      ;
      Thunk2.create = function(value0) {
        return function(value1) {
          return function(value2) {
            return function(value3) {
              return new Thunk2(value0, value1, value2, value3);
            };
          };
        };
      };
      return Thunk2;
    }();
    var unsafeEqThunk = function(v, v1) {
      return Halogen_VDom_Util.refEq(v.value0, v1.value0) && (Halogen_VDom_Util.refEq(v.value1, v1.value1) && v.value1(v.value3, v1.value3));
    };
    var thunk = function(tid, eqFn, f, a) {
      return new Thunk(tid, eqFn, f, a);
    };
    var runThunk = function(v) {
      return v.value2(v.value3);
    };
    var buildThunk = function(toVDom) {
      var haltThunk = function(state) {
        return Halogen_VDom_Machine.halt(state.vdom);
      };
      var patchThunk = function(state, t2) {
        var $43 = unsafeEqThunk(state.thunk, t2);
        if ($43) {
          return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(Halogen_VDom_Machine.extract(state.vdom), state, patchThunk, haltThunk));
        }
        ;
        var vdom = Halogen_VDom_Machine.step(state.vdom, toVDom(runThunk(t2)));
        return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(Halogen_VDom_Machine.extract(vdom), {
          vdom,
          thunk: t2
        }, patchThunk, haltThunk));
      };
      var renderThunk = function(spec) {
        return function(t) {
          var vdom = Halogen_VDom_DOM.buildVDom(spec)(toVDom(runThunk(t)));
          return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(Halogen_VDom_Machine.extract(vdom), {
            thunk: t,
            vdom
          }, patchThunk, haltThunk));
        };
      };
      return renderThunk;
    };
    exports["buildThunk"] = buildThunk;
  })(PS);
  (function(exports) {
    "use strict";
    var getEffProp = function(name) {
      return function(node) {
        return function() {
          return node[name];
        };
      };
    };
    exports._parentNode = getEffProp("parentNode");
    exports._nextSibling = getEffProp("nextSibling");
    exports.insertBefore = function(node1) {
      return function(node2) {
        return function(parent) {
          return function() {
            parent.insertBefore(node1, node2);
          };
        };
      };
    };
    exports.appendChild = function(node) {
      return function(parent) {
        return function() {
          parent.appendChild(node);
        };
      };
    };
    exports.removeChild = function(node) {
      return function(parent) {
        return function() {
          parent.removeChild(node);
        };
      };
    };
  })(PS["Web.DOM.Node"] = PS["Web.DOM.Node"] || {});
  (function($PS) {
    "use strict";
    $PS["Web.DOM.Node"] = $PS["Web.DOM.Node"] || {};
    var exports = $PS["Web.DOM.Node"];
    var $foreign = $PS["Web.DOM.Node"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_Nullable = $PS["Data.Nullable"];
    var Effect = $PS["Effect"];
    var parentNode = function() {
      var $3 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
      return function($4) {
        return $3($foreign["_parentNode"]($4));
      };
    }();
    var nextSibling = function() {
      var $14 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
      return function($15) {
        return $14($foreign["_nextSibling"]($15));
      };
    }();
    exports["parentNode"] = parentNode;
    exports["nextSibling"] = nextSibling;
    exports["insertBefore"] = $foreign.insertBefore;
    exports["appendChild"] = $foreign.appendChild;
    exports["removeChild"] = $foreign.removeChild;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Halogen.VDom.Driver"] = $PS["Halogen.VDom.Driver"] || {};
    var exports = $PS["Halogen.VDom.Driver"];
    var Control_Applicative = $PS["Control.Applicative"];
    var Control_Bind = $PS["Control.Bind"];
    var Control_Category = $PS["Control.Category"];
    var Data_Foldable = $PS["Data.Foldable"];
    var Data_Functor = $PS["Data.Functor"];
    var Data_HeytingAlgebra = $PS["Data.HeytingAlgebra"];
    var Data_Maybe = $PS["Data.Maybe"];
    var Data_Newtype = $PS["Data.Newtype"];
    var Data_Unit = $PS["Data.Unit"];
    var Effect = $PS["Effect"];
    var Effect_Aff = $PS["Effect.Aff"];
    var Effect_Class = $PS["Effect.Class"];
    var Effect_Ref = $PS["Effect.Ref"];
    var Halogen_Aff_Driver = $PS["Halogen.Aff.Driver"];
    var Halogen_Aff_Driver_State = $PS["Halogen.Aff.Driver.State"];
    var Halogen_Component = $PS["Halogen.Component"];
    var Halogen_VDom_DOM = $PS["Halogen.VDom.DOM"];
    var Halogen_VDom_DOM_Prop = $PS["Halogen.VDom.DOM.Prop"];
    var Halogen_VDom_Machine = $PS["Halogen.VDom.Machine"];
    var Halogen_VDom_Thunk = $PS["Halogen.VDom.Thunk"];
    var Unsafe_Reference = $PS["Unsafe.Reference"];
    var Web_DOM_Node = $PS["Web.DOM.Node"];
    var Web_HTML = $PS["Web.HTML"];
    var Web_HTML_HTMLDocument = $PS["Web.HTML.HTMLDocument"];
    var Web_HTML_HTMLElement = $PS["Web.HTML.HTMLElement"];
    var Web_HTML_Window = $PS["Web.HTML.Window"];
    var substInParent = function(v) {
      return function(v1) {
        return function(v2) {
          if (v1 instanceof Data_Maybe.Just && v2 instanceof Data_Maybe.Just) {
            return Data_Functor["void"](Effect.functorEffect)(Web_DOM_Node.insertBefore(v)(v1.value0)(v2.value0));
          }
          ;
          if (v1 instanceof Data_Maybe.Nothing && v2 instanceof Data_Maybe.Just) {
            return Data_Functor["void"](Effect.functorEffect)(Web_DOM_Node.appendChild(v)(v2.value0));
          }
          ;
          return Control_Applicative.pure(Effect.applicativeEffect)(Data_Unit.unit);
        };
      };
    };
    var removeChild = function(v) {
      return function __do() {
        var npn = Web_DOM_Node.parentNode(v.node)();
        return Data_Foldable.traverse_(Effect.applicativeEffect)(Data_Foldable.foldableMaybe)(function(pn) {
          return Web_DOM_Node.removeChild(v.node)(pn);
        })(npn)();
      };
    };
    var mkSpec = function(handler) {
      return function(renderChildRef) {
        return function(document) {
          var getNode = Halogen_Aff_Driver_State.unRenderStateX(function(v) {
            return v.node;
          });
          var done = function(st) {
            if (st instanceof Data_Maybe.Just) {
              return Halogen_VDom_Machine.halt(st.value0);
            }
            ;
            return Data_Unit.unit;
          };
          var buildWidget = function(spec) {
            var buildThunk = Halogen_VDom_Thunk.buildThunk(Data_Newtype.unwrap())(spec);
            var renderComponentSlot = function(cs) {
              var renderChild = Effect_Ref.read(renderChildRef)();
              var rsx = renderChild(cs)();
              var node = getNode(rsx);
              return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(node, Data_Maybe.Nothing.value, patch, done));
            };
            var render = function(slot) {
              if (slot instanceof Halogen_Component.ComponentSlot) {
                return renderComponentSlot(slot.value0);
              }
              ;
              if (slot instanceof Halogen_Component.ThunkSlot) {
                var step = buildThunk(slot.value0);
                return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(Halogen_VDom_Machine.extract(step), new Data_Maybe.Just(step), patch, done));
              }
              ;
              throw new Error("Failed pattern match at Halogen.VDom.Driver (line 85, column 7 - line 90, column 75): " + [slot.constructor.name]);
            };
            var patch = function(st, slot) {
              if (st instanceof Data_Maybe.Just) {
                if (slot instanceof Halogen_Component.ComponentSlot) {
                  Halogen_VDom_Machine.halt(st.value0);
                  return renderComponentSlot(slot.value0);
                }
                ;
                if (slot instanceof Halogen_Component.ThunkSlot) {
                  var step$prime = Halogen_VDom_Machine.step(st.value0, slot.value0);
                  return Halogen_VDom_Machine.mkStep(new Halogen_VDom_Machine.Step(Halogen_VDom_Machine.extract(step$prime), new Data_Maybe.Just(step$prime), patch, done));
                }
                ;
                throw new Error("Failed pattern match at Halogen.VDom.Driver (line 98, column 22 - line 104, column 79): " + [slot.constructor.name]);
              }
              ;
              return render(slot);
            };
            return render;
          };
          var buildAttributes = Halogen_VDom_DOM_Prop.buildProp(handler);
          return {
            buildWidget,
            buildAttributes,
            document
          };
        };
      };
    };
    var renderSpec = function(document) {
      return function(container) {
        var render = function(handler) {
          return function(child) {
            return function(v) {
              return function(v1) {
                if (v1 instanceof Data_Maybe.Nothing) {
                  return function __do() {
                    var renderChildRef = Effect_Ref["new"](child)();
                    var spec = mkSpec(handler)(renderChildRef)(document);
                    var machine = Halogen_VDom_DOM.buildVDom(spec)(v);
                    var node = Halogen_VDom_Machine.extract(machine);
                    Data_Functor["void"](Effect.functorEffect)(Web_DOM_Node.appendChild(node)(Web_HTML_HTMLElement.toNode(container)))();
                    return {
                      machine,
                      node,
                      renderChildRef
                    };
                  };
                }
                ;
                if (v1 instanceof Data_Maybe.Just) {
                  return function __do() {
                    Effect_Ref.write(child)(v1.value0.renderChildRef)();
                    var parent = Web_DOM_Node.parentNode(v1.value0.node)();
                    var nextSib = Web_DOM_Node.nextSibling(v1.value0.node)();
                    var machine$prime = Halogen_VDom_Machine.step(v1.value0.machine, v);
                    var newNode = Halogen_VDom_Machine.extract(machine$prime);
                    Control_Applicative.when(Effect.applicativeEffect)(Data_HeytingAlgebra.not(Data_HeytingAlgebra.heytingAlgebraFunction(Data_HeytingAlgebra.heytingAlgebraFunction(Data_HeytingAlgebra.heytingAlgebraBoolean)))(Unsafe_Reference.unsafeRefEq)(v1.value0.node)(newNode))(substInParent(newNode)(nextSib)(parent))();
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
          render,
          renderChild: Control_Category.identity(Control_Category.categoryFn),
          removeChild,
          dispose: removeChild
        };
      };
    };
    var runUI = function(component) {
      return function(i) {
        return function(element) {
          return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Data_Functor.map(Effect.functorEffect)(Web_HTML_HTMLDocument.toDocument)(Control_Bind.bindFlipped(Effect.bindEffect)(Web_HTML_Window.document)(Web_HTML.window))))(function(document) {
            return Halogen_Aff_Driver.runUI(renderSpec(document)(element))(component)(i);
          });
        };
      };
    };
    exports["runUI"] = runUI;
  })(PS);
  (function($PS) {
    "use strict";
    $PS["Main"] = $PS["Main"] || {};
    var exports = $PS["Main"];
    var App_Button = $PS["App.Button"];
    var Control_Bind = $PS["Control.Bind"];
    var Data_Unit = $PS["Data.Unit"];
    var Effect_Aff = $PS["Effect.Aff"];
    var Halogen_Aff_Util = $PS["Halogen.Aff.Util"];
    var Halogen_VDom_Driver = $PS["Halogen.VDom.Driver"];
    var main = Halogen_Aff_Util.runHalogenAff(Control_Bind.bind(Effect_Aff.bindAff)(Halogen_Aff_Util.awaitBody)(function(body) {
      return Halogen_VDom_Driver.runUI(App_Button.component)(Data_Unit.unit)(body);
    }));
    exports["main"] = main;
  })(PS);
  PS["Main"].main();
})();
