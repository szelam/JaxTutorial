import React, { useEffect, useContext } from "react";
import {
  ActionRow,
  Container,
  CustomButton,
  CustomSecondaryButton,
  SwitchContainer,
} from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import RightContainer from "./containers/RightContainer";
import LeftContainer from "./containers/LeftContainer";
import TncContainer from "./containers/TncContainer";
import schema from "./schema";
import { useAuth } from "../../providers/AuthProvider";
import { Navigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import { API_URL } from "../../constants/api";

export default function CarParkDetail() {
  const { token, setCarParkId } = useAuth();
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: schema.cast(),
  });
  const [redirect, setRedirect] = React.useState(false);


  useEffect(() => {
    // if (!token && !redirect) {
    // setRedirect(true);
    // alert('You are not authenticated. Redirecting to login page.');
    // } else {
    getCarParkDetail();
  }, []);
  // }, [token]); // This is ran twice because of Strict Mode in development.
  // if (!token) {
  //   return <Navigate to="/" replace />;
  // }

  const getCarParkDetail = async () => {
    try {
      // const carparkdetail = await fetch(API_URL + "/carpark/661f8ed773794299a25a1717", {
      //   method: "GET",
      //   headers: {
      //     Authorization: "Bearer " + "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjVkOTQyOGE1MjE4N2ExMWNlODFhYjQiLCJtZXJjaGFudElkIjoiNjJmMGNmNDA3OGUxZmVmY2FjYjdjOTczIiwiaWF0IjoxNzE4MDc3Mjc0fQ.Qv702-2K0ZG9lIfRBC2MkEu1WxWa2as9OL2e9pZItxFdBJUjXJ1AVs-Hpu8rAjyTdEABrZUDKeAQsTZkH8Ey14_cVOzARrry9C8AK1yJ7OjqPI3SogMn1bGWl7k93orQOyae7vUFRNZaNxZl4miRUFivmRikIVsh7WNGyuUyW2rC4wvLIHp37cZu7nmm6n39TYOrawxrMn0EnTcXAeM5ngUGQNWgGj3Ud0zWSPLTkIhs-woO2zHKxfEEJjyKjqqeg7mgvj3E-hbiCnJTG-1Y8KBGzyshFgez5-OBp7ATHbiq7MsYvEyjpIq1coTqE6kncDRF1AINmhkbMHGCkc8H4veq4HlvcxCkDkJmGsSgR1maKN36CJ25cTCc_BGljRsN9H4x8sD3RtuyqSOzjVT0mSk6vVmiJFVN-8OXJQBfEwQSsWHOdVCTDFa7aN_wC7ENRSCUmro6biRpOMJC91WmovbXHEoojLO20xSpdPR4Jtc8g9UGWQgBn3mFvksgjC5NxBDok2DP9xUXN7VxD_YFlmvs1-UpCsJ-Qwi7GQH1mSAaNzV971GXMzJ2LiLcXcMovNADbVdT83Nbvm65cerciO9PJVf493vDCKm_Y394_n00l38CqjWXH5MB1vz47nBb-cmoDydBhT9jQ7oEi4uZZMs72XfWfPSCO3NumBPAmzU",
      //   },
      // });

      // const carparkdetailData = await carparkdetail.json();
      // console.log(carparkdetailData.records[0]);

      setCarParkId("661f8ed773794299a25a1717");

      // methods.reset(carparkdetailData.records[0]);
      methods.reset({
        "contact": {
          "phone": {
            "code": "852",
            "number": "22222222"
          },
          "emails": [
            "yuhin1@gmail.com",
            "yuhin2@gmail.com"
          ]
        },
        "openingHourSetting": {
          "mon": {
            "is24": true,
            "from": "00:00",
            "to": "00:00"
          },
          "tue": {
            "is24": true,
            "from": "00:00",
            "to": "00:00"
          },
          "wed": {
            "is24": true,
            "from": "00:00",
            "to": "00:00"
          },
          "thu": {
            "is24": true,
            "from": "00:00",
            "to": "00:00"
          },
          "fri": {
            "is24": true,
            "from": "00:00",
            "to": "00:00"
          },
          "sat": {
            "is24": true,
            "from": "00:00",
            "to": "00:00"
          },
          "sun": {
            "is24": true,
            "from": "00:00",
            "to": "00:00"
          }
        },
        "bookingTac": {
          "content": {
            "en": "",
            "zh": ""
          },
          "replaceDefault": true
        },
        "buildingTag": {
          "en": [],
          "zh": []
        },
        "bookingConfig": {
          "longStay": {
            "monthly": 3,
            "vip": 3,
            "hourly": 3,
            "casual": 3
          },
          "overstay": 0,
          "earlyIn": 0,
          "gracePeriod": 0,
          "freeParking": 0,
          "overstayPrice": 0,
          "earlyInPrice": 0,
          "antiPassBackPeriod": 0,
          "overstayPrices": [],
          "newOverstayPrices": [],
          "earlyInPrices": [],
          "newEarlyInPrices": []
        },
        "cameraLink": {
          "entry": "",
          "exit": ""
        },
        "name": {
          "en": "Test Car Park 77",
          "zh": "測試停車場七十七"
        },
        "remarks": {
          "en": "REMARKS 1",
          "zh": "備註一"
        },
        "serviceTypeTitle": {
          "en": "SERVICE TEST 1",
          "zh": "服務種類 1"
        },
        "_id": "661f8ed773794299a25a1717",
        "Merchant": "62f0cf4078e1fefcacb7c973",
        "isShareable": false,
        "code": "YHTEST",
        "address": {
          "line": {
            "en": "133 Hoi Bun Rd, Kwun Tong",
            "zh": "觀塘133號海濱道"
          },
          "District": "62f0c07878e1fefcacb7c206",
          "location": {
            "type": "Point",
            "coordinates": [
              114.2167008,
              22.313199
            ],
            "_id": "661f8ed773794299a25a1718"
          },
          "details": "133 Hoi Bun Rd, Kwun Tong",
          "type": "commercial"
        },
        "features": {
          "cover": {
            "value": "with-cover",
            "priority": 1
          },
          "evCharge": {
            "value": "true",
            "priority": 2
          },
          "headRoom": {
            "value": "2.1",
            "priority": 3
          },
          "instantBooking": {
            "value": "true",
            "priority": 4
          }
        },
        "customizedFeatures": [],
        "VehicleTypes": [
          "633e87798609a8de12d4ced9"
        ],
        "Tags": [
          "65325514a9244eee2e63fd7c"
        ],
        "ServiceTypes": [],
        "restrictions": [
          "no"
        ],
        "accessType": "octopus card",
        "PaymentMethods": [
          "65092446de80cc798a59e9c0"
        ],
        "Photos": [],
        "paymentMethodSettings": [
          {
            "name": {
              "en": "Credit Card",
              "zh": "信用卡"
            },
            "priority": 1,
            "position": "upper",
            "types": [
              "buynew",
              "renew",
              "hourly",
              "ev",
              "recurring",
              "timeshare"
            ],
            "isTesting": false,
            "buffer": 0,
            "code": "creditCard",
            "isOnline": true
          },
          {
            "name": {
              "en": "Cheque",
              "zh": "支票"
            },
            "priority": 2,
            "position": "upper",
            "types": [
              "buynew",
              "renew",
              "hourly",
              "ev"
            ],
            "isTesting": false,
            "buffer": 0,
            "code": "cheque",
            "isOnline": false
          },
          {
            "name": {
              "en": "7-Eleven",
              "zh": "7-11"
            },
            "priority": 3,
            "position": "upper",
            "types": [
              "buynew",
              "renew",
              "hourly",
              "ev"
            ],
            "isTesting": false,
            "buffer": 0,
            "code": "sevenEleven",
            "isOnline": false
          },
          {
            "name": {
              "en": "FPS",
              "zh": "轉數快"
            },
            "priority": 4,
            "position": "upper",
            "types": [
              "buynew",
              "renew",
              "hourly",
              "ev"
            ],
            "isTesting": false,
            "buffer": 0,
            "code": "fps",
            "isOnline": true
          },
          {
            "name": {
              "en": "Google Pay",
              "zh": "Google Pay"
            },
            "priority": 5,
            "position": "upper",
            "types": [
              "buynew",
              "renew",
              "hourly",
              "ev"
            ],
            "isTesting": false,
            "buffer": 0,
            "code": "googlePay",
            "isOnline": true
          },
          {
            "name": {
              "en": "Apple Pay",
              "zh": "Apple Pay"
            },
            "priority": 6,
            "position": "upper",
            "types": [
              "buynew",
              "renew",
              "hourly",
              "ev"
            ],
            "isTesting": false,
            "buffer": 0,
            "code": "applePay",
            "isOnline": true
          }
        ],
        "isCustomisePayment": false,
        "status": "active",
        "FloorPlans": [],
        "priority": 1,
        "confirmationCopyEmails": [],
        "dailyTransactionReportEmails": [],
        "dailyOperationReportEmails": [],
        "realTimeReportEmails": [],
        "syncMonthlyOccupancyStatusToSHKP": false,
        "evChargerDomain": "",
        "isEvChargerIntegrated": false,
        "isFapdIntegrated": false,
        "management": "HYCarpark",
        "contractor": null,
        "isCheckOldQuota": false,
        "noticeHotline": "",
        "noticeEmail": "",
        "isPriceSetInRound": true,
        "deleted": false,
        "contractorConfig": {
          "isEnabled": false,
          "schema": null,
          "_id": "661f8ed773794299a25a171a"
        },
        "createdAt": "2024-04-17T08:56:55.749Z",
        "updatedAt": "2024-04-17T08:56:55.749Z",
        "__v": 0
      });
    } catch {
      alert('Error fetching car park detail');
    }
  }

  const onSubmit = (data) => {
    alert('Submitted');
    console.log(data);
  };

  const onError = (errors, e) => {
    alert('Submitted with errors');
    console.log(errors, e);
  };

  return (
    <Container>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
          <ActionRow>
            <CustomButton type="submit">Save</CustomButton>
            <CustomSecondaryButton>Back</CustomSecondaryButton>
          </ActionRow>
          <SwitchContainer>
            <LeftContainer />
            <RightContainer />
          </SwitchContainer>
          <TncContainer />
        </form>
      </FormProvider>
    </Container>
  );
}
