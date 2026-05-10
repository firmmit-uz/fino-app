// FINO Mobile App — 13 screens dual-mode, FIRMMIT brand palette
// Target: Uzbek strawberry farmers, Android-first

const FINO_C = {
  // FIRMMIT brand
  blue:       '#3365FF',   // 퍼밋 블루 — primary, headers, charts
  sky:        '#2A7FFA',   // 스카이 블루 — secondary, sub-charts
  blueDeep:   '#1E3FA8',   // darker accent for gradients
  blueLight:  '#D6E0FF',   // surface tint
  blueSurface:'#EEF3FF',   // section bg
  // nursery green
  green:       '#16A34A',
  greenDeep:   '#14532D',
  greenLight:  '#D1FAE5',
  greenSurface:'#ECFDF5',
  // alert
  red:        '#F25555',   // 페퍼 레드 — warnings / errors / harvest stage
  redLight:   '#FEE8E8',
  redDeep:    '#B8322F',   // Tank C (acid)
  // amber (caution)
  amber:      '#E6A817',
  amberLight: '#FFF6E0',
  amberDeep:  '#8A5D00',
  // ok
  ok:         '#2A7FFA',
  okLight:    '#E0EEFF',
  okDeep:     '#1E3FA8',
  // Seasonal accents — header only
  summer:     '#D97C4A',   // 테라코타 — warm season
  summerDeep: '#A8512A',
  summerLight:'#FBEADD',
  winter:     '#1E3FA8',   // 남색 — cold season
  winterDeep: '#142970',
  winterLight:'#D6E0FF',
  // Growth stage accents
  s1:         '#00B58A',   // 모종 (seedling) — mint
  s1Light:    '#D7F5ED',
  s2:         '#3365FF',   // 영양생장 (vegetative) — brand blue
  s2Light:    '#EEF3FF',
  s3:         '#D946A0',   // 개화 (flowering) — rose
  s3Light:    '#FBE2F1',
  s4:         '#F25555',   // 수확 (harvest) — pepper red
  s4Light:    '#FEE8E8',
  // Tank accents
  tA:         '#3365FF',
  tALight:    '#EEF3FF',
  tB:         '#2A7FFA',
  tBLight:    '#E0EEFF',
  tC:         '#B8322F',   // acid — deep red
  tCLight:    '#FBE4E2',
  // ink
  ink:        '#292C34',
  ink2:       '#4A4E5A',
  ink3:       '#9898A0',
  ink4:       '#C5C5CC',
  // surface
  bg:         '#F5F7FB',
  card:       '#FFFFFF',
  border:     '#E4E7EF',
  hairline:   '#EEF0F5',
};

// Stage meta — name, short, color, surface
const FINO_STAGES = [
  { n: 1, key:'s1', l:'모종',     en:'Seedling',   c: '#00B58A', bg: '#D7F5ED' },
  { n: 2, key:'s2', l:'영양생장', en:'Vegetative', c: '#3365FF', bg: '#EEF3FF' },
  { n: 3, key:'s3', l:'개화',     en:'Flowering',  c: '#D946A0', bg: '#FBE2F1' },
  { n: 4, key:'s4', l:'수확',     en:'Harvest',    c: '#F25555', bg: '#FEE8E8' },
];

// Nursery stage meta — 8단계, 6~8월
const STAGES_NURSERY = [
  { n:0, id:'S0',   l:'활착 적응',    uz:'Илдиз отиш',        dates:'6/1~6/3',   days:'3일',  EC:0.5, c:'#F59E0B', bg:'#FEF3C7' },
  { n:1, id:'S1',   l:'모주 활착',    uz:'Она ўсимлик',       dates:'6/4~6/21',  days:'18일', EC:0.9, c:'#84CC16', bg:'#ECFCCB' },
  { n:2, id:'S2',   l:'모주+러너',    uz:'Она+отпрыск',       dates:'6/22~7/15', days:'24일', EC:1.2, c:'#22C55E', bg:'#DCFCE7' },
  { n:3, id:'S3',   l:'자묘 분리·발근', uz:'Болалаш',          dates:'7/16~7/31', days:'16일', EC:1.0, c:'#16A34A', bg:'#D1FAE5' },
  { n:4, id:'S4',   l:'자묘 비대',    uz:'Ўсиш',              dates:'8/1~8/15',  days:'15일', EC:1.4, c:'#15803D', bg:'#BBF7D0' },
  { n:5, id:'S5-1', l:'출하 준비 1',  uz:'Тайёргарлик 1',     dates:'8/16~8/22', days:'7일',  EC:1.6, c:'#166534', bg:'#A7F3D0' },
  { n:6, id:'S5-2', l:'출하 준비 2',  uz:'Тайёргарлик 2',     dates:'8/23~8/27', days:'5일',  EC:1.6, c:'#14532D', bg:'#86EFAC' },
  { n:7, id:'S5-3', l:'출하 직전',    uz:'Юклашдан олдин',    dates:'8/28~8/31', days:'4일',  EC:1.4, c:'#052E16', bg:'#6EE7B7' },
];

// Season helper — Uzbekistan: summer Apr-Sep, winter Oct-Mar
function getSeason(month /* 0-11 */) {
  const m = (month != null ? month : new Date().getMonth());
  const isSummer = m >= 3 && m <= 8;
  return isSummer
    ? { key:'summer', l:'여름 모드', en:'Summer mode',
        c: '#D97C4A', deep: '#A8512A', light: '#FBEADD', grad: 'linear-gradient(135deg,#D97C4A 0%,#E89722 100%)' }
    : { key:'winter', l:'겨울 모드', en:'Winter mode',
        c: '#1E3FA8', deep: '#142970', light: '#D6E0FF', grad: 'linear-gradient(135deg,#1E3FA8 0%,#3365FF 100%)' };
}

const FINO_F = `'Roboto','Noto Sans KR','Noto Sans',-apple-system,system-ui,sans-serif`;

// FIRMMIT logo (inline, mono-color — pass fill)
function FirmmitLogo({ fill = '#292C34', height = 28 }) {
  // Original viewBox crops to the dark "FIRMMIT," wordmark region (y: 0 to 515.5)
  return (
    <svg viewBox="0 0 2990.8 515.5" height={height} style={{ display:'block' }} aria-label="FIRMMIT">
      <path fill={fill} d="M27.6,51.8C9.2,75,0,100.2,0,126.7v385h84v-208.8h265.9v-83.3H84v-89.3c0-13.6,4-22.9,13.2-30.2,9.2-7.5,21.8-11.1,38.4-11.1h215.5V5.7h-218.7c-45.8,0-81.1,15.5-104.8,46.1Z"/>
      <rect fill={fill} x="455.5" y="5.7" width="83.9" height="506"/>
      <path fill={fill} d="M895.2,322.5c37.5,0,68.6-11.3,92.6-33.6,24.6-22.9,37-54,37-92.4v-59.6c0-42.1-13.3-75.1-39.4-98.1-24.9-22-58.6-33.1-100-33.1h-240.3v506h84v-161.6l213.2,161.6h140.6l-251.7-189.2h64ZM894.3,239.3h-165.2V89h156.4c46.4,0,55.4,16.8,55.4,45.7v63c0,1.1-.4,3.5-.9,6.9-3.5,21.9-12.1,34.6-45.7,34.6v.1Z"/>
      <path fill={fill} d="M1603.6.6c-11.8,0-28.8,5-42.7,28.1-3,4.5-5,8-5.9,10.5l-159.4,341-162.3-339.8c-6.5-13.6-9.1-18-11-20.5-8.7-12.3-22.1-19.3-36.7-19.3-25.8,0-43.7,18.4-43.7,44.8v466.2h83.9V218.3l123.1,258.5,6.5,11.3c7.6,16.4,22.6,26.2,40.1,26.2s33.5-10,42.6-27.9l124.6-265.6v291h83.9V45.5c0-26.4-17.6-44.8-42.9-44.8l-.1-.1Z"/>
      <path fill={fill} d="M2207.9,1.9c-11.7,0-28.7,5-42.8,28.2-2.9,4.4-4.8,7.9-5.8,10.4l-159.4,341-162.2-339.9c-6.6-13.7-9.1-17.9-11-20.3-8.7-12.4-22.1-19.4-36.8-19.4-25.8,0-43.7,18.4-43.7,44.8v466.2h83.9V219.5l123.1,258.5,6.6,11.3c7.5,16.4,22.5,26.2,40.1,26.2s33.5-10,42.5-27.9l124.6-265.6v291h84V46.8c0-26.4-17.7-44.8-42.9-44.8l-.2-.1Z"/>
      <rect fill={fill} x="2350.6" y="5.7" width="83.9" height="506"/>
      <polygon fill={fill} points="2543 89 2673.7 89 2673.7 511.7 2757.6 511.7 2757.6 89 2888.9 89 2888.9 5.7 2543 5.7 2543 89"/>
      <polygon fill={fill} points="2914.9 424.5 2897.9 511.7 2973.8 511.7 2990.8 424.5 2914.9 424.5"/>
    </svg>
  );
}

