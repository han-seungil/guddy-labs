/**
 * jQuery DropdownKit v.1.0 - Easy way to build dropdown list, combobox, toggle content, tooltip or tabs menu
 * http://www.kyrielles.net/dropdownkit
 * Copyright (c) 2010-2012 Alan Frog
 * See <license.txt> or <http://www.gnu.org/licenses/>
 *  
 * Requires: jQuery v1.4.3+ <http://jquery.com/>
 *
 * ---------------------------------
 * This file is part of Dropdown Kit jQuery plugin.
 * 
 * Dropdown Kit is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *  
 * Dropdown Kit is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * ---------------------------------
 */
(function( $ ){

	DropdownKit = function( element, opts ){
		this.anchor = $( element );
		this.init( opts );
	};

	DropdownKit.prototype = {
		constructor: DropdownKit,
		
		// Initializing elements
		init: function( opts ){

			// Default this.opts
			this.defaults = {
				position:'bottom',
				alignment:0,
				ymargin:0,
				xmargin:0,
				nopos:false,
				hover:false,
				opened:false,
				closemates:true,
				bodyclick:true,
				toggle:true,
				autoclose:true,
				closebtn:false,
				group:null,
				targetrel:null,
				targetclone:null,
				wait:2000,
				infx:'fade',
				inspeed:500,
				ineasing:null,
				incallback:null,
				outfx:'none',
				outspeed:200,
				outeasing:null,
				outcallback:null
			};
			this.opts = $.extend( true, this.defaults, opts );
			
			// The trigger
			this.trigger = $( '.ddkit-trigger', this.anchor );

			if(this.trigger.size() == 0){
				return false;
			}
	
			// The target: check if a cloned target is defined
			if( this.opts.targetclone != undefined ){
				var clonetarget = $(this.opts.targetclone).hide(),
					$clone = $('<div class="ddkit-target">'+clonetarget.html()+'</div>').addClass(clonetarget.attr('class'));
				
				this.anchor.remove('.ddkit-target').append( $clone );
			}
			
			// The target: check if an external target exists
			var triggerRel = this.trigger.attr( 'rel' ),	
				targetRel = triggerRel != '' ? triggerRel : this.opts.targetrel;

			if( targetRel != undefined ){
				this.target = $(targetRel);
				this.exotarget = 1;
			}
			// Else: the default target is taken
			else{
				this.target = $( '.ddkit-target', this.anchor );
			}

			// Check
			if(this.target.size() == 0){
				return false;
			}
			
			// By default the target is hidden
			this.target.hide();

			// Group
			if( this.opts.group != undefined ){
				this.anchor.addClass( this.opts.group );
				if(this.exotarget){
					this.target.addClass( this.opts.group );
				}
				this.groupClass = '.' + this.opts.group;
			}

			// Close button
			if( this.opts.closebtn ){				
				this.$closebtn = this.target.append( '<div class="ddkit-close"></div>' );
			}

			// Anchor and target sizes
			this.anchorWidth = this.anchor.outerWidth();
			this.anchorHeight = this.anchor.outerHeight();
			this.targetWidth = this.target.outerWidth();
			this.targetHeight = this.target.outerHeight();
			var triggerOri = this.trigger.attr( 'position' ),
				triggerPos = this.trigger.attr( 'alignment' );
			this.position = triggerOri != undefined ? triggerOri : this.opts.position;
			this.alignment = triggerPos != undefined ? triggerPos : this.opts.alignment;
			
			// Events handling
			this._binder();
			
			// Target alignment
			if(!this.opts.nopos){
				this.setTargetPos();
			}
			
			// Opened ?
			if(this.opts.opened || this.anchor.hasClass('ddkit-opened')){
				this.openTarget('none');
			}
		},

		// Events handling
		_binder : function() {
			var self = this;
			
			// Trigger mouse 'hover' event
			if ( this.opts.hover ) {		
				this.trigger.hover(
					function(){
						var isOpened = self.anchor.hasClass( 'ddkit-opened' );
						if( !isOpened ){
							// Close everyone
							if( self.opts.closemates ){
								self.closeAllTargets();
							}
							else{
								self.closeTarget();
							}
							self.openTarget();
						}
						else{
							return false;
						}
					},
					function(){
						return false;
					}
				)			
				// Prevents trigger default event to be fired
				.click( function( event ){
					event.preventDefault();
				});
			}
			// Trigger mouse 'click' event
			else{
				this.trigger.click( function() {	
					
					// Open if closed
					if( !self.anchor.hasClass( 'ddkit-opened' ) ){
						if( self.opts.closemates ){
							self.closeAllTargets();
						}
						self.openTarget();
					}
					// Close everyone
					else if(self.opts.toggle){
						if( self.opts.closemates ){
							self.closeAllTargets();
						}
						else{
							self.closeTarget();
						}
					}
					return false;
				});
			}
			
			if( this.opts.autoclose ){
				// Handling trigger mouse over event
				this.trigger.hover(
					function(){self.stopWating();},
					function(){self.wait();}
				);
					
				// Handling target mouse over event
				this.target.hover(
					function(){self.stopWating();},
					function(){self.wait();}
				);
			}
			
			// Closing dropdownkits on body click
			if( this.opts.bodyclick ){
				$('body').bind('click', function(){
					self.closeTarget();
				});
			}
			
			// Close button
			if( this.opts.closebtn ){
				self.$closebtn.click(function(){
					self.closeTarget();
				});
			}
			
			// Prevents the target from closing when it is clicked
			this.target.click( function( event ){
				event.stopPropagation();
			});
		},
		
		// Target alignment
		setTargetPos : function( position, alignment  ){
			var targetTop = 0,
				targetLeft = 0,
				targetTopLabel = 'top',
				targetLeftLabel = 'left',
				position = position == undefined ? this.position : position, 
				alignment = alignment == undefined ? this.alignment : alignment; 
			
			// position = 'top'
			if ( position == 'top' ) {
				targetTop = - this.targetHeight - this.opts.ymargin;
			}
			// position = 'bottom'
			else if ( position == 'bottom' ) {
				targetTop = this.anchorHeight + this.opts.ymargin;
			}
			// position = 'left'
			else if ( position == 'left' ) {
				targetLeft = - this.targetWidth - this.opts.xmargin;
			}
			// position = 'right'
			else if ( position == 'right' ) {
				targetLeft = this.anchorWidth + this.opts.xmargin;
			}
			// position = 'top' OR 'bottom'
			if ( position == 'top' || position == 'bottom' ) {
				if( alignment == 2 ){
					targetLeft =  0;
					targetLeftLabel = 'right';
				}
				else{
					targetLeft = alignment == 1 ? -( this.targetWidth - this.anchorWidth ) / 2 : 0;
				}
			}
			// position = 'left' OR 'right'
			if ( position == 'left' || position == 'right' ) {
				if( alignment == 2 ){
					targetTop =  0;
					targetTopLabel = 'bottom';
				}
				else{
					targetTop = alignment == 1 ? - ( this.targetHeight - this.anchorHeight ) / 2 : 0;
				}
			}
			
			// Applying the alignment
			this.target.css(
				targetTopLabel, targetTop + 'px'
			).css(
				targetLeftLabel, targetLeft + 'px'
			);
		},
			
		// Open a target
		openTarget : function( fx ){
			var self = this,
				running = $(':animated', this.anchor).size() > 0 ? 1 : 0,
				currfx = fx != undefined ? fx : this.opts.infx;
				
			if( !running ){
				this.anchor.addClass( 'ddkit-opened' );
				
				// fx
				if( currfx == 'fade' ){
					this.target.fadeIn(this.opts.inspeed, this.opts.ineasing, function(){if(typeof self.opts.incallback == 'function'){self.opts.incallback.call(self);}});
				}
				else if( currfx == 'slidedown' && this.position == 'bottom'){
					this.target.slideDown(this.opts.inspeed, this.opts.ineasing, function(){if(typeof self.opts.incallback == 'function'){self.opts.incallback.call(self);}});
				}
				else{
					this.target.show(0, '', function(){if(typeof self.opts.incallback == 'function'){self.opts.incallback.call(self);}});
				}
			}
		},
		
		// Close a target
		closeTarget : function( fx ) {				
			var self = this,
				currfx = fx != undefined ? fx : this.opts.outfx;
			
			if( this.anchor.hasClass( 'ddkit-opened' )){
				this.anchor.removeClass( 'ddkit-opened' );
				
				// fx
				if( currfx == 'fade' ){
					this.target.fadeOut(this.opts.outspeed, this.opts.outeasing, function(){if(typeof self.opts.outcallback == 'function'){self.opts.outcallback.call(self);}});
				}
				else if( currfx == 'slideup' && this.position == 'bottom'){
					this.target.slideUp(this.opts.outspeed, this.opts.outeasing, function(){if(typeof self.opts.outcallback == 'function'){self.opts.outcallback.call(self);}});
				}
				else{
					this.target.hide(0, '', function(){if(typeof self.opts.outcallback == 'function'){self.opts.outcallback.call(self);}});
				}	
			}
		},
		
		// Close all targets
		closeAllTargets : function() {
			var self = this,
				currtarget = '';
			
			if( this.opts.group != undefined ){
				currtarget = !this.exotarget ? $( this.groupClass + ' .ddkit-target' ) : $( this.groupClass + '.ddkit-target' );
				$( this.groupClass + '.ddkit-opened' ).removeClass( 'ddkit-opened' );
			}
			else{
				currtarget = $( '.ddkit-target' );
				$( '.ddkit-opened' ).removeClass( 'ddkit-opened' );
			}
			
			if( this.opts.outfx == 'fade' ) {
				currtarget.fadeOut(this.opts.outspeed, this.opts.outeasing, function(){if(typeof self.opts.outcallback == 'function'){self.opts.outcallback.call(self);}});
			}
			else if( this.opts.outfx == 'slideup' && this.position == 'bottom'){
				currtarget.slideUp(this.opts.outspeed, this.opts.outeasing, function(){if(typeof self.opts.outcallback == 'function'){self.opts.outcallback.call(self);}});
			}
			else{
				currtarget.hide(0, '', function(){if(typeof self.opts.outcallback == 'function'){self.opts.outcallback.call(self);}});
			}		
		},
		
		// Timer start
		wait : function(){
			var self = this;
			
			self.targetTimer = setTimeout(function(){
				self.closeTarget();
			}, self.opts.wait);
		},
		
		// Timer stop
		stopWating : function(){
			clearTimeout(this.targetTimer);
		}
	};
	
	// Adding Dropdown Kit to jQuery
	$.fn.dropdownkit = function( opts ){
		return this.each(function(){
			$( this ).data( 'dropdownkit', new DropdownKit( this, opts ) );
		});
	};

})( jQuery );