import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.tsx";
import HomePage from "./pages/HomePage.tsx";
import UserTypePage from "./pages/UserTypePage.tsx";
import SeekSignUpPage from "./pages/SeekSignUp.tsx";
import GiveSignUpPage from "./pages/GiveSignUp.tsx";
import LoginPage from "./pages/LoginPage.tsx";

import "./index.css";
import ProfileInfo from "./components/Seeking/SeekingTherapistProfileInfo.tsx";
import ScrollList from "./components/Seeking/SeekingTherapistScrollList.tsx";
import PeerScrollList from "./components/Seeking/SeekingPeerScrollList.tsx";
import PeerProfileInfo from "./components/Seeking/SeekingPeerProfileInfo.tsx";
import SeekingMessageScroll from "./components/Seeking/SeekingMessageScroll.tsx";
import SeekingMessageSection from "./components/Seeking/SeekingMessageSection.tsx";
import GivingMessageScroll from "./components/Giving/GivingMessageScroll.tsx";
import GivingMessageSection from "./components/Giving/GivingMessageSection.tsx";
import GivingMyProfile from "./components/Giving/GivingMyProfile.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/home",
        element: <HomePage />,
    },
    {
        path: "/signup-choice",
        element: <UserTypePage />,
    },
    {
        path: "/give-signup",
        element: <GiveSignUpPage />,
    },
    {
        path: "/seek-signup",
        element: <SeekSignUpPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },

    {
        path: "/seeking-dashboard",
        element: <ScrollList />,
    },
    {
        path: "/seeking-dashboard-profile",
        element: <ProfileInfo />,
    },

    {
        path: "/seeking-peer-support",
        element: <PeerScrollList />,
    },
    {
        path: "/seeking-peer-support-profile",
        element: <PeerProfileInfo />,
    },

    {
        path: "/seeking-messages",
        element: <SeekingMessageScroll />,
    },
    {
        path: "/seeking-messages-profile",
        element: <SeekingMessageSection />,
    },

    {
        path: "/giving-my-clients",
        element: <GivingMessageScroll />,
    },
    {
        path: "/giving-messages-profile",
        element: <GivingMessageSection />,
    },
    {
        path: "/giving-my-profile",
        element: <GivingMyProfile />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