// ── Reusable: pill ──
function Pill({ tone, children, big }) {
  const map = {
    ok:   { bg: FINO_C.okLight,    fg: FINO_C.okDeep,      dot: FINO_C.ok },
    warn: { bg: FINO_C.amberLight, fg: FINO_C.amberDeep,   dot: FINO_C.amber },
    err:  { bg: FINO_C.redLight,   fg: FINO_C.redDeep,     dot: FINO_C.red },
    info: { bg: FINO_C.blueSurface,fg: FINO_C.blueDeep,    dot: FINO_C.blue },
  };
  const c = map[tone] || map.info;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: big?10:6,
      padding: big?'8px 14px':'4px 10px', borderRadius: 100,
      background: c.bg, color: c.fg,
      fontSize: big?14:12.5, fontWeight: 700, fontFamily: FINO_F, letterSpacing: .2,
    }}>
      <span style={{ width: big?10:8, height: big?10:8, borderRadius: '50%', background: c.dot }} />
      {children}
    </span>
  );
}

// ── Card ──
function Card({ children, onClick, color = FINO_C.card, pad = 16, radius = 16, style = {} }) {
  return (
    <div onClick={onClick} style={{
      background: color, borderRadius: radius, padding: pad,
      boxShadow: '0 1px 2px rgba(41,44,52,.04), 0 2px 10px rgba(41,44,52,.05)',
      border: '1px solid '+FINO_C.hairline, fontFamily: FINO_F, ...style,
    }}>{children}</div>
  );
}

// ── Button ──
function MButton({ children, color = FINO_C.blue, fg = '#fff', icon, full, onClick, variant='filled' }) {
  const isOutline = variant === 'outline';
  return (
    <button onClick={onClick} style={{
      width: full?'100%':'auto', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
      padding: '16px 24px', minHeight: 56, borderRadius: 14,
      border: isOutline ? `2px solid ${color}` : 'none',
      background: isOutline ? '#fff' : color,
      color: isOutline ? color : fg, fontFamily: FINO_F,
      fontSize: 17, fontWeight: 700, letterSpacing: .2, cursor: 'pointer',
      boxShadow: isOutline ? 'none' : '0 2px 4px rgba(51,101,255,.18), 0 6px 16px rgba(51,101,255,.14)',
    }}>{icon}{children}</button>
  );
}

// ── Bottom Nav ──
function BottomNav({ active = 'home', mode = 'main' }) {
  const ac  = mode === 'nursery' ? FINO_C.green       : FINO_C.blue;
  const asg = mode === 'nursery' ? FINO_C.greenSurface : FINO_C.blueSurface;
  const items = [
    { id:'home', l:'홈', icon:'home' },
    { id:'rx',   l:'처방', icon:'rx' },
    { id:'guide',l:'가이드', icon:'guide' },
    { id:'log',  l:'기록', icon:'log' },
    { id:'set',  l:'설정', icon:'set' },
  ];
  const Icon = ({ k, on }) => {
    const s = on ? ac : FINO_C.ink3;
    if (k==='home') return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="2"><path d="M3 11l9-7 9 7v9a2 2 0 01-2 2h-4v-7H9v7H5a2 2 0 01-2-2v-9z"/></svg>;
    if (k==='rx')   return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="2"><path d="M5 3h11l3 3v15H5z"/><path d="M16 3v3h3M9 11h6M9 15h6"/></svg>;
    if (k==='guide')return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 116 0c0 2-3 2-3 4M12 17v.5"/></svg>;
    if (k==='log')  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="2"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>;
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.6 1.6 0 00-1.8-.3 1.6 1.6 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.6 1.6 0 00-1-1.5 1.6 1.6 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.6 1.6 0 00.3-1.8 1.6 1.6 0 00-1.5-1H3a2 2 0 110-4h.1a1.6 1.6 0 001.5-1 1.6 1.6 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.6 1.6 0 001.8.3H9a1.6 1.6 0 001-1.5V3a2 2 0 114 0v.1a1.6 1.6 0 001 1.5 1.6 1.6 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.6 1.6 0 00-.3 1.8V9a1.6 1.6 0 001.5 1H21a2 2 0 110 4h-.1a1.6 1.6 0 00-1.5 1z"/></svg>;
  };
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(5,1fr)',
      background: '#fff', borderTop: '1px solid '+FINO_C.hairline,
      padding: '6px 4px 10px', fontFamily: FINO_F,
    }}>
      {items.map(it => {
        const on = it.id === active;
        return (
          <div key={it.id} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:2, padding:'4px 0' }}>
            <div style={{
              width: 64, height: 32, borderRadius: 16,
              background: on ? asg : 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}><Icon k={it.icon} on={on} /></div>
            <div style={{ fontSize: 11.5, fontWeight: on?700:500, color: on?ac:FINO_C.ink3 }}>{it.l}</div>
          </div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 01 SPLASH — white bg, FIRMMIT logo, full product name
// ─────────────────────────────────────────────────────────────
function ScrSplash() {
  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: '#fff', color: FINO_C.ink, fontFamily: FINO_F,
      padding: 32, textAlign: 'center', position: 'relative',
    }}>
      <div style={{ position: 'relative', zIndex: 1, display:'flex', flexDirection:'column', alignItems:'center' }}>
        {/* FIRMMIT logo — transparent bg */}
        <div style={{ marginBottom: 44 }}>
          <FirmmitLogo fill={FINO_C.blue} height={44} />
        </div>

        {/* FINO monogram */}
        <div style={{
          fontSize: 84, fontWeight: 900, letterSpacing: 4,
          color: FINO_C.ink, lineHeight: 1, marginBottom: 18,
        }}>FINO</div>

        {/* Full product name */}
        <div style={{
          fontSize: 17, fontWeight: 600, color: FINO_C.ink,
          lineHeight: 1.45, maxWidth: 320, marginBottom: 8,
        }}>
          <span style={{ color: FINO_C.blue }}>F</span>IRMMIT
          <span style={{ color: FINO_C.blue }}> I</span>ntelligent
          <span style={{ color: FINO_C.blue }}> N</span>utrient
          <span style={{ color: FINO_C.blue }}> O</span>ptimizer
        </div>
        <div style={{ fontSize: 15, color: FINO_C.ink3, fontWeight: 500, marginBottom: 12 }}>
          for Strawberry
        </div>
        <div style={{ fontSize: 13, color: FINO_C.ink3, fontWeight: 500, marginBottom: 40 }}>
          딸기를 위한 지능형 양액 처방 시스템
        </div>

        {/* progress dots */}
        <div style={{ display:'flex', gap: 8 }}>
          {[0,1,2].map(i => (
            <div key={i} style={{
              width: 8, height: 8, borderRadius: 4,
              background: i===0 ? FINO_C.blue : FINO_C.blueLight,
            }}/>
          ))}
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 48, left: 0, right: 0,
        textAlign: 'center', fontSize: 11, color: FINO_C.ink3, letterSpacing: 1.2, fontWeight: 500,
      }}>
        v13.0 &nbsp;·&nbsp; © FIRMMIT 2026
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 02 LANGUAGE SELECT — first-run
// ─────────────────────────────────────────────────────────────
function ScrLanguage() {
  const langs = [
    { l:'한국어',     sub:'Korean',          code:'KO', on: true  },
    { l:"O'zbek",   sub:'Lotin alifbosi',  code:'UZ', on: false },
    { l:'Ўзбек',     sub:'Кирилл алифбоси', code:'УЗ', on: false },
    { l:'Русский',   sub:'Russian',         code:'RU', on: false },
    { l:'English',   sub:'English',         code:'EN', on: false },
  ];
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background: '#fff', fontFamily: FINO_F }}>
      {/* Subtle header */}
      <div style={{ padding: '40px 24px 24px', textAlign: 'center' }}>
        <div style={{ display:'flex', justifyContent:'center', marginBottom: 24 }}>
          <FirmmitLogo fill={FINO_C.blue} height={20} />
        </div>
        <div style={{ fontSize: 28, fontWeight: 800, color: FINO_C.ink, lineHeight: 1.2, marginBottom: 8 }}>
          언어를 선택하세요
        </div>
        <div style={{ fontSize: 14, color: FINO_C.ink3, fontWeight: 500 }}>
          Tilni tanlang · Choose your language · Выберите язык
        </div>
      </div>

      {/* List */}
      <div style={{ padding: '8px 16px 16px', flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {langs.map((lg,i) => (
          <div key={i} style={{
            padding: '16px 18px',
            borderRadius: 14,
            border: `2px solid ${lg.on ? FINO_C.blue : FINO_C.hairline}`,
            background: lg.on ? FINO_C.blueSurface : '#fff',
            display:'flex', alignItems:'center', gap: 14,
            cursor: 'pointer',
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: lg.on ? FINO_C.blue : FINO_C.hairline,
              color: lg.on ? '#fff' : FINO_C.ink3,
              display:'flex', alignItems:'center', justifyContent:'center',
              fontWeight: 900, fontSize: 13, letterSpacing: .5,
            }}>{lg.code}</div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize: 17, fontWeight: 700, color: FINO_C.ink, lineHeight: 1.1 }}>{lg.l}</div>
              <div style={{ fontSize: 12.5, color: FINO_C.ink3, marginTop: 3 }}>{lg.sub}</div>
            </div>
            {lg.on
              ? <svg width="24" height="24" viewBox="0 0 24 24" fill={FINO_C.blue}><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6" stroke="#fff" strokeWidth="2.5" fill="none"/></svg>
              : <div style={{ width: 22, height: 22, borderRadius: 11, border: `2px solid ${FINO_C.ink4}` }}/>
            }
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ padding: '0 16px 24px' }}>
        <MButton full icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>}>계속하기</MButton>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 03 ONBOARDING
