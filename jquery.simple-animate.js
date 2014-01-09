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

    /**
     * Fade out the element and replace it with replacementHtml.
     *
     *
     * @param string replacementHtml
     * @param int speed milliseconds
     * @param function callback
     *
     * @returns html content
     */
    $.fn.animateReplace = function (replacementHtml, speed, callback) {

        var $element=$(this);
        speed = typeof speed !== 'undefined' ? speed : 400;

        //init the replacement
        var $replacement=$("<div></div>").append(replacementHtml);
        $replacement.css({ opacity: 0 });

        //hide the current element
        $element.animate({ opacity: 0 }, speed, function() {

            //get the dimensions of the original
            var originalDimensions= {width: $element.width()+'px', height: $element.height()+'px'};

            //replace the element and get new new dimension
            $element.replaceWith($replacement);
            var targetDimensions =  {width: $replacement.width()+'px', height: $replacement.height()+'px', opacity: 1};

            //quick! add the form dimensions before anyone notices anything
            $replacement.css(originalDimensions);

            //animate to the proper dimensions
            $replacement.animate(targetDimensions, speed, function() {
                $replacement.replaceWith(function(){
                    return $('> *', this);
                });
                if ( $.isFunction(callback) ) callback();
            });
        });

        return $replacement;
    }
})(jQuery);