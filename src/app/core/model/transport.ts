export interface Transport {
  vehicleNumber: string;
  driverName: string;
  type: string;
  capacity: string;
  userId?: string;
  reclamationId?: string;
  evenementId?: string;
  createdDate: string;
  lastModifiedDate: string;
  version: number;
  deleted: boolean;
}
