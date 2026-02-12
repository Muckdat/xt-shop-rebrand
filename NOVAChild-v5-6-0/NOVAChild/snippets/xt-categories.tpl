{* XT-TRADE Categories – 3 Kategorie-Karten mit Hover-Popups *}
<section class="tw-py-24 tw-bg-white tw-relative tw-overflow-hidden">
    <div class="tw-max-w-7xl tw-mx-auto tw-px-6 tw-relative tw-z-10">

        {* Section Header *}
        <div class="tw-mb-16 tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-items-end tw-gap-6">
            <div data-xt-animate="fade-left" class="tw-max-w-2xl">
                <h2 class="tw-text-4xl md:tw-text-6xl tw-font-extrabold tw-text-slate-900 tw-mb-4">
                    IHRE ANFORDERUNGEN - UNSERE <span class="tw-text-accent">L&Ouml;SUNGEN</span>
                </h2>
                <p class="tw-text-slate-500 tw-text-lg">
                    Professionelle Ausr&uuml;stung f&uuml;r extreme Bedingungen.
                </p>
            </div>

            <a href="#beratung"
               data-xt-animate="fade-right"
               class="tw-hidden md:tw-flex tw-items-center tw-gap-2 tw-text-slate-800 tw-font-bold tw-border-b-2 tw-border-accent tw-pb-1 hover:tw-text-accent tw-transition-colors tw-cursor-pointer">
                Gemeinsam l&ouml;sen
                {* ArrowUpRight icon *}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
            </a>
        </div>

        {* Category Grid *}
        <div class="xt-category-grid tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-6">
            {* Category 1: Einwegprodukte (large – spans 2 cols, 2 rows) *}
            <div data-xt-animate data-xt-delay="0" class="xt-category-card tw-group tw-shadow-lg md:tw-col-span-2 md:tw-row-span-2 tw-aspect-[4/3] md:tw-aspect-auto">
                {* Background Image *}
                <div class="tw-absolute tw-inset-0 tw-bg-slate-200 tw-rounded-xl tw-overflow-hidden">
                    <img src="https://xt-trade.com/mediafiles/landing-assets/images/coverchem200.jpg"
                         alt="Einwegprodukte"
                         class="xt-cat-bg tw-w-full tw-h-full tw-object-cover"
                         loading="lazy">
                </div>

                {* Overlay Gradient *}
                <div class="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-slate-900/90 tw-via-slate-900/20 tw-to-transparent tw-opacity-70 group-hover:tw-opacity-85 tw-transition-opacity tw-duration-300 tw-rounded-xl"></div>

                {* Content *}
                <div class="tw-absolute tw-inset-0 tw-p-5 md:tw-p-8 tw-flex tw-flex-col tw-justify-end tw-items-start">
                    <div class="xt-cat-content tw-relative tw-z-10 tw-w-full">
                        <span class="tw-text-accent tw-font-bold tw-tracking-widest tw-uppercase tw-text-[10px] md:tw-text-xs tw-mb-1 md:tw-mb-2 tw-block">
                            Maximaler Einwegschutz
                        </span>
                        <h3 class="tw-text-3xl md:tw-text-5xl tw-font-extrabold tw-text-white tw-uppercase tw-leading-tight tw-drop-shadow-lg">
                            Einwegprodukte
                        </h3>
                    </div>
                    {* Arrow Button *}
                    <div class="xt-cat-arrow tw-absolute tw-top-4 tw-right-4 md:tw-top-6 md:tw-right-6 tw-w-10 tw-h-10 md:tw-w-12 md:tw-h-12 tw-bg-white/10 tw-backdrop-blur-md tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-white tw-shadow-lg tw-border tw-border-white/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                    </div>
                </div>

                {* Product Popup *}
                <div class="xt-category-popup tw-p-3 md:tw-p-6">
                    <div class="tw-mb-2 md:tw-mb-6 tw-text-center">
                        <h4 class="tw-text-lg md:tw-text-2xl tw-font-extrabold tw-text-white tw-uppercase tw-tracking-tight tw-mb-1">Einwegprodukte</h4>
                    </div>
                    <div class="tw-grid tw-grid-cols-3 tw-gap-2 md:tw-gap-4 tw-mb-2 md:tw-mb-6 tw-w-full tw-max-w-2xl">
                        <a href="https://www.xt-trade.com/Overalls" class="xt-popup-product tw-bg-white tw-rounded-lg tw-border-2 tw-border-gray-200 tw-transition-all tw-duration-300 tw-overflow-hidden tw-shadow-sm">
                            <div class="tw-aspect-square tw-bg-gray-100 tw-overflow-hidden">
                                <img src="https://xt-trade.com/mediafiles/landing-assets/images/cp500.jpg" alt="Overall Type 5/6 Wei&szlig;" class="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-500" loading="lazy">
                            </div>
                            <div class="tw-p-1.5 md:tw-p-3">
                                <h5 class="xt-popup-product-name tw-text-[11px] md:tw-text-sm tw-font-bold tw-text-slate-900 tw-mb-1 md:tw-mb-2 xt-line-clamp-2 tw-transition-colors">Overall Type 5/6 Wei&szlig;</h5>
                                <p class="tw-text-[11px] md:tw-text-sm tw-font-extrabold tw-text-accent">Mehr erfahren</p>
                            </div>
                        </a>
                        <a href="https://www.xt-trade.com/Handschuhe_2" class="xt-popup-product tw-bg-white tw-rounded-lg tw-border-2 tw-border-gray-200 tw-transition-all tw-duration-300 tw-overflow-hidden tw-shadow-sm">
                            <div class="tw-aspect-square tw-bg-gray-100 tw-overflow-hidden">
                                <img src="https://xt-trade.com/mediafiles/landing-assets/images/nitrilhandschuhe.jpg" alt="Nitrilhandschuhe Blau" class="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-500" loading="lazy">
                            </div>
                            <div class="tw-p-1.5 md:tw-p-3">
                                <h5 class="xt-popup-product-name tw-text-[11px] md:tw-text-sm tw-font-bold tw-text-slate-900 tw-mb-1 md:tw-mb-2 xt-line-clamp-2 tw-transition-colors">Nitrilhandschuhe Blau</h5>
                                <p class="tw-text-[11px] md:tw-text-sm tw-font-extrabold tw-text-accent">Mehr erfahren</p>
                            </div>
                        </a>
                        <a href="https://www.xt-trade.com/Overalls" class="xt-popup-product tw-bg-white tw-rounded-lg tw-border-2 tw-border-gray-200 tw-transition-all tw-duration-300 tw-overflow-hidden tw-shadow-sm">
                            <div class="tw-aspect-square tw-bg-gray-100 tw-overflow-hidden">
                                <img src="https://xt-trade.com/mediafiles/landing-assets/images/schutzanzug.jpg" alt="Chemikalienschutz XL" class="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-500" loading="lazy">
                            </div>
                            <div class="tw-p-1.5 md:tw-p-3">
                                <h5 class="xt-popup-product-name tw-text-[11px] md:tw-text-sm tw-font-bold tw-text-slate-900 tw-mb-1 md:tw-mb-2 xt-line-clamp-2 tw-transition-colors">Chemikalienschutz XL</h5>
                                <p class="tw-text-[11px] md:tw-text-sm tw-font-extrabold tw-text-accent">Mehr erfahren</p>
                            </div>
                        </a>
                    </div>
                    <a href="https://www.xt-trade.com/Arbeitsschutz-Einweg-Bekleidung" class="tw-flex tw-items-center tw-justify-center tw-gap-2 tw-px-5 tw-py-2 md:tw-px-8 md:tw-py-3 tw-bg-white tw-text-slate-900 tw-font-bold tw-text-xs md:tw-text-sm tw-rounded-lg hover:tw-bg-accent hover:tw-text-white tw-transition-colors tw-duration-300 tw-shadow-lg">
                        Alle Produkte ansehen
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </a>
                </div>
            </div>

            {* Category 2: Workwear (small) *}
            <div data-xt-animate data-xt-delay="0.2" class="xt-category-card tw-group tw-shadow-lg tw-col-span-1">
                <div class="tw-absolute tw-inset-0 tw-bg-slate-200 tw-rounded-xl tw-overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
                         alt="Workwear"
                         class="xt-cat-bg tw-w-full tw-h-full tw-object-cover"
                         loading="lazy">
                </div>
                <div class="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-slate-900/90 tw-via-slate-900/20 tw-to-transparent tw-opacity-70 group-hover:tw-opacity-85 tw-transition-opacity tw-duration-300 tw-rounded-xl"></div>
                <div class="tw-absolute tw-inset-0 tw-p-5 md:tw-p-8 tw-flex tw-flex-col tw-justify-end tw-items-start">
                    <div class="xt-cat-content tw-relative tw-z-10 tw-w-full">
                        <span class="tw-text-accent tw-font-bold tw-tracking-widest tw-uppercase tw-text-[10px] md:tw-text-xs tw-mb-1 md:tw-mb-2 tw-block">Robust &amp; Komfortabel</span>
                        <h3 class="tw-text-xl md:tw-text-2xl tw-font-extrabold tw-text-white tw-uppercase tw-leading-tight tw-drop-shadow-lg">Workwear</h3>
                    </div>
                    <div class="xt-cat-arrow tw-absolute tw-top-4 tw-right-4 md:tw-top-6 md:tw-right-6 tw-w-10 tw-h-10 md:tw-w-12 md:tw-h-12 tw-bg-white/10 tw-backdrop-blur-md tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-white tw-shadow-lg tw-border tw-border-white/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                    </div>
                </div>

                {* Product Popup *}
                <div class="xt-category-popup tw-p-3 md:tw-p-6">
                    <div class="tw-mb-2 md:tw-mb-6 tw-text-center">
                        <h4 class="tw-text-lg md:tw-text-2xl tw-font-extrabold tw-text-white tw-uppercase tw-tracking-tight tw-mb-1">Workwear</h4>
                    </div>
                    <div class="tw-grid tw-grid-cols-3 tw-gap-2 md:tw-gap-4 tw-mb-2 md:tw-mb-6 tw-w-full tw-max-w-2xl">
                        <a href="https://www.xt-trade.com/Bundhosen" class="xt-popup-product tw-bg-white tw-rounded-lg tw-border-2 tw-border-gray-200 tw-transition-all tw-duration-300 tw-overflow-hidden tw-shadow-sm">
                            <div class="tw-aspect-square tw-bg-gray-100 tw-overflow-hidden">
                                <img src="https://xt-trade.com/mediafiles/landing-assets/images/hose-stretch.jpg" alt="Arbeitshose Stretch" class="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-500" loading="lazy">
                            </div>
                            <div class="tw-p-1.5 md:tw-p-3">
                                <h5 class="xt-popup-product-name tw-text-[11px] md:tw-text-sm tw-font-bold tw-text-slate-900 tw-mb-1 md:tw-mb-2 xt-line-clamp-2 tw-transition-colors">Arbeitshose Stretch</h5>
                                <p class="tw-text-[11px] md:tw-text-sm tw-font-extrabold tw-text-accent">Mehr erfahren</p>
                            </div>
                        </a>
                        <a href="https://www.xt-trade.com/Bundjacken" class="xt-popup-product tw-bg-white tw-rounded-lg tw-border-2 tw-border-gray-200 tw-transition-all tw-duration-300 tw-overflow-hidden tw-shadow-sm">
                            <div class="tw-aspect-square tw-bg-gray-100 tw-overflow-hidden">
                                <img src="https://xt-trade.com/mediafiles/landing-assets/images/jacke-stretch.jpg" alt="Moderne Bundjacke" class="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-500" loading="lazy">
                            </div>
                            <div class="tw-p-1.5 md:tw-p-3">
                                <h5 class="xt-popup-product-name tw-text-[11px] md:tw-text-sm tw-font-bold tw-text-slate-900 tw-mb-1 md:tw-mb-2 xt-line-clamp-2 tw-transition-colors">Moderne Bundjacke</h5>
                                <p class="tw-text-[11px] md:tw-text-sm tw-font-extrabold tw-text-accent">Mehr erfahren</p>
                            </div>
                        </a>
                        <a href="https://www.xt-trade.com/warnschutz-weste-neongelbhtml" class="xt-popup-product tw-bg-white tw-rounded-lg tw-border-2 tw-border-gray-200 tw-transition-all tw-duration-300 tw-overflow-hidden tw-shadow-sm">
                            <div class="tw-aspect-square tw-bg-gray-100 tw-overflow-hidden">
                                <img src="https://xt-trade.com/mediafiles/landing-assets/images/warnschutzweste.jpg" alt="Warnschutz Weste" class="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-500" loading="lazy">
                            </div>
                            <div class="tw-p-1.5 md:tw-p-3">
                                <h5 class="xt-popup-product-name tw-text-[11px] md:tw-text-sm tw-font-bold tw-text-slate-900 tw-mb-1 md:tw-mb-2 xt-line-clamp-2 tw-transition-colors">Warnschutz Weste</h5>
                                <p class="tw-text-[11px] md:tw-text-sm tw-font-extrabold tw-text-accent">Mehr erfahren</p>
                            </div>
                        </a>
                    </div>
                    <a href="https://www.xt-trade.com/Berufsbekleidung" class="tw-flex tw-items-center tw-justify-center tw-gap-2 tw-px-5 tw-py-2 md:tw-px-8 md:tw-py-3 tw-bg-white tw-text-slate-900 tw-font-bold tw-text-xs md:tw-text-sm tw-rounded-lg hover:tw-bg-accent hover:tw-text-white tw-transition-colors tw-duration-300 tw-shadow-lg">
                        Alle Produkte ansehen
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </a>
                </div>
            </div>

            {* Category 3: PSA / Sicherheitsschuhe (small) *}
            <div data-xt-animate data-xt-delay="0.4" class="xt-category-card tw-group tw-shadow-lg tw-col-span-1">
                <div class="tw-absolute tw-inset-0 tw-bg-slate-200 tw-rounded-xl tw-overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1591955506264-3f5a6834570a?q=80&w=2070&auto=format&fit=crop"
                         alt="PSA / Sicherheitsschuhe"
                         class="xt-cat-bg tw-w-full tw-h-full tw-object-cover"
                         loading="lazy">
                </div>
                <div class="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-slate-900/90 tw-via-slate-900/20 tw-to-transparent tw-opacity-70 group-hover:tw-opacity-85 tw-transition-opacity tw-duration-300 tw-rounded-xl"></div>
                <div class="tw-absolute tw-inset-0 tw-p-5 md:tw-p-8 tw-flex tw-flex-col tw-justify-end tw-items-start">
                    <div class="xt-cat-content tw-relative tw-z-10 tw-w-full">
                        <span class="tw-text-accent tw-font-bold tw-tracking-widest tw-uppercase tw-text-[10px] md:tw-text-xs tw-mb-1 md:tw-mb-2 tw-block">Safety First</span>
                        <h3 class="tw-text-xl md:tw-text-2xl tw-font-extrabold tw-text-white tw-uppercase tw-leading-tight tw-drop-shadow-lg">PSA / Sicherheitsschuhe</h3>
                    </div>
                    <div class="xt-cat-arrow tw-absolute tw-top-4 tw-right-4 md:tw-top-6 md:tw-right-6 tw-w-10 tw-h-10 md:tw-w-12 md:tw-h-12 tw-bg-white/10 tw-backdrop-blur-md tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-white tw-shadow-lg tw-border tw-border-white/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tw-w-5 tw-h-5 md:tw-w-6 md:tw-h-6"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                    </div>
                </div>

                {* Product Popup *}
                <div class="xt-category-popup tw-p-3 md:tw-p-6">
                    <div class="tw-mb-2 md:tw-mb-6 tw-text-center">
                        <h4 class="tw-text-lg md:tw-text-2xl tw-font-extrabold tw-text-white tw-uppercase tw-tracking-tight tw-mb-1">PSA / Sicherheitsschuhe</h4>
                    </div>
                    <div class="tw-grid tw-grid-cols-3 tw-gap-2 md:tw-gap-4 tw-mb-2 md:tw-mb-6 tw-w-full tw-max-w-2xl">
                        <a href="https://www.xt-trade.com/S3" class="xt-popup-product tw-bg-white tw-rounded-lg tw-border-2 tw-border-gray-200 tw-transition-all tw-duration-300 tw-overflow-hidden tw-shadow-sm">
                            <div class="tw-aspect-square tw-bg-gray-100 tw-overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop" alt="S3 Sicherheitsschuh Pro" class="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-500" loading="lazy">
                            </div>
                            <div class="tw-p-1.5 md:tw-p-3">
                                <h5 class="xt-popup-product-name tw-text-[11px] md:tw-text-sm tw-font-bold tw-text-slate-900 tw-mb-1 md:tw-mb-2 xt-line-clamp-2 tw-transition-colors">S3 Sicherheitsschuh Pro</h5>
                                <p class="tw-text-[11px] md:tw-text-sm tw-font-extrabold tw-text-accent">Mehr erfahren</p>
                            </div>
                        </a>
                        <a href="https://www.xt-trade.com/PE-Schutzhelm-6-Punkt-Textilbaenderung-EN397" class="xt-popup-product tw-bg-white tw-rounded-lg tw-border-2 tw-border-gray-200 tw-transition-all tw-duration-300 tw-overflow-hidden tw-shadow-sm">
                            <div class="tw-aspect-square tw-bg-gray-100 tw-overflow-hidden">
                                <img src="https://xt-trade.com/mediafiles/landing-assets/images/schutzhelm.jpg" alt="Schutzhelm Modern" class="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-500" loading="lazy">
                            </div>
                            <div class="tw-p-1.5 md:tw-p-3">
                                <h5 class="xt-popup-product-name tw-text-[11px] md:tw-text-sm tw-font-bold tw-text-slate-900 tw-mb-1 md:tw-mb-2 xt-line-clamp-2 tw-transition-colors">Schutzhelm Modern</h5>
                                <p class="tw-text-[11px] md:tw-text-sm tw-font-extrabold tw-text-accent">Mehr erfahren</p>
                            </div>
                        </a>
                        <a href="https://www.xt-trade.com/Schnittschutzhandschuh-Stufe-5PU-Beschichtung-grau-eco" class="xt-popup-product tw-bg-white tw-rounded-lg tw-border-2 tw-border-gray-200 tw-transition-all tw-duration-300 tw-overflow-hidden tw-shadow-sm">
                            <div class="tw-aspect-square tw-bg-gray-100 tw-overflow-hidden">
                                <img src="https://xt-trade.com/mediafiles/landing-assets/images/handschuhe.jpg" alt="Schnittschutz Handschuhe" class="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-500" loading="lazy">
                            </div>
                            <div class="tw-p-1.5 md:tw-p-3">
                                <h5 class="xt-popup-product-name tw-text-[11px] md:tw-text-sm tw-font-bold tw-text-slate-900 tw-mb-1 md:tw-mb-2 xt-line-clamp-2 tw-transition-colors">Schnittschutz Handschuhe</h5>
                                <p class="tw-text-[11px] md:tw-text-sm tw-font-extrabold tw-text-accent">Mehr erfahren</p>
                            </div>
                        </a>
                    </div>
                    <a href="https://www.xt-trade.com/Sicherheitsschuhe" class="tw-flex tw-items-center tw-justify-center tw-gap-2 tw-px-5 tw-py-2 md:tw-px-8 md:tw-py-3 tw-bg-white tw-text-slate-900 tw-font-bold tw-text-xs md:tw-text-sm tw-rounded-lg hover:tw-bg-accent hover:tw-text-white tw-transition-colors tw-duration-300 tw-shadow-lg">
                        Alle Produkte ansehen
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
