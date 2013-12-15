/*!
 * jQuery Simple Animate Plugin
 * version: 1.0
 * Copyright (c) 2013 Tobias Nyholm
 *
 * Project repository: https://github.com/HappyR/jQuery-Simple-Animate-Plugin
 * Licensed under the MIT
 */

/**
 * This is just aliases to animiate show and hide funcions
 */
(function ($) {
    $.fn.animateShow = function () {
        return this.each(function () {
            $(this).animate({ height: 'show', opacity: 'show' }, 'slow');
        });
    };

    $.fn.animateHide = function () {
        return this.each(function () {
            $(this).animate({ height: 'hide', opacity: 'hide' }, 'slow');
        });
    };

    $.fn.animateToggle = function () {
        return this.each(function () {
            if ($(this).is(":visible"))
                $(this).animateHide();
            else
                $(this).animateShow();
        });
    };

    $.fn.animateRemove = function () {
        return this.each(function () {
            $(this).animate({ height: 'hide', opacity: 'hide' }, 'slow', 'linear', function () {
                $(this).remove();
            });
        });
    };
})(jQuery);
