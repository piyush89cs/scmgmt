import { InvoiceShipmentLinehaul } from './invoice-shipment-linehaul.model';
import {ReferenceField} from "./reference-field.model";

export class InvoiceShipment {
	invoiceObjectId: string;
	shipmentId: string;
    tcShipmentId: string;
    shipmentBU: number;
    shipmentStatus: string;
    containerType: string;
    invoiceId:number;
    mode: string;
    billingMethod: string;
    bolNumber: string;
    proNumber: string;
    serviceLevel: string;
    containerId: string;
    equipmentCode: string;
    vesselName: string;
    voyageFlightNumber: string;
    productClass: string;
    productClassBU: string;
    commodityCode: string;
    protectionLevel: string;
    hazmat: string;
    modeBU:string;
    serviceLevelBU:string;
    protectionLevelBU:string;
    containerTypeBU:string;

    charge: number;
    linehaulCharge: number;
    spotCharge: number;
    stopCharge: number;
    currencyCode: string;
    deletable: boolean;
    accessorials: InvoiceShipmentLinehaul[];
    referenceField: ReferenceField[];
    hasError: boolean;
    errors: string[];
    originFacilityName: string;
    originAddress: string;
    originCity: string;
    originCounty: string;
    originStateProv: string;
    originPostalCode: string;
    originCountryCode: string;
    originShipvia: string;
    originShipviaBU: number;
	originFacilityBUId: number;
    originFacilityId: string;
    destFacilityName: string;
    destFacilityId: string;
    destFacilityBUId: number;
    destAddress: string;
    destCity: string;
    destCounty: string;
    destStateProv: string;
    destPostalCode: string;
    destCountryCode: string;
    destShipvia: string;
    destShipviaBU: number;
    shipmentChages: any = {};
    constructor(
        shipmentData: any,
        obj: any
    ) {
    	this.invoiceObjectId = shipmentData.invoiceObjectId;
        this.invoiceId = shipmentData.invoiceId;
        this.tcShipmentId = shipmentData.tcShipmentId;
		this.shipmentBU = shipmentData.shipmentBU;
        this.shipmentId = shipmentData.shipmentId;
        this.shipmentStatus = shipmentData.shipmentStatus;
        this.containerType = shipmentData.equipmentCode;
        this.mode = shipmentData.mode;
        this.billingMethod = shipmentData.billingMethod;
        this.bolNumber = shipmentData.bolNumber;
        this.proNumber = shipmentData.proNumber;
        this.serviceLevel = shipmentData.serviceLevel;
        this.containerId = shipmentData.containerId;
        this.equipmentCode = shipmentData.equipmentCode;
        this.vesselName = shipmentData.vesselName;
        this.voyageFlightNumber = shipmentData.voyageFlightNumber;
        this.productClass = shipmentData.productClass;
        this.commodityCode = shipmentData.commodityCode;
        this.protectionLevel = shipmentData.protectionLevel;
        this.hazmat = shipmentData.hazmat;
        this.linehaulCharge = shipmentData.shipmentCharges && shipmentData.shipmentCharges.linehaulCharge;
        this.spotCharge = shipmentData.shipmentCharges && shipmentData.shipmentCharges.spotCharge;
        this.stopCharge = shipmentData.shipmentCharges && shipmentData.shipmentCharges.stopCharge;
        this.shipmentChages = shipmentData.shipmentCharges;
        this.hasError = shipmentData.hasError;
        this.errors = shipmentData.errors;
        this.originFacilityName = shipmentData.originFacilityName;
        this.originAddress = shipmentData.originAddress;
        this.originCity = shipmentData.originCity;
        this.originCounty = shipmentData.originCounty;
        this.originStateProv = shipmentData.originStateProv;
        this.originPostalCode = shipmentData.originPostalCode;
        this.originCountryCode = shipmentData.originCountryCode;
        this.originShipvia = shipmentData.originShipvia;
        this.originShipviaBU = shipmentData.originShipviaBU;
        this.originFacilityId = shipmentData.originFacilityId;
        this.originFacilityBUId = shipmentData.originFacilityBUId;
        this.destFacilityName = shipmentData.destFacilityName;
        this.destFacilityId = shipmentData.destFacilityId;
        this.destFacilityBUId = shipmentData.destFacilityBUId;
        this.destAddress = shipmentData.destAddress;
        this.destCity = shipmentData.destCity;
        this.destCounty = shipmentData.destCounty;
        this.destStateProv = shipmentData.destStateProv;
        this.destPostalCode = shipmentData.destPostalCode;
        this.destCountryCode = shipmentData.destCountryCode;
        this.destShipvia = shipmentData.destShipvia;
        this.destShipviaBU = shipmentData.destShipviaBU;
        this.charge = obj.charge;
        this.currencyCode = obj.currencyCode;
        this.deletable = obj.deletable;
        this.accessorials = obj.accessorials;
        this.referenceField = shipmentData.referenceField;

        this.originAddress= shipmentData.originAddress;
        this.originCity= shipmentData.originCity;
        this.originCounty= shipmentData.originCounty;
        
        this.originPostalCode= shipmentData.originPostalCode;
        this.originCountryCode= shipmentData.originCountryCode;
        this.destAddress= shipmentData.destAddress;
        this.destCity= shipmentData.destCity;
        this.destCounty= shipmentData.destCounty;
        this.destPostalCode= shipmentData.destPostalCode;
        this.destCountryCode= shipmentData.destCountryCode;
    }
}