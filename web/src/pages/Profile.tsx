import { FormComponent } from "../components/basic/FormComponent";
import { SelectInput } from "../components/basic/SelectInput";
import { FormInput } from "../components/basic/FormInput";
import { Button } from "../components/basic/Button";
import { Label } from "../components/basic/Label";
import { FileInput } from '../components/basic/FileInput';
import { useProfile, orgTypeOptions, foodTypeOptions } from '../hooks/pages/useProfile';

export default function Profile() {
  const {
    user,
    formData,
    errors,
    handleChange,
    handleFileChange,
    handleSubmit
  } = useProfile();
  // console.log("user details ",user)
  if (!user) return <div>No User Found</div>;

  return (
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="mb-6">Profile Settings</h1>

        <FormComponent onSubmit={handleSubmit}>
          {/* Common Fields for All Users */}
          <div className="grid gap-4 mb-6">
            <div>
              <Label htmlFor="username" required>Username</Label>
              <FormInput
                name="username"
                placeholder="Username"
                value={formData.username || user.username}
                onChange={handleChange}
                // disabled
                error={errors.username}
              />
            </div>

            <div>
              <Label htmlFor="email" required>Email Address</Label>
              <FormInput
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email || user.email}
                onChange={handleChange}
                disabled
                error={errors.email}
              />
            </div>

            <div>
              <Label htmlFor="mobileNo" required>Mobile Number</Label>
              <FormInput
                name="mobileNo"
                placeholder="Mobile Number"
                value={formData.mobileNo|| user.mobileNo}
                onChange={handleChange}
                error={errors.mobileNo}
              />
            </div>
          </div>

          {/* NGO Specific Fields */}
          {user.role === 'ngo' && (
            <div className="grid gap-4 mb-6">
              <div>
                <Label htmlFor="fullName" required>Organization Name</Label>
                <FormInput
                  name="fullName"
                  placeholder="Organization Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  error={errors.fullName}
                />
              </div>

              <div>
                <FileInput
                  name="photo"
                  label="Organization Logo"
                  onChange={handleFileChange}
                />
              </div>

              <div>
                <Label htmlFor="regNo" required>Registration Number</Label>
                <FormInput

                  name="regNo"
                  placeholder="Registration Number"
                  value={formData.regNo}
                  onChange={handleChange}
                  error={errors.regNo}
                />
              </div>

              <div>
                <Label htmlFor="motive">Organization Motive</Label>
                <FormInput
                  name="motive"
                  placeholder="Organization Motive"
                  value={formData.motive}
                  onChange={handleChange}
                  error={errors.motive}
                />
              </div>

              <div>
                <Label htmlFor="employeeNos">Number of People working in your Organization</Label>
                <FormInput
                  type="number"
                  name="employeeNos"
                  placeholder="Enter number"
                  value={formData.employeeNos}
                  onChange={handleChange}
                  error={errors.employeeNos}
                />
              </div>

              <div>
                <Label htmlFor="address" required>NGO Address</Label>
                <FormInput
                  name="address"
                  placeholder="NGO Address"
                  value={formData.address}
                  onChange={handleChange}
                  error={errors.address}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="longitude">Longitude</Label>
                  <FormInput
                    name="longitude"
                    placeholder="Longitude"
                    value={formData.longitude}
                    onChange={handleChange}
                    error={errors.longitude}
                  />
                </div>
                <div>
                  <Label htmlFor="latitude">Latitude</Label>
                  <FormInput

                    name="latitude"
                    placeholder="Latitude"
                    value={formData.latitude}
                    onChange={handleChange}
                    error={errors.latitude}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Donor Specific Fields */}
          {user.role === 'donor' && (
            <>
              <div className="mb-4">
                <Label htmlFor="orgType" required>Type</Label>
                <SelectInput
                  name="orgType"

                  value={formData.orgType}
                  onChange={handleChange}
                  options={orgTypeOptions}
                  error={errors.orgType}
                />
              </div>

              {formData.orgType === 'individual' && (
                <div className="grid gap-4 mb-6">
                  <div>
                    <Label htmlFor="fullName" required>Full Name</Label>
                    <FormInput
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      error={errors.fullName}
                    />
                  </div>

                  <div>
                    <FileInput
                      name="photo"
                      label="Profile Photo"
                      onChange={handleFileChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="profession">Profession</Label>
                    <FormInput
                      name="profession"
                      placeholder="Profession"
                      value={formData.profession}
                      onChange={handleChange}
                      error={errors.profession}
                    />
                  </div>

                  <div>
                    <Label htmlFor="address" required>Home Address</Label>
                    <FormInput
                      name="address"
                      placeholder="Home Address"
                      value={formData.address}
                      onChange={handleChange}
                      error={errors.address}
                    />
                  </div>
                </div>
              )}

              {formData.orgType === 'enterprise' && (
                <div className="grid gap-4 mb-6">
                  <div>
                    <Label htmlFor="fullName" required>Enterprise Name</Label>
                    <FormInput
                      name="fullName"
                      placeholder="Enterprise Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      error={errors.fullName}
                    />
                  </div>

                  <div>
                    <FileInput
                      name="photo"
                      label="Enterprise Logo"
                      onChange={handleFileChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="regNo" required>Registration Number</Label>
                    <FormInput
                      name="regNo"
                      placeholder="Registration Number"
                      value={formData.regNo}
                      onChange={handleChange}
                      error={errors.regNo}
                    />
                  </div>

                  <div>
                    <Label htmlFor="foodType" required>Food Type</Label>
                    <SelectInput
                      name="foodType"

                      value={formData.foodType}
                      onChange={handleChange}
                      options={foodTypeOptions}
                      error={errors.foodType}
                    />
                  </div>

                  <div>
                    <Label htmlFor="address" required>Enterprise Address</Label>
                    <FormInput
                      name="address"
                      placeholder="Enterprise Address"
                      value={formData.address}
                      onChange={handleChange}
                      error={errors.address}
                    />
                  </div>
                </div>
              )}

              {/* Common location fields for both individual and enterprise donors */}
              {formData.orgType && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="longitude">Longitude</Label>
                    <FormInput
                      name="longitude"
                      placeholder="Longitude"
                      value={formData.longitude}
                      onChange={handleChange}
                      error={errors.longitude}
                    />
                  </div>
                  <div>
                    <Label htmlFor="latitude">Latitude</Label>
                    <FormInput
                      name="latitude"
                      placeholder="Latitude"
                      value={formData.latitude}
                      onChange={handleChange}
                      error={errors.latitude}
                    />
                  </div>
                </div>
              )}
            </>
          )}

          <Button type="submit" variant="primary" className="w-full">
            Update Profile
          </Button>
        </FormComponent>
      </div>
    </div>
  );
}