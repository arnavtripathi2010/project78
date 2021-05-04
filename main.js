Image_array
["26-268437_family-clipart-only-child-only-father-clipart.png", "mother.png", "brother.png", "sister.JPEG"]
name_array
["Ashutosh prasad", "Rakhi tripathi", "Arnav tripathi", "ameya tripathi"]
function nextslide() {
document.getElementById("Image_array").src = Image_array[i];
  document.getElementById("name_array").innerHTML = name_array[i];
  i++;
}
