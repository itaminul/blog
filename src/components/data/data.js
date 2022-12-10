import generateLoremIpsum from "../helpers/loremlpsum";

const data = Array.from(Array(21), (x, index) => {
  return {
    index,
    title: generateLoremIpsum(3),
    description: generateLoremIpsum(8)
  };
});

export default data;
