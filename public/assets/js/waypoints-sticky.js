// Generated by CoffeeScript 1.6.2
/*
Sticky Elements Shortcut for jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function() {
  (function(t, n) {
    if (typeof define === "function" && define.amd) {
      return define(["jquery", "waypoints"], n)
    } else {
      return n(t.jQuery)
    }
  })(window, function(t) {
    var n, i;
    n = {
      wrapper: '<div class="sticky-wrapper" />',
      stuckClass: "stuck",
      direction: "down right"
    };
    i = function(t, n) {
      var i;
      t.wrap(n.wrapper);
      i = t.parent();
      return i.data("isWaypointStickyWrapper", true)
    };
    t.waypoints("extendFn", "sticky", function(r) {
      var e, a, s;
      a = t.extend({}, t.fn.waypoint.defaults, n, r);
      e = i(this, a);
      s = a.handler;
      a.handler = function(n) {
        var i, r;
        i = t(this).children(":first");
        r = a.direction.indexOf(n) !== -1;
        i.toggleClass(a.stuckClass, r);
        e.height(r ? i.outerHeight() : "");
        if (s != null) {
          return s.call(this, n)
        }
      };
      e.waypoint(a);
      return this.data("stuckClass", a.stuckClass)
    });
    return t.waypoints("extendFn", "unsticky", function() {
      var t;
      t = this.parent();
      if (!t.data("isWaypointStickyWrapper")) {
        return this
      }
      t.waypoint("destroy");
      this.unwrap();
      return this.removeClass(this.data("stuckClass"))
    })
  })
}).call(this);