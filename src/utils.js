// utils.js
export function getBtnColor(type) {
  switch (type) {
    case "View All Services":
    case "View Details":
    case "View All Projects":
    case "Send Message":
      return ["white", "#5840ba"]; 
    default:
      return ["black", "white"];
  }
}
