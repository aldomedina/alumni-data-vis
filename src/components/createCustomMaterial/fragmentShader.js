const fragmentShader = /*glsl*/ `
vec3 fTexture = vec3(0.,0.,0.);
// vec3 col_1 = vec3(0.0352941176470588,0.219607843137255,0.933333333333333);
// vec3 col_2 = vec3(1,0.00392156862745098,0.109803921568627);
// vec3 col_3 = vec3(0.0901960784313726,0.223529411764706,0.0470588235294118);
// vec3 col_4 = vec3(0.862745098039216,0.588235294117647,0.952941176470588);
vec3 col_1 = vec3(1.8, 0.5, 0.4);
vec3 col_2 = vec3(0.2, 1.4, 2.2);
vec3 col_3 = vec3(2.0, 1.5, 1.5);
vec3 col_4 = vec3(.50, 0.5, 2.25);




if(vPostgrado == 0.) {
  fTexture = col_1;
}

if(vPostgrado == 1.) {
  fTexture = col_2;
}

if(vPostgrado == 2.) {
  fTexture = col_3;
}

if (vPregrado == .0) {
  float lineWidth = 1.4;
  float spacing = 0.07;
  float pattern = step(0.5 * lineWidth, fract(vUv.y * (1.0/spacing)));
  fTexture = mix(fTexture, col_4, pattern );
}

if(vPregrado == 1.) {
  float pattern = step(0.5, (sin(vUv.x * 30.) * sin(vUv.y * 30.) + 1.) / 2.);
  fTexture =  mix(fTexture, col_4, pattern);
}

if(vPregrado == 2.) {
  vec2 center = vec2(0.5);
  float radius = 0.03;
  float spacing = 0.14;

  vec2 repeatedUV = mod(vUv, spacing) - center * spacing;
  float distToCenter = length(repeatedUV);
  float pattern = step(distToCenter, radius);

  fTexture =  mix(fTexture, col_4, pattern);
}
if(vPregrado == 3.) {
  float lineWidth = 0.1;
  float spacing = 0.15;

  float lineX = step(0.5 * lineWidth, fract(vUv.x * (1.0/spacing)));
  float lineY = step(0.5 * lineWidth, fract(vUv.y * (1.0/spacing)));
  float pattern = 1.0 - lineX * lineY;

  fTexture =  mix(fTexture, col_4, pattern);
}

vec4 diffuseColor = vec4( fTexture, opacity );
`;

export default fragmentShader;
