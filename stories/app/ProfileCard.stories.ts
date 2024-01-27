import ProfileCard from "@/components/search/ProfileCard";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProfileCard> = {
    component: ProfileCard,
    title: "ProfileCard",
    parameters: {
        backgrounds: {
            default: "twitter",
        },
    },
};
export default meta;

export const Primary: StoryObj = {
    args: {
        title: "Name Name Name",
        description: "",
        imageUrl: "/identicon.png",
    },
};

export const LongDescription: StoryObj = {
    args: {
        title: "Name Name",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur eros lacus, vitae mattis nibh venenatis quis. Suspendisse potenti. Donec ultrices, libero quis laoreet maximus, enim velit tincidunt libero, sed feugiat urna nulla eu mi. Nunc vitae turpis quis erat fringilla tristique. Mauris condimentum nec odio a congue. Nulla eleifend dui iaculis risus auctor eleifend. Sed viverra arcu vitae mauris sagittis efficitur. Proin sed facilisis felis. Vestibulum fringilla nulla sagittis, ullamcorper erat sit amet, molestie erat. Vestibulum placerat, ligula eget porttitor sagittis, ipsum libero volutpat tortor, eu lacinia massa magna vel nisl. Maecenas aliquet nunc quam, ut vehicula velit ultrices eu.",
        imageUrl: "/identicon.png",
    },
};
