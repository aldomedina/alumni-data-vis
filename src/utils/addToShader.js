const addToShader = (shaderCode, where, wath) => {
  return (shaderCode = shaderCode.replace(where, where + wath));
};
export default addToShader;
