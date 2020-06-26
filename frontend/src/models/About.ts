import avatarImage from "../assets/avatar-image.jpg";

export interface ProfileModel {
  name: string;
  imageUrl: string;
  contents: string[];
}

export const profileData: ProfileModel = {
  name: "Andrew Fanggara",
  imageUrl: avatarImage,
  contents: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis volutpat est velit egestas. Odio euismod lacinia at quis risus sed vulputate. Volutpat sed cras ornare arcu dui vivamus arcu felis. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Volutpat odio facilisis mauris sit. Ut ornare lectus sit amet est placerat. Elementum tempus egestas sed sed risus. Placerat duis ultricies lacus sed turpis. Ut tellus elementum sagittis vitae et leo. Massa id neque aliquam vestibulum morbi blandit cursus risus.",
    "Consequat nisl vel pretium lectus quam id leo. Lacinia quis vel eros donec ac odio. A cras semper auctor neque vitae tempus quam pellentesque nec. Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper. Lectus quam id leo in vitae turpis massa sed. Enim sit amet venenatis urna cursus eget nunc scelerisque. Scelerisque fermentum dui faucibus in. Dictum at tempor commodo ullamcorper a. Sed velit dignissim sodales ut eu sem integer vitae justo. Amet commodo nulla facilisi nullam. Dolor sit amet consectetur adipiscing elit. Non enim praesent elementum facilisis leo. Turpis in eu mi bibendum neque egestas congue quisque egestas. Venenatis urna cursus eget nunc scelerisque viverra. Gravida neque convallis a cras semper auctor neque vitae tempus. A erat nam at lectus. Amet nulla facilisi morbi tempus iaculis.",
  ],
};
