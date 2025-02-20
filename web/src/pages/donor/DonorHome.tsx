import { useState } from 'react';
import { Button } from '../../components/basic/Button';
import { Modal } from '../../components/basic/Modal';
import { Label } from '../../components/basic/Label';
import { FormInput } from '../../components/basic/FormInput';
import { Toggle } from '../../components/basic/Toggle';
import { FileInput } from '../../components/basic/FileInput';
import { useDonationForm } from '../../hooks/pages/useDonorForm';
import type { FoodItem, QuantityType } from '../../types/order.types';
import useWebSocket from '../../hooks/useWebSocket';
// import { profileService } from '../../services/profile.service';

export default function DonorHome() {
  const {
    isOpen,
    setIsOpen,
    formData,
    setFormData,
    handleAddFoodItem,
    handleRemoveFoodItem,
    handleDeliveryByChange,
    handleLocationUpdate,
    handleGetLocation,
    handleSubmit
  } = useDonationForm();
  console.log(useWebSocket());
  const [newItem, setNewItem] = useState<Partial<FoodItem>>({});

  const handleAddItem = () => {
    if (newItem.name && newItem.quantity && newItem.quantityType) {
      handleAddFoodItem(newItem as FoodItem);
      setNewItem({});
    }
  };

  return (
    <div className="p-6">
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-[var(--primaryButton-bg)] text-[var(--primaryButton-text)]"
      >
        Donate Now
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Create Donation"
      >
        <div className="space-y-6">
          {/* Food Items Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Food Items</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <FormInput
                placeholder="Item Name"
                value={newItem.name || ''}
                onChange={e => setNewItem(prev => ({ ...prev, name: e.target.value }))}
              />
              <FormInput
                type="number"
                placeholder="Quantity"
                value={newItem.quantity || ''}
                onChange={e => setNewItem(prev => ({ ...prev, quantity: Number(e.target.value) }))}
              />
              <select
                className="form-select"
                value={newItem.quantityType || ''}
                onChange={e => setNewItem(prev => ({ ...prev, quantityType: e.target.value as QuantityType }))}
              >
                <option value="">Select Unit</option>
                <option value="kg">Kilograms</option>
                <option value="liter">Liters</option>
                <option value="pieces">Pieces</option>
              </select>
              <FileInput
                id="food-photo"
                accept="image/*"
                onChange={e => {
                  if (e.target.files?.[0]) {
                    setNewItem(prev => ({ ...prev, photo: e.target.files![0] }));
                  }
                }}
              />
              <FormInput
                type="date"
                placeholder="Expiry Date"
                onChange={e => setNewItem(prev => ({ ...prev, expiryDate: new Date(e.target.value) }))}
              />
              <Button onClick={handleAddItem} type="button" variant="secondary" >Add Item</Button>
            </div>

            {/* List of added items */}
            <div className="space-y-2">
              {formData.foodItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span>{item.name} - {item.quantity} {item.quantityType}</span>
                  <Button onClick={() => handleRemoveFoodItem(index)} type="button" variant="danger">Remove</Button>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Section */}
          <div>
            <Label>Delivery By</Label>
            <Toggle
              checked={formData.deliveryBy === 'donor'}
              onChange={() => handleDeliveryByChange(formData.deliveryBy === 'donor' ? 'ngo' : 'donor')}
              labelLeft="NGO"
              labelRight="Us"
            />

            {formData.deliveryBy === 'donor' && (
              <div className="grid grid-cols-2 gap-4 mt-4">
                <FormInput
                  placeholder="Delivery Person Name"
                  onChange={e => setFormData(prev => ({
                    ...prev,
                    deliveryPerson: { ...prev.deliveryPerson!, name: e.target.value }
                  }))}
                />
                <FormInput
                  placeholder="Mobile Number"
                  onChange={e => setFormData(prev => ({
                    ...prev,
                    deliveryPerson: { ...prev.deliveryPerson!, mobileNo: e.target.value }
                  }))}
                />
                <FormInput
                  placeholder="Vehicle Number"
                  onChange={e => setFormData(prev => ({
                    ...prev,
                    deliveryPerson: { ...prev.deliveryPerson!, vehicleNo: e.target.value }
                  }))}
                />
              </div>
            )}
          </div>

          {/* Location Section */}
          <div className="space-y-4">
            <Label>Pickup Location</Label>
            <FormInput
              placeholder="Address"
              value={formData.location.address}
              onChange={e => handleLocationUpdate(
                e.target.value,
                formData.location.latitude,
                formData.location.longitude
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormInput
                type="number"
                step="any"
                placeholder="Latitude"
                value={formData.location.latitude || ''}
                onChange={e => handleLocationUpdate(
                  formData.location.address,
                  parseFloat(e.target.value),
                  formData.location.longitude
                )}
              />
              <FormInput
                type="number"
                step="any"
                placeholder="Longitude"
                value={formData.location.longitude || ''}
                onChange={e => handleLocationUpdate(
                  formData.location.address,
                  formData.location.latitude,
                  parseFloat(e.target.value)
                )}
              />
            </div>
            <Button
              onClick={handleGetLocation}
              className="mt-2 bg-[var(--secondaryButton-bg)] text-[var(--secondaryButton-text)]"
              type="button"
            >
              Get Current Location
            </Button>
          </div>

          <Button
            onClick={handleSubmit}
            className="w-full bg-[var(--primaryButton-bg)] text-[var(--primaryButton-text)]"
          >
            Confirm Posting
          </Button>
        </div>
      </Modal>
    </div>
  );
}