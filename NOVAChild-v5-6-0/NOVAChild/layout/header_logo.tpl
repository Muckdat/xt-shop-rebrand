{block name='layout-header-logo'}
    <div class="toggler-logo-wrapper">
        {block name='layout-header-logo-navbar-toggle'}
            <button id="burger-menu" class="burger-menu-wrapper navbar-toggler collapsed {if $nSeitenTyp === $smarty.const.PAGE_BESTELLVORGANG}d-none{/if}" type="button" data-toggle="collapse" data-target="#mainNavigation" aria-controls="mainNavigation" aria-expanded="false" aria-label="{lang section='aria' key='toggleNavigation'}">
                <span class="navbar-toggler-icon"></span>
            </button>
        {/block}

        {block name='layout-header-logo-logo'}
            <div id="logo" class="logo-wrapper" itemprop="publisher" itemscope itemtype="https://schema.org/Organization">
                <span itemprop="name" class="d-none">{$meta_publisher}</span>
                <meta itemprop="url" content="{$ShopHomeURL}">
                <meta itemprop="logo" content="{$ShopLogoURL}">
                {link class="navbar-brand xt-logo-link" href=$ShopHomeURL}
                    {* Dark logo – visible in normal/scrolled state *}
                    <img src="https://www.xt-trade.com/mediafiles/landing-assets/images/XT-Logo_v2.svg"
                         alt="{$Einstellungen.global.global_shopname}"
                         class="xt-logo xt-logo-dark lazyloaded"
                         loading="eager"
                         data-skip-lazy="true">
                    {* White logo – visible in transparent header state (landing page) *}
                    <img src="https://www.xt-trade.com/mediafiles/landing-assets/images/XT-Logo_v2_white.svg"
                         alt="{$Einstellungen.global.global_shopname}"
                         class="xt-logo xt-logo-white lazyloaded"
                         loading="eager"
                         data-skip-lazy="true">
                {/link}
            </div>
        {/block}
    </div>
{/block}