// ─────────────────────────────────────────────────────────────
function ScrOnboarding() {
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background: FINO_C.bg, fontFamily: FINO_F }}>
      <div style={{ background: FINO_C.blue, color: '#fff', padding: '20px 20px 32px' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom: 12 }}>
          <FirmmitLogo fill="#fff" height={18} />
          <div style={{ fontSize: 12, opacity: .85, fontWeight: 600, letterSpacing: 1 }}>2 / 4 단계</div>
        </div>
        <div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.2 }}>농장 정보를 알려주세요</div>
        <div style={{ marginTop: 10, fontSize: 14, opacity: .85 }}>기술 담당자가 도와드립니다</div>
        <div style={{ marginTop: 18, height: 4, borderRadius: 2, background: 'rgba(255,255,255,.25)', overflow: 'hidden' }}>
          <div style={{ width: '50%', height: '100%', background: '#fff' }} />
        </div>
      </div>

      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
        <Card pad={18}>
          <div style={{ fontSize: 12, fontWeight: 700, color: FINO_C.ink3, letterSpacing: 1, marginBottom: 8 }}>농장명</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: FINO_C.ink }}>타슈켄트 농장 #14</div>
        </Card>

        <Card pad={18}>
          <div style={{ fontSize: 12, fontWeight: 700, color: FINO_C.ink3, letterSpacing: 1, marginBottom: 12 }}>딸기 품종</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 56, height: 56, borderRadius: 14, background: FINO_C.blueSurface, display:'flex',alignItems:'center',justifyContent:'center', fontWeight: 900, color: FINO_C.blue, fontSize: 18, letterSpacing: .5 }}>
              F-43
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: FINO_C.ink }}>FIRMMIT-1943</div>
              <div style={{ fontSize: 13, color: FINO_C.ink3, marginTop: 2 }}>독점 품종</div>
            </div>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={FINO_C.ink3} strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
          </div>
        </Card>

        <Card pad={18}>
          <div style={{ fontSize: 12, fontWeight: 700, color: FINO_C.ink3, letterSpacing: 1, marginBottom: 12 }}>원수</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 56, height: 56, borderRadius: 14, background: FINO_C.blueSurface, display:'flex',alignItems:'center',justifyContent:'center' }}>
              <svg width="30" height="30" viewBox="0 0 32 32" fill={FINO_C.blue}><path d="M16 4c-5 8-10 13-10 18a10 10 0 0020 0c0-5-5-10-10-18z"/></svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 17, fontWeight: 700, color: FINO_C.ink }}>지하수 (관정)</div>
              <div style={{ fontSize: 13, color: FINO_C.ink3, marginTop: 2 }}>pH 7.6 · EC 0.83 mS/cm</div>
            </div>
            <Pill tone="ok">분석 완료</Pill>
          </div>
        </Card>

        <Card pad={18}>
          <div style={{ fontSize: 12, fontWeight: 700, color: FINO_C.ink3, letterSpacing: 1, marginBottom: 12 }}>재배 면적</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: FINO_C.ink, fontVariantNumeric: 'tabular-nums' }}>1,200</div>
            <div style={{ fontSize: 18, fontWeight: 600, color: FINO_C.ink3 }}>m²</div>
            <div style={{ marginLeft: 'auto', fontSize: 13, color: FINO_C.ink3 }}>하루 약 3탱크</div>
          </div>
        </Card>

        <div style={{ marginTop: 'auto', paddingTop: 8 }}>
          <MButton full>계속하기 →</MButton>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 03 HOME — Today
// ─────────────────────────────────────────────────────────────
function ScrHome({ seasonMonth = 2, stageIdx = 2, date = "3월 18일" } = {}) {
  const season = getSeason(seasonMonth);
  const curStage = FINO_STAGES[stageIdx];
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background: FINO_C.bg, fontFamily: FINO_F, overflow: 'auto' }}>
      {/* Header — seasonal band */}
      <div style={{
        background: season.grad,
        color: '#fff', padding: '18px 20px 32px',
      }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom: 14 }}>
          <FirmmitLogo fill="#fff" height={16} />
          <div style={{ display:'flex', alignItems:'center', gap: 8 }}>
            <Pill tone="info" big={false}>
              <span style={{ color:'#fff', display:'flex', alignItems:'center', gap: 6 }}>
                <span style={{ fontSize: 12 }}>{season.key==='summer' ? '☀' : '❄'}</span>
                {season.l}
              </span>
            </Pill>
            <div style={{ width: 36, height: 36, borderRadius: 18, background: 'rgba(255,255,255,.18)', display:'flex',alignItems:'center',justifyContent:'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M15 17h5l-1.4-1.4A2 2 0 0118 14V11a6 6 0 00-12 0v3a2 2 0 01-.6 1.6L4 17h5m6 0a3 3 0 11-6 0"/></svg>
            </div>
          </div>
        </div>
        <div style={{ fontSize: 12, opacity: .9, letterSpacing: 1, fontWeight: 600 }}>오늘 · {date}</div>
        <div style={{ fontSize: 26, fontWeight: 700, marginTop: 2 }}>안녕하세요, 아크말 님</div>
      </div>

      <div style={{ padding: '0 16px 16px', marginTop: -20, display:'flex', flexDirection:'column', gap: 14 }}>

        {/* Seasonal note — winter coefficient / summer heat adjustment */}
        {season.key === 'winter' ? (
          <Card pad={14} style={{ borderColor: season.light, background: season.light }}>
            <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10, background: '#fff',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize: 20, color: season.c,
              }}>❄</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: season.deep, lineHeight: 1.3 }}>
                  겨울 계수 적용 중
                </div>
                <div style={{ fontSize: 12, color: FINO_C.ink2, marginTop: 3 }}>
                  낮은 광량과 온도 → 양액 농도 <b>×0.85</b>
                </div>
              </div>
              <div style={{ fontSize: 22, fontWeight: 900, color: season.c, fontVariantNumeric: 'tabular-nums' }}>×0.85</div>
            </div>
          </Card>
        ) : (
          <Card pad={14} style={{ borderColor: season.light, background: season.light }}>
            <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10, background: '#fff',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize: 20, color: season.c,
              }}>☀</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: season.deep, lineHeight: 1.3 }}>
                  고온 감지 (32°C)
                </div>
                <div style={{ fontSize: 12, color: FINO_C.ink2, marginTop: 3 }}>
                  뿌리 화상 예방을 위해 EC <b>−0.2</b> 감소
                </div>
              </div>
              <div style={{ fontSize: 22, fontWeight: 900, color: season.c, fontVariantNumeric: 'tabular-nums' }}>−0.2</div>
            </div>
          </Card>
        )}

        {/* Status hero — current stage color */}
        <Card pad={20}>
          <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom: 14 }}>
            <div style={{
              width: 56, height: 56, borderRadius: 14, background: curStage.bg,
              display:'flex', alignItems:'center', justifyContent:'center',
              color: curStage.c, fontWeight: 900, fontSize: 26, fontVariantNumeric: 'tabular-nums',
            }}>{curStage.n}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, color: FINO_C.ink3, fontWeight: 600, letterSpacing: 1 }}>현재 단계</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: FINO_C.ink, marginTop: 2 }}>{curStage.l}</div>
            </div>
            <Pill tone="ok" big>양호</Pill>
          </div>
          {/* Stage progress — each segment its own color */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap: 6 }}>
            {FINO_STAGES.map((s,i) => {
              const active = i <= stageIdx;
              const isCur = i === stageIdx;
              return (
                <div key={s.n} style={{
                  height: isCur ? 8 : 6,
                  borderRadius: 3,
                  background: active ? s.c : FINO_C.hairline,
                  transition: 'all .2s',
                }}/>
              );
            })}
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', marginTop: 8, fontSize: 10, fontWeight: 700, textAlign:'center', letterSpacing: .5 }}>
            {FINO_STAGES.map((s,i) => (
              <div key={s.n} style={{ color: i===stageIdx ? s.c : FINO_C.ink3 }}>{s.l}</div>
            ))}
          </div>
        </Card>

        {/* Today's prescription */}
        <Card pad={0} style={{ overflow: 'hidden' }}>
          <div style={{ padding: '14px 20px', background: FINO_C.blueSurface, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: FINO_C.blueDeep, letterSpacing: 1 }}>오늘의 처방</div>
            <div style={{ fontSize: 11.5, color: FINO_C.ink3, fontWeight: 600 }}>1,000 L</div>
          </div>
          <div style={{ padding: 16 }}>
            {[
              { tank:'A', name:'질산칼슘',     amount:'4.5', unit:'kg', c: FINO_C.tA },
              { tank:'B', name:'칼륨 + 마그네슘', amount:'3.8', unit:'kg', c: FINO_C.tB },
              { tank:'C', name:'질산',         amount:'0.4', unit:'L',  c: FINO_C.tC },
            ].map((t,i) => (
              <div key={t.tank} style={{ display:'flex', alignItems:'center', gap:14, padding:'12px 0', borderBottom: i<2 ? '1px solid '+FINO_C.hairline : 'none' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: t.c, color: '#fff',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontWeight: 900, fontSize: 20, letterSpacing: .5,
                }}>{t.tank}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: FINO_C.ink }}>{t.name}</div>
                  <div style={{ fontSize: 11.5, color: FINO_C.ink3, fontWeight: 500 }}>Tank {t.tank}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: 22, fontWeight: 800, color: FINO_C.ink, fontVariantNumeric:'tabular-nums' }}>{t.amount}</span>
                  <span style={{ fontSize: 13, color: FINO_C.ink3, fontWeight: 600, marginLeft: 3 }}>{t.unit}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: '0 16px 16px' }}>
            <MButton full icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M5 12l5 5L20 7"/></svg>}>전체 처방 보기</MButton>
          </div>
        </Card>

        {/* Two tiles */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <Card pad={16}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={FINO_C.blue} strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
            <div style={{ fontSize: 11, color: FINO_C.ink3, marginTop: 8, fontWeight: 700, letterSpacing: .5 }}>최근 수확</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: FINO_C.ink, marginTop: 2 }}>14 kg</div>
            <div style={{ fontSize: 11, color: FINO_C.blue, marginTop: 2, fontWeight: 700 }}>↑ 어제 대비 +12%</div>
          </Card>
          <Card pad={16}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={FINO_C.s4} strokeWidth="2"><path d="M12 2c-5 8-9 12-9 17a9 9 0 0018 0c0-5-4-9-9-17z"/></svg>
            <div style={{ fontSize: 11, color: FINO_C.ink3, marginTop: 8, fontWeight: 700, letterSpacing: .5 }}>다음 단계</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: FINO_C.ink, marginTop: 2 }}>약 12일</div>
            <div style={{ fontSize: 11, color: FINO_C.s4, marginTop: 2, fontWeight: 700 }}>→ 수확</div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 04 PRESCRIPTION DETAIL
