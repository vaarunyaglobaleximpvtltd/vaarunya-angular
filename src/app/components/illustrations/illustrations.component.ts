import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-illustration',
  standalone: true,
  imports: [CommonModule],
  template: `
    @switch (name) {

      <!-- ===== FARMER IN FIELD ===== -->
      @case ('farmer') {
        <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" class="illus">
          <!-- BG blobs -->
          <ellipse cx="200" cy="160" rx="180" ry="140" fill="#e8f5e9" opacity="0.35" class="a-blob"/>
          <ellipse cx="310" cy="100" rx="60" ry="55" fill="#c8e6c9" opacity="0.3" class="a-blob-sm"/>
          <circle cx="70" cy="240" r="25" fill="#c8e6c9" opacity="0.25"/>
          <!-- Sun -->
          <circle cx="340" cy="55" r="28" fill="#fff9c4" class="a-float"/>
          <circle cx="340" cy="55" r="20" fill="#ffee58"/>
          <!-- Ground -->
          <path d="M0 260 Q100 240 200 255 Q300 270 400 250 L400 320 L0 320Z" fill="#a5d6a7" opacity="0.5"/>
          <path d="M0 275 Q120 260 220 270 Q320 280 400 265 L400 320 L0 320Z" fill="#81c784" opacity="0.45"/>
          <!-- Crops -->
          <g class="a-group a-d1">
            <line x1="60" y1="260" x2="60" y2="225" stroke="#66bb6a" stroke-width="2.5"/>
            <ellipse cx="60" cy="220" rx="8" ry="5" fill="#aed581"/>
            <ellipse cx="52" cy="230" rx="7" ry="4" fill="#aed581" transform="rotate(-20,52,230)"/>
            <ellipse cx="68" cy="232" rx="7" ry="4" fill="#aed581" transform="rotate(20,68,232)"/>
          </g>
          <g class="a-group a-d2">
            <line x1="110" y1="255" x2="110" y2="218" stroke="#66bb6a" stroke-width="2.5"/>
            <ellipse cx="110" cy="213" rx="8" ry="5" fill="#aed581"/>
            <ellipse cx="102" cy="224" rx="7" ry="4" fill="#aed581" transform="rotate(-15,102,224)"/>
            <ellipse cx="118" cy="225" rx="7" ry="4" fill="#aed581" transform="rotate(15,118,225)"/>
          </g>
          <g class="a-group a-d3">
            <line x1="310" y1="258" x2="310" y2="222" stroke="#66bb6a" stroke-width="2.5"/>
            <ellipse cx="310" cy="217" rx="8" ry="5" fill="#aed581"/>
            <ellipse cx="302" cy="228" rx="7" ry="4" fill="#aed581" transform="rotate(-18,302,228)"/>
          </g>
          <g class="a-group a-d4">
            <line x1="350" y1="255" x2="350" y2="220" stroke="#66bb6a" stroke-width="2.5"/>
            <ellipse cx="350" cy="215" rx="8" ry="5" fill="#aed581"/>
            <ellipse cx="358" cy="226" rx="7" ry="4" fill="#aed581" transform="rotate(15,358,226)"/>
          </g>
          <!-- Farmer character -->
          <g class="a-group a-d2">
            <!-- Shadow -->
            <ellipse cx="200" cy="290" rx="40" ry="8" fill="#000" opacity="0.06"/>
            <!-- Legs -->
            <rect x="183" y="248" width="12" height="42" rx="5" fill="#5d4037"/>
            <rect x="205" y="248" width="12" height="42" rx="5" fill="#5d4037"/>
            <!-- Feet -->
            <ellipse cx="189" cy="290" rx="10" ry="5" fill="#4e342e"/>
            <ellipse cx="211" cy="290" rx="10" ry="5" fill="#4e342e"/>
            <!-- Body (shirt) -->
            <rect x="175" y="195" width="50" height="58" rx="12" fill="#66bb6a"/>
            <!-- Arms -->
            <rect x="155" y="200" width="24" height="12" rx="6" fill="#ffcc80" transform="rotate(-15,167,206)"/>
            <rect x="221" y="200" width="24" height="12" rx="6" fill="#ffcc80" transform="rotate(15,233,206)"/>
            <!-- Basket in hand -->
            <path d="M235 195 Q250 185 265 195 L260 215 L240 215Z" fill="#d7ccc8" stroke="#bcaaa4" stroke-width="1.5"/>
            <circle cx="245" cy="205" r="4" fill="#ff7043"/>
            <circle cx="255" cy="203" r="3.5" fill="#ffca28"/>
            <circle cx="250" cy="210" r="3" fill="#ef5350"/>
            <!-- Neck -->
            <rect x="193" y="186" width="14" height="12" rx="4" fill="#ffcc80"/>
            <!-- Head -->
            <circle cx="200" cy="172" r="24" fill="#ffcc80"/>
            <!-- Hair -->
            <path d="M176 165 Q180 145 200 142 Q220 145 224 165" fill="#3e2723"/>
            <path d="M176 165 Q178 158 184 160" fill="#3e2723"/>
            <path d="M224 165 Q222 158 216 160" fill="#3e2723"/>
            <!-- Hat -->
            <ellipse cx="200" cy="152" rx="30" ry="6" fill="#d7ccc8"/>
            <path d="M185 152 Q186 132 200 130 Q214 132 215 152" fill="#bcaaa4"/>
            <!-- Face -->
            <circle cx="191" cy="172" r="2.5" fill="#5d4037"/>
            <circle cx="209" cy="172" r="2.5" fill="#5d4037"/>
            <path d="M194 181 Q200 186 206 181" stroke="#5d4037" stroke-width="1.5" fill="none" stroke-linecap="round"/>
            <!-- Cheeks -->
            <circle cx="184" cy="178" r="4" fill="#ff8a80" opacity="0.25"/>
            <circle cx="216" cy="178" r="4" fill="#ff8a80" opacity="0.25"/>
          </g>
        </svg>
      }

      <!-- ===== QUALITY INSPECTOR ===== -->
      @case ('inspector') {
        <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" class="illus">
          <!-- BG blobs -->
          <ellipse cx="200" cy="155" rx="170" ry="130" fill="#e3f2fd" opacity="0.35" class="a-blob"/>
          <circle cx="330" cy="80" r="40" fill="#bbdefb" opacity="0.25" class="a-blob-sm"/>
          <circle cx="50" cy="250" r="20" fill="#bbdefb" opacity="0.2"/>
          <!-- Lab table -->
          <rect x="80" y="220" width="240" height="12" rx="4" fill="#e0e0e0"/>
          <rect x="90" y="232" width="10" height="55" rx="3" fill="#bdbdbd"/>
          <rect x="300" y="232" width="10" height="55" rx="3" fill="#bdbdbd"/>
          <!-- Beakers on table -->
          <g class="a-group a-d1">
            <rect x="110" y="195" width="22" height="25" rx="3" fill="#e3f2fd" stroke="#90caf9" stroke-width="1.5"/>
            <rect x="112" y="200" width="18" height="14" rx="2" fill="#64b5f6" opacity="0.4"/>
            <rect x="116" y="190" width="14" height="5" rx="2" fill="#90caf9"/>
          </g>
          <g class="a-group a-d2">
            <rect x="145" y="200" width="18" height="20" rx="3" fill="#e8f5e9" stroke="#a5d6a7" stroke-width="1.5"/>
            <rect x="147" y="207" width="14" height="8" rx="2" fill="#81c784" opacity="0.4"/>
          </g>
          <!-- Clipboard -->
          <g class="a-group a-d3">
            <rect x="270" y="175" width="40" height="44" rx="4" fill="#fff" stroke="#e0e0e0" stroke-width="1.5"/>
            <rect x="280" y="172" width="20" height="8" rx="3" fill="#c8a951"/>
            <line x1="278" y1="190" x2="302" y2="190" stroke="#e0e0e0" stroke-width="1.5"/>
            <line x1="278" y1="198" x2="302" y2="198" stroke="#e0e0e0" stroke-width="1.5"/>
            <line x1="278" y1="206" x2="295" y2="206" stroke="#e0e0e0" stroke-width="1.5"/>
            <path d="M298 195 L302 199 L308 191" stroke="#4caf50" stroke-width="2" fill="none"/>
          </g>
          <!-- Inspector character -->
          <g class="a-group a-d2">
            <ellipse cx="210" cy="290" rx="35" ry="7" fill="#000" opacity="0.06"/>
            <!-- Legs -->
            <rect x="195" y="252" width="11" height="38" rx="5" fill="#455a64"/>
            <rect x="214" y="252" width="11" height="38" rx="5" fill="#455a64"/>
            <ellipse cx="200" cy="290" rx="9" ry="4.5" fill="#37474f"/>
            <ellipse cx="220" cy="290" rx="9" ry="4.5" fill="#37474f"/>
            <!-- Body (lab coat) -->
            <rect x="185" y="196" width="50" height="60" rx="12" fill="#fff" stroke="#e0e0e0" stroke-width="1"/>
            <!-- Coat pocket -->
            <rect x="190" y="225" width="16" height="10" rx="3" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
            <line x1="194" y1="228" x2="200" y2="228" stroke="#1976d2" stroke-width="1.5"/>
            <!-- Arms -->
            <path d="M185 205 L165 220 L175 225" stroke="#fff" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="168" cy="222" r="7" fill="#ffcc80"/>
            <!-- Magnifying glass in hand -->
            <circle cx="155" cy="210" r="16" fill="none" stroke="#455a64" stroke-width="3"/>
            <circle cx="155" cy="210" r="12" fill="#e3f2fd" opacity="0.5"/>
            <line x1="167" y1="222" x2="178" y2="233" stroke="#455a64" stroke-width="3" stroke-linecap="round"/>
            <!-- Right arm pointing at clipboard -->
            <path d="M235 205 L258 200 L265 195" stroke="#fff" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="262" cy="197" r="6" fill="#ffcc80"/>
            <!-- Neck -->
            <rect x="203" y="188" width="14" height="11" rx="4" fill="#ffcc80"/>
            <!-- Head -->
            <circle cx="210" cy="173" r="22" fill="#ffcc80"/>
            <!-- Hair -->
            <path d="M188 166 Q192 148 210 145 Q228 148 232 166" fill="#4e342e"/>
            <!-- Glasses -->
            <circle cx="201" cy="173" r="8" fill="none" stroke="#455a64" stroke-width="1.8"/>
            <circle cx="219" cy="173" r="8" fill="none" stroke="#455a64" stroke-width="1.8"/>
            <line x1="209" y1="173" x2="211" y2="173" stroke="#455a64" stroke-width="1.5"/>
            <line x1="227" y1="173" x2="232" y2="171" stroke="#455a64" stroke-width="1.5"/>
            <!-- Eyes behind glasses -->
            <circle cx="201" cy="173" r="2" fill="#5d4037"/>
            <circle cx="219" cy="173" r="2" fill="#5d4037"/>
            <!-- Mouth -->
            <path d="M205 183 Q210 186 215 183" stroke="#5d4037" stroke-width="1.3" fill="none" stroke-linecap="round"/>
          </g>
          <!-- Checkmark badge -->
          <g class="a-group a-d4 a-float">
            <circle cx="320" cy="140" r="18" fill="#e8f5e9" stroke="#4caf50" stroke-width="1.5"/>
            <path d="M312 140 L317 145 L328 134" stroke="#4caf50" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          </g>
        </svg>
      }

      <!-- ===== WAREHOUSE / PACKAGING ===== -->
      @case ('warehouse') {
        <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" class="illus">
          <!-- BG blobs -->
          <ellipse cx="200" cy="150" rx="175" ry="125" fill="#fff3e0" opacity="0.3" class="a-blob"/>
          <circle cx="60" cy="75" r="35" fill="#ffe0b2" opacity="0.25" class="a-blob-sm"/>
          <!-- Warehouse building -->
          <g class="a-group a-d1">
            <rect x="40" y="100" width="320" height="175" rx="6" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1.5"/>
            <!-- Roof -->
            <path d="M30 100 L200 40 L370 100" fill="#ff9800" opacity="0.15" stroke="#ff9800" stroke-width="1.5"/>
            <!-- Door -->
            <rect x="160" y="185" width="80" height="90" rx="4" fill="#ffe0b2" stroke="#ffb74d" stroke-width="1.5"/>
            <rect x="165" y="190" width="32" height="40" rx="2" fill="#fff3e0"/>
            <rect x="203" y="190" width="32" height="40" rx="2" fill="#fff3e0"/>
            <!-- Windows -->
            <rect x="65" y="130" width="35" height="30" rx="4" fill="#e3f2fd" stroke="#90caf9" stroke-width="1"/>
            <line x1="82" y1="130" x2="82" y2="160" stroke="#90caf9" stroke-width="1"/>
            <line x1="65" y1="145" x2="100" y2="145" stroke="#90caf9" stroke-width="1"/>
            <rect x="300" y="130" width="35" height="30" rx="4" fill="#e3f2fd" stroke="#90caf9" stroke-width="1"/>
            <line x1="317" y1="130" x2="317" y2="160" stroke="#90caf9" stroke-width="1"/>
            <line x1="300" y1="145" x2="335" y2="145" stroke="#90caf9" stroke-width="1"/>
          </g>
          <!-- Boxes -->
          <g class="a-group a-d2">
            <rect x="75" y="230" width="35" height="30" rx="4" fill="#ffcc80" stroke="#ffb74d" stroke-width="1.5"/>
            <line x1="75" y1="240" x2="110" y2="240" stroke="#ffb74d" stroke-width="1"/>
            <line x1="92" y1="230" x2="92" y2="260" stroke="#ffb74d" stroke-width="1"/>
          </g>
          <g class="a-group a-d3">
            <rect x="115" y="238" width="30" height="25" rx="4" fill="#ffe0b2" stroke="#ffb74d" stroke-width="1.5"/>
            <line x1="115" y1="247" x2="145" y2="247" stroke="#ffb74d" stroke-width="1"/>
            <line x1="130" y1="238" x2="130" y2="263" stroke="#ffb74d" stroke-width="1"/>
          </g>
          <g class="a-group a-d2">
            <rect x="260" y="230" width="35" height="30" rx="4" fill="#ffcc80" stroke="#ffb74d" stroke-width="1.5"/>
            <line x1="260" y1="240" x2="295" y2="240" stroke="#ffb74d" stroke-width="1"/>
            <line x1="277" y1="230" x2="277" y2="260" stroke="#ffb74d" stroke-width="1"/>
          </g>
          <g class="a-group a-d3">
            <rect x="300" y="238" width="30" height="25" rx="4" fill="#ffe0b2" stroke="#ffb74d" stroke-width="1.5"/>
            <line x1="300" y1="247" x2="330" y2="247" stroke="#ffb74d" stroke-width="1"/>
          </g>
          <!-- Worker character -->
          <g class="a-group a-d3">
            <ellipse cx="200" cy="292" rx="30" ry="6" fill="#000" opacity="0.06"/>
            <rect x="188" y="255" width="10" height="35" rx="4" fill="#455a64"/>
            <rect x="206" y="255" width="10" height="35" rx="4" fill="#455a64"/>
            <ellipse cx="193" cy="290" rx="8" ry="4" fill="#37474f"/>
            <ellipse cx="211" cy="290" rx="8" ry="4" fill="#37474f"/>
            <!-- Body (vest) -->
            <rect x="180" y="205" width="44" height="54" rx="10" fill="#ff9800"/>
            <!-- Safety vest stripes -->
            <line x1="185" y1="215" x2="220" y2="235" stroke="#ffee58" stroke-width="3" opacity="0.6"/>
            <line x1="185" y1="225" x2="220" y2="245" stroke="#ffee58" stroke-width="3" opacity="0.6"/>
            <!-- Arms holding box -->
            <path d="M180 215 L162 230" stroke="#ffcc80" stroke-width="10" stroke-linecap="round"/>
            <path d="M224 215 L242 230" stroke="#ffcc80" stroke-width="10" stroke-linecap="round"/>
            <!-- Box being carried -->
            <rect x="152" y="225" width="100" height="28" rx="5" fill="#ffcc80" stroke="#ffb74d" stroke-width="1.5"/>
            <line x1="202" y1="225" x2="202" y2="253" stroke="#ffb74d" stroke-width="1"/>
            <line x1="152" y1="237" x2="252" y2="237" stroke="#ffb74d" stroke-width="1"/>
            <text x="178" y="248" fill="#e65100" font-size="8" font-weight="700">EXPORT</text>
            <!-- Hands -->
            <circle cx="160" cy="232" r="6" fill="#ffcc80"/>
            <circle cx="244" cy="232" r="6" fill="#ffcc80"/>
            <!-- Neck -->
            <rect x="196" y="197" width="12" height="10" rx="4" fill="#ffcc80"/>
            <!-- Head -->
            <circle cx="202" cy="183" r="20" fill="#ffcc80"/>
            <!-- Hard hat -->
            <ellipse cx="202" cy="167" rx="22" ry="6" fill="#ffb300"/>
            <path d="M182 167 Q183 152 202 150 Q221 152 222 167" fill="#ffc107"/>
            <!-- Face -->
            <circle cx="194" cy="183" r="2.2" fill="#5d4037"/>
            <circle cx="210" cy="183" r="2.2" fill="#5d4037"/>
            <path d="M197 191 Q202 195 207 191" stroke="#5d4037" stroke-width="1.3" fill="none" stroke-linecap="round"/>
            <circle cx="188" cy="188" r="3.5" fill="#ff8a80" opacity="0.2"/>
            <circle cx="216" cy="188" r="3.5" fill="#ff8a80" opacity="0.2"/>
          </g>
          <!-- Conveyor belt -->
          <rect x="40" y="275" width="320" height="6" rx="3" fill="#bdbdbd"/>
          <circle cx="60" cy="278" r="8" fill="#9e9e9e"/>
          <circle cx="60" cy="278" r="4" fill="#bdbdbd"/>
          <circle cx="340" cy="278" r="8" fill="#9e9e9e"/>
          <circle cx="340" cy="278" r="4" fill="#bdbdbd"/>
        </svg>
      }

      <!-- ===== DOCUMENTS / COMPLIANCE ===== -->
      @case ('documents') {
        <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" class="illus">
          <!-- BG blobs -->
          <ellipse cx="200" cy="160" rx="170" ry="135" fill="#fce4ec" opacity="0.2" class="a-blob"/>
          <circle cx="340" cy="70" r="35" fill="#f8bbd0" opacity="0.15" class="a-blob-sm"/>
          <circle cx="45" cy="260" r="18" fill="#f8bbd0" opacity="0.12"/>
          <!-- Desk -->
          <rect x="60" y="210" width="280" height="10" rx="3" fill="#d7ccc8"/>
          <rect x="70" y="220" width="8" height="70" rx="3" fill="#bcaaa4"/>
          <rect x="322" y="220" width="8" height="70" rx="3" fill="#bcaaa4"/>
          <!-- Document stack (left) -->
          <g class="a-group a-d1">
            <rect x="80" y="155" width="65" height="55" rx="5" fill="#fff" stroke="#e0e0e0" stroke-width="1.2" transform="rotate(-3,112,182)"/>
            <rect x="85" y="150" width="65" height="55" rx="5" fill="#fff" stroke="#e0e0e0" stroke-width="1.2"/>
            <rect x="85" y="150" width="65" height="14" rx="5" fill="#e91e63" opacity="0.1"/>
            <line x1="93" y1="157" x2="132" y2="157" stroke="#e91e63" stroke-width="1.5"/>
            <line x1="93" y1="173" x2="142" y2="173" stroke="#eeeeee" stroke-width="1.2"/>
            <line x1="93" y1="181" x2="142" y2="181" stroke="#eeeeee" stroke-width="1.2"/>
            <line x1="93" y1="189" x2="130" y2="189" stroke="#eeeeee" stroke-width="1.2"/>
            <!-- Stamp -->
            <circle cx="135" cy="193" r="10" fill="none" stroke="#e91e63" stroke-width="1.5" opacity="0.5"/>
            <text x="135" y="196" text-anchor="middle" fill="#e91e63" font-size="6" font-weight="700" opacity="0.6">CERT</text>
          </g>
          <!-- Document stack (right) -->
          <g class="a-group a-d2">
            <rect x="255" y="158" width="65" height="52" rx="5" fill="#fff" stroke="#e0e0e0" stroke-width="1.2" transform="rotate(2,287,184)"/>
            <rect x="250" y="153" width="65" height="52" rx="5" fill="#fff" stroke="#e0e0e0" stroke-width="1.2"/>
            <rect x="250" y="153" width="65" height="14" rx="5" fill="#4caf50" opacity="0.1"/>
            <line x1="258" y1="160" x2="297" y2="160" stroke="#4caf50" stroke-width="1.5"/>
            <line x1="258" y1="176" x2="307" y2="176" stroke="#eeeeee" stroke-width="1.2"/>
            <line x1="258" y1="184" x2="307" y2="184" stroke="#eeeeee" stroke-width="1.2"/>
            <line x1="258" y1="192" x2="290" y2="192" stroke="#eeeeee" stroke-width="1.2"/>
            <path d="M299 188 L303 192 L311 184" stroke="#4caf50" stroke-width="2" fill="none"/>
          </g>
          <!-- Person at desk -->
          <g class="a-group a-d2">
            <ellipse cx="200" cy="290" rx="28" ry="5" fill="#000" opacity="0.05"/>
            <!-- Chair -->
            <rect x="183" y="250" width="34" height="30" rx="6" fill="#90a4ae"/>
            <rect x="186" y="230" width="28" height="22" rx="6" fill="#b0bec5"/>
            <rect x="196" y="280" width="8" height="15" rx="3" fill="#78909c"/>
            <ellipse cx="200" cy="294" rx="18" ry="4" fill="#78909c"/>
            <!-- Body -->
            <rect x="182" y="195" width="36" height="48" rx="10" fill="#e91e63" opacity="0.85"/>
            <!-- Arms -->
            <path d="M182 208 L160 200 L152 195" stroke="#ffcc80" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M218 208 L240 200 L248 195" stroke="#ffcc80" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Hands holding pen -->
            <circle cx="150" cy="196" r="5.5" fill="#ffcc80"/>
            <circle cx="250" cy="196" r="5.5" fill="#ffcc80"/>
            <!-- Pen -->
            <rect x="245" y="180" width="3" height="18" rx="1" fill="#455a64" transform="rotate(15,246,189)"/>
            <rect x="245" y="177" width="3" height="5" rx="1" fill="#c8a951" transform="rotate(15,246,180)"/>
            <!-- Neck -->
            <rect x="194" y="187" width="12" height="10" rx="4" fill="#ffcc80"/>
            <!-- Head -->
            <circle cx="200" cy="172" r="20" fill="#ffcc80"/>
            <!-- Hair (bun style) -->
            <path d="M180 165 Q184 148 200 145 Q216 148 220 165" fill="#5d4037"/>
            <circle cx="200" cy="148" r="8" fill="#5d4037"/>
            <!-- Face -->
            <circle cx="193" cy="172" r="2" fill="#5d4037"/>
            <circle cx="207" cy="172" r="2" fill="#5d4037"/>
            <path d="M196 180 Q200 184 204 180" stroke="#5d4037" stroke-width="1.2" fill="none" stroke-linecap="round"/>
            <circle cx="186" cy="177" r="3.5" fill="#ff8a80" opacity="0.2"/>
            <circle cx="214" cy="177" r="3.5" fill="#ff8a80" opacity="0.2"/>
          </g>
          <!-- Shield badge floating -->
          <g class="a-group a-d4 a-float">
            <path d="M185 60 L200 52 L215 60 L215 78 Q200 88 185 78Z" fill="#c8a951" opacity="0.12" stroke="#c8a951" stroke-width="1.5"/>
            <path d="M194 70 L198 74 L207 64" stroke="#c8a951" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          </g>
          <!-- Coffee mug -->
          <g class="a-group a-d3">
            <rect x="170" y="194" width="14" height="16" rx="3" fill="#fff" stroke="#e0e0e0" stroke-width="1"/>
            <path d="M184 199 Q190 199 190 205 Q190 210 184 210" stroke="#e0e0e0" stroke-width="1" fill="none"/>
            <path d="M173 192 Q177 187 181 192" stroke="#bdbdbd" stroke-width="1" fill="none" opacity="0.5"/>
          </g>
        </svg>
      }

      <!-- ===== CARGO SHIP ===== -->
      @case ('shipping') {
        <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" class="illus">
          <!-- BG blobs -->
          <ellipse cx="200" cy="140" rx="180" ry="120" fill="#e3f2fd" opacity="0.3" class="a-blob"/>
          <circle cx="50" cy="60" r="30" fill="#bbdefb" opacity="0.2" class="a-blob-sm"/>
          <!-- Sky -->
          <circle cx="340" cy="50" r="22" fill="#fff9c4" class="a-float"/>
          <circle cx="340" cy="50" r="15" fill="#ffee58"/>
          <!-- Clouds -->
          <g class="a-group a-d1" opacity="0.4">
            <ellipse cx="80" cy="50" rx="30" ry="12" fill="#fff"/>
            <ellipse cx="95" cy="45" rx="20" ry="10" fill="#fff"/>
          </g>
          <g class="a-group a-d2" opacity="0.35">
            <ellipse cx="250" cy="35" rx="25" ry="10" fill="#fff"/>
            <ellipse cx="265" cy="30" rx="18" ry="8" fill="#fff"/>
          </g>
          <!-- Ocean (wavy) -->
          <path d="M0 210 Q50 195 100 210 Q150 225 200 210 Q250 195 300 210 Q350 225 400 210 L400 320 L0 320Z" fill="#90caf9" opacity="0.3"/>
          <path d="M0 225 Q60 212 120 225 Q180 238 240 225 Q300 212 360 225 Q380 232 400 225 L400 320 L0 320Z" fill="#64b5f6" opacity="0.25"/>
          <path d="M0 245 Q70 235 140 245 Q210 255 280 245 Q350 235 400 245 L400 320 L0 320Z" fill="#42a5f5" opacity="0.2" class="a-wave"/>
          <!-- Ship -->
          <g class="a-group a-d3">
            <!-- Hull -->
            <path d="M80 220 L100 260 L300 260 L320 220Z" fill="#1565c0"/>
            <path d="M85 220 L80 220 L100 260 L110 260Z" fill="#0d47a1"/>
            <!-- Deck line -->
            <line x1="90" y1="235" x2="310" y2="235" stroke="#1976d2" stroke-width="1"/>
            <!-- Cabin structure -->
            <rect x="130" y="170" width="140" height="50" rx="4" fill="#e3f2fd" stroke="#90caf9" stroke-width="1"/>
            <!-- Windows -->
            <rect x="145" y="180" width="16" height="12" rx="2" fill="#bbdefb" stroke="#90caf9" stroke-width="1"/>
            <rect x="170" y="180" width="16" height="12" rx="2" fill="#bbdefb" stroke="#90caf9" stroke-width="1"/>
            <rect x="195" y="180" width="16" height="12" rx="2" fill="#bbdefb" stroke="#90caf9" stroke-width="1"/>
            <rect x="220" y="180" width="16" height="12" rx="2" fill="#bbdefb" stroke="#90caf9" stroke-width="1"/>
            <rect x="245" y="180" width="16" height="12" rx="2" fill="#bbdefb" stroke="#90caf9" stroke-width="1"/>
            <!-- Bridge -->
            <rect x="170" y="140" width="60" height="30" rx="4" fill="#fff" stroke="#90caf9" stroke-width="1"/>
            <rect x="178" y="148" width="18" height="14" rx="2" fill="#bbdefb"/>
            <rect x="204" y="148" width="18" height="14" rx="2" fill="#bbdefb"/>
            <!-- Chimney -->
            <rect x="250" y="130" width="18" height="40" rx="3" fill="#ef5350"/>
            <rect x="248" y="130" width="22" height="6" rx="2" fill="#e53935"/>
            <!-- Smoke -->
            <circle cx="265" cy="118" r="6" fill="#e0e0e0" opacity="0.4" class="a-float"/>
            <circle cx="275" cy="108" r="8" fill="#eeeeee" opacity="0.3" class="a-float"/>
            <!-- Mast -->
            <line x1="200" y1="100" x2="200" y2="140" stroke="#455a64" stroke-width="2"/>
            <!-- Flag -->
            <rect x="200" y="100" width="25" height="16" rx="2" fill="#ff9800"/>
            <text x="212" y="112" text-anchor="middle" fill="#fff" font-size="7" font-weight="700">VV</text>
            <!-- Containers on deck -->
            <rect x="110" y="204" width="28" height="16" rx="2" fill="#4caf50"/>
            <rect x="142" y="204" width="28" height="16" rx="2" fill="#ff9800"/>
            <rect x="174" y="204" width="28" height="16" rx="2" fill="#1976d2"/>
            <rect x="206" y="204" width="28" height="16" rx="2" fill="#4caf50"/>
            <rect x="238" y="204" width="28" height="16" rx="2" fill="#ef5350"/>
            <!-- Water line -->
            <path d="M75 260 Q95 253 115 260 Q135 267 155 260 Q175 253 195 260 Q215 267 235 260 Q255 253 275 260 Q295 267 315 260 Q325 256 330 260" stroke="#fff" stroke-width="1.5" fill="none" opacity="0.4"/>
          </g>
          <!-- Seagulls -->
          <g class="a-group a-d1" opacity="0.3">
            <path d="M40 90 Q48 82 56 90" stroke="#455a64" stroke-width="1.5" fill="none"/>
            <path d="M55 100 Q60 94 65 100" stroke="#455a64" stroke-width="1.2" fill="none"/>
          </g>
        </svg>
      }

      <!-- ===== GLOBAL DELIVERY / HANDSHAKE ===== -->
      @case ('delivery') {
        <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" class="illus">
          <!-- BG blobs -->
          <ellipse cx="200" cy="155" rx="175" ry="135" fill="#f3e5f5" opacity="0.25" class="a-blob"/>
          <circle cx="330" cy="250" r="30" fill="#e1bee7" opacity="0.2" class="a-blob-sm"/>
          <circle cx="55" cy="70" r="22" fill="#e1bee7" opacity="0.15"/>
          <!-- Globe in background -->
          <g class="a-group a-d1" opacity="0.12">
            <circle cx="200" cy="150" r="100" fill="none" stroke="#7b1fa2" stroke-width="1.5"/>
            <ellipse cx="200" cy="150" rx="100" ry="40" fill="none" stroke="#7b1fa2" stroke-width="1"/>
            <ellipse cx="200" cy="150" rx="40" ry="100" fill="none" stroke="#7b1fa2" stroke-width="1"/>
            <line x1="100" y1="150" x2="300" y2="150" stroke="#7b1fa2" stroke-width="1"/>
            <line x1="200" y1="50" x2="200" y2="250" stroke="#7b1fa2" stroke-width="1"/>
          </g>
          <!-- Location pins on globe -->
          <g class="a-group a-d2">
            <g class="a-float">
              <path d="M145 120 Q145 108 155 108 Q165 108 165 120 Q155 132 145 120Z" fill="#e91e63"/>
              <circle cx="155" cy="117" r="3" fill="#fff"/>
            </g>
            <g class="a-float" style="animation-delay:0.5s">
              <path d="M240 95 Q240 83 250 83 Q260 83 260 95 Q250 107 240 95Z" fill="#4caf50"/>
              <circle cx="250" cy="92" r="3" fill="#fff"/>
            </g>
            <g class="a-float" style="animation-delay:1s">
              <path d="M270 175 Q270 163 280 163 Q290 163 290 175 Q280 187 270 175Z" fill="#ff9800"/>
              <circle cx="280" cy="172" r="3" fill="#fff"/>
            </g>
            <g class="a-float" style="animation-delay:1.5s">
              <path d="M120 170 Q120 158 130 158 Q140 158 140 170 Q130 182 120 170Z" fill="#1976d2"/>
              <circle cx="130" cy="167" r="3" fill="#fff"/>
            </g>
          </g>
          <!-- Dashed routes -->
          <g class="a-group a-d3" opacity="0.2">
            <path d="M200 130 Q170 110 155 118" stroke="#c8a951" stroke-width="1.5" stroke-dasharray="4,3" fill="none"/>
            <path d="M210 130 Q230 100 250 93" stroke="#c8a951" stroke-width="1.5" stroke-dasharray="4,3" fill="none"/>
            <path d="M215 160 Q250 170 278 172" stroke="#c8a951" stroke-width="1.5" stroke-dasharray="4,3" fill="none"/>
            <path d="M185 160 Q150 170 132 168" stroke="#c8a951" stroke-width="1.5" stroke-dasharray="4,3" fill="none"/>
          </g>
          <!-- Two people shaking hands -->
          <!-- Person 1 (left - Indian seller) -->
          <g class="a-group a-d3">
            <ellipse cx="155" cy="292" rx="25" ry="5" fill="#000" opacity="0.05"/>
            <rect x="143" y="258" width="10" height="32" rx="4" fill="#5d4037"/>
            <rect x="157" y="258" width="10" height="32" rx="4" fill="#5d4037"/>
            <ellipse cx="148" cy="290" rx="8" ry="4" fill="#4e342e"/>
            <ellipse cx="162" cy="290" rx="8" ry="4" fill="#4e342e"/>
            <!-- Body (kurta-style) -->
            <rect x="136" y="208" width="38" height="54" rx="10" fill="#c8a951"/>
            <line x1="155" y1="215" x2="155" y2="255" stroke="#a88b3a" stroke-width="1" opacity="0.3"/>
            <!-- Arm reaching out -->
            <path d="M174 220 L195 235" stroke="#ffcc80" stroke-width="9" stroke-linecap="round"/>
            <circle cx="196" cy="236" r="6" fill="#ffcc80"/>
            <!-- Left arm -->
            <path d="M136 220 L120 240" stroke="#ffcc80" stroke-width="9" stroke-linecap="round"/>
            <circle cx="118" cy="241" r="5" fill="#ffcc80"/>
            <!-- Neck -->
            <rect x="149" y="200" width="12" height="10" rx="4" fill="#ffcc80"/>
            <!-- Head -->
            <circle cx="155" cy="186" r="18" fill="#ffcc80"/>
            <path d="M137 180 Q140 165 155 162 Q170 165 173 180" fill="#3e2723"/>
            <!-- Face -->
            <circle cx="149" cy="186" r="2" fill="#5d4037"/>
            <circle cx="161" cy="186" r="2" fill="#5d4037"/>
            <path d="M151 194 Q155 197 159 194" stroke="#5d4037" stroke-width="1.2" fill="none" stroke-linecap="round"/>
          </g>
          <!-- Person 2 (right - International buyer) -->
          <g class="a-group a-d4">
            <ellipse cx="245" cy="292" rx="25" ry="5" fill="#000" opacity="0.05"/>
            <rect x="233" y="258" width="10" height="32" rx="4" fill="#37474f"/>
            <rect x="247" y="258" width="10" height="32" rx="4" fill="#37474f"/>
            <ellipse cx="238" cy="290" rx="8" ry="4" fill="#263238"/>
            <ellipse cx="252" cy="290" rx="8" ry="4" fill="#263238"/>
            <!-- Body (suit) -->
            <rect x="226" y="208" width="38" height="54" rx="10" fill="#1565c0"/>
            <!-- Tie -->
            <path d="M245 215 L242 230 L245 235 L248 230Z" fill="#e91e63"/>
            <!-- Arm reaching out -->
            <path d="M226 220 L205 235" stroke="#ffcc80" stroke-width="9" stroke-linecap="round"/>
            <circle cx="204" cy="236" r="6" fill="#ffcc80"/>
            <!-- Right arm -->
            <path d="M264 220 L280 240" stroke="#ffcc80" stroke-width="9" stroke-linecap="round"/>
            <circle cx="282" cy="241" r="5" fill="#ffcc80"/>
            <!-- Neck -->
            <rect x="239" y="200" width="12" height="10" rx="4" fill="#ffcc80"/>
            <!-- Head -->
            <circle cx="245" cy="186" r="18" fill="#ffcc80"/>
            <path d="M227 180 Q230 165 245 162 Q260 165 263 180" fill="#4e342e"/>
            <!-- Face -->
            <circle cx="239" cy="186" r="2" fill="#5d4037"/>
            <circle cx="251" cy="186" r="2" fill="#5d4037"/>
            <path d="M241 194 Q245 197 249 194" stroke="#5d4037" stroke-width="1.2" fill="none" stroke-linecap="round"/>
          </g>
          <!-- Handshake center point -->
          <g class="a-group a-d5 a-float">
            <circle cx="200" cy="236" r="14" fill="#c8a951" opacity="0.12"/>
            <circle cx="200" cy="236" r="8" fill="#c8a951" opacity="0.2"/>
          </g>
        </svg>
      }

      <!-- ===== FARM-TO-SHIP FLOW (composite) ===== -->
      @case ('farm-to-ship') {
        <svg viewBox="0 0 1000 340" fill="none" xmlns="http://www.w3.org/2000/svg" class="illus illus--wide">

          <!-- ====== STEP 1: FARM SELECTION ====== -->
          <g class="a-group a-d1">
            <!-- Background circle -->
            <circle cx="100" cy="150" r="90" fill="#e8f5e9" opacity="0.45"/>
            <circle cx="100" cy="150" r="75" fill="#c8e6c9" opacity="0.2"/>

            <!-- Sun -->
            <circle cx="148" cy="72" r="16" fill="#fff9c4"/>
            <circle cx="148" cy="72" r="11" fill="#ffee58"/>
            <!-- Sun rays -->
            <line x1="148" y1="52" x2="148" y2="46" stroke="#ffee58" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
            <line x1="163" y1="57" x2="166" y2="52" stroke="#ffee58" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
            <line x1="133" y1="57" x2="130" y2="52" stroke="#ffee58" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
            <line x1="168" y1="72" x2="174" y2="72" stroke="#ffee58" stroke-width="2" stroke-linecap="round" opacity="0.6"/>

            <!-- Ground / hills -->
            <path d="M20 210 Q60 195 100 205 Q140 215 180 200 L180 260 L20 260Z" fill="#a5d6a7" opacity="0.55"/>
            <path d="M20 225 Q70 215 110 222 Q150 230 180 218 L180 260 L20 260Z" fill="#81c784" opacity="0.4"/>

            <!-- Crop rows -->
            <g opacity="0.85">
              <line x1="40" y1="208" x2="40" y2="182" stroke="#66bb6a" stroke-width="2.5"/>
              <ellipse cx="40" cy="178" rx="7" ry="4" fill="#aed581"/>
              <ellipse cx="33" cy="188" rx="6" ry="3.5" fill="#aed581" transform="rotate(-20,33,188)"/>
              <ellipse cx="47" cy="189" rx="6" ry="3.5" fill="#aed581" transform="rotate(20,47,189)"/>

              <line x1="60" y1="205" x2="60" y2="178" stroke="#66bb6a" stroke-width="2.5"/>
              <ellipse cx="60" cy="174" rx="7" ry="4" fill="#aed581"/>
              <ellipse cx="53" cy="184" rx="6" ry="3.5" fill="#aed581" transform="rotate(-15,53,184)"/>

              <line x1="140" y1="207" x2="140" y2="180" stroke="#66bb6a" stroke-width="2.5"/>
              <ellipse cx="140" cy="176" rx="7" ry="4" fill="#aed581"/>
              <ellipse cx="147" cy="186" rx="6" ry="3.5" fill="#aed581" transform="rotate(18,147,186)"/>

              <line x1="160" y1="203" x2="160" y2="177" stroke="#66bb6a" stroke-width="2.5"/>
              <ellipse cx="160" cy="173" rx="7" ry="4" fill="#aed581"/>
              <ellipse cx="153" cy="183" rx="6" ry="3.5" fill="#aed581" transform="rotate(-12,153,183)"/>
            </g>

            <!-- Farmer Character (larger, detailed) -->
            <g>
              <!-- Shadow -->
              <ellipse cx="100" cy="240" rx="28" ry="6" fill="#000" opacity="0.06"/>
              <!-- Legs -->
              <rect x="88" y="205" width="10" height="32" rx="4" fill="#6d4c41"/>
              <rect x="102" y="205" width="10" height="32" rx="4" fill="#6d4c41"/>
              <!-- Shoes -->
              <ellipse cx="93" cy="237" rx="9" ry="4.5" fill="#4e342e"/>
              <ellipse cx="107" cy="237" rx="9" ry="4.5" fill="#4e342e"/>
              <!-- Body (green shirt) -->
              <rect x="82" y="162" width="36" height="48" rx="10" fill="#66bb6a"/>
              <!-- Collar -->
              <path d="M92 162 L100 170 L108 162" fill="#4caf50"/>
              <!-- Left arm (holding basket) -->
              <path d="M82 172 L62 192" stroke="#ffcc80" stroke-width="10" stroke-linecap="round"/>
              <circle cx="60" cy="194" r="6" fill="#ffcc80"/>
              <!-- Right arm -->
              <path d="M118 172 L135 188" stroke="#ffcc80" stroke-width="10" stroke-linecap="round"/>
              <circle cx="137" cy="190" r="6" fill="#ffcc80"/>
              <!-- Basket in left hand -->
              <path d="M42 185 Q50 175 68 175 Q74 175 76 185 L72 200 L46 200Z" fill="#d7ccc8" stroke="#bcaaa4" stroke-width="1.5"/>
              <path d="M48 185 Q58 178 68 185" fill="none" stroke="#bcaaa4" stroke-width="1"/>
              <!-- Fruits in basket -->
              <circle cx="52" cy="190" r="4" fill="#ff7043"/>
              <circle cx="60" cy="188" r="3.5" fill="#ffca28"/>
              <circle cx="66" cy="191" r="3" fill="#ef5350"/>
              <circle cx="56" cy="195" r="3" fill="#ff9800"/>
              <!-- Neck -->
              <rect x="95" y="154" width="10" height="10" rx="4" fill="#ffcc80"/>
              <!-- Head -->
              <circle cx="100" cy="140" r="20" fill="#ffcc80"/>
              <!-- Hair -->
              <path d="M80 134 Q84 118 100 115 Q116 118 120 134" fill="#3e2723"/>
              <path d="M80 134 Q82 128 86 131" fill="#3e2723"/>
              <path d="M120 134 Q118 128 114 131" fill="#3e2723"/>
              <!-- Hat brim -->
              <ellipse cx="100" cy="122" rx="24" ry="5" fill="#d7ccc8"/>
              <!-- Hat top -->
              <path d="M86 122 Q88 105 100 103 Q112 105 114 122" fill="#bcaaa4"/>
              <line x1="86" y1="122" x2="114" y2="122" stroke="#a1887f" stroke-width="1"/>
              <!-- Hat band -->
              <rect x="86" y="118" width="28" height="4" rx="1" fill="#795548" opacity="0.4"/>
              <!-- Eyes -->
              <circle cx="93" cy="140" r="2.5" fill="#5d4037"/>
              <circle cx="107" cy="140" r="2.5" fill="#5d4037"/>
              <!-- Eye highlights -->
              <circle cx="94" cy="139" r="0.8" fill="#fff"/>
              <circle cx="108" cy="139" r="0.8" fill="#fff"/>
              <!-- Smile -->
              <path d="M95 148 Q100 153 105 148" stroke="#5d4037" stroke-width="1.5" fill="none" stroke-linecap="round"/>
              <!-- Rosy cheeks -->
              <circle cx="86" cy="145" r="4" fill="#ff8a80" opacity="0.2"/>
              <circle cx="114" cy="145" r="4" fill="#ff8a80" opacity="0.2"/>
            </g>

            <!-- Label -->
            <text x="100" y="270" text-anchor="middle" fill="#3e2723" font-size="13" font-weight="700" font-family="Inter, sans-serif">Farm Selection</text>
          </g>

          <!-- ====== ARROW 1 ====== -->
          <g class="a-group a-d2" opacity="0.55">
            <line x1="195" y1="155" x2="255" y2="155" stroke="#c8a951" stroke-width="2.5" stroke-dasharray="6,4"/>
            <polygon points="255,149 270,155 255,161" fill="#c8a951"/>
          </g>

          <!-- ====== STEP 2: QUALITY CHECK ====== -->
          <g class="a-group a-d3">
            <!-- Background circle -->
            <circle cx="350" cy="150" r="90" fill="#e3f2fd" opacity="0.45"/>
            <circle cx="350" cy="150" r="75" fill="#bbdefb" opacity="0.15"/>

            <!-- Inspector Character -->
            <g>
              <ellipse cx="350" cy="240" rx="28" ry="6" fill="#000" opacity="0.06"/>
              <!-- Legs -->
              <rect x="338" y="207" width="10" height="30" rx="4" fill="#455a64"/>
              <rect x="352" y="207" width="10" height="30" rx="4" fill="#455a64"/>
              <ellipse cx="343" cy="237" rx="9" ry="4.5" fill="#37474f"/>
              <ellipse cx="357" cy="237" rx="9" ry="4.5" fill="#37474f"/>
              <!-- Body (lab coat) -->
              <rect x="330" y="162" width="40" height="50" rx="10" fill="#fff" stroke="#e0e0e0" stroke-width="1"/>
              <!-- Coat lapels -->
              <path d="M342 162 L350 172 L358 162" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="0.8"/>
              <!-- Pocket -->
              <rect x="335" y="186" width="14" height="9" rx="2" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="0.8"/>
              <!-- Pen in pocket -->
              <line x1="340" y1="186" x2="340" y2="182" stroke="#1976d2" stroke-width="1.5" stroke-linecap="round"/>
              <circle cx="340" cy="181" r="1.2" fill="#1976d2"/>
              <!-- Left arm holding magnifying glass -->
              <path d="M330 175 L308 192" stroke="#fff" stroke-width="11" stroke-linecap="round"/>
              <path d="M330 175 L308 192" stroke="#e0e0e0" stroke-width="11" stroke-linecap="round" opacity="0.15"/>
              <circle cx="305" cy="195" r="6.5" fill="#ffcc80"/>
              <!-- Magnifying glass -->
              <circle cx="293" cy="180" r="18" fill="#e3f2fd" opacity="0.5" stroke="#455a64" stroke-width="3"/>
              <circle cx="293" cy="180" r="14" fill="#e8f5e9" opacity="0.3"/>
              <line x1="307" y1="194" x2="318" y2="205" stroke="#455a64" stroke-width="3.5" stroke-linecap="round"/>
              <!-- Checkmark inside glass -->
              <path d="M286 180 L290 184 L300 174" stroke="#4caf50" stroke-width="2.5" fill="none" stroke-linecap="round"/>
              <!-- Right arm pointing at clipboard -->
              <path d="M370 175 L390 168" stroke="#fff" stroke-width="11" stroke-linecap="round"/>
              <path d="M370 175 L390 168" stroke="#e0e0e0" stroke-width="11" stroke-linecap="round" opacity="0.15"/>
              <circle cx="392" cy="167" r="6" fill="#ffcc80"/>
              <!-- Clipboard -->
              <rect x="385" y="142" width="35" height="45" rx="4" fill="#fff" stroke="#e0e0e0" stroke-width="1.5"/>
              <rect x="394" y="138" width="17" height="8" rx="3" fill="#c8a951"/>
              <line x1="391" y1="156" x2="414" y2="156" stroke="#e0e0e0" stroke-width="1.5"/>
              <line x1="391" y1="164" x2="414" y2="164" stroke="#e0e0e0" stroke-width="1.5"/>
              <line x1="391" y1="172" x2="407" y2="172" stroke="#e0e0e0" stroke-width="1.5"/>
              <!-- Green checks on clipboard -->
              <path d="M410 154 L412 156 L416 152" stroke="#4caf50" stroke-width="1.5" fill="none"/>
              <path d="M410 162 L412 164 L416 160" stroke="#4caf50" stroke-width="1.5" fill="none"/>
              <!-- Neck -->
              <rect x="345" y="155" width="10" height="9" rx="4" fill="#ffcc80"/>
              <!-- Head -->
              <circle cx="350" cy="140" r="20" fill="#ffcc80"/>
              <!-- Hair -->
              <path d="M330 134 Q334 118 350 115 Q366 118 370 134" fill="#4e342e"/>
              <!-- Glasses -->
              <circle cx="342" cy="140" r="8" fill="none" stroke="#455a64" stroke-width="1.8"/>
              <circle cx="358" cy="140" r="8" fill="none" stroke="#455a64" stroke-width="1.8"/>
              <line x1="350" y1="140" x2="350" y2="140" stroke="#455a64" stroke-width="2"/>
              <line x1="366" y1="140" x2="370" y2="138" stroke="#455a64" stroke-width="1.5"/>
              <line x1="334" y1="140" x2="330" y2="138" stroke="#455a64" stroke-width="1.5"/>
              <!-- Eyes behind glasses -->
              <circle cx="342" cy="140" r="2" fill="#5d4037"/>
              <circle cx="358" cy="140" r="2" fill="#5d4037"/>
              <circle cx="343" cy="139" r="0.7" fill="#fff"/>
              <circle cx="359" cy="139" r="0.7" fill="#fff"/>
              <!-- Smile -->
              <path d="M345 148 Q350 152 355 148" stroke="#5d4037" stroke-width="1.3" fill="none" stroke-linecap="round"/>
              <circle cx="334" cy="145" r="4" fill="#ff8a80" opacity="0.18"/>
              <circle cx="366" cy="145" r="4" fill="#ff8a80" opacity="0.18"/>
            </g>

            <!-- Floating check badge -->
            <g class="a-float">
              <circle cx="385" cy="105" r="14" fill="#e8f5e9" stroke="#4caf50" stroke-width="1.5"/>
              <path d="M379 105 L383 109 L392 100" stroke="#4caf50" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            </g>

            <text x="350" y="270" text-anchor="middle" fill="#1a237e" font-size="13" font-weight="700" font-family="Inter, sans-serif">Quality Check</text>
          </g>

          <!-- ====== ARROW 2 ====== -->
          <g class="a-group a-d3" opacity="0.55">
            <line x1="445" y1="155" x2="505" y2="155" stroke="#c8a951" stroke-width="2.5" stroke-dasharray="6,4"/>
            <polygon points="505,149 520,155 505,161" fill="#c8a951"/>
          </g>

          <!-- ====== STEP 3: PROCESSING ====== -->
          <g class="a-group a-d4">
            <!-- Background circle -->
            <circle cx="600" cy="150" r="90" fill="#fff3e0" opacity="0.45"/>
            <circle cx="600" cy="150" r="75" fill="#ffe0b2" opacity="0.15"/>

            <!-- Worker Character -->
            <g>
              <ellipse cx="600" cy="240" rx="28" ry="6" fill="#000" opacity="0.06"/>
              <!-- Legs -->
              <rect x="588" y="207" width="10" height="30" rx="4" fill="#455a64"/>
              <rect x="602" y="207" width="10" height="30" rx="4" fill="#455a64"/>
              <ellipse cx="593" cy="237" rx="9" ry="4.5" fill="#37474f"/>
              <ellipse cx="607" cy="237" rx="9" ry="4.5" fill="#37474f"/>
              <!-- Body (orange safety vest) -->
              <rect x="582" y="162" width="36" height="50" rx="10" fill="#ff9800"/>
              <!-- Hi-vis stripes -->
              <line x1="586" y1="172" x2="614" y2="192" stroke="#ffee58" stroke-width="3.5" opacity="0.55" stroke-linecap="round"/>
              <line x1="586" y1="184" x2="614" y2="204" stroke="#ffee58" stroke-width="3.5" opacity="0.55" stroke-linecap="round"/>
              <!-- Arms holding export box -->
              <path d="M582 175 L560 194" stroke="#ffcc80" stroke-width="10" stroke-linecap="round"/>
              <path d="M618 175 L640 194" stroke="#ffcc80" stroke-width="10" stroke-linecap="round"/>
              <circle cx="558" cy="196" r="6" fill="#ffcc80"/>
              <circle cx="642" cy="196" r="6" fill="#ffcc80"/>
              <!-- Export box being carried -->
              <rect x="548" y="190" width="104" height="24" rx="5" fill="#ffcc80" stroke="#ffb74d" stroke-width="1.5"/>
              <line x1="600" y1="190" x2="600" y2="214" stroke="#ffb74d" stroke-width="1"/>
              <line x1="548" y1="200" x2="652" y2="200" stroke="#ffb74d" stroke-width="1"/>
              <!-- EXPORT label -->
              <text x="576" y="210" fill="#e65100" font-size="8" font-weight="800" font-family="Inter, sans-serif">EXPORT</text>
              <text x="612" y="210" fill="#e65100" font-size="8" font-weight="800" font-family="Inter, sans-serif">READY</text>
              <!-- Neck -->
              <rect x="595" y="155" width="10" height="9" rx="4" fill="#ffcc80"/>
              <!-- Head -->
              <circle cx="600" cy="140" r="20" fill="#ffcc80"/>
              <!-- Hard hat brim -->
              <ellipse cx="600" cy="125" rx="22" ry="5.5" fill="#ffb300"/>
              <!-- Hard hat dome -->
              <path d="M580 125 Q582 108 600 105 Q618 108 620 125" fill="#ffc107"/>
              <path d="M580 125 L620 125" stroke="#f9a825" stroke-width="1"/>
              <!-- Hard hat top ridge -->
              <line x1="600" y1="105" x2="600" y2="110" stroke="#f9a825" stroke-width="2"/>
              <!-- Eyes -->
              <circle cx="593" cy="140" r="2.5" fill="#5d4037"/>
              <circle cx="607" cy="140" r="2.5" fill="#5d4037"/>
              <circle cx="594" cy="139" r="0.8" fill="#fff"/>
              <circle cx="608" cy="139" r="0.8" fill="#fff"/>
              <!-- Big smile -->
              <path d="M594 148 Q600 154 606 148" stroke="#5d4037" stroke-width="1.5" fill="none" stroke-linecap="round"/>
              <circle cx="586" cy="145" r="4" fill="#ff8a80" opacity="0.2"/>
              <circle cx="614" cy="145" r="4" fill="#ff8a80" opacity="0.2"/>
            </g>

            <!-- Small stacked boxes in background -->
            <g opacity="0.5">
              <rect x="545" y="220" width="18" height="14" rx="2" fill="#ffcc80" stroke="#ffb74d" stroke-width="1"/>
              <rect x="545" y="207" width="18" height="14" rx="2" fill="#ffe0b2" stroke="#ffb74d" stroke-width="1"/>
              <rect x="637" y="220" width="18" height="14" rx="2" fill="#ffcc80" stroke="#ffb74d" stroke-width="1"/>
            </g>

            <text x="600" y="270" text-anchor="middle" fill="#e65100" font-size="13" font-weight="700" font-family="Inter, sans-serif">Processing</text>
          </g>

          <!-- ====== ARROW 3 ====== -->
          <g class="a-group a-d5" opacity="0.55">
            <line x1="695" y1="155" x2="755" y2="155" stroke="#c8a951" stroke-width="2.5" stroke-dasharray="6,4"/>
            <polygon points="755,149 770,155 755,161" fill="#c8a951"/>
          </g>

          <!-- ====== STEP 4: SHIPPING ====== -->
          <g class="a-group a-d5">
            <!-- Background circle -->
            <circle cx="830" cy="150" r="90" fill="#e3f2fd" opacity="0.4"/>
            <circle cx="830" cy="150" r="75" fill="#bbdefb" opacity="0.12"/>

            <!-- Ocean waves -->
            <path d="M760 215 Q790 205 820 215 Q850 225 880 215 Q895 210 900 215 L900 250 L760 250Z" fill="#90caf9" opacity="0.3"/>
            <path d="M760 225 Q795 218 830 228 Q865 238 900 225 L900 250 L760 250Z" fill="#64b5f6" opacity="0.25" class="a-wave"/>

            <!-- Ship hull -->
            <path d="M785 200 L795 225 L865 225 L875 200Z" fill="#1565c0"/>
            <path d="M785 200 L795 225 L802 225 L792 200Z" fill="#0d47a1"/>
            <!-- Deck stripe -->
            <line x1="790" y1="210" x2="870" y2="210" stroke="#1976d2" stroke-width="1"/>

            <!-- Cabin structure -->
            <rect x="810" y="162" width="40" height="38" rx="4" fill="#e3f2fd" stroke="#90caf9" stroke-width="1"/>
            <!-- Windows row -->
            <rect x="816" y="170" width="10" height="8" rx="1.5" fill="#bbdefb" stroke="#90caf9" stroke-width="0.8"/>
            <rect x="830" y="170" width="10" height="8" rx="1.5" fill="#bbdefb" stroke="#90caf9" stroke-width="0.8"/>
            <!-- Bridge -->
            <rect x="820" y="140" width="20" height="22" rx="3" fill="#fff" stroke="#90caf9" stroke-width="1"/>
            <rect x="824" y="146" width="12" height="10" rx="1.5" fill="#bbdefb"/>

            <!-- Chimney -->
            <rect x="848" y="130" width="12" height="32" rx="3" fill="#ef5350"/>
            <rect x="846" y="130" width="16" height="5" rx="2" fill="#e53935"/>
            <!-- Smoke puffs -->
            <circle cx="860" cy="120" r="5" fill="#e0e0e0" opacity="0.4" class="a-float"/>
            <circle cx="868" cy="110" r="7" fill="#eeeeee" opacity="0.3" class="a-float"/>

            <!-- Mast & flag -->
            <line x1="830" y1="105" x2="830" y2="140" stroke="#455a64" stroke-width="2"/>
            <rect x="830" y="105" width="20" height="13" rx="2" fill="#ff9800"/>
            <text x="840" y="115" text-anchor="middle" fill="#fff" font-size="7" font-weight="800">VG</text>

            <!-- Containers on deck -->
            <rect x="797" y="193" width="16" height="7" rx="1.5" fill="#4caf50"/>
            <rect x="815" y="193" width="16" height="7" rx="1.5" fill="#ff9800"/>
            <rect x="833" y="193" width="16" height="7" rx="1.5" fill="#1976d2"/>
            <rect x="851" y="193" width="16" height="7" rx="1.5" fill="#e91e63"/>
            <!-- Container row 2 -->
            <rect x="806" y="185" width="16" height="7" rx="1.5" fill="#7b1fa2"/>
            <rect x="824" y="185" width="16" height="7" rx="1.5" fill="#00897b"/>
            <rect x="842" y="185" width="16" height="7" rx="1.5" fill="#ff9800"/>

            <!-- Foam/wave detail at waterline -->
            <path d="M782 225 Q800 218 818 225 Q836 232 854 225 Q872 218 880 225" stroke="#fff" stroke-width="1.8" fill="none" opacity="0.4"/>

            <!-- Seagulls -->
            <g opacity="0.35">
              <path d="M775 100 Q782 92 789 100" stroke="#455a64" stroke-width="1.5" fill="none"/>
              <path d="M790 110 Q795 104 800 110" stroke="#455a64" stroke-width="1.2" fill="none"/>
              <path d="M870 90 Q876 83 882 90" stroke="#455a64" stroke-width="1.3" fill="none"/>
            </g>

            <text x="830" y="270" text-anchor="middle" fill="#0d47a1" font-size="13" font-weight="700" font-family="Inter, sans-serif">Shipping</text>
          </g>

          <!-- ====== ARROW 4 ====== -->
          <g class="a-group a-d6" opacity="0.55">
            <line x1="905" y1="155" x2="918" y2="155" stroke="#c8a951" stroke-width="2.5" stroke-dasharray="6,4"/>
            <polygon points="918,149 930,155 918,161" fill="#c8a951"/>
          </g>

          <!-- ====== STEP 5: GLOBAL BUYERS ====== -->
          <g class="a-group a-d7">
            <!-- Background circle -->
            <circle cx="970" cy="150" r="65" fill="#f3e5f5" opacity="0.35"/>

            <!-- Globe -->
            <circle cx="970" cy="148" r="48" fill="#f3e5f5" opacity="0.2" stroke="#7b1fa2" stroke-width="1.5" stroke-opacity="0.3"/>
            <!-- Globe grid lines -->
            <ellipse cx="970" cy="148" rx="48" ry="20" fill="none" stroke="#9c27b0" stroke-width="0.8" opacity="0.15"/>
            <ellipse cx="970" cy="148" rx="20" ry="48" fill="none" stroke="#9c27b0" stroke-width="0.8" opacity="0.15"/>
            <line x1="922" y1="148" x2="1018" y2="148" stroke="#9c27b0" stroke-width="0.8" opacity="0.15"/>

            <!-- Location pins -->
            <g class="a-float">
              <path d="M948 125 Q948 114 957 114 Q966 114 966 125 Q957 136 948 125Z" fill="#e91e63"/>
              <circle cx="957" cy="122" r="3" fill="#fff"/>
            </g>
            <g class="a-float" style="animation-delay:0.5s">
              <path d="M985 110 Q985 99 994 99 Q1003 99 1003 110 Q994 121 985 110Z" fill="#4caf50"/>
              <circle cx="994" cy="107" r="3" fill="#fff"/>
            </g>
            <g class="a-float" style="animation-delay:1s">
              <path d="M978 165 Q978 154 987 154 Q996 154 996 165 Q987 176 978 165Z" fill="#1976d2"/>
              <circle cx="987" cy="162" r="3" fill="#fff"/>
            </g>
            <g class="a-float" style="animation-delay:1.5s">
              <path d="M942 155 Q942 144 951 144 Q960 144 960 155 Q951 166 942 155Z" fill="#ff9800"/>
              <circle cx="951" cy="152" r="3" fill="#fff"/>
            </g>

            <!-- Connection lines from pins -->
            <g opacity="0.15">
              <line x1="957" y1="130" x2="970" y2="148" stroke="#c8a951" stroke-width="1.5" stroke-dasharray="3,2"/>
              <line x1="994" y1="115" x2="970" y2="148" stroke="#c8a951" stroke-width="1.5" stroke-dasharray="3,2"/>
              <line x1="987" y1="170" x2="970" y2="148" stroke="#c8a951" stroke-width="1.5" stroke-dasharray="3,2"/>
              <line x1="951" y1="160" x2="970" y2="148" stroke="#c8a951" stroke-width="1.5" stroke-dasharray="3,2"/>
            </g>

            <text x="970" y="270" text-anchor="middle" fill="#4a148c" font-size="13" font-weight="700" font-family="Inter, sans-serif">Global Buyers</text>
          </g>

          <!-- ====== BOTTOM CONNECTING LINE ====== -->
          <g class="a-group a-d7" opacity="0.15">
            <line x1="100" y1="290" x2="970" y2="290" stroke="#c8a951" stroke-width="2" stroke-dasharray="6,4"/>
          </g>
        </svg>
      }

      @case ('documentation') {
        <svg viewBox="0 0 480 380" fill="none" xmlns="http://www.w3.org/2000/svg" class="illus">
          <!-- Background shapes -->
          <ellipse cx="240" cy="190" rx="210" ry="165" fill="#c8a951" opacity="0.04" class="a-blob"/>
          <circle cx="400" cy="60" r="50" fill="#c8a951" opacity="0.06" class="a-blob-sm"/>
          <circle cx="60" cy="320" r="30" fill="#c8a951" opacity="0.04"/>
          <circle cx="420" cy="300" r="20" fill="#4caf50" opacity="0.05"/>

          <!-- Office desk (large) -->
          <rect x="65" y="248" width="350" height="12" rx="4" fill="#d7ccc8"/>
          <rect x="80" y="260" width="10" height="80" rx="4" fill="#bcaaa4"/>
          <rect x="390" y="260" width="10" height="80" rx="4" fill="#bcaaa4"/>
          <rect x="100" y="336" width="280" height="6" rx="3" fill="#d7ccc8" opacity="0.5"/>

          <!-- Monitor screen -->
          <g class="a-group a-d1">
            <rect x="150" y="130" width="180" height="115" rx="10" fill="#1a1a2e"/>
            <rect x="156" y="136" width="168" height="96" rx="6" fill="#fff"/>
            <!-- Screen content - document preview -->
            <rect x="166" y="146" width="50" height="8" rx="2" fill="#c8a951" opacity="0.3"/>
            <line x1="166" y1="162" x2="260" y2="162" stroke="#e0e0e0" stroke-width="1.5"/>
            <line x1="166" y1="170" x2="250" y2="170" stroke="#e0e0e0" stroke-width="1.2"/>
            <line x1="166" y1="178" x2="240" y2="178" stroke="#e0e0e0" stroke-width="1.2"/>
            <line x1="166" y1="186" x2="255" y2="186" stroke="#e0e0e0" stroke-width="1.2"/>
            <line x1="166" y1="194" x2="230" y2="194" stroke="#e0e0e0" stroke-width="1.2"/>
            <!-- Green checkmark on screen -->
            <rect x="278" y="146" width="38" height="38" rx="6" fill="#4caf50" opacity="0.1"/>
            <path d="M288 165 L294 171 L306 158" stroke="#4caf50" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Stamp icon on screen -->
            <circle cx="297" cy="202" r="12" fill="none" stroke="#c8a951" stroke-width="1.5" opacity="0.4"/>
            <text x="297" y="206" text-anchor="middle" fill="#c8a951" font-size="7" font-weight="700" opacity="0.6">OK</text>
            <!-- Monitor stand -->
            <rect x="220" y="232" width="40" height="8" rx="3" fill="#90a4ae"/>
            <rect x="232" y="240" width="16" height="12" rx="2" fill="#b0bec5"/>
          </g>

          <!-- Left document stack (export docs) -->
          <g class="a-group a-d2">
            <rect x="72" y="190" width="72" height="58" rx="6" fill="#fff" stroke="#e0e0e0" stroke-width="1.2" transform="rotate(-4,108,219)"/>
            <rect x="76" y="185" width="72" height="58" rx="6" fill="#fff" stroke="#e0e0e0" stroke-width="1.2"/>
            <!-- Header stripe -->
            <rect x="76" y="185" width="72" height="16" rx="6" fill="#c8a951" opacity="0.12"/>
            <line x1="84" y1="193" x2="120" y2="193" stroke="#c8a951" stroke-width="1.5"/>
            <!-- Content lines -->
            <line x1="84" y1="210" x2="140" y2="210" stroke="#eee" stroke-width="1.2"/>
            <line x1="84" y1="218" x2="135" y2="218" stroke="#eee" stroke-width="1.2"/>
            <line x1="84" y1="226" x2="125" y2="226" stroke="#eee" stroke-width="1.2"/>
            <!-- APEDA stamp -->
            <g transform="rotate(-12,130,230)">
              <rect x="118" y="225" width="28" height="14" rx="3" fill="none" stroke="#c8a951" stroke-width="1.2" opacity="0.6"/>
              <text x="132" y="235" text-anchor="middle" fill="#c8a951" font-size="6" font-weight="700" opacity="0.7">APEDA</text>
            </g>
          </g>

          <!-- Right document stack (certificates) -->
          <g class="a-group a-d3">
            <rect x="340" y="193" width="72" height="55" rx="6" fill="#fff" stroke="#e0e0e0" stroke-width="1.2" transform="rotate(3,376,220)"/>
            <rect x="335" y="188" width="72" height="55" rx="6" fill="#fff" stroke="#e0e0e0" stroke-width="1.2"/>
            <rect x="335" y="188" width="72" height="16" rx="6" fill="#4caf50" opacity="0.1"/>
            <line x1="343" y1="196" x2="380" y2="196" stroke="#4caf50" stroke-width="1.5"/>
            <line x1="343" y1="213" x2="399" y2="213" stroke="#eee" stroke-width="1.2"/>
            <line x1="343" y1="221" x2="395" y2="221" stroke="#eee" stroke-width="1.2"/>
            <line x1="343" y1="229" x2="380" y2="229" stroke="#eee" stroke-width="1.2"/>
            <!-- Checkmark -->
            <path d="M393 225 L397 229 L405 221" stroke="#4caf50" stroke-width="2" fill="none" stroke-linecap="round"/>
          </g>

          <!-- Person sitting at desk -->
          <g class="a-group a-d2">
            <!-- Shadow -->
            <ellipse cx="240" cy="338" rx="35" ry="5" fill="#000" opacity="0.04"/>
            <!-- Chair -->
            <rect x="220" y="290" width="40" height="35" rx="8" fill="#78909c"/>
            <rect x="224" y="268" width="32" height="25" rx="8" fill="#90a4ae"/>
            <rect x="236" y="325" width="8" height="18" rx="3" fill="#607d8b"/>
            <ellipse cx="240" cy="342" rx="22" ry="4" fill="#607d8b"/>
            <!-- Body (professional blazer) -->
            <rect x="218" y="225" width="44" height="55" rx="12" fill="#1a1a2e"/>
            <!-- White shirt collar -->
            <path d="M230 228 L240 238 L250 228" fill="#fff" opacity="0.9"/>
            <!-- Arms -->
            <path d="M218 240 L190 235 L178 232" stroke="#ffcc80" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M262 240 L290 235 L302 232" stroke="#ffcc80" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Left hand on doc -->
            <circle cx="176" cy="233" r="6" fill="#ffcc80"/>
            <!-- Right hand with pen -->
            <circle cx="304" cy="233" r="6" fill="#ffcc80"/>
            <rect x="300" y="215" width="3" height="20" rx="1" fill="#455a64" transform="rotate(12,301,225)"/>
            <rect x="300" y="212" width="3" height="5" rx="1" fill="#c8a951" transform="rotate(12,301,215)"/>
            <!-- Neck -->
            <rect x="233" y="215" width="14" height="12" rx="5" fill="#ffcc80"/>
            <!-- Head -->
            <circle cx="240" cy="198" r="24" fill="#ffcc80"/>
            <!-- Hair (professional side part) -->
            <path d="M216 190 Q220 170 240 167 Q260 170 264 190" fill="#3e2723"/>
            <path d="M216 190 Q218 183 225 180" fill="#3e2723"/>
            <!-- Face -->
            <circle cx="232" cy="198" r="2.5" fill="#3e2723"/>
            <circle cx="248" cy="198" r="2.5" fill="#3e2723"/>
            <path d="M228 195 L236 195" stroke="#3e2723" stroke-width="1" stroke-linecap="round" opacity="0.3"/>
            <path d="M244 195 L252 195" stroke="#3e2723" stroke-width="1" stroke-linecap="round" opacity="0.3"/>
            <path d="M236 207 Q240 211 244 207" stroke="#3e2723" stroke-width="1.3" fill="none" stroke-linecap="round"/>
            <!-- Glasses -->
            <circle cx="232" cy="198" r="7" fill="none" stroke="#78909c" stroke-width="1.2"/>
            <circle cx="248" cy="198" r="7" fill="none" stroke="#78909c" stroke-width="1.2"/>
            <line x1="239" y1="198" x2="241" y2="198" stroke="#78909c" stroke-width="1"/>
            <line x1="225" y1="197" x2="220" y2="195" stroke="#78909c" stroke-width="1"/>
            <line x1="255" y1="197" x2="260" y2="195" stroke="#78909c" stroke-width="1"/>
          </g>

          <!-- Floating shield badge (top-left) -->
          <g class="a-group a-d5 a-float">
            <path d="M55 80 L72 70 L89 80 L89 102 Q72 114 55 102Z" fill="#c8a951" opacity="0.1" stroke="#c8a951" stroke-width="1.5"/>
            <path d="M66 92 L71 97 L81 86" stroke="#c8a951" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          </g>

          <!-- Floating certificate icon (top-right) -->
          <g class="a-group a-d6 a-float">
            <rect x="370" y="40" width="48" height="36" rx="6" fill="#fff" stroke="#4caf50" stroke-width="1.5" opacity="0.7"/>
            <line x1="380" y1="50" x2="408" y2="50" stroke="#4caf50" stroke-width="1.5" opacity="0.5"/>
            <line x1="380" y1="57" x2="400" y2="57" stroke="#eee" stroke-width="1.2"/>
            <line x1="380" y1="63" x2="405" y2="63" stroke="#eee" stroke-width="1.2"/>
            <!-- Ribbon -->
            <circle cx="394" cy="76" r="7" fill="#c8a951" opacity="0.2" stroke="#c8a951" stroke-width="1"/>
            <path d="M390 82 L388 92 L394 88 L400 92 L398 82" fill="#c8a951" opacity="0.3"/>
          </g>

          <!-- Floating checkmark bubble (left) -->
          <g class="a-group a-d4 a-float">
            <circle cx="45" cy="170" r="16" fill="#4caf50" opacity="0.08" stroke="#4caf50" stroke-width="1"/>
            <path d="M38 170 L43 175 L53 165" stroke="#4caf50" stroke-width="2" fill="none" stroke-linecap="round"/>
          </g>

          <!-- Floating pencil icon (right) -->
          <g class="a-group a-d7 a-float">
            <rect x="430" y="180" width="8" height="30" rx="2" fill="#c8a951" opacity="0.3" transform="rotate(-20,434,195)"/>
            <polygon points="434,210 430,218 438,218" fill="#c8a951" opacity="0.3" transform="rotate(-20,434,215)"/>
          </g>

          <!-- Small decorative dots -->
          <circle cx="110" cy="100" r="3" fill="#c8a951" opacity="0.15"/>
          <circle cx="360" cy="130" r="2" fill="#4caf50" opacity="0.15"/>
          <circle cx="80" cy="150" r="2" fill="#c8a951" opacity="0.1"/>
          <circle cx="410" cy="250" r="3" fill="#c8a951" opacity="0.1"/>
        </svg>
      }

      @case ('quality-process') {
        <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" class="illus">
          <!-- BG blobs -->
          <ellipse cx="200" cy="155" rx="170" ry="130" fill="#e3f2fd" opacity="0.35" class="a-blob"/>
          <circle cx="330" cy="80" r="40" fill="#bbdefb" opacity="0.25" class="a-blob-sm"/>
          <!-- Lab table -->
          <rect x="80" y="220" width="240" height="12" rx="4" fill="#e0e0e0"/>
          <rect x="90" y="232" width="10" height="55" rx="3" fill="#bdbdbd"/>
          <rect x="300" y="232" width="10" height="55" rx="3" fill="#bdbdbd"/>
          <!-- Beakers on table -->
          <g class="a-group a-d1">
            <rect x="110" y="195" width="22" height="25" rx="3" fill="#e3f2fd" stroke="#90caf9" stroke-width="1.5"/>
            <rect x="112" y="200" width="18" height="14" rx="2" fill="#64b5f6" opacity="0.4"/>
            <rect x="116" y="190" width="14" height="5" rx="2" fill="#90caf9"/>
          </g>
          <g class="a-group a-d2">
            <rect x="145" y="200" width="18" height="20" rx="3" fill="#e8f5e9" stroke="#a5d6a7" stroke-width="1.5"/>
            <rect x="147" y="207" width="14" height="8" rx="2" fill="#81c784" opacity="0.4"/>
          </g>
          <!-- Clipboard -->
          <g class="a-group a-d3">
            <rect x="270" y="175" width="40" height="44" rx="4" fill="#fff" stroke="#e0e0e0" stroke-width="1.5"/>
            <rect x="280" y="172" width="20" height="8" rx="3" fill="#c8a951"/>
            <line x1="278" y1="190" x2="302" y2="190" stroke="#e0e0e0" stroke-width="1.5"/>
            <line x1="278" y1="198" x2="302" y2="198" stroke="#e0e0e0" stroke-width="1.5"/>
            <path d="M298 195 L302 199 L308 191" stroke="#4caf50" stroke-width="2" fill="none"/>
          </g>
          <!-- Inspector character -->
          <g class="a-group a-d2">
            <ellipse cx="210" cy="290" rx="35" ry="7" fill="#000" opacity="0.06"/>
            <rect x="195" y="252" width="11" height="38" rx="5" fill="#455a64"/>
            <rect x="214" y="252" width="11" height="38" rx="5" fill="#455a64"/>
            <ellipse cx="200" cy="290" rx="9" ry="4.5" fill="#37474f"/>
            <ellipse cx="220" cy="290" rx="9" ry="4.5" fill="#37474f"/>
            <rect x="185" y="196" width="50" height="60" rx="12" fill="#fff" stroke="#e0e0e0" stroke-width="1"/>
            <rect x="190" y="225" width="16" height="10" rx="3" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
            <line x1="194" y1="228" x2="200" y2="228" stroke="#1976d2" stroke-width="1.5"/>
            <path d="M185 205 L165 220 L175 225" stroke="#fff" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="168" cy="222" r="7" fill="#ffcc80"/>
            <circle cx="155" cy="210" r="16" fill="none" stroke="#455a64" stroke-width="3"/>
            <circle cx="155" cy="210" r="12" fill="#e3f2fd" opacity="0.5"/>
            <line x1="167" y1="222" x2="178" y2="233" stroke="#455a64" stroke-width="3" stroke-linecap="round"/>
            <path d="M235 205 L258 200 L265 195" stroke="#fff" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="262" cy="197" r="6" fill="#ffcc80"/>
            <rect x="203" y="188" width="14" height="11" rx="4" fill="#ffcc80"/>
            <circle cx="210" cy="173" r="22" fill="#ffcc80"/>
            <path d="M188 166 Q192 148 210 145 Q228 148 232 166" fill="#4e342e"/>
            <circle cx="201" cy="173" r="8" fill="none" stroke="#455a64" stroke-width="1.8"/>
            <circle cx="219" cy="173" r="8" fill="none" stroke="#455a64" stroke-width="1.8"/>
            <line x1="209" y1="173" x2="211" y2="173" stroke="#455a64" stroke-width="1.5"/>
            <circle cx="201" cy="173" r="2" fill="#5d4037"/>
            <circle cx="219" cy="173" r="2" fill="#5d4037"/>
            <path d="M205 183 Q210 186 215 183" stroke="#5d4037" stroke-width="1.3" fill="none" stroke-linecap="round"/>
          </g>
          <!-- Checkmark badge -->
          <g class="a-group a-d4 a-float">
            <circle cx="320" cy="140" r="18" fill="#e8f5e9" stroke="#4caf50" stroke-width="1.5"/>
            <path d="M312 140 L317 145 L328 134" stroke="#4caf50" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          </g>
        </svg>
      }

      @case ('global-reach') {
        <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" class="illus">
          <!-- BG blobs -->
          <ellipse cx="200" cy="155" rx="175" ry="135" fill="#f3e5f5" opacity="0.25" class="a-blob"/>
          <circle cx="330" cy="250" r="30" fill="#e1bee7" opacity="0.2" class="a-blob-sm"/>
          <!-- Globe in background -->
          <g class="a-group a-d1" opacity="0.12">
            <circle cx="200" cy="150" r="100" fill="none" stroke="#7b1fa2" stroke-width="1.5"/>
            <ellipse cx="200" cy="150" rx="100" ry="40" fill="none" stroke="#7b1fa2" stroke-width="1"/>
            <ellipse cx="200" cy="150" rx="40" ry="100" fill="none" stroke="#7b1fa2" stroke-width="1"/>
            <line x1="100" y1="150" x2="300" y2="150" stroke="#7b1fa2" stroke-width="1"/>
            <line x1="200" y1="50" x2="200" y2="250" stroke="#7b1fa2" stroke-width="1"/>
          </g>
          <!-- Location pins -->
          <g class="a-group a-d2">
            <g class="a-float">
              <path d="M145 120 Q145 108 155 108 Q165 108 165 120 Q155 132 145 120Z" fill="#e91e63"/>
              <circle cx="155" cy="117" r="3" fill="#fff"/>
            </g>
            <g class="a-float" style="animation-delay:0.5s">
              <path d="M240 95 Q240 83 250 83 Q260 83 260 95 Q250 107 240 95Z" fill="#4caf50"/>
              <circle cx="250" cy="92" r="3" fill="#fff"/>
            </g>
            <g class="a-float" style="animation-delay:1s">
              <path d="M270 175 Q270 163 280 163 Q290 163 290 175 Q280 187 270 175Z" fill="#ff9800"/>
              <circle cx="280" cy="172" r="3" fill="#fff"/>
            </g>
            <g class="a-float" style="animation-delay:1.5s">
              <path d="M120 170 Q120 158 130 158 Q140 158 140 170 Q130 182 120 170Z" fill="#1976d2"/>
              <circle cx="130" cy="167" r="3" fill="#fff"/>
            </g>
          </g>
          <!-- Dashed routes -->
          <g class="a-group a-d3" opacity="0.2">
            <path d="M200 130 Q170 110 155 118" stroke="#c8a951" stroke-width="1.5" stroke-dasharray="4,3" fill="none"/>
            <path d="M210 130 Q230 100 250 93" stroke="#c8a951" stroke-width="1.5" stroke-dasharray="4,3" fill="none"/>
            <path d="M215 160 Q250 170 278 172" stroke="#c8a951" stroke-width="1.5" stroke-dasharray="4,3" fill="none"/>
            <path d="M185 160 Q150 170 132 168" stroke="#c8a951" stroke-width="1.5" stroke-dasharray="4,3" fill="none"/>
          </g>
          <!-- Person 1 (Indian seller) -->
          <g class="a-group a-d3">
            <ellipse cx="155" cy="292" rx="25" ry="5" fill="#000" opacity="0.05"/>
            <rect x="143" y="258" width="10" height="32" rx="4" fill="#5d4037"/>
            <rect x="157" y="258" width="10" height="32" rx="4" fill="#5d4037"/>
            <ellipse cx="148" cy="290" rx="8" ry="4" fill="#4e342e"/>
            <ellipse cx="162" cy="290" rx="8" ry="4" fill="#4e342e"/>
            <rect x="136" y="208" width="38" height="54" rx="10" fill="#c8a951"/>
            <line x1="155" y1="215" x2="155" y2="255" stroke="#a88b3a" stroke-width="1" opacity="0.3"/>
            <path d="M174 220 L195 235" stroke="#ffcc80" stroke-width="9" stroke-linecap="round"/>
            <circle cx="196" cy="236" r="6" fill="#ffcc80"/>
            <path d="M136 220 L120 240" stroke="#ffcc80" stroke-width="9" stroke-linecap="round"/>
            <rect x="149" y="200" width="12" height="10" rx="4" fill="#ffcc80"/>
            <circle cx="155" cy="186" r="18" fill="#ffcc80"/>
            <path d="M137 180 Q140 165 155 162 Q170 165 173 180" fill="#3e2723"/>
            <circle cx="149" cy="186" r="2" fill="#5d4037"/>
            <circle cx="161" cy="186" r="2" fill="#5d4037"/>
            <path d="M151 194 Q155 197 159 194" stroke="#5d4037" stroke-width="1.2" fill="none" stroke-linecap="round"/>
          </g>
          <!-- Person 2 (International buyer) -->
          <g class="a-group a-d4">
            <ellipse cx="245" cy="292" rx="25" ry="5" fill="#000" opacity="0.05"/>
            <rect x="233" y="258" width="10" height="32" rx="4" fill="#37474f"/>
            <rect x="247" y="258" width="10" height="32" rx="4" fill="#37474f"/>
            <ellipse cx="238" cy="290" rx="8" ry="4" fill="#263238"/>
            <ellipse cx="252" cy="290" rx="8" ry="4" fill="#263238"/>
            <rect x="226" y="208" width="38" height="54" rx="10" fill="#1565c0"/>
            <path d="M245 215 L242 230 L245 235 L248 230Z" fill="#e91e63"/>
            <path d="M226 220 L205 235" stroke="#ffcc80" stroke-width="9" stroke-linecap="round"/>
            <circle cx="204" cy="236" r="6" fill="#ffcc80"/>
            <path d="M264 220 L280 240" stroke="#ffcc80" stroke-width="9" stroke-linecap="round"/>
            <rect x="239" y="200" width="12" height="10" rx="4" fill="#ffcc80"/>
            <circle cx="245" cy="186" r="18" fill="#ffcc80"/>
            <path d="M227 180 Q230 165 245 162 Q260 165 263 180" fill="#4e342e"/>
            <circle cx="239" cy="186" r="2" fill="#5d4037"/>
            <circle cx="251" cy="186" r="2" fill="#5d4037"/>
            <path d="M241 194 Q245 197 249 194" stroke="#5d4037" stroke-width="1.2" fill="none" stroke-linecap="round"/>
          </g>
          <!-- Handshake glow -->
          <g class="a-group a-d5 a-float">
            <circle cx="200" cy="236" r="14" fill="#c8a951" opacity="0.12"/>
            <circle cx="200" cy="236" r="8" fill="#c8a951" opacity="0.2"/>
          </g>
        </svg>
      }
    }
  `,
  styles: [`
    :host { display: block; width: 100%; }

    .illus {
      width: 100%;
      height: auto;
      max-width: 100%;
    }
    .illus--wide {
      max-height: 340px;
    }

    /* Blob pulse */
    .a-blob {
      animation: blobPulse 6s ease-in-out infinite;
    }
    .a-blob-sm {
      animation: blobPulse 5s ease-in-out infinite 1s;
    }
    @keyframes blobPulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.04); }
    }

    /* Staggered reveal */
    .a-group {
      opacity: 0;
      animation: svgReveal 0.6s ease forwards;
    }
    .a-d1 { animation-delay: 0.15s; }
    .a-d2 { animation-delay: 0.35s; }
    .a-d3 { animation-delay: 0.55s; }
    .a-d4 { animation-delay: 0.75s; }
    .a-d5 { animation-delay: 0.95s; }
    .a-d6 { animation-delay: 1.15s; }
    .a-d7 { animation-delay: 1.35s; }

    @keyframes svgReveal {
      from { opacity: 0; transform: translateY(10px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* Float */
    .a-float {
      animation: svgFloat 3s ease-in-out infinite;
    }
    @keyframes svgFloat {
      0%, 100% { transform: translateY(0); }
      50%      { transform: translateY(-5px); }
    }

    /* Wave */
    .a-wave {
      animation: svgWave 4s ease-in-out infinite;
    }
    @keyframes svgWave {
      0%, 100% { transform: translateX(0); }
      50%      { transform: translateX(8px); }
    }

    /* Legacy compat */
    .illustration { width: 100%; height: auto; max-width: 100%; }
    .anim-group { opacity: 0; animation: svgReveal 0.6s ease forwards; }
    .anim-delay-1 { animation-delay: 0.2s; }
    .anim-delay-2 { animation-delay: 0.4s; }
    .anim-delay-3 { animation-delay: 0.6s; }
    .anim-delay-4 { animation-delay: 0.8s; }
    .anim-delay-5 { animation-delay: 1.0s; }
    .anim-delay-6 { animation-delay: 1.2s; }
    .anim-delay-7 { animation-delay: 1.4s; }
    .wave-anim {
      animation: svgWave 3s ease-in-out infinite;
    }
  `]
})
export class IllustrationComponent {
  @Input() name: string = '';
}
