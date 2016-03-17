// Implement a Photo object that allows you to store strings that represent a photo. 
// Create an Album object that can contain many Photo objects in its photos attribute. 
// Each Album should allow you to add a new photo, list all photos, and access a specific photo 
// by the order it was added. Each Photo should tell you the photo's file name and the location 
// the photo was taken in. 
// Create instances of each object defined to prove that your object model works.


function Photo(name, location) {
	this.name = name;
	this.location = location;
}

function Album(name){
	this.name = name;
	this.photos = [];

	this.add_photo = function add(photo){
		this.photos.push(photo);
	};

	this.display_photos = function display(){
		return this.photos;

		for(var i = 0; i < this.photos.length; i++) {
			console.log(this.photos[i].name + " " + this.photos[i].location)
		}
	}

	this.search_photos = function search(index){
		return this.photos[index];
	}
}

new_album = new Album("pics")
// now im pushing the photos in the array
new_album.add_photo(new Photo("photo 1", "london"))
new_album.add_photo(new Photo("photo 2", "LA"))
console.log(new_album.display_photos())
// console.log(new_album.search_photos(1))