// ─────────────────────────────────────────────────────────────
function ScrRx() {
  const items = [
    { tank:'A', formula:'Ca(NO₃)₂', name:'질산칼슘',     amount:'4.5', unit:'kg' },
    { tank:'A', formula:'NH₄NO₃',   name:'질산암모늄',    amount:'0.3', unit:'kg' },
    { tank:'A', formula:'Fe-DTPA',  name:'철-DTPA',      amount:'140', unit:'g'  },
    { tank:'B', formula:'KNO₃',     name:'질산칼륨',     amount:'2.4', unit:'kg' },
    { tank:'B', formula:'KH₂PO₄',   name:'제1인산칼륨',    amount:'1.0', unit:'kg' },
    { tank:'B', formula:'MgSO₄',    name:'황산마그네슘',    amount:'0.8', unit:'kg' },
    { tank:'C', formula:'HNO₃ 60%', name:'질산',         amount:'0.4', unit:'L'  },
  ];
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background: FINO_C.bg, fontFamily: FINO_F, overflow: 'auto' }}>
      <div style={{ background: '#fff', padding: '14px 20px 18px', borderBottom: '1px solid '+FINO_C.hairline }}>
        <div style={{ display:'flex', alignItems:'center', gap: 8, marginBottom: 10 }}>
          <button style={{ width:40, height:40, borderRadius:20, border:'none', background:'transparent' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={FINO_C.ink} strokeWidth="2"><path d="M15 6l-6 6 6 6"/></svg>
          </button>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 21, fontWeight: 700, color: FINO_C.ink }}>오늘의 처방</div>
            <div style={{ fontSize: 12.5, color: FINO_C.ink3, marginTop: 2 }}>단계 3 · 개화 · 1,000 L</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Pill tone="ok">EC 1.10 ✓</Pill>
          <Pill tone="ok">K/Ca 1.7 ✓</Pill>
          <Pill tone="info">pH ~5.8</Pill>
          <Pill tone="warn">원액 농축 1:100 희석</Pill>
        </div>
      </div>

      <div style={{ flex: 1, padding: 16, display:'flex', flexDirection:'column', gap: 14 }}>
        {['A','B','C'].map(tk => {
          const tItems = items.filter(i => i.tank === tk);
          const tn   = tk==='A'?'칼슘 그룹':tk==='B'?'주요 비료':'산 (별도 보관)';
          const tc   = tk==='A'?FINO_C.tA:tk==='B'?FINO_C.tB:FINO_C.tC;
          const tbg  = tk==='A'?FINO_C.tALight:tk==='B'?FINO_C.tBLight:FINO_C.tCLight;
          return (
            <Card key={tk} pad={0} style={{ overflow:'hidden' }}>
              <div style={{ padding:'14px 18px', background: tbg, display:'flex', alignItems:'center', gap:12, borderBottom: '1px solid '+FINO_C.hairline }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10, background: tc, color:'#fff',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontWeight: 900, fontSize: 22,
                }}>{tk}</div>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: tc, letterSpacing: .5 }}>탱크 {tk}</div>
                  <div style={{ fontSize: 12, color: FINO_C.ink3 }}>{tn}</div>
                </div>
                <div style={{ fontSize: 11, color: FINO_C.ink3, fontWeight: 700 }}>{tItems.length}개 성분</div>
              </div>
              {tItems.map((it, i) => (
                <div key={i} style={{ padding: '13px 18px', borderTop: i?'1px solid '+FINO_C.hairline:'none', display:'flex', alignItems:'center', gap:14 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: FINO_C.ink }}>{it.name}</div>
                    <div style={{ fontSize: 11.5, color: FINO_C.ink3, fontFamily:'monospace', marginTop: 2 }}>{it.formula}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: 22, fontWeight: 800, color: FINO_C.ink, fontVariantNumeric:'tabular-nums' }}>{it.amount}</span>
                    <span style={{ fontSize: 13, color: FINO_C.ink3, fontWeight: 600, marginLeft: 3 }}>{it.unit}</span>
                  </div>
                </div>
              ))}
            </Card>
          );
        })}

        <Card pad={14} color={FINO_C.redLight} style={{ borderColor: '#F8C6C6' }}>
          <div style={{ display:'flex', alignItems:'flex-start', gap: 12 }}>
            <div style={{ width: 28, height: 28, borderRadius: 14, background: FINO_C.red, color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontWeight: 900, fontSize: 16, flexShrink: 0 }}>!</div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize: 14.5, fontWeight: 700, color: FINO_C.redDeep }}>탱크 A와 C는 분리 보관</div>
              <div style={{ fontSize: 13, color: FINO_C.ink2, marginTop: 4, lineHeight: 1.5 }}>섞이면 침전물이 생겨 관수 시스템이 막힙니다.</div>
            </div>
          </div>
        </Card>

        <MButton full icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><polygon points="6 3 20 12 6 21 6 3"/></svg>}>
          조제 가이드 시작
        </MButton>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 05 GUIDE
