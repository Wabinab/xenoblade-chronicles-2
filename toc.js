// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="00_preface.html">Preface</a></li><li class="chapter-item expanded affix "><li class="part-title">Chapter 1: Encounters</li><li class="chapter-item expanded "><a href="01_the_boy.html"><strong aria-hidden="true">1.</strong> The Boy</a></li><li class="chapter-item expanded "><a href="02_the_quest.html"><strong aria-hidden="true">2.</strong> The Quest</a></li><li class="chapter-item expanded affix "><li class="part-title">Chapter 2: Aptitude</li><li class="chapter-item expanded "><a href="03_washed_up.html"><strong aria-hidden="true">3.</strong> Washed Up</a></li><li class="chapter-item expanded "><a href="04_gormott.html"><strong aria-hidden="true">4.</strong> Gormott, Resonance, and Captured</a></li><li class="chapter-item expanded "><a href="05_poppi.html"><strong aria-hidden="true">5.</strong> Tora, Mòrag, and Poppi</a></li><li class="chapter-item expanded "><a href="06_saving_nia_dromarch.html"><strong aria-hidden="true">6.</strong> Prison Break, Pyra&#39;s Flames</a></li><li class="chapter-item expanded affix "><li class="part-title">Chapter 3: Our Own War</li><li class="chapter-item expanded "><a href="07_a_ship.html"><strong aria-hidden="true">7.</strong> We need a ship</a></li><li class="chapter-item expanded "><a href="08_uraya.html"><strong aria-hidden="true">8.</strong> Vandham of Uraya</a></li><li class="chapter-item expanded "><a href="09_journey_to_capital.html"><strong aria-hidden="true">9.</strong> Bringer of Chaos, Fonsa Myma</a></li><li class="chapter-item expanded "><a href="10_the_death_of_vandham.html"><strong aria-hidden="true">10.</strong> Vandham&#39;s final lesson</a></li><li class="chapter-item expanded affix "><li class="part-title">Chapter 4: Aegis</li><li class="chapter-item expanded "><a href="11_after_the_fight.html"><strong aria-hidden="true">11.</strong> Brief History of Alrest, Minoth</a></li><li class="chapter-item expanded "><a href="12_to_mor_ardain.html"><strong aria-hidden="true">12.</strong> Off to Mor Ardain, Roc&#39;s Core Crystal Stolen</a></li><li class="chapter-item expanded "><a href="13_mor_ardain.html"><strong aria-hidden="true">13.</strong> Dadapon&#39;s Whereabouts, Travel with Mòrag</a></li><li class="chapter-item expanded "><a href="14_factory.html"><strong aria-hidden="true">14.</strong> One-Eyed Monster, Confrontation at the Factory</a></li><li class="chapter-item expanded affix "><li class="part-title">Chapter 5: Masters and Slaves</li><li class="chapter-item expanded "><a href="15_history.html"><strong aria-hidden="true">15.</strong> Addam and Lora, Jin To Temperantia</a></li><li class="chapter-item expanded "><a href="16_bringing_pyra_home.html"><strong aria-hidden="true">16.</strong> Bringing Pyra Home, To See His Parents (Leftherian Archipelago)</a></li><li class="chapter-item expanded "><a href="17_to_indol.html"><strong aria-hidden="true">17.</strong> The Return of the One-Eyed Monster, Meeting the Praetor</a></li><li class="chapter-item expanded "><a href="18_to_temperantia.html"><strong aria-hidden="true">18.</strong> Off to Temperantia, Encounter with Jin</a></li><li class="chapter-item expanded affix "><li class="part-title">Chapter 6: Wounds</li><li class="chapter-item expanded "><a href="19_histories.html"><strong aria-hidden="true">19.</strong> Jin and Lora, Rulers&#39; Congress, Fan&#39;s Funeral, Aegis&#39;s Servant</a></li><li class="chapter-item expanded "><a href="20_bana.html"><strong aria-hidden="true">20.</strong> Ancestors of Tantal, Bana&#39;s Plot, Emperor Niall&#39;s Selflessness</a></li><li class="chapter-item expanded "><a href="21_tantal.html"><strong aria-hidden="true">21.</strong> Tantal</a></li><li class="chapter-item expanded "><a href="22_escaping.html"><strong aria-hidden="true">22.</strong> Escaping</a></li><li class="chapter-item expanded "><a href="23_omega_fetter.html"><strong aria-hidden="true">23.</strong> Pyraaaa... PYYYRAAAAAAA!!!</a></li><li class="chapter-item expanded affix "><li class="part-title">Chapter 7: The Fear She Carries</li><li class="chapter-item expanded "><a href="24_third_aegis_sword.html"><strong aria-hidden="true">24.</strong> Where is Hope?</a></li><li class="chapter-item expanded "><a href="25_spirit_crucible.html"><strong aria-hidden="true">25.</strong> Spirit Crucible Elpys, &quot;I love you too, Nia!&quot;</a></li><li class="chapter-item expanded "><a href="26_rescue_pyra.html"><strong aria-hidden="true">26.</strong> Stand With Me One More Time!</a></li><li class="chapter-item expanded affix "><li class="part-title">Chapter 8: World Tree</li><li class="chapter-item expanded "><a href="27_a_promise.html"><strong aria-hidden="true">27.</strong> Together with Rex, Jin&#39;s Sadness, A Promise</a></li><li class="chapter-item expanded "><a href="28_torna.html"><strong aria-hidden="true">28.</strong> The Hubris of Mankind, Unborn Blades, Jin&#39;s Story</a></li><li class="chapter-item expanded "><a href="29_amalthus.html"><strong aria-hidden="true">29.</strong> Titan Death Throes, Ascending the World Tree, Amalthus</a></li><li class="chapter-item expanded affix "><li class="part-title">Chapter 9: Rain</li><li class="chapter-item expanded "><a href="30_amalthus.html"><strong aria-hidden="true">30.</strong> Amalthus&#39;s Desperation</a></li><li class="chapter-item expanded "><a href="31_the_journey.html"><strong aria-hidden="true">31.</strong> That Day, When a Desolate Man Trusted a Con Artist</a></li><li class="chapter-item expanded affix "><li class="part-title">Chapter 10: And Thus, Boy Met Girl</li><li class="chapter-item expanded "><a href="32_elysium.html"><strong aria-hidden="true">32.</strong> This is... Elysium???</a></li><li class="chapter-item expanded "><a href="33_please_father.html"><strong aria-hidden="true">33.</strong> &quot;Please, Father?&quot;</a></li><li class="chapter-item expanded "><a href="34_architect.html"><strong aria-hidden="true">34.</strong> The Architect</a></li><li class="chapter-item expanded "><a href="35_confronting_malos.html"><strong aria-hidden="true">35.</strong> Defeating Malos, &quot;I&#39;m Sorry, Rex!&quot;</a></li><li class="chapter-item expanded "><a href="36_finale.html"><strong aria-hidden="true">36.</strong> Finale</a></li><li class="chapter-item expanded affix "><li class="part-title">Torna: The Golden Country</li><li class="chapter-item expanded "><a href="37_preface_torna.html"><strong aria-hidden="true">37.</strong> Preface for Torna: The Golden Country</a></li><li class="chapter-item expanded "><a href="38_lora_and_jin.html"><strong aria-hidden="true">38.</strong> Where It All Started</a></li><li class="chapter-item expanded "><a href="39_addam_mother.html"><strong aria-hidden="true">39.</strong> The Other Aegis, Where&#39;s Mother?</a></li><li class="chapter-item expanded "><a href="40_brighid.html"><strong aria-hidden="true">40.</strong> New Friends</a></li><li class="chapter-item expanded "><a href="41_bluefist.html"><strong aria-hidden="true">41.</strong> Gort the Bluefist</a></li><li class="chapter-item expanded "><a href="42_torna.html"><strong aria-hidden="true">42.</strong> Going to Torna</a></li><li class="chapter-item expanded "><a href="43_capital.html"><strong aria-hidden="true">43.</strong> Journey to the Capital</a></li><li class="chapter-item expanded "><a href="44_attacking_capital.html"><strong aria-hidden="true">44.</strong> Malos is Here</a></li><li class="chapter-item expanded "><a href="45_peace_before_storm.html"><strong aria-hidden="true">45.</strong> The Peace Before the Storm</a></li><li class="chapter-item expanded "><a href="46_battle_malos.html"><strong aria-hidden="true">46.</strong> The Battle with Malos, The Fall of Torna</a></li><li class="chapter-item expanded "><a href="47_finale.html"><strong aria-hidden="true">47.</strong> Aftermath, The End</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><a href="96_heart_to_heart.html">Heart to Heart</a></li><li class="chapter-item expanded affix "><a href="95_QT_pi.html">Poppi QT &#92;(&#92;pi&#92;)</a></li><li class="chapter-item expanded affix "><a href="97_postscript.html">Postscript</a></li><li class="chapter-item expanded affix "><a href="94_postscript_torna.html">Postscript (Torna)</a></li><li class="chapter-item expanded affix "><a href="98_references.html">References</a></li><li class="chapter-item expanded affix "><a href="99_terms.html">Terms</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
