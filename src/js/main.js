import './lib/lib';
import $ from './lib/lib';

$('button').on('click', function() {
    $('div').eq(2).toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index());
});

// console.log($('div').eq(2).find('.some'));
// console.log($('.some').closest('.findmfe'));
// console.log($('.more').eq(0).siblings());

// console.log($('button').html('Hello'));

// $('.findme').fadeOut(1800);
// $('button').fadeIn(1800);