// ─────────────────────────────────────────────────────────────
function ScrGuide({ mode = 'main' }) {
  const isNursery = mode === 'nursery';
  const ac  = isNursery ? FINO_C.green      : FINO_C.blue;
  const asg = isNursery ? FINO_C.greenSurface : FINO_C.blueSurface;
  const ald = isNursery ? FINO_C.greenDeep   : FINO_C.blueDeep;
  const agl = isNursery ? FINO_C.greenLight  : FINO_C.blueLight;
  const waveStroke = isNursery ? FINO_C.green : FINO_C.sky;
  const stepLabel = isNursery ? '단계 2 / 5' : '단계 3 / 7';
  const tankLabel = isNursery ? '탱크 B 채우기 (육묘장)' : '탱크 A 채우기';
  const instrTitle = isNursery ? '탱크 B에 물 600 L 채우기' : '탱크 A에 물 800 L 채우기';
  const instrBody = isNursery
    ? <>탱크의 <b style={{ color: ac }}>60%까지</b> 깨끗한 물을 채웁니다. 육묘장 EC 목표는 낮게 유지합니다.</>
    : <>탱크의 <b style={{ color: ac }}>80%까지</b> 깨끗한 물을 채웁니다. 그 다음 질산칼슘을 넣습니다.</>;
  const tipText = isNursery ? '팁: 자묘 뿌리 확인 후 급액하세요' : '팁: 믹서를 미리 켜두세요';
  const waveId = isNursery ? 'wave-n' : 'wave-a';
  const tankId = isNursery ? 'B' : 'A';
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background: FINO_C.bg, fontFamily: FINO_F }}>
      <div style={{ background:'#fff', padding:'14px 20px', borderBottom:'1px solid '+FINO_C.hairline, display:'flex', alignItems:'center', gap:8 }}>
        <button style={{ width:40, height:40, borderRadius:20, border:'none', background:'transparent' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={FINO_C.ink} strokeWidth="2"><path d="M15 6l-6 6 6 6"/></svg>
        </button>
        <div style={{ flex:1 }}>
          <div style={{ fontSize: 12, color: FINO_C.ink3, fontWeight: 700, letterSpacing: .5 }}>{stepLabel}</div>
          <div style={{ fontSize: 19, fontWeight: 700, color: FINO_C.ink }}>{tankLabel}</div>
        </div>
        <button style={{ width:44, height:44, borderRadius:22, background: asg, border:'none', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill={ac}><path d="M3 9v6h4l5 5V4L7 9H3z"/></svg>
        </button>
      </div>

      <div style={{ height: 4, background: FINO_C.hairline }}>
        <div style={{ width: isNursery ? '40%' : '42.8%', height: '100%', background: ac }} />
      </div>

      {/* Visual */}
      <div style={{ background: asg, padding: '28px 20px 24px', display: 'flex', flexDirection:'column', alignItems:'center', gap: 14 }}>
        <svg width="220" height="200" viewBox="0 0 220 200">
          <defs>
            <pattern id={waveId} width="40" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 Q10 0 20 10 T40 10" fill="none" stroke={waveStroke} strokeWidth="2" opacity=".55"/>
            </pattern>
          </defs>
          <rect x="86" y="0" width="48" height="28" rx="4" fill="#fff" stroke={FINO_C.ink3} strokeWidth="2"/>
          <path d="M100 28 Q98 42 104 58 Q100 72 106 86" stroke={waveStroke} strokeWidth="3" fill="none" strokeLinecap="round"/>
          <rect x="50" y="60" width="130" height="130" rx="10" fill="#fff" stroke={ac} strokeWidth="4"/>
          <rect x="50" y="122" width="130" height="68" fill={`url(#${waveId})`}/>
          <rect x="50" y="122" width="130" height="68" fill={ac} fillOpacity=".12"/>
          <text x="115" y="86" textAnchor="middle" fontSize="22" fontWeight="900" fill={ac}>{tankId}</text>
          <line x1="45" y1="122" x2="195" y2="122" stroke={ac} strokeWidth="2" strokeDasharray="4 4"/>
          <text x="198" y="125" fontSize="11" fill={ac} fontWeight="800">{isNursery?'60%':'80%'}</text>
        </svg>

        <div style={{ background:'#fff', padding:'8px 18px', borderRadius: 100, fontSize: 13, fontWeight: 700, color: ac, boxShadow:'0 2px 6px rgba(41,44,52,.06)', display:'inline-flex', alignItems:'center', gap: 8 }}>
          <span style={{ width: 10, height: 10, borderRadius: 5, background: ac }}/>
          Tank {tankId}
        </div>
      </div>

      {/* Instruction */}
      <div style={{ padding: 20, flex: 1, display:'flex', flexDirection:'column', gap: 14 }}>
        <div style={{ fontSize: 26, fontWeight: 800, color: FINO_C.ink, lineHeight: 1.25 }}>
          {instrTitle}
        </div>
        <div style={{ fontSize: 15, color: FINO_C.ink2, lineHeight: 1.6 }}>
          {instrBody}
        </div>

        <Card pad={14} color={asg} style={{ borderColor: agl }}>
          <div style={{ display:'flex', alignItems:'center', gap: 10 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill={ac}><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6" stroke="#fff" strokeWidth="2.5" fill="none"/></svg>
            <div style={{ fontSize: 13.5, color: ald, fontWeight: 600 }}>{tipText}</div>
          </div>
        </Card>

        <div style={{ marginTop: 'auto', display: 'flex', gap: 10 }}>
          <MButton variant="outline" color={ac}>← 이전</MButton>
          <div style={{ flex: 1 }}>
            <MButton full color={ac} icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M5 12l5 5L20 7"/></svg>}>완료 · 다음</MButton>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 06 LOG
// ─────────────────────────────────────────────────────────────
function ScrLog() {
  const days = [
    { d:'18', day:'월', kg: 14.2, tone:'ok',   delta:'+12%' },
    { d:'17', day:'일', kg: 12.6, tone:'ok',   delta:'+4%'  },
    { d:'16', day:'토', kg: 12.1, tone:'info', delta:'—'    },
    { d:'15', day:'금', kg:  9.8, tone:'warn', delta:'−18%' },
    { d:'14', day:'목', kg: 11.9, tone:'ok',   delta:'+2%'  },
    { d:'13', day:'수', kg: 11.6, tone:'info', delta:'—'    },
  ];
  const max = Math.max(...days.map(d=>d.kg));
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background: FINO_C.bg, fontFamily: FINO_F, overflow: 'auto' }}>
      <div style={{ background: '#fff', padding: '20px 20px 18px', borderBottom: '1px solid '+FINO_C.hairline }}>
        <div style={{ fontSize: 12, color: FINO_C.ink3, fontWeight: 700, letterSpacing: 1 }}>이번 주</div>
        <div style={{ display: 'flex', alignItems:'baseline', gap: 6, marginTop: 4 }}>
          <div style={{ fontSize: 38, fontWeight: 900, color: FINO_C.ink, fontVariantNumeric:'tabular-nums' }}>72.2</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: FINO_C.ink3 }}>kg</div>
          <div style={{ marginLeft: 'auto' }}>
            <Pill tone="ok" big>↑ +14%</Pill>
          </div>
        </div>
        {/* mini sparkline */}
        <div style={{ marginTop: 16, display:'flex', alignItems:'flex-end', gap: 4, height: 48 }}>
          {days.slice().reverse().map((d,i) => (
            <div key={i} style={{ flex:1, height: (d.kg/max*100)+'%', background: FINO_C.blue, borderRadius: '4px 4px 0 0', opacity: 0.25 + 0.75*(d.kg/max) }}/>
          ))}
        </div>
      </div>

      <div style={{ padding: 16, flex:1, display:'flex', flexDirection:'column', gap: 10 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: FINO_C.ink3, letterSpacing: 1, padding: '0 4px 4px' }}>일별 수확</div>
        {days.map((d,i) => (
          <Card key={i} pad={14}>
            <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10, background: FINO_C.blueSurface,
                display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
              }}>
                <div style={{ fontSize: 18, fontWeight: 900, color: FINO_C.blue, lineHeight: 1 }}>{d.d}</div>
                <div style={{ fontSize: 9, color: FINO_C.blue, fontWeight: 700, marginTop: 2 }}>{d.day}요</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ height: 8, background: FINO_C.hairline, borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ width: (d.kg/max*100)+'%', height: '100%', background: d.tone==='warn'?FINO_C.amber:FINO_C.blue }} />
                </div>
                <div style={{ display: 'flex', justifyContent:'space-between', alignItems:'baseline', marginTop: 6 }}>
                  <span style={{ fontSize: 18, fontWeight: 800, color: FINO_C.ink, fontVariantNumeric: 'tabular-nums' }}>{d.kg} kg</span>
                  <span style={{ fontSize: 12.5, fontWeight: 700, color: d.tone==='warn'?FINO_C.amberDeep:d.tone==='ok'?FINO_C.blue:FINO_C.ink3 }}>{d.delta}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 07 WATER ANALYSIS
// ─────────────────────────────────────────────────────────────
function ScrWater() {
  const ions = [
    { l:'pH',     v:'7.6',  tone:'warn' },
    { l:'EC',     v:'0.83', tone:'ok'   },
    { l:'HCO₃⁻',  v:'3.3',  tone:'warn' },
    { l:'Ca²⁺',   v:'2.0',  tone:'ok'   },
    { l:'Mg²⁺',   v:'0.5',  tone:'ok'   },
    { l:'Na⁺',    v:'0.9',  tone:'ok'   },
    { l:'Cl⁻',    v:'0.5',  tone:'ok'   },
    { l:'SO₄²⁻',  v:'1.1',  tone:'ok'   },
  ];
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background: FINO_C.bg, fontFamily: FINO_F, overflow: 'auto' }}>
      <div style={{ background: `linear-gradient(135deg, ${FINO_C.blueDeep} 0%, ${FINO_C.blue} 100%)`, color:'#fff', padding:'14px 20px 24px' }}>
        <div style={{ display:'flex', alignItems:'center', gap: 8, marginBottom: 6 }}>
          <button style={{ width:40, height:40, borderRadius:20, border:'none', background:'rgba(255,255,255,.15)' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M15 6l-6 6 6 6"/></svg>
          </button>
          <div style={{ flex:1 }}>
            <div style={{ fontSize: 11, opacity: .85, fontWeight: 700, letterSpacing: 1 }}>기술자 모드</div>
            <div style={{ fontSize: 22, fontWeight: 700 }}>원수 수질 분석</div>
          </div>
        </div>
        <div style={{ marginTop: 12, fontSize: 13, opacity: .9 }}>최근 업데이트: 2026년 3월 12일</div>
      </div>

      <div style={{ padding: 16, flex:1, display:'flex', flexDirection:'column', gap: 12 }}>
        <Card pad={0} style={{ overflow: 'hidden' }}>
          <div style={{ padding: '12px 16px', background: FINO_C.blueSurface, fontSize: 11.5, fontWeight: 800, color: FINO_C.blueDeep, letterSpacing: 1 }}>주요 지표</div>
          {ions.slice(0,4).map((io,i) => (
            <div key={i} style={{ padding: '14px 16px', borderTop: i?'1px solid '+FINO_C.hairline:'none', display:'flex', alignItems:'center', gap: 12 }}>
              <div style={{ flex: 1, fontSize: 15, fontWeight: 600, color: FINO_C.ink, fontFamily: 'monospace' }}>{io.l}</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: FINO_C.ink, fontVariantNumeric: 'tabular-nums', marginRight: 8 }}>{io.v}</div>
              <Pill tone={io.tone}>{io.tone==='ok'?'정상':'높음'}</Pill>
            </div>
          ))}
        </Card>

        <Card pad={0} style={{ overflow: 'hidden' }}>
          <div style={{ padding: '12px 16px', background: FINO_C.hairline, fontSize: 11.5, fontWeight: 800, color: FINO_C.ink2, letterSpacing: 1 }}>기타 이온</div>
          {ions.slice(4).map((io,i) => (
            <div key={i} style={{ padding: '14px 16px', borderTop: i?'1px solid '+FINO_C.hairline:'none', display:'flex', alignItems:'center', gap: 12 }}>
              <div style={{ flex: 1, fontSize: 15, fontWeight: 600, color: FINO_C.ink, fontFamily: 'monospace' }}>{io.l}</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: FINO_C.ink, fontVariantNumeric: 'tabular-nums', marginRight: 8 }}>{io.v}</div>
              <Pill tone="ok">정상</Pill>
            </div>
          ))}
        </Card>

        <MButton full icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>}>새 분석 결과 입력</MButton>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 08 SETTINGS
