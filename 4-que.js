function TriangleArea(side1, side2, side3) {
  let perim, area, sum;
  perim = (side1 + side2 + side3) / 2;
  sum = (perim * ((perim - side1) * (perim - side2) * (perim - side3)));
  area = Math.sqrt(sum);
  console.log("Area Of Triangle is :" + area);
}
TriangleArea(5, 6, 7);