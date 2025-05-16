import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements,
} from "react-router-dom";
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

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/signup-choice" element={<UserTypePage />} />
            <Route path="/give-signup" element={<GiveSignUpPage />} />
            <Route path="/seek-signup" element={<SeekSignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/seeking-dashboard" element={<ScrollList />} />
            <Route
                path="/seeking-dashboard-profile"
                element={<ProfileInfo />}
            />
            <Route path="/seeking-peer-support" element={<PeerScrollList />} />
            <Route
                path="/seeking-peer-support-profile"
                element={<PeerProfileInfo />}
            />
            <Route
                path="/seeking-messages"
                element={<SeekingMessageScroll />}
            />
            <Route
                path="/seeking-messages-profile"
                element={<SeekingMessageSection />}
            />
            <Route
                path="/giving-my-clients"
                element={<GivingMessageScroll />}
            />
            <Route
                path="/giving-messages-profile"
                element={<GivingMessageSection />}
            />
            <Route path="/giving-my-profile" element={<GivingMyProfile />} />
        </>
    ),
    {
        basename: "/safespace", // ✅ Place it here instead
    }
);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