// ─────────────────────────────────────────────────────────────
function ScrSettings({ mode = 'main' }) {
  const isNursery = mode === 'nursery';
  const ac  = isNursery ? FINO_C.green       : FINO_C.blue;
  const asg = isNursery ? FINO_C.greenSurface : FINO_C.blueSurface;
  const langs = [
    { l:'한국어',           code:'KO', on: true  },
    { l:"O'zbek (lotin)", code:'UZ', on: false },
    { l:'Ўзбек (кирилл)', code:'УЗ', on: false },
    { l:'Русский',        code:'RU', on: false },
    { l:'English',        code:'EN', on: false },
  ];
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background: FINO_C.bg, fontFamily: FINO_F, overflow: 'auto' }}>
      <div style={{ background:'#fff', padding:'20px 20px 16px', borderBottom:'1px solid '+FINO_C.hairline }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: FINO_C.ink }}>설정</div>
        {isNursery && (
          <div style={{ marginTop: 4, display:'inline-flex', alignItems:'center', gap: 6, padding:'3px 10px', borderRadius: 100, background: FINO_C.greenSurface, fontSize: 11.5, fontWeight: 700, color: FINO_C.green }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: FINO_C.green }}/>
            육묘장 모드
          </div>
        )}
      </div>

      <div style={{ padding: 16, flex:1, display:'flex', flexDirection:'column', gap: 14 }}>
        <Card pad={18}>
          <div style={{ display:'flex', alignItems:'center', gap: 14 }}>
            <div style={{ width: 56, height: 56, borderRadius: 28, background: asg, color: ac, display:'flex', alignItems:'center', justifyContent:'center', fontSize: 22, fontWeight: 900 }}>A</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 17, fontWeight: 700, color: FINO_C.ink }}>아크말 카리모프</div>
              <div style={{ fontSize: 12.5, color: FINO_C.ink3, marginTop: 2 }}>타슈켄트 농장 #14 · 1,200 m²</div>
            </div>
          </div>
        </Card>

        <Card pad={0} style={{ overflow: 'hidden' }}>
          <div style={{ padding: '12px 18px', fontSize: 11.5, fontWeight: 800, color: FINO_C.ink3, letterSpacing: 1 }}>언어</div>
          {langs.map((lg,i) => (
            <div key={i} style={{ padding: '14px 18px', borderTop: '1px solid '+FINO_C.hairline, display:'flex', alignItems:'center', gap: 12 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: lg.on ? ac : FINO_C.hairline,
                color: lg.on ? '#fff' : FINO_C.ink3,
                display:'flex', alignItems:'center', justifyContent:'center',
                fontWeight: 800, fontSize: 11, letterSpacing: .5,
              }}>{lg.code}</div>
              <div style={{ flex:1, fontSize: 15, fontWeight: 600, color: FINO_C.ink }}>{lg.l}</div>
              {lg.on && <svg width="22" height="22" viewBox="0 0 24 24" fill={ac}><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6" stroke="#fff" strokeWidth="2.5" fill="none"/></svg>}
            </div>
          ))}
        </Card>

        <Card pad={0} style={{ overflow: 'hidden' }}>
          {[
            { l:'알림',              v:'켜짐'     },
            { l:'음성 안내',         v:'켜짐'     },
            { l:'기술자 모드',         v:'꺼짐'     },
            { l:'도움말 · 사용 설명서', v:''           },
            { l:'FINO 정보 · v13.0',     v:''           },
          ].map((row,i) => (
            <div key={i} style={{ padding:'16px 18px', borderTop: i?'1px solid '+FINO_C.hairline:'none', display:'flex', alignItems:'center', gap:12 }}>
              <div style={{ flex:1, fontSize: 15, fontWeight: 500, color: FINO_C.ink }}>{row.l}</div>
              {row.v && <div style={{ fontSize: 12.5, color: FINO_C.ink3 }}>{row.v}</div>}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={FINO_C.ink4} strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
            </div>
          ))}
        </Card>

        <div style={{ textAlign:'center', padding: '20px 0 8px', display:'flex', flexDirection:'column', alignItems:'center', gap: 8 }}>
          <FirmmitLogo fill={FINO_C.ink3} height={14} />
          <div style={{ fontSize: 11, color: FINO_C.ink3 }}>
            Agricultural Research Institute<br/>Tashkent, Uzbekistan · 2026
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// MODE SELECT — 두 모드 선택 카드
// ─────────────────────────────────────────────────────────────
function ScrModeSelect() {
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background: FINO_C.bg, fontFamily: FINO_F }}>
      <div style={{ background: '#fff', padding: '28px 24px 20px', borderBottom: '1px solid '+FINO_C.hairline, textAlign: 'center' }}>
        <div style={{ display:'flex', justifyContent:'center', marginBottom: 16 }}>
          <FirmmitLogo fill={FINO_C.ink} height={18} />
        </div>
        <div style={{ fontSize: 26, fontWeight: 800, color: FINO_C.ink, lineHeight: 1.2 }}>재배 모드 선택</div>
        <div style={{ fontSize: 14, color: FINO_C.ink3, marginTop: 8 }}>현재 진행 중인 재배 단계를 선택하세요</div>
      </div>

      <div style={{ padding: 20, display:'flex', flexDirection:'column', gap: 16, flex: 1 }}>
        {/* Nursery Card */}
        <div style={{
          borderRadius: 20, overflow: 'hidden',
          border: '2px solid '+FINO_C.greenLight,
          boxShadow: '0 4px 20px rgba(22,163,74,.12)',
        }}>
          <div style={{ background: 'linear-gradient(135deg, #14532D 0%, #16A34A 100%)', padding: '24px 24px 20px', color: '#fff' }}>
            <div style={{ display:'flex', alignItems:'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(255,255,255,.18)', display:'flex', alignItems:'center', justifyContent:'center', fontSize: 24 }}>🌱</div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: .3 }}>육묘장 모드</div>
                <div style={{ fontSize: 12, opacity: .85, fontWeight: 600, letterSpacing: .5 }}>Nursery Mode</div>
              </div>
            </div>
            <div style={{ fontSize: 13, opacity: .9, lineHeight: 1.6 }}>
              6월~8월 · 8단계 (S0 → S5-3)<br/>모주 정식부터 자묘 출하까지
            </div>
          </div>
          <div style={{ background: FINO_C.greenSurface, padding: '14px 24px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <div style={{ display:'flex', gap: 6, flexWrap:'wrap' }}>
              {['S0','S1','S2','S3','S4','S5-1','S5-2','S5-3'].map(s => (
                <span key={s} style={{ fontSize: 10.5, fontWeight: 700, color: FINO_C.greenDeep, background: FINO_C.greenLight, padding:'2px 7px', borderRadius: 100 }}>{s}</span>
              ))}
            </div>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={FINO_C.green} strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </div>
        </div>

        {/* Main Crop Card */}
        <div style={{
          borderRadius: 20, overflow: 'hidden',
          border: '2px solid '+FINO_C.blueLight,
          boxShadow: '0 4px 20px rgba(51,101,255,.12)',
        }}>
          <div style={{ background: 'linear-gradient(135deg, #1E3FA8 0%, #3365FF 100%)', padding: '24px 24px 20px', color: '#fff' }}>
            <div style={{ display:'flex', alignItems:'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(255,255,255,.18)', display:'flex', alignItems:'center', justifyContent:'center', fontSize: 24 }}>🍓</div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: .3 }}>본격재배 모드</div>
                <div style={{ fontSize: 12, opacity: .85, fontWeight: 600, letterSpacing: .5 }}>Main Crop Mode</div>
              </div>
            </div>
            <div style={{ fontSize: 13, opacity: .9, lineHeight: 1.6 }}>
              9월~5월 · 4단계 (S1 → S4)<br/>모종부터 수확까지 전 과정
            </div>
          </div>
          <div style={{ background: FINO_C.blueSurface, padding: '14px 24px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <div style={{ display:'flex', gap: 6 }}>
              {['S1','S2','S3','S4'].map(s => (
                <span key={s} style={{ fontSize: 10.5, fontWeight: 700, color: FINO_C.blueDeep, background: FINO_C.blueLight, padding:'2px 7px', borderRadius: 100 }}>{s}</span>
              ))}
            </div>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={FINO_C.blue} strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </div>
        </div>

        <div style={{ marginTop: 'auto', textAlign: 'center', fontSize: 12.5, color: FINO_C.ink3, padding: '8px 0' }}>
          모드는 설정에서 언제든 변경할 수 있습니다
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// NURSERY HOME
// ─────────────────────────────────────────────────────────────
function ScrNurseryHome({ stageIdx = 2 }) {
  const stage = STAGES_NURSERY[stageIdx] || STAGES_NURSERY[2];
  const totalStages = STAGES_NURSERY.length;
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background: FINO_C.bg, fontFamily: FINO_F, overflow: 'auto' }}>
      {/* Green header */}
      <div style={{ background: 'linear-gradient(135deg, #14532D 0%, #16A34A 100%)', color: '#fff', padding: '18px 20px 32px' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom: 14 }}>
          <FirmmitLogo fill="#fff" height={16} />
          <div style={{ display:'flex', alignItems:'center', gap: 8 }}>
            <div style={{ padding:'4px 10px', borderRadius: 100, background: 'rgba(255,255,255,.2)', fontSize: 12, fontWeight: 700, display:'flex', alignItems:'center', gap: 5 }}>
              <span>🌱</span> 육묘장
            </div>
            <div style={{ width: 36, height: 36, borderRadius: 18, background: 'rgba(255,255,255,.18)', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M15 17h5l-1.4-1.4A2 2 0 0118 14V11a6 6 0 00-12 0v3a2 2 0 01-.6 1.6L4 17h5m6 0a3 3 0 11-6 0"/></svg>
            </div>
          </div>
        </div>
        <div style={{ fontSize: 12, opacity: .9, letterSpacing: 1, fontWeight: 600 }}>오늘 · 7월 5일</div>
        <div style={{ fontSize: 26, fontWeight: 700, marginTop: 2 }}>안녕하세요, 아크말 님</div>
      </div>

      <div style={{ padding: '0 16px 16px', marginTop: -20, display:'flex', flexDirection:'column', gap: 14 }}>
        {/* Current stage card */}
        <Card pad={20}>
          <div style={{ display:'flex', alignItems:'center', gap: 14, marginBottom: 14 }}>
            <div style={{
              width: 56, height: 56, borderRadius: 14, background: stage.bg,
              display:'flex', alignItems:'center', justifyContent:'center',
              color: stage.c, fontWeight: 900, fontSize: stage.id.length > 2 ? 13 : 18, letterSpacing: .3,
            }}>{stage.id}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, color: FINO_C.ink3, fontWeight: 600, letterSpacing: 1 }}>현재 단계</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: FINO_C.ink, marginTop: 2 }}>{stage.l}</div>
              <div style={{ fontSize: 13, color: FINO_C.ink3, marginTop: 2 }}>{stage.dates} · {stage.days}</div>
            </div>
            <div style={{ padding:'4px 10px', borderRadius: 100, background: FINO_C.greenSurface, fontSize: 12, fontWeight: 700, color: FINO_C.green }}>
              EC {stage.EC}
            </div>
          </div>
          {/* Stage progress */}
          <div style={{ display:'grid', gridTemplateColumns:`repeat(${totalStages},1fr)`, gap: 4 }}>
            {STAGES_NURSERY.map((s,i) => (
              <div key={s.id} style={{
                height: i === stageIdx ? 8 : 5,
                borderRadius: 3,
                background: i <= stageIdx ? s.c : FINO_C.hairline,
              }}/>
            ))}
          </div>
          <div style={{ display:'grid', gridTemplateColumns:`repeat(${totalStages},1fr)`, marginTop: 6, fontSize: 10, fontWeight: 700, textAlign:'center', letterSpacing: .3, color: FINO_C.ink3 }}>
            {STAGES_NURSERY.map((s,i) => (
              <div key={s.id} style={{ color: i === stageIdx ? s.c : FINO_C.ink3, overflow:'hidden', lineHeight: 1.2 }}>
                {s.id.includes('-') ? <>{s.id.split('-')[0]}-<br/>{s.id.split('-')[1]}</> : s.id}
              </div>
            ))}
          </div>
        </Card>

        {/* Today's prescription quick */}
        <Card pad={0} style={{ overflow: 'hidden' }}>
          <div style={{ padding:'14px 20px', background: FINO_C.greenSurface, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: FINO_C.greenDeep, letterSpacing: 1 }}>오늘의 육묘 처방</div>
            <div style={{ fontSize: 11.5, color: FINO_C.ink3, fontWeight: 600 }}>600 L</div>
          </div>
          <div style={{ padding: 16 }}>
            {[
              { tank:'A', name:'질산칼슘 (저농도)', amount:'2.1', unit:'kg', c: FINO_C.green },
              { tank:'B', name:'칼륨 + 마그네슘',   amount:'1.8', unit:'kg', c: '#15803D' },
              { tank:'C', name:'질산 (소량)',        amount:'0.2', unit:'L',  c: FINO_C.amber },
            ].map((t,i) => (
              <div key={t.tank} style={{ display:'flex', alignItems:'center', gap:14, padding:'10px 0', borderBottom: i<2?'1px solid '+FINO_C.hairline:'none' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: t.c, color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontWeight: 900, fontSize: 18 }}>{t.tank}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: FINO_C.ink }}>{t.name}</div>
                  {t.tank === 'C' && <Pill tone="warn" style={{ marginTop: 4 }}>⚠ 산</Pill>}
                </div>
                <div style={{ textAlign:'right' }}>
                  <span style={{ fontSize: 20, fontWeight: 800, color: FINO_C.ink, fontVariantNumeric:'tabular-nums' }}>{t.amount}</span>
                  <span style={{ fontSize: 13, color: FINO_C.ink3, fontWeight: 600, marginLeft: 3 }}>{t.unit}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding:'0 16px 16px' }}>
            <MButton full color={FINO_C.green} icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M5 12l5 5L20 7"/></svg>}>처방 상세 보기</MButton>
          </div>
        </Card>

        {/* Two tiles */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 12 }}>
          <Card pad={16}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={FINO_C.green} strokeWidth="2"><path d="M12 2c-3 5-7 8-7 13a7 7 0 0014 0c0-5-4-8-7-13z"/></svg>
            <div style={{ fontSize: 11, color: FINO_C.ink3, marginTop: 8, fontWeight: 700, letterSpacing: .5 }}>자묘 수</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: FINO_C.ink, marginTop: 2 }}>1,240주</div>
            <div style={{ fontSize: 11, color: FINO_C.green, marginTop: 2, fontWeight: 700 }}>↑ 활착률 94%</div>
          </Card>
          <Card pad={16}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={FINO_C.amber} strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
            <div style={{ fontSize: 11, color: FINO_C.ink3, marginTop: 8, fontWeight: 700, letterSpacing: .5 }}>다음 단계</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: FINO_C.ink, marginTop: 2 }}>11일</div>
            <div style={{ fontSize: 11, color: FINO_C.amber, marginTop: 2, fontWeight: 700 }}>→ {STAGES_NURSERY[Math.min(stageIdx+1,totalStages-1)].l}</div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// NURSERY RX
