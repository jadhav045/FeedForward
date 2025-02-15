// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { store } from "./store/store.ts";
import { isAuthenticated, getStoredUserRole } from "./utils/auth";

// Layouts
import AdminLayout from "./components/layouts/AdminLayout.tsx";
import DonorLayout from "./components/layouts/DonorLayout.tsx";
import NGOLayout from "./components/layouts/NGOLayout.tsx";
import AuthLayout from "./components/layouts/AuthLayout.tsx";

// Pages
import Login from "./pages/auth/Login.tsx";
import AdminHome from "./pages/admin/Home.tsx";
import DonorHome from "./pages/donor/DonorHome.tsx";
import NgoHome from "./pages/ngo/NgoHome.tsx";

import ErrorPage from "./pages/Error.tsx";
import { ProtectedPrivateRoute, ProtectedRoute } from "./components/shared/ProtectedRoute.tsx";
import Register from "./pages/auth/Register.jsx";
import Test from "./pages/Test/Test.tsx";
import TestLayout from "./pages/Test/TestLayout.tsx";

import Profile from "./pages/Profile.tsx";

import NgoRequests from "./pages/ngo/NgoRequests.tsx";
import NgoHistory from "./pages/ngo/NgoHistory.tsx";
import NgoNotifications from "./pages/ngo/NgoNotifications.tsx";

import DonorHistory from "./pages/donor/DonorHistory.tsx";
import DonorNotifications from "./pages/donor/DonorNotifications.tsx";
import DonorPostings from "./pages/donor/DonorPostings.tsx";

import Active from "./pages/test/pages/Active.tsx";
import History from "./pages/test/pages/History.tsx";
import Notifications from "./pages/test/pages/Notifications.tsx";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							isAuthenticated() ? (
								<Navigate
									to={`/${getStoredUserRole()}`}
									replace
								/>
							) : (
								<Navigate
									to="/auth/login"
									replace
								/>
							)
						}
					/>

					<Route
						path="/auth"
						element={<AuthLayout />}
					>
						<Route
							path="login"
							element={<Login />}
						/>
						<Route
							path="register"
							element={<Register />}
						/>
					</Route>

					<Route
						path="/test"
						element={<TestLayout />}
					>
						<Route
							path="test"
							element={<Test2 />}
						></Route>
					<Route 
					path="/test2" 
					element={<Test2 />}>
						
					</Route>

						<Route path="active" element={<Active />} />
						<Route path="history" element={<History />} />
						<Route path="notifications" element={<Notifications />} />
					</Route>

					<Route
						path="/admin"
						element={
							<ProtectedRoute allowedRole="admin">
								<AdminLayout />
							</ProtectedRoute>
						}
					>
						<Route
							index
							element={<AdminHome />}
						/>
						<Route
							path="profile"
							element={<Profile />}
						/>
					</Route>

					<Route
						path="/donor"
						element={
							<ProtectedRoute allowedRole="donor">
								<DonorLayout />
							</ProtectedRoute>
						}
					>
						<Route
							index
							element={<DonorHome />}
						/>
						<Route
							path="profile"
							element={<Profile />}
						/>
						<Route
							path="history"
							element={<DonorHistory />}
						/>
						<Route
							path="notifications"
							element={<DonorNotifications />}
						/>
						<Route
							path="postings"
							element={<DonorPostings />}
						/>

					</Route>

					<Route
						path="/ngo"
						element={
							<ProtectedRoute allowedRole="ngo">
								<NGOLayout />
							</ProtectedRoute>
						}
					>
						<Route
							index
							element={<NgoHome />}
						/>
						<Route
							path="profile"
							element={<Profile />}
						/>
						<Route
							path="history"
							element={<NgoHistory />}
						/>
						<Route
							path="notifications"
							element={<NgoNotifications />}
						/>
						<Route
							path="requests"
							element={<NgoRequests />}
						/>
					</Route>

					<Route
						path="/error"
						element={<ErrorPage />}
					/>
				</Routes>
				<Toaster position="top-right" />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
