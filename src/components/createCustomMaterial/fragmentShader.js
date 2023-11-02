const coloresVibrantes = /*glsl*/ `
  // naranja, celeste, rosado, azul
  vec3 col_1 = vec3(1.8, 0.5, 0.4);
  vec3 col_2 = vec3(0.2, 1.4, 2.2);
  vec3 col_3 = vec3(2.0, 1.5, 1.5);
  vec3 col_4 = vec3(.50, 0.5, 2.25);
`;

const coloresDesignLab = /*glsl*/ `
  vec3 col_1 = vec3(.45, 0.45, 0.45);
  vec3 col_2 = vec3(0.32, 0.32, 0.32);
  vec3 col_3 = vec3(0.15, 0.15, 0.15);
  vec3 col_4 = vec3(0.01,0.01,0.01);
  vec3 col_5 = vec3(.97, 0.55, 0.0);
`;

const ACTIVE_COLOR = coloresDesignLab;

const fragmentShader = /*glsl*/ `
vec3 fTexture = vec3(0.,0.,0.);

${ACTIVE_COLOR}

if(vPostgrado == 0.) {
  fTexture = col_1;
}

if(vPostgrado == 1.) {
  fTexture = col_2;
}

if(vPostgrado == 2.) {
  fTexture = col_3;
}
if(vPostgrado == 3.) {
  fTexture = col_4;
}

if (vPregrado == .0) {
  float lineWidth = 1.4;
  float spacing = 0.5;
  float pattern = step(0.5 * lineWidth, fract(vUv.y * (1.0/spacing)));
  fTexture = mix(fTexture, col_5, pattern );
}


if(vPregrado == 1.) {
  float pattern = step(0.5, (sin(vUv.x * 30.) * sin(vUv.y * 30.) + 1.) / 2.);
  fTexture =  mix(fTexture, col_5, pattern);
}

if(vPregrado == 2.) {
  float lineWidth = 1.7;
  float spacing = 0.09;
  float pattern = step(0.5 * lineWidth, fract(vUv.y * (1.0/spacing)));
  fTexture = mix(fTexture, col_5, pattern );
}

if(vPregrado == 3.) {
  float lineWidth = 0.1;
  float spacing = 0.15;

  float lineX = step(0.5 * lineWidth, fract(vUv.x * (1.0/spacing)));
  float lineY = step(0.5 * lineWidth, fract(vUv.y * (1.0/spacing)));
  float pattern = 1.0 - lineX * lineY;

  fTexture =  mix(fTexture, col_5, pattern);
}

if(vPregrado == 4.) {
  vec2 center = vec2(0.5);
  float radius = 0.03;
  float spacing = 0.25;

  vec2 repeatedUV = mod(vUv, spacing) - center * spacing;
  float distToCenter = length(repeatedUV);
  float pattern = step(distToCenter, radius);

  fTexture =  mix(fTexture, col_5, pattern);
}

vec4 diffuseColor = vec4( fTexture, opacity );
`;

export default fragmentShader;