// ─────────────────────────────────────────────────────────────
function ScrNurseryRx({ stageIdx = 2 }) {
  const stage = STAGES_NURSERY[stageIdx] || STAGES_NURSERY[2];
  const items = [
    { tank:'A', formula:'Ca(NO₃)₂', name:'질산칼슘',     amount:'2.1', unit:'kg' },
    { tank:'A', formula:'Fe-DTPA',  name:'철-DTPA',      amount:'80',  unit:'g'  },
    { tank:'B', formula:'KNO₃',     name:'질산칼륨',     amount:'1.2', unit:'kg' },
    { tank:'B', formula:'KH₂PO₄',   name:'제1인산칼륨',  amount:'0.5', unit:'kg' },
    { tank:'B', formula:'MgSO₄',    name:'황산마그네슘',  amount:'0.4', unit:'kg' },
    { tank:'C', formula:'HNO₃ 60%', name:'질산',         amount:'0.2', unit:'L'  },
  ];
  const tankColors = { A: FINO_C.green, B: '#15803D', C: FINO_C.amber };
  const tankBgs    = { A: FINO_C.greenSurface, B: FINO_C.greenLight, C: FINO_C.amberLight };
  const tankNames  = { A:'칼슘 그룹 (저농도)', B:'주요 비료', C:'산 (소량)' };
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background: FINO_C.bg, fontFamily: FINO_F, overflow: 'auto' }}>
      <div style={{ background:'#fff', padding:'14px 20px 18px', borderBottom:'1px solid '+FINO_C.hairline }}>
        <div style={{ display:'flex', alignItems:'center', gap: 8, marginBottom: 10 }}>
          <button style={{ width:40, height:40, borderRadius:20, border:'none', background:'transparent' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={FINO_C.ink} strokeWidth="2"><path d="M15 6l-6 6 6 6"/></svg>
          </button>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 21, fontWeight: 700, color: FINO_C.ink }}>육묘장 처방</div>
            <div style={{ fontSize: 13, color: FINO_C.ink3, marginTop: 2 }}>{stage.id} · {stage.l} · 600 L</div>
          </div>
        </div>
        <div style={{ display:'flex', gap: 6, flexWrap:'wrap' }}>
          <Pill tone="ok">EC {stage.EC} ✓</Pill>
          <Pill tone="info">저농도 육묘</Pill>
          <Pill tone="info">pH ~6.0</Pill>
          <Pill tone="warn">원액 농축 1:100 희석</Pill>
        </div>
      </div>

      <div style={{ flex:1, padding: 16, display:'flex', flexDirection:'column', gap: 14 }}>
        {['A','B','C'].map(tk => {
          const tItems = items.filter(i => i.tank === tk);
          return (
            <Card key={tk} pad={0} style={{ overflow:'hidden' }}>
              <div style={{ padding:'14px 18px', background: tankBgs[tk], display:'flex', alignItems:'center', gap:12, borderBottom:'1px solid '+FINO_C.hairline }}>
                <div style={{ width:40, height:40, borderRadius:10, background: tankColors[tk], color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:900, fontSize:22 }}>{tk}</div>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:15, fontWeight:800, color: tankColors[tk], letterSpacing:.5 }}>탱크 {tk}</div>
                  <div style={{ fontSize:13, color: FINO_C.ink3 }}>{tankNames[tk]}</div>
                </div>
                <div style={{ display:'flex', alignItems:'center', gap: 6 }}>
                  {tk === 'C' && <Pill tone="warn">⚠ 산</Pill>}
                  <div style={{ fontSize:11, color: FINO_C.ink3, fontWeight:700 }}>{tItems.length}개 성분</div>
                </div>
              </div>
              {tItems.map((it,i) => (
                <div key={i} style={{ padding:'13px 18px', borderTop: i?'1px solid '+FINO_C.hairline:'none', display:'flex', alignItems:'center', gap:14 }}>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ fontSize:15, fontWeight:600, color: FINO_C.ink }}>{it.name}</div>
                    <div style={{ fontSize:11.5, color: FINO_C.ink3, fontFamily:'monospace', marginTop:2 }}>{it.formula}</div>
                  </div>
                  <div style={{ textAlign:'right' }}>
                    <span style={{ fontSize:22, fontWeight:800, color: FINO_C.ink, fontVariantNumeric:'tabular-nums' }}>{it.amount}</span>
                    <span style={{ fontSize:13, color: FINO_C.ink3, fontWeight:600, marginLeft:3 }}>{it.unit}</span>
                  </div>
                </div>
              ))}
            </Card>
          );
        })}

        <Card pad={14} color={FINO_C.greenSurface} style={{ borderColor: FINO_C.greenLight }}>
          <div style={{ display:'flex', alignItems:'flex-start', gap:12 }}>
            <div style={{ width:28, height:28, borderRadius:14, background: FINO_C.green, color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:900, fontSize:14, flexShrink:0 }}>i</div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:14.5, fontWeight:700, color: FINO_C.greenDeep }}>육묘장 EC는 본격재배보다 낮게</div>
              <div style={{ fontSize:13, color: FINO_C.ink2, marginTop:4, lineHeight:1.5 }}>러너·자묘 활착기에 높은 EC는 뿌리 손상을 유발합니다.</div>
            </div>
          </div>
        </Card>

        <MButton full color={FINO_C.green} icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><polygon points="6 3 20 12 6 21 6 3"/></svg>}>
          조제 가이드 시작
        </MButton>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// NURSERY LOG — 자묘 기록 주간
