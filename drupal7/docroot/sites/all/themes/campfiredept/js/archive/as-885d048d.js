var viewModel={delayComplete:ko.observable(!1),infoBarExpanded:ko.observable(!1),navExpanded:ko.observable(!1),navItems:ko.observableArray(),footerNavItems:ko.observableArray(),overlayActive:ko.observable(!1),showInfoBar:function(){this.infoBarExpanded(!0)},hideInfoBar:function(){this.infoBarExpanded(!1)},toggleNav:function(){this.navExpanded()?(this.navExpanded(!1),this.overlayActive(!1),this.navItems.removeAll()):(this.navExpanded(!0),this.overlayActive(!0))},toggleNavItem:function(e){this.navItems.indexOf(e)>-1?this.navItems.remove(e):this.navItems.push(e)},isItemExpanded:function(e){return this.navItems.indexOf(e)>-1},toggleFooterNavItem:function(e){this.footerNavItems.indexOf(e)>-1?this.footerNavItems.remove(e):this.footerNavItems.push(e)},isFooterItemExpanded:function(e){return this.footerNavItems.indexOf(e)>-1}};ko.applyBindings(viewModel),setTimeout(function(){viewModel.delayComplete(!0)},1e3);