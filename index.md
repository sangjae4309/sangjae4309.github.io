---
layout: default
---

<div id="about" class="section-block">
  <h2>Hello!</h2>
  <p class="bio-lead">
    👋 I am a Ph.D. student in Electrical and Computer Engineering at the <strong>University of Minnesota Twin Cities</strong>, advised by Professor <a href="https://zhenman.github.io/index.html" target="_blank">Zhenman Fang</a>. My research lies in FPGA-based AI accelerators, High-Level Synthesis (HLS) physical co-optimization, and design space exploration.
  </p>
  <p class="bio-lead">
    Prior to starting my Ph.D. at UMN, I built a strong professional background in ASIC design, working as an SoC RTL Engineer at <a href="https://www.anapass.com/" target="_blank">Anapass Inc.</a> where I contributed to over 5 mass-production tape-out projects. This role also served as my alternative mandatory military service required of all Korean men. I received both my B.S. and M.S. degrees from <a href="https://www.skku.edu/eng/index.do" target="_blank">Sungkyunkwan University (SKKU)</a>, where I conducted research on DRAM reliability under Professor <a href="https://scalable-arch.github.io/" target="_blank">Jungrae Kim</a>.
  </p>
  <p class="bio-lead">
    In my free time, I love playing sports, particularly running, baseball, and soccer.
  </p>
</div>

<div id="education" class="section-block">
  <h2>Education</h2>
  <div class="logo-rows">
    <div class="logo-row">
      <div class="logo-col">
        <img src="{{ '/files/logo/umn.png?v=2' | relative_url }}" width="90" height="90" alt="University of Minnesota">
      </div>
      <div class="info-col">
        <p class="info-title">Ph.D. in Electrical and Computer Engineering, University of Minnesota Twin Cities</p>
        <p class="info-date">Aug 2026 – Present, Minneapolis, MN</p>
        <p class="info-desc">Advisor: Prof. <a href="https://zhenman.github.io/index.html" target="_blank">Zhenman Fang</a></p>
      </div>
    </div>

    <div class="logo-row">
      <div class="logo-col">
        <img src="{{ '/files/logo/skku.png?v=2' | relative_url }}" width="90" height="90" alt="Sungkyunkwan University">
      </div>
      <div class="info-col">
        <p class="info-title">M.S. in Electrical and Computer Engineering, Sungkyunkwan University (SKKU)</p>
        <p class="info-date">Jan 2021 – Jan 2023, Suwon, Korea</p>
        <p class="info-desc">
          Thesis: <em>On-Die Dynamic Remapping Cache: Strong and Independent Protection Against Intermittent Faults</em> (Advisor: Prof. <a href="https://scalable-arch.github.io/" target="_blank">Jungrae Kim</a>)<br>
          GPA: 4.44 / 4.5 (= 4.0 / 4.0)
        </p>
      </div>
    </div>

    <div class="logo-row">
      <div class="logo-col">
        <img src="{{ '/files/logo/skku.png?v=2' | relative_url }}" width="90" height="90" alt="Sungkyunkwan University">
      </div>
      <div class="info-col">
        <p class="info-title">B.S. in Electrical and Electronic Engineering, Sungkyunkwan University (SKKU)</p>
        <p class="info-date">Mar 2017 – Jan 2021, Suwon, Korea</p>
        <p class="info-desc">GPA: 3.75 / 4.5 (= 3.53 / 4.0), Major GPA: 4.03 / 4.5 (= 3.73 / 4.0)</p>
      </div>
    </div>
  </div>
</div>

<div id="experience" class="section-block">
  <h2>Work Experience</h2>
  <div class="logo-rows">
    <div class="logo-row">
      <div class="logo-col">
        <img src="{{ '/files/logo/anapass.png?v=2' | relative_url }}" width="90" height="90" alt="Anapass Inc.">
      </div>
      <div class="info-col">
        <p class="info-title">SoC RTL Engineer @ R&amp;D Center, Anapass Inc.</p>
        <p class="info-date">Jan 2023 – Jun 2026, Seoul, Korea</p>
        <ul class="info-bullets">
          <li>Served in this position as an alternative to the mandatory military duty required of all Korean males.</li>
          <li>Products: OLED TCON/TED ASICs developed in collaboration with Samsung Display and adopted in major consumer devices such as Steam Deck and Samsung Galaxy-A series (5+ mass-production tape-outs).</li>
          <li>Primary responsibilities centered on DFT, DSC codec, and Gate Pulse I/O, with a working understanding of both eDP and MIPI interfaces.</li>
          <li>Played a key role in resolving yield-loss issues via post-silicon debugging, working closely with manufacturing teams.</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div id="publications" class="section-block">
  <h2>Publications</h2>
  <table class="pub-table">
    <tbody>
      <tr>
        <td class="pub-thumb-cell">
          <img src="{{ '/files/pubs/sec_badaec.png?v=2' | relative_url }}" alt="SEC-BADAEC architecture" width="175">
        </td>
        <td class="pub-info-cell">
          <a href="https://doi.org/10.1109/ACCESS.2022.3201525" target="_blank">
            <span class="papertitle">SEC-BADAEC: An Efficient ECC With No Vacancy for Strong Memory Protection</span>
          </a>
          <br>
          Yuseok Song, <strong>Sangjae Park</strong>, Michael B. Sullivan, <a href="https://scalable-arch.github.io/" target="_blank">Jungrae Kim</a>
          <br>
          <em>IEEE Access</em>, Vol. 10, 2022
          <p>
            We propose SEC-BADAEC, a zero-vacancy on-die Error Correction Code (ECC) that corrects both single-bit errors and byte-aligned double-adjacent errors (BADAEs) without additional redundancy.
            <a href="https://doi.org/10.1109/ACCESS.2022.3201525" target="_blank">[paper]</a>
            <a href="{{ '/pubs/SEC-BADAEC_An_Efficient_ECC_With_No_Vacancy_for_Strong_Memory_Protection.pdf' | relative_url }}" target="_blank">[pdf]</a>
          </p>
        </td>
      </tr>

      <tr>
        <td class="pub-thumb-cell">
          <img src="{{ '/files/pubs/oddrc.png?v=2' | relative_url }}" alt="On-Die Dynamic Remapping Cache overview" width="175">
        </td>
        <td class="pub-info-cell">
          <a href="https://doi.org/10.1109/ACCESS.2022.3192879" target="_blank">
            <span class="papertitle">On-Die Dynamic Remapping Cache: Strong and Independent Protection Against Intermittent Faults</span>
          </a>
          <br>
          <strong>Sangjae Park</strong>, <a href="https://scalable-arch.github.io/" target="_blank">Jungrae Kim</a>
          <br>
          <em>IEEE Access</em>, Vol. 10, 2022
          <p>
            We propose On-Die Dynamic Remapping Cache (OD-DRC), an autonomous in-DRAM remapping cache architecture that tracks and repairs intermittent and multi-bit faults to improve device-level reliability.
            <a href="https://doi.org/10.1109/ACCESS.2022.3192879" target="_blank">[paper]</a>
            <a href="{{ '/pubs/On-Die_Dynamic_Remapping_Cache_Strong_and_Independent_Protection_Against_Intermittent_Faults.pdf' | relative_url }}" target="_blank">[pdf]</a>
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</div>