// ─────────────────────────────────────────────────────────────
function ScrNurseryLog() {
  const weeks = [
    { label:'7/1~7/7',  runners:48,  rooted:41, rate:85, tone:'ok'   },
    { label:'6/24~6/30',runners:36,  rooted:29, rate:81, tone:'ok'   },
    { label:'6/17~6/23',runners:22,  rooted:17, rate:77, tone:'warn' },
    { label:'6/10~6/16',runners:8,   rooted:7,  rate:88, tone:'ok'   },
  ];
  const maxRunners = Math.max(...weeks.map(w=>w.runners));
  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', background: FINO_C.bg, fontFamily: FINO_F, overflow: 'auto' }}>
      <div style={{ background:'#fff', padding:'20px 20px 18px', borderBottom:'1px solid '+FINO_C.hairline }}>
        <div style={{ fontSize:12, color: FINO_C.ink3, fontWeight:700, letterSpacing:1 }}>이번 달 누계</div>
        <div style={{ display:'flex', alignItems:'baseline', gap:6, marginTop:4 }}>
          <div style={{ fontSize:38, fontWeight:900, color: FINO_C.ink, fontVariantNumeric:'tabular-nums' }}>1,240</div>
          <div style={{ fontSize:18, fontWeight:700, color: FINO_C.ink3 }}>주</div>
          <div style={{ marginLeft:'auto' }}><Pill tone="ok" big>활착률 94%</Pill></div>
        </div>
        {/* mini sparkline */}
        <div style={{ marginTop:16, display:'flex', alignItems:'flex-end', gap:4, height:48 }}>
          {weeks.slice().reverse().map((w,i) => (
            <div key={i} style={{ flex:1, height:(w.runners/maxRunners*100)+'%', background: FINO_C.green, borderRadius:'4px 4px 0 0', opacity:0.25+0.75*(w.runners/maxRunners) }}/>
          ))}
        </div>
      </div>

      <div style={{ padding:16, flex:1, display:'flex', flexDirection:'column', gap:10 }}>
        <div style={{ fontSize:12, fontWeight:700, color: FINO_C.ink3, letterSpacing:1, padding:'0 4px 4px' }}>주간 자묘 발근 현황</div>
        {weeks.map((w,i) => (
          <Card key={i} pad={14}>
            <div style={{ display:'flex', alignItems:'center', gap:12 }}>
              <div style={{ width:44, height:44, borderRadius:10, background: FINO_C.greenSurface, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
                <div style={{ fontSize:13, fontWeight:900, color: FINO_C.green, lineHeight:1 }}>W{i+1}</div>
                <div style={{ fontSize:8, color: FINO_C.green, fontWeight:700, marginTop:2 }}>주간</div>
              </div>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:11.5, color: FINO_C.ink3, fontWeight:600, marginBottom:4 }}>{w.label}</div>
                <div style={{ height:7, background: FINO_C.hairline, borderRadius:4, overflow:'hidden' }}>
                  <div style={{ width:w.rate+'%', height:'100%', background: w.tone==='warn'?FINO_C.amber:FINO_C.green }}/>
                </div>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginTop:5 }}>
                  <span style={{ fontSize:15, fontWeight:800, color: FINO_C.ink }}>{w.rooted} / {w.runners} 주</span>
                  <span style={{ fontSize:12.5, fontWeight:700, color: w.tone==='warn'?FINO_C.amberDeep:FINO_C.green }}>발근률 {w.rate}%</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ── Frame ──
function Phone({ children, navActive, navMode = 'main', hideNav }) {
  return (
    <AndroidDevice>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
        <div style={{ flex: 1, display:'flex', flexDirection:'column', minHeight: 0, overflow: 'hidden' }}>
          {children}
        </div>
        {!hideNav && <BottomNav active={navActive} mode={navMode} />}
      </div>
    </AndroidDevice>
  );
}

Object.assign(window, {
  FINO_C, FINO_F, FINO_STAGES, STAGES_NURSERY,
  FirmmitLogo, Pill, Card, MButton, BottomNav, Phone,
  ScrSplash, ScrLanguage, ScrOnboarding, ScrModeSelect,
  ScrHome, ScrRx, ScrGuide, ScrLog, ScrWater, ScrSettings,
  ScrNurseryHome, ScrNurseryRx, ScrNurseryLog,
});
