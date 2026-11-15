const f = (n: number) => (Math.round(n * 100) / 100).toString();
const P = (x: number, y: number) => `${f(x)} ${f(y)}`;
export const rad = (d: number) => (d * Math.PI) / 180;
// Coordenadas polares con el eje Y hacia arriba: ángulos positivos van en sentido contrario a las agujas del reloj.
export const pol = (r: number, a: number, cx = 0, cy = 0): [number, number] => [cx + r * Math.cos(rad(a)), cy - r * Math.sin(rad(a))];

/** Contorno de un engranaje como trazo SVG: n dientes, radio de punta rt, de base rb y agujero central `inner`. */
export function gearD(cx: number, cy: number, rt: number, rb: number, n: number, phase: number, inner: number) {
  const step = 360 / n, hb = step * 0.3, ht = step * 0.19;
  let d = '';
  for (let k = 0; k < n; k++) {
    const c = phase + k * step;
    const b1 = pol(rb, c - hb, cx, cy), t1 = pol(rt, c - ht, cx, cy), t2 = pol(rt, c + ht, cx, cy);
    const b2 = pol(rb, c + hb, cx, cy), b3 = pol(rb, c + step - hb, cx, cy);
    d += (k === 0 ? `M${P(...b1)}` : '') + `L${P(...t1)}A${f(rt)} ${f(rt)} 0 0 0 ${P(...t2)}L${P(...b2)}A${f(rb)} ${f(rb)} 0 0 0 ${P(...b3)}`;
  }
  d += 'Z';
  if (inner > 0) d += `M${P(cx + inner, cy)}A${f(inner)} ${f(inner)} 0 1 1 ${P(cx - inner, cy)}A${f(inner)} ${f(inner)} 0 1 1 ${P(cx + inner, cy)}Z`;
  return d;
}
