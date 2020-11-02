'use strict';

// const { default: SettingsScreen } = require("./Settings");

/* global Monogatari */
/* global monogatari */

/**
 * =============================================================================
 * This is the file where you should put all your custom JavaScript code,
 * depending on what you want to do, there are 3 different places in this file
 * where you can add code.
 *
 * 1. Outside the $_ready function: At this point, the page may not be fully
 *    loaded yet, however you can interact with Monogatari to register new
 *    actions, components, labels, characters, etc.
 *
 * 2. Inside the $_ready function: At this point, the page has been loaded, and
 *    you can now interact with the HTML elements on it.
 *
 * 3. Inside the init function: At this point, Monogatari has been initialized,
 *    the event listeners for its inner workings have been registered, assets
 *    have been preloaded (if enabled) and your game is ready to be played.
 *
 * You should always keep the $_ready function as the last thing on this file.
 * =============================================================================
 **/

const { $_ready, $_ } = Monogatari;

// 1. Outside the $_ready function:
monogatari.registerComponent(ElementNew);
// monogatari.registerComponent(Settings);


// monogatari.component('quick-menu').removeButton('Save');
// monogatari.component ('quick-menu').removeButton ('Load');
// monogatari.component ('quick-menu').removeButton ('Back');
// monogatari.component ('quick-menu').removeButton ('AutoPlay');
// monogatari.component ('quick-menu').removeButton ('Skip');

// ElementNew.addEventListener('mousedown', function (event) {
// 	console.log('clicked')
// })


function distractionFree() {
	if (monogatari.global('playing')) {
		// Check if the distraction free is currently enabled
		if (monogatari.global('distraction_free') === true) {
			// monogatari.element ().find ('[data-component="quick-menu"] [data-action="distraction-free"] [data-string]').text (monogatari.string ('Hide'));
			// monogatari.element ().find ('[data-component="quick-menu"] [data-action="distraction-free"] [data-icon]').replaceWith ('<span class="fas fa-eye" data-action="distraction-free"></span>');
			monogatari.element().find('[data-component="new-menu"]').removeClass('transparent');
			monogatari.element().find('[data-component="text-box"]').show();
			monogatari.global('distraction_free', false);
		} else {
			// monogatari.element ().find ('[data-component="quick-menu"] [data-action="distraction-free"] [data-string]').text (monogatari.string ('Show'));
			// monogatari.element ().find ('[data-component="quick-menu"] [data-action="distraction-free"] [data-icon]').replaceWith ('<span class="fas fa-eye-slash" data-action="distraction-free"></span>');
			monogatari.element().find('[data-component="new-menu"]').addClass('transparent');
			monogatari.element().find('[data-component="text-box"]').hide();
			monogatari.global('distraction_free', true);
		}
	}
}

document.addEventListener('mousedown', function (event) {
	event.stopPropagation()
	// const textbox = document.getElementsByTagName('text-box')[0]
	// const menu = document.querySelector('new-menu')
	if (monogatari.global('distraction_free') === true) {
		monogatari.distractionFree();
		// const comp = monogatari.component("new-menu")
		// console.log(comp)
		// monogatari.component('new-menu').removeButton('Hide')
	}
	else {
		// menu.style.display = "inline-block";
	}
})


$_ready(() => {
	// 2. Inside the $_ready function:
	// $_('[data-ui="quick-menu"] [data-action="back"]').remove ();

	// console.log(menu)

	monogatari.init('#monogatari').then(() => {
		// 3. Inside the init function:
		monogatari.component('quick-menu').removeButton('Back');
		monogatari.component('quick-menu').removeButton('Save');
		monogatari.component('quick-menu').removeButton('Load');
		monogatari.component('quick-menu').removeButton('Settings');
		monogatari.component('quick-menu').removeButton('Quit');
		monogatari.component('quick-menu').removeButton('Log');
		monogatari.component('quick-menu').removeButton('AutoPlay');
		monogatari.component('main-menu').removeButton('Load');
		monogatari.component('main-menu').removeButton('Help');


	});


});