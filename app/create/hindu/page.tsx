"use client";

import { useEffect, useState, type ChangeEvent } from "react";
import HinduBiodataPreview from "../../../components/biodata/HinduBiodataPreview";

const translations = {
  en: {
    language: "Biodata Language",
    english: "English",
    marathi: "मराठी",
    hindi: "हिंदी",
    gujarati: "ગુજરાતી",

    personalDetails: "Personal Details",
    step1Description:
      "Only your name is required. Leave any other field blank if you do not want it on your biodata.",
      educationCareer: "Education & Career",
step2Description:
  "All fields are optional. Add only the education and career details you want to show on your biodata.",
  

  // Step 3 - Family
familyDetails: "Family Details",
step3Description:
  "All family details are optional. Add only the information you want to show on your biodata.",
fatherName: "Father's Name",
fatherOccupation: "Father's Occupation",
motherName: "Mother's Name",
motherOccupation: "Mother's Occupation",
brothers: "Brothers",
sisters: "Sisters",
familyType: "Family Type",
familyLocation: "Family Location",
additionalFamilyDetails: "Additional Family Details",

fatherNamePlaceholder: "Enter father's name",
fatherOccupationPlaceholder: "Example: Business, Service",
motherNamePlaceholder: "Enter mother's name",
motherOccupationPlaceholder: "Example: Homemaker, Teacher",
brothersPlaceholder: "Example: 1",
sistersPlaceholder: "Example: 1",
familyLocationPlaceholder: "Example: Pune, Maharashtra",
additionalFamilyDetailsPlaceholder:
  "Add any other family information you want to include...",

// Step 4 - Traditional
traditionalDetails: "Hindu / Traditional Details",
step4Description:
  "All traditional details are optional. Add only the information you want to show on your biodata.",
communityCaste: "Community / Caste",
subCommunity: "Sub-Community",
gotra: "Gotra",
rashi: "Rashi",
nakshatra: "Nakshatra",
manglik: "Manglik",
horoscopeAvailable: "Horoscope Available",
additionalTraditionalDetails: "Additional Traditional Details",

communityCastePlaceholder: "Enter community or caste",
subCommunityPlaceholder: "Enter sub-community if applicable",
gotraPlaceholder: "Enter Gotra",
rashiPlaceholder: "Example: Mesh / Aries",
nakshatraPlaceholder: "Enter Nakshatra",
additionalTraditionalDetailsPlaceholder:
  "Add any other traditional, horoscope or family details you want to include...",

// Step 5 - Contact
contactDetails: "Contact Details",
step5Description:
  "All contact details are optional. Add only the information you want to show on your biodata.",
contactPerson: "Contact Person",
mobileNumber: "Mobile Number",
alternateNumber: "Alternate Number",
emailAddress: "Email Address",
city: "City",
state: "State",
fullAddress: "Full Address",

contactPersonPlaceholder: "Example: Father, Brother or Self",
mobileNumberPlaceholder: "Enter mobile number",
alternateNumberPlaceholder: "Enter alternate number",
emailAddressPlaceholder: "example@email.com",
cityPlaceholder: "Example: Pune",
statePlaceholder: "Example: Maharashtra",
fullAddressPlaceholder: "Enter address you want to show on the biodata...",
    fullName: "Full Name",
    fullNamePlaceholder: "Enter your full name",
    biodataSymbol: "Biodata Symbol",
    dateOfBirth: "Date of Birth",
    timeOfBirth: "Time of Birth",
    placeOfBirth: "Place of Birth",
    placeOfBirthPlaceholder: "City / Village",
    gender: "Gender",
    male: "Male",
female: "Female",
other: "Other",
height: "Height",
    heightPlaceholder: "Example: 5' 8\"",
    maritalStatus: "Marital Status",
    neverMarried: "Never Married",
divorced: "Divorced",
widowed: "Widowed",
separated: "Separated",
    motherTongue: "Mother Tongue",
    motherTonguePlaceholder: "Example: Marathi",
    currentCity: "Current City",
    currentCityPlaceholder: "Example: Pune, Maharashtra",
    aboutMe: "About Me",
    aboutMePlaceholder: "Write something about yourself...",
    selectOptional: "Select if you want",
    highestQualification: "Highest Qualification",
degreeCourse: "Degree / Course",
collegeUniversity: "College / University",
occupation: "Occupation",
companyBusiness: "Company / Business",
designation: "Designation",
workLocation: "Work Location",
annualIncome: "Annual Income",
additionalCareerDetails: "Additional Education / Career Details",

highestQualificationPlaceholder: "Example: B.Tech, MBA, B.Com",
degreeCoursePlaceholder: "Example: Computer Science",
collegeUniversityPlaceholder: "College / University name",
occupationPlaceholder: "Example: Software Engineer",
companyBusinessPlaceholder: "Company or business name",
designationPlaceholder: "Example: Senior Developer",
workLocationPlaceholder: "Example: Pune, Maharashtra",
annualIncomePlaceholder: "Example: ₹8–10 LPA",
additionalCareerDetailsPlaceholder:
  "Add any additional education or career information",
  // English
livePreview: "Live Preview",
  },

  mr: {
    language: "बायोडाटा भाषा",
    english: "English",
    marathi: "मराठी",
    hindi: "हिंदी",
    gujarati: "ગુજરાતી",

    personalDetails: "वैयक्तिक माहिती",
    step1Description:
      "फक्त तुमचे नाव आवश्यक आहे. बायोडाटामध्ये नको असलेली माहिती रिकामी ठेवू शकता.",
      educationCareer: "शिक्षण आणि करिअर",
step2Description:
  "सर्व माहिती ऐच्छिक आहे. बायोडाटामध्ये दाखवायची असलेली शिक्षण आणि करिअरची माहितीच भरा.",
  // Step 3 - Family
familyDetails: "कौटुंबिक माहिती",
step3Description:
  "कुटुंबाची सर्व माहिती ऐच्छिक आहे. बायोडाटामध्ये दाखवायची असलेली माहितीच भरा.",
fatherName: "वडिलांचे नाव",
fatherOccupation: "वडिलांचा व्यवसाय",
motherName: "आईचे नाव",
motherOccupation: "आईचा व्यवसाय",
brothers: "भाऊ",
sisters: "बहिणी",
familyType: "कुटुंबाचा प्रकार",
familyLocation: "कुटुंबाचे ठिकाण",
additionalFamilyDetails: "अतिरिक्त कौटुंबिक माहिती",

fatherNamePlaceholder: "वडिलांचे नाव लिहा",
fatherOccupationPlaceholder: "उदाहरण: व्यवसाय, नोकरी",
motherNamePlaceholder: "आईचे नाव लिहा",
motherOccupationPlaceholder: "उदाहरण: गृहिणी, शिक्षिका",
brothersPlaceholder: "उदाहरण: 1",
sistersPlaceholder: "उदाहरण: 1",
familyLocationPlaceholder: "उदाहरण: पुणे, महाराष्ट्र",
additionalFamilyDetailsPlaceholder:
  "इतर कौटुंबिक माहिती असल्यास येथे लिहा...",

// Step 4 - Traditional
traditionalDetails: "हिंदू / पारंपरिक माहिती",
step4Description:
  "सर्व पारंपरिक माहिती ऐच्छिक आहे. बायोडाटामध्ये दाखवायची असलेली माहितीच भरा.",
communityCaste: "समाज / जात",
subCommunity: "उपसमाज",
gotra: "गोत्र",
rashi: "राशी",
nakshatra: "नक्षत्र",
manglik: "मंगळिक",
horoscopeAvailable: "कुंडली उपलब्ध",
additionalTraditionalDetails: "अतिरिक्त पारंपरिक माहिती",

communityCastePlaceholder: "समाज किंवा जात लिहा",
subCommunityPlaceholder: "लागू असल्यास उपसमाज लिहा",
gotraPlaceholder: "गोत्र लिहा",
rashiPlaceholder: "उदाहरण: मेष",
nakshatraPlaceholder: "नक्षत्र लिहा",
additionalTraditionalDetailsPlaceholder:
  "इतर पारंपरिक किंवा कुंडलीविषयक माहिती असल्यास येथे लिहा...",

// Step 5 - Contact
contactDetails: "संपर्क माहिती",
step5Description:
  "सर्व संपर्क माहिती ऐच्छिक आहे. बायोडाटामध्ये दाखवायची असलेली माहितीच भरा.",
contactPerson: "संपर्क व्यक्ती",
mobileNumber: "मोबाईल क्रमांक",
alternateNumber: "पर्यायी क्रमांक",
emailAddress: "ईमेल पत्ता",
city: "शहर",
state: "राज्य",
fullAddress: "पूर्ण पत्ता",

contactPersonPlaceholder: "उदाहरण: वडील, भाऊ किंवा स्वतः",
mobileNumberPlaceholder: "मोबाईल क्रमांक लिहा",
alternateNumberPlaceholder: "पर्यायी क्रमांक लिहा",
emailAddressPlaceholder: "example@email.com",
cityPlaceholder: "उदाहरण: पुणे",
statePlaceholder: "उदाहरण: महाराष्ट्र",
fullAddressPlaceholder: "बायोडाटामध्ये दाखवायचा पत्ता लिहा...",
    fullName: "पूर्ण नाव",
    fullNamePlaceholder: "तुमचे पूर्ण नाव लिहा",
    biodataSymbol: "बायोडाटा चिन्ह",
    dateOfBirth: "जन्म तारीख",
    timeOfBirth: "जन्म वेळ",
    placeOfBirth: "जन्मस्थळ",
    placeOfBirthPlaceholder: "शहर / गाव",
    gender: "लिंग",
    male: "पुरुष",
female: "स्त्री",
other: "इतर",
    height: "उंची",
    heightPlaceholder: "उदाहरण: 5' 8\"",
    maritalStatus: "वैवाहिक स्थिती",
    neverMarried: "अविवाहित",
divorced: "घटस्फोटित",
widowed: "विधवा / विधुर",
separated: "विभक्त",
    motherTongue: "मातृभाषा",
    motherTonguePlaceholder: "उदाहरण: मराठी",
    currentCity: "सध्याचे शहर",
    currentCityPlaceholder: "उदाहरण: पुणे, महाराष्ट्र",
    aboutMe: "माझ्याबद्दल",
    aboutMePlaceholder: "स्वतःबद्दल थोडक्यात लिहा...",
    selectOptional: "हवे असल्यास निवडा",
    highestQualification: "सर्वोच्च शैक्षणिक पात्रता",
degreeCourse: "पदवी / अभ्यासक्रम",
collegeUniversity: "महाविद्यालय / विद्यापीठ",
occupation: "व्यवसाय",
companyBusiness: "कंपनी / व्यवसाय",
designation: "पद",
workLocation: "कामाचे ठिकाण",
annualIncome: "वार्षिक उत्पन्न",
additionalCareerDetails: "अतिरिक्त शिक्षण / करिअर माहिती",
highestQualificationPlaceholder: "उदाहरण: B.Tech, MBA, B.Com",
degreeCoursePlaceholder: "उदाहरण: Computer Science",
collegeUniversityPlaceholder: "महाविद्यालय / विद्यापीठाचे नाव",
occupationPlaceholder: "उदाहरण: Software Engineer",
companyBusinessPlaceholder: "कंपनी किंवा व्यवसायाचे नाव",
designationPlaceholder: "उदाहरण: Senior Developer",
workLocationPlaceholder: "उदाहरण: पुणे, महाराष्ट्र",
annualIncomePlaceholder: "उदाहरण: ₹8–10 LPA",
additionalCareerDetailsPlaceholder:
  "अतिरिक्त शिक्षण किंवा करिअरची माहिती लिहा",
  // Marathi
livePreview: "थेट पूर्वदृश्य",

    
  },

  hi: {
    language: "बायोडाटा भाषा",
    english: "English",
    marathi: "मराठी",
    hindi: "हिंदी",
    gujarati: "ગુજરાતી",

    personalDetails: "व्यक्तिगत जानकारी",
    step1Description:
      "केवल आपका नाम आवश्यक है। जो जानकारी बायोडाटा में नहीं चाहिए उसे खाली छोड़ सकते हैं।",
      educationCareer: "शिक्षा और करियर",
step2Description:
  "सभी जानकारी वैकल्पिक है। बायोडाटा में केवल वही शिक्षा और करियर की जानकारी भरें जो आप दिखाना चाहते हैं।",
  // Step 3 - Family
familyDetails: "पारिवारिक जानकारी",
step3Description:
  "परिवार की सभी जानकारी वैकल्पिक है। बायोडाटा में केवल वही जानकारी भरें जो आप दिखाना चाहते हैं।",
fatherName: "पिता का नाम",
fatherOccupation: "पिता का व्यवसाय",
motherName: "माता का नाम",
motherOccupation: "माता का व्यवसाय",
brothers: "भाई",
sisters: "बहनें",
familyType: "परिवार का प्रकार",
familyLocation: "परिवार का स्थान",
additionalFamilyDetails: "अतिरिक्त पारिवारिक जानकारी",

fatherNamePlaceholder: "पिता का नाम लिखें",
fatherOccupationPlaceholder: "उदाहरण: व्यवसाय, नौकरी",
motherNamePlaceholder: "माता का नाम लिखें",
motherOccupationPlaceholder: "उदाहरण: गृहिणी, शिक्षिका",
brothersPlaceholder: "उदाहरण: 1",
sistersPlaceholder: "उदाहरण: 1",
familyLocationPlaceholder: "उदाहरण: पुणे, महाराष्ट्र",
additionalFamilyDetailsPlaceholder:
  "अन्य पारिवारिक जानकारी यहाँ लिखें...",

// Step 4 - Traditional
traditionalDetails: "हिंदू / पारंपरिक जानकारी",
step4Description:
  "सभी पारंपरिक जानकारी वैकल्पिक है। बायोडाटा में केवल वही जानकारी भरें जो आप दिखाना चाहते हैं।",
communityCaste: "समुदाय / जाति",
subCommunity: "उप-समुदाय",
gotra: "गोत्र",
rashi: "राशि",
nakshatra: "नक्षत्र",
manglik: "मांगलिक",
horoscopeAvailable: "कुंडली उपलब्ध",
additionalTraditionalDetails: "अतिरिक्त पारंपरिक जानकारी",

communityCastePlaceholder: "समुदाय या जाति लिखें",
subCommunityPlaceholder: "यदि लागू हो तो उप-समुदाय लिखें",
gotraPlaceholder: "गोत्र लिखें",
rashiPlaceholder: "उदाहरण: मेष",
nakshatraPlaceholder: "नक्षत्र लिखें",
additionalTraditionalDetailsPlaceholder:
  "अन्य पारंपरिक या कुंडली संबंधी जानकारी यहाँ लिखें...",

// Step 5 - Contact
contactDetails: "संपर्क जानकारी",
step5Description:
  "सभी संपर्क जानकारी वैकल्पिक है। बायोडाटा में केवल वही जानकारी भरें जो आप दिखाना चाहते हैं।",
contactPerson: "संपर्क व्यक्ति",
mobileNumber: "मोबाइल नंबर",
alternateNumber: "वैकल्पिक नंबर",
emailAddress: "ईमेल पता",
city: "शहर",
state: "राज्य",
fullAddress: "पूरा पता",

contactPersonPlaceholder: "उदाहरण: पिता, भाई या स्वयं",
mobileNumberPlaceholder: "मोबाइल नंबर लिखें",
alternateNumberPlaceholder: "वैकल्पिक नंबर लिखें",
emailAddressPlaceholder: "example@email.com",
cityPlaceholder: "उदाहरण: पुणे",
statePlaceholder: "उदाहरण: महाराष्ट्र",
fullAddressPlaceholder: "बायोडाटा में दिखाने वाला पता लिखें...",
    fullName: "पूरा नाम",
    fullNamePlaceholder: "अपना पूरा नाम लिखें",
    biodataSymbol: "बायोडाटा चिन्ह",
    dateOfBirth: "जन्म तिथि",
    timeOfBirth: "जन्म समय",
    placeOfBirth: "जन्म स्थान",
    placeOfBirthPlaceholder: "शहर / गाँव",
    gender: "लिंग",
    male: "पुरुष",
female: "महिला",
other: "अन्य",
    height: "ऊंचाई",
    heightPlaceholder: "उदाहरण: 5' 8\"",
    maritalStatus: "वैवाहिक स्थिति",
    neverMarried: "अविवाहित",
divorced: "तलाकशुदा",
widowed: "विधवा / विधुर",
separated: "अलग रह रहे",
    motherTongue: "मातृभाषा",
    motherTonguePlaceholder: "उदाहरण: हिंदी",
    currentCity: "वर्तमान शहर",
    currentCityPlaceholder: "उदाहरण: पुणे, महाराष्ट्र",
    aboutMe: "मेरे बारे में",
    aboutMePlaceholder: "अपने बारे में थोड़ा लिखें...",
    selectOptional: "यदि चाहें तो चुनें",
    highestQualification: "उच्चतम शैक्षणिक योग्यता",
degreeCourse: "डिग्री / कोर्स",
collegeUniversity: "कॉलेज / विश्वविद्यालय",
occupation: "व्यवसाय",
companyBusiness: "कंपनी / व्यवसाय",
designation: "पद",
workLocation: "कार्य स्थान",
annualIncome: "वार्षिक आय",
additionalCareerDetails: "अतिरिक्त शिक्षा / करियर जानकारी",

highestQualificationPlaceholder: "उदाहरण: B.Tech, MBA, B.Com",
degreeCoursePlaceholder: "उदाहरण: Computer Science",
collegeUniversityPlaceholder: "कॉलेज / विश्वविद्यालय का नाम",
occupationPlaceholder: "उदाहरण: Software Engineer",
companyBusinessPlaceholder: "कंपनी या व्यवसाय का नाम",
designationPlaceholder: "उदाहरण: Senior Developer",
workLocationPlaceholder: "उदाहरण: पुणे, महाराष्ट्र",
annualIncomePlaceholder: "उदाहरण: ₹8–10 LPA",
additionalCareerDetailsPlaceholder:
  "अतिरिक्त शिक्षा या करियर की जानकारी लिखें",
  // Hindi
livePreview: "लाइव पूर्वावलोकन",
  },

  gu: {
    language: "બાયોડેટાની ભાષા",
    english: "English",
    marathi: "मराठी",
    hindi: "हिंदी",
    gujarati: "ગુજરાતી",

    personalDetails: "વ્યક્તિગત માહિતી",
    step1Description:
      "ફક્ત તમારું નામ જરૂરી છે. બાયોડેટામાં ન જોઈતી માહિતી ખાલી રાખી શકો છો.",
      educationCareer: "શિક્ષણ અને કારકિર્દી",
step2Description:
  "બધી માહિતી વૈકલ્પિક છે. બાયોડેટામાં તમે બતાવવા માંગતા હો તે શિક્ષણ અને કારકિર્દીની માહિતી જ ભરો.",
  // Step 3 - Family
familyDetails: "કૌટુંબિક માહિતી",
step3Description:
  "પરિવારની બધી માહિતી વૈકલ્પિક છે. બાયોડેટામાં તમે બતાવવા માંગતા હો તે માહિતી જ ભરો.",
fatherName: "પિતાનું નામ",
fatherOccupation: "પિતાનો વ્યવસાય",
motherName: "માતાનું નામ",
motherOccupation: "માતાનો વ્યવસાય",
brothers: "ભાઈઓ",
sisters: "બહેનો",
familyType: "પરિવારનો પ્રકાર",
familyLocation: "પરિવારનું સ્થળ",
additionalFamilyDetails: "વધારાની કૌટુંબિક માહિતી",

fatherNamePlaceholder: "પિતાનું નામ લખો",
fatherOccupationPlaceholder: "ઉદાહરણ: વ્યવસાય, નોકરી",
motherNamePlaceholder: "માતાનું નામ લખો",
motherOccupationPlaceholder: "ઉદાહરણ: ગૃહિણી, શિક્ષિકા",
brothersPlaceholder: "ઉદાહરણ: 1",
sistersPlaceholder: "ઉદાહરણ: 1",
familyLocationPlaceholder: "ઉદાહરણ: અમદાવાદ, ગુજરાત",
additionalFamilyDetailsPlaceholder:
  "અન્ય કૌટુંબિક માહિતી અહીં લખો...",

// Step 4 - Traditional
traditionalDetails: "હિંદુ / પરંપરાગત માહિતી",
step4Description:
  "બધી પરંપરાગત માહિતી વૈકલ્પિક છે. બાયોડેટામાં તમે બતાવવા માંગતા હો તે માહિતી જ ભરો.",
communityCaste: "સમુદાય / જાતિ",
subCommunity: "પેટા-સમુદાય",
gotra: "ગોત્ર",
rashi: "રાશિ",
nakshatra: "નક્ષત્ર",
manglik: "માંગલિક",
horoscopeAvailable: "કુંડળી ઉપલબ્ધ",
additionalTraditionalDetails: "વધારાની પરંપરાગત માહિતી",

communityCastePlaceholder: "સમુદાય અથવા જાતિ લખો",
subCommunityPlaceholder: "લાગુ પડતું હોય તો પેટા-સમુદાય લખો",
gotraPlaceholder: "ગોત્ર લખો",
rashiPlaceholder: "ઉદાહરણ: મેષ",
nakshatraPlaceholder: "નક્ષત્ર લખો",
additionalTraditionalDetailsPlaceholder:
  "અન્ય પરંપરાગત અથવા કુંડળી સંબંધિત માહિતી અહીં લખો...",

// Step 5 - Contact
contactDetails: "સંપર્ક માહિતી",
step5Description:
  "બધી સંપર્ક માહિતી વૈકલ્પિક છે. બાયોડેટામાં તમે બતાવવા માંગતા હો તે માહિતી જ ભરો.",
contactPerson: "સંપર્ક વ્યક્તિ",
mobileNumber: "મોબાઇલ નંબર",
alternateNumber: "વૈકલ્પિક નંબર",
emailAddress: "ઈમેલ સરનામું",
city: "શહેર",
state: "રાજ્ય",
fullAddress: "પૂર્ણ સરનામું",

contactPersonPlaceholder: "ઉદાહરણ: પિતા, ભાઈ અથવા પોતે",
mobileNumberPlaceholder: "મોબાઇલ નંબર લખો",
alternateNumberPlaceholder: "વૈકલ્પિક નંબર લખો",
emailAddressPlaceholder: "example@email.com",
cityPlaceholder: "ઉદાહરણ: અમદાવાદ",
statePlaceholder: "ઉદાહરણ: ગુજરાત",
fullAddressPlaceholder: "બાયોડેટામાં બતાવવાનું સરનામું લખો...",
    fullName: "પૂરું નામ",
    fullNamePlaceholder: "તમારું પૂરું નામ લખો",
    biodataSymbol: "બાયોડેટા ચિહ્ન",
    dateOfBirth: "જન્મ તારીખ",
    timeOfBirth: "જન્મ સમય",
    placeOfBirth: "જન્મ સ્થળ",
    placeOfBirthPlaceholder: "શહેર / ગામ",
    gender: "લિંગ",
male: "પુરુષ",
female: "સ્ત્રી",
other: "અન્ય",
height: "ઊંચાઈ",  
    heightPlaceholder: "ઉદાહરણ: 5' 8\"",
    maritalStatus: "વૈવાહિક સ્થિતિ",
    neverMarried: "અવિવાહિત",
divorced: "છૂટાછેડા લીધેલ",
widowed: "વિધવા / વિધુર",
separated: "અલગ રહેતા",
    motherTongue: "માતૃભાષા",
    motherTonguePlaceholder: "ઉદાહરણ: ગુજરાતી",
    currentCity: "હાલનું શહેર",
    currentCityPlaceholder: "ઉદાહરણ: અમદાવાદ, ગુજરાત",
    aboutMe: "મારા વિશે",
    aboutMePlaceholder: "તમારા વિશે થોડું લખો...",
    selectOptional: "ઇચ્છો તો પસંદ કરો",
    highestQualification: "ઉચ્ચતમ શૈક્ષણિક લાયકાત",
degreeCourse: "ડિગ્રી / કોર્સ",
collegeUniversity: "કોલેજ / યુનિવર્સિટી",
occupation: "વ્યવસાય",
companyBusiness: "કંપની / વ્યવસાય",
designation: "હોદ્દો",
workLocation: "કામનું સ્થળ",
annualIncome: "વાર્ષિક આવક",
additionalCareerDetails: "વધારાની શિક્ષણ / કારકિર્દી માહિતી",
highestQualificationPlaceholder: "ઉદાહરણ: B.Tech, MBA, B.Com",
degreeCoursePlaceholder: "ઉદાહરણ: Computer Science",
collegeUniversityPlaceholder: "કોલેજ / યુનિવર્સિટીનું નામ",
occupationPlaceholder: "ઉદાહરણ: Software Engineer",
companyBusinessPlaceholder: "કંપની અથવા વ્યવસાયનું નામ",
designationPlaceholder: "ઉદાહરણ: Senior Developer",
workLocationPlaceholder: "ઉદાહરણ: અમદાવાદ, ગુજરાત",
annualIncomePlaceholder: "ઉદાહરણ: ₹8–10 LPA",
additionalCareerDetailsPlaceholder:
  "વધારાની શિક્ષણ અથવા કારકિર્દીની માહિતી લખો",
  // Gujarati
livePreview: "લાઇવ પૂર્વાવલોકન",
  },
};

type FormData = {
  fullName: string;
  dateOfBirth: string;
  birthTime: string;
  birthPlace: string;
  gender: string;
  height: string;
  maritalStatus: string;
  motherTongue: string;
  currentCity: string;
  aboutMe: string;

  // Step 2 - Education & Career
highestQualification: string;
degreeCourse: string;
collegeUniversity: string;  
occupation: string;
companyBusiness: string;
designation: string;
workLocation: string;
annualIncome: string;
careerDetails: string;

// Step 3 - Family Details
fatherName: string;
fatherOccupation: string;
motherName: string;
motherOccupation: string;
brothers: string;
sisters: string;
familyType: string;
familyLocation: string;
familyDetails: string;

// Step 4 - Hindu / Traditional Details
religion: string;
community: string;
subCommunity: string;
gotra: string;
rashi: string;
nakshatra: string;
manglik: string;
horoscopeAvailable: string;
traditionalDetails: string;

// Step 5 - Contact Details
contactPerson: string;
mobileNumber: string;
alternateNumber: string;
email: string;
address: string;
contactCity: string;
contactState: string;

};

type SymbolItem = {
  id: string;
  name: string;
  category: string;
  type: "text" | "image";
  value?: string;
  image?: string;
};

const symbolCategories = [
  "Popular",
  "Written",
  "Ganesh",
  "Shiva",
  "Krishna",
  "Ram",
  "Hanuman",
  "Devi",
  "Traditional",
  "Decorative",
];

const symbols: SymbolItem[] = [
  // POPULAR
  { id: "none", name: "No Symbol", category: "Popular", type: "text", value: "" },
  { id: "om", name: "Om", category: "Popular", type: "text", value: "ॐ" },
  { id: "shree", name: "Shree", category: "Popular", type: "text", value: "श्री" },
  {
    id: "ganesh-text",
    name: "Shri Ganesh",
    category: "Popular",
    type: "text",
    value: "॥ श्री गणेशाय नमः ॥",
  },
  {
    id: "shubh-vivah",
    name: "Shubh Vivah",
    category: "Popular",
    type: "text",
    value: "शुभ विवाह",
  },
  {
    id: "shubh-mangal",
    name: "Shubh Mangal",
    category: "Popular",
    type: "text",
    value: "शुभ मंगल",
  },

  // WRITTEN
  { id: "w1", name: "Om", category: "Written", type: "text", value: "ॐ" },
  { id: "w2", name: "Shree", category: "Written", type: "text", value: "श्री" },
  {
    id: "w3",
    name: "Ganesh Vandana",
    category: "Written",
    type: "text",
    value: "॥ श्री गणेशाय नमः ॥",
  },
  {
    id: "w4",
    name: "Kuldevata",
    category: "Written",
    type: "text",
    value: "॥ श्री कुलदेवताय नमः ॥",
  },
  {
    id: "w5",
    name: "Om Ganesh",
    category: "Written",
    type: "text",
    value: "ॐ श्री गणेशाय नमः",
  },
  {
    id: "w6",
    name: "Om Namah Shivaya",
    category: "Written",
    type: "text",
    value: "ॐ नमः शिवाय",
  },
  {
    id: "w7",
    name: "Shri Ram",
    category: "Written",
    type: "text",
    value: "श्री राम",
  },
  {
    id: "w8",
    name: "Radhe Krishna",
    category: "Written",
    type: "text",
    value: "राधे कृष्ण",
  },
  {
    id: "w9",
    name: "Jai Shri Ram",
    category: "Written",
    type: "text",
    value: "जय श्री राम",
  },
  {
    id: "w10",
    name: "Jai Mata Di",
    category: "Written",
    type: "text",
    value: "जय माता दी",
  },

  // IMAGE LIBRARY PLACEHOLDERS
  {
  id: "g1",
  name: "Ganesh Classic",
  category: "Ganesh",
  type: "image",
  image: "/symbols/hindu/ganesh/ganesh-01.png",
},
{
  id: "g1",
  name: "Ganesh Classic",
  category: "Ganesh",
  type: "image",
  image: "/symbols/hindu/ganesh/ganesh-01.png",
},
{
  id: "g2",
  name: "Ganesh Golden",
  category: "Ganesh",
  type: "image",
  image: "/symbols/hindu/ganesh/ganesh-02.png",
},
{
  id: "g3",
  name: "Ganesh Traditional",
  category: "Ganesh",
  type: "image",
  image: "/symbols/hindu/ganesh/ganesh-03.png",
},
{
  id: "g4",
  name: "Ganesh Minimal",
  category: "Ganesh",
  type: "image",
  image: "/symbols/hindu/ganesh/ganesh-04.png",
},

{
  id: "s1",
  name: "Mahadev",
  category: "Shiva",
  type: "image",
  image: "/symbols/hindu/shiva/shiva-1.png",
},
{
  id: "s2",
  name: "Shiva Meditation",
  category: "Shiva",
  type: "image",
  image: "/symbols/hindu/shiva/shiva-2.png",
},
{
  id: "s3",
  name: "Shiva Traditional",
  category: "Shiva",
  type: "image",
  image: "/symbols/hindu/shiva/shiva-3.png",
},
{
  id: "s4",
  name: "Mahadev Blessing",
  category: "Shiva",
  type: "image",
  image: "/symbols/hindu/shiva/shiva-4.png",
},

  { id: "k1", name: "Krishna Flute", category: "Krishna", type: "image" },
  { id: "k2", name: "Radha Krishna", category: "Krishna", type: "image" },
  { id: "k3", name: "Peacock Feather", category: "Krishna", type: "image" },
  { id: "k4", name: "Krishna Minimal", category: "Krishna", type: "image" },
  { id: "k5", name: "Flute Motif", category: "Krishna", type: "image" },

  { id: "r1", name: "Shri Ram", category: "Ram", type: "image" },
  { id: "r2", name: "Ram Darbar", category: "Ram", type: "image" },
  { id: "r3", name: "Bow & Arrow", category: "Ram", type: "image" },
  { id: "r4", name: "Ram Minimal", category: "Ram", type: "image" },
  { id: "r5", name: "Ram Decorative", category: "Ram", type: "image" },

  { id: "h1", name: "Hanuman", category: "Hanuman", type: "image" },
  { id: "h2", name: "Hanuman Minimal", category: "Hanuman", type: "image" },
  { id: "h3", name: "Hanuman Gada", category: "Hanuman", type: "image" },
  { id: "h4", name: "Bajrangbali", category: "Hanuman", type: "image" },
  { id: "h5", name: "Hanuman Outline", category: "Hanuman", type: "image" },

  { id: "d1", name: "Lakshmi", category: "Devi", type: "image" },
  { id: "d2", name: "Durga", category: "Devi", type: "image" },
  { id: "d3", name: "Saraswati", category: "Devi", type: "image" },
  { id: "d4", name: "Devi Minimal", category: "Devi", type: "image" },
  { id: "d5", name: "Lotus Devi", category: "Devi", type: "image" },

  { id: "t1", name: "Kalash", category: "Traditional", type: "image" },
  { id: "t2", name: "Diya", category: "Traditional", type: "image" },
  { id: "t3", name: "Shankh", category: "Traditional", type: "image" },
  { id: "t4", name: "Lotus", category: "Traditional", type: "image" },
  { id: "t5", name: "Swastik", category: "Traditional", type: "image" },
  { id: "t6", name: "Mangal Kalash", category: "Traditional", type: "image" },

  { id: "a1", name: "Mandala", category: "Decorative", type: "image" },
  { id: "a2", name: "Floral Mandala", category: "Decorative", type: "image" },
  { id: "a3", name: "Wedding Arch", category: "Decorative", type: "image" },
  { id: "a4", name: "Lotus Border", category: "Decorative", type: "image" },
  { id: "a5", name: "Peacock", category: "Decorative", type: "image" },
  { id: "a6", name: "Wedding Bells", category: "Decorative", type: "image" },
];

export default function HinduBiodataPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    dateOfBirth: "",
    birthTime: "",
    birthPlace: "",
    gender: "",
    height: "",
    maritalStatus: "",
    motherTongue: "",
    currentCity: "",
    aboutMe: "",

    // Step 2 - Education & Career
highestQualification: "",
degreeCourse: "",
collegeUniversity: "",
occupation: "",
companyBusiness: "",
designation: "",
workLocation: "",
annualIncome: "",
careerDetails: "",

// Step 3 - Family Details
fatherName: "",
fatherOccupation: "",
motherName: "",
motherOccupation: "",
brothers: "",
sisters: "",
familyType: "",
familyLocation: "",
familyDetails: "",

// Step 4 - Hindu / Traditional Details
religion: "Hindu",
community: "",
subCommunity: "",
gotra: "",
rashi: "",
nakshatra: "",
manglik: "",
horoscopeAvailable: "",
traditionalDetails: "",

// Step 5 - Contact Details
contactPerson: "",
mobileNumber: "",
alternateNumber: "",
email: "",
address: "",
contactCity: "",
contactState: "",
  });

  const [selectedSymbolId, setSelectedSymbolId] = useState("none");
  const [symbolPickerOpen, setSymbolPickerOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Popular");
  const [photo, setPhoto] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  

  const [language, setLanguage] = useState("en");
  const t = translations[language as keyof typeof translations];

  // Load saved biodata when the page opens
// Load saved biodata when the page opens
useEffect(() => {
  try {
    const savedDraft = localStorage.getItem("hinduBiodataDraft");

    if (savedDraft) {
      const draft = JSON.parse(savedDraft);

      if (draft.formData) {
        setFormData((current) => ({
          ...current,
          ...draft.formData,
        }));
      }

      if (draft.selectedSymbolId) {
        setSelectedSymbolId(draft.selectedSymbolId);
      }

      if (draft.currentStep) {
        setCurrentStep(draft.currentStep);
      }
    }
  } catch (error) {
    console.error("Could not load biodata draft:", error);
  }

  setIsLoaded(true);
}, []);

// Automatically save biodata when details change
useEffect(() => {
  if (!isLoaded) return;

  try {
    localStorage.setItem(
      "hinduBiodataDraft",
    JSON.stringify({
  formData,
  selectedSymbolId,
  currentStep,
})
    );
  } catch (error) {
    console.error("Could not save biodata draft:", error);
  }
}, [formData, selectedSymbolId, currentStep, isLoaded]);

  const selectedSymbol =
    symbols.find((item) => item.id === selectedSymbolId) || symbols[0];

  const visibleSymbols = symbols.filter(
    (item) => item.category === activeCategory
  );

  function updateField(
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function startAgain() {
  const confirmed = window.confirm(
    "Start again? This will clear all the details you entered."
  );

  if (!confirmed) return;

  localStorage.removeItem("hinduBiodataDraft");

  window.location.reload();
}

  function handlePhoto(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setPhoto(reader.result as string);
    };

    reader.readAsDataURL(file);
  }

  function chooseSymbol(item: SymbolItem) {
    if (item.type === "image" && !item.image) {
      return;
    }

    setSelectedSymbolId(item.id);
    setSymbolPickerOpen(false);
  }

  return (
    <div className="min-h-screen bg-[#fffaf5]">
      <section className="border-b border-orange-100 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-8">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600">
              Hindu Biodata
            </span>

            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
              100% Free
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Create Your Hindu Marriage Biodata
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Add only the information you want to show. You can type in any
            language or mix multiple languages.
          </p>

          <div className="mt-4 inline-flex rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
            Only Full Name is required. Everything else is optional.
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-5">
<div className="mb-4 flex justify-end">
  <button
    type="button"
    onClick={startAgain}
    className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-orange-300 hover:text-orange-600"
  >
    ↻ Start Again
  </button>
</div>

        <div className="mb-8 overflow-x-auto pb-2">
          <div className="flex min-w-[720px] items-center">
           <ProgressStep
  number="1"
  title="Personal"
  active={currentStep === 1}
/>

<ProgressLine />

<ProgressStep
  number="2"
  title="Education"
  active={currentStep === 2}
/>

<ProgressLine />

<ProgressStep
  number="3"
  title="Family"
  active={currentStep === 3}
/>

<ProgressLine />

<ProgressStep
  number="4"
  title="Traditional"
  active={currentStep === 4}
/>

<ProgressLine />

<ProgressStep
  number="5"
  title="Contact"
  active={currentStep === 5}
/>

<ProgressLine />

<ProgressStep
  number="6"
  title="Design"
  active={currentStep === 6}
/>
          </div>
        </div>

        <div className="mx-auto w-full max-w-4xl">
          <div className="space-y-6">
            {currentStep === 1 && (
               <>
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
              <p className="text-sm font-bold text-orange-600">STEP 1 OF 6</p>

              <h2 className="mt-1 text-2xl font-bold text-slate-900">
               {t.personalDetails}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {t.step1Description}
              </p>

              {/* BIODATA LANGUAGE */}
<div className="mt-6">
  <label className="mb-2 block text-sm font-semibold text-slate-700">
    {t.language}
  </label>

  <div className="flex flex-wrap gap-2">
    <button
      type="button"
      onClick={() => setLanguage("en")}
      className={`rounded-lg border px-4 py-2 text-sm font-semibold transition ${
        language === "en"
          ? "border-orange-500 bg-orange-50 text-orange-600"
          : "border-slate-200 bg-white text-slate-600 hover:border-orange-300"
      }`}
    >
      English
    </button>

    <button
      type="button"
      onClick={() => setLanguage("mr")}
      className={`rounded-lg border px-4 py-2 text-sm font-semibold transition ${
        language === "mr"
          ? "border-orange-500 bg-orange-50 text-orange-600"
          : "border-slate-200 bg-white text-slate-600 hover:border-orange-300"
      }`}
    >
      मराठी
    </button>

    <button
      type="button"
      onClick={() => setLanguage("hi")}
      className={`rounded-lg border px-4 py-2 text-sm font-semibold transition ${
        language === "hi"
          ? "border-orange-500 bg-orange-50 text-orange-600"
          : "border-slate-200 bg-white text-slate-600 hover:border-orange-300"
      }`}
    >
      हिंदी
    </button>

    <button
      type="button"
      onClick={() => setLanguage("gu")}
      className={`rounded-lg border px-4 py-2 text-sm font-semibold transition ${
        language === "gu"
          ? "border-orange-500 bg-orange-50 text-orange-600"
          : "border-slate-200 bg-white text-slate-600 hover:border-orange-300"
      }`}
    >
      ગુજરાતી
    </button>
  </div>
</div>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <Field
  label={t.fullName}
  name="fullName"
  value={formData.fullName}
  onChange={updateField}
  placeholder={t.fullNamePlaceholder}
  required
/>

                {/* COMPACT SYMBOL FIELD */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    {t.biodataSymbol}
                  </label>

                  <button
                    type="button"
                    onClick={() => setSymbolPickerOpen(true)}
                    className="flex w-full items-center justify-between rounded-xl border border-slate-300 bg-white px-4 py-3 text-left transition hover:border-orange-400 focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-50"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-7 min-w-7 items-center justify-center text-lg font-bold text-orange-600">
                        {selectedSymbol.type === "text" &&
                        selectedSymbol.value ? (
                          selectedSymbol.value.length < 5 ? (
                            selectedSymbol.value
                          ) : (
                            "ॐ"
                          )
                        ) : selectedSymbol.id === "none" ? (
                          <span className="text-slate-300">Ø</span>
                        ) : (
                          <span>◈</span>
                        )}
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-slate-800">
                          {selectedSymbol.name}
                        </p>

                        <p className="text-xs text-slate-400">
                          Optional — click to choose
                        </p>
                      </div>
                    </div>

                    <span className="ml-3 text-slate-400">⌄</span>
                  </button>
                </div>

                <Field
                  label={t.dateOfBirth}
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={updateField}
                  type="date"
                />

                <Field
                  label={t.timeOfBirth}
                  name="birthTime"
                  value={formData.birthTime}
                  onChange={updateField}
                  type="time"
                />

                <Field
                  label={t.placeOfBirth}
                  name="birthPlace"
                  value={formData.birthPlace}
                  onChange={updateField}
                  placeholder={t.placeOfBirthPlaceholder}
                />

                <SelectField
                  label={t.gender}
                  name="gender"
                  value={formData.gender}
                  onChange={updateField}
                  options={[t.male, t.female, t.other]}
                  placeholder={t.selectOptional}
                />

                <Field
                  label={t.height}
                  name="height"
                  value={formData.height}
                  onChange={updateField}
                  placeholder={t.heightPlaceholder}
                />

                <SelectField
                  label={t.maritalStatus}
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={updateField}
                  options={[
  t.neverMarried,
  t.divorced,
  t.widowed,
  t.separated,

                  ]}
                  placeholder={t.selectOptional}/*  */
                />

                <Field
                  label={t.motherTongue}
                  name="motherTongue"
                  value={formData.motherTongue}
                  onChange={updateField}
                  placeholder={t.motherTonguePlaceholder}
                />

                <Field
                  label={t.currentCity}
                  name="currentCity"
                  value={formData.currentCity}
                  onChange={updateField}
                  placeholder={t.currentCityPlaceholder}
                />

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    {t.aboutMe}
                  </label>

                  <textarea
                    name="aboutMe"
                    value={formData.aboutMe}
                    onChange={updateField}
                    rows={4}
                    placeholder={t.aboutMePlaceholder}
                    className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-50"
                  />
                </div>
              </div>
            </section>

            {/* PHOTO */}
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold text-slate-900">
                Profile Photo
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Optional. You can create your biodata without a photo.
              </p>

              <div className="mt-5 flex items-center gap-5">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-orange-200 bg-orange-50">
                  {photo ? (
                    <img
                      src={photo}
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-center text-xs text-slate-400">
                      No
                      <br />
                      Photo
                    </span>
                  )}
                </div>

                <div>
                  <label className="inline-flex cursor-pointer rounded-xl border border-orange-200 px-5 py-3 text-sm font-bold text-orange-600 hover:bg-orange-50">
                    Choose Photo

                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhoto}
                      className="hidden"
                    />
                  </label>

                  {photo && (
                    <button
                      type="button"
                      onClick={() => setPhoto(null)}
                      className="ml-3 text-sm font-semibold text-red-500"
                    >
                      Remove
                    </button>
                    )}
                </div>
              </div>
            </section>
            

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                disabled={!formData.fullName.trim()}
                className="rounded-xl bg-orange-500 px-7 py-3.5 font-bold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                Save & Continue →
              </button>
            </div>
            </>
)}

{currentStep === 2 && (
  <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
    <p className="text-sm font-bold text-orange-600">
      STEP 2 OF 6
    </p>

    <h2 className="mt-1 text-2xl font-bold text-slate-900">
      {t.educationCareer}
    </h2>

    <p className="mt-2 text-sm leading-6 text-slate-500">
      {t.step2Description}
    </p>

   <div className="mt-7">
   <div className="mt-7 grid gap-5 sm:grid-cols-2">
  <Field
    label={t.highestQualification}
    name="highestQualification"
    value={formData.highestQualification}
    onChange={updateField}
    placeholder={t.highestQualificationPlaceholder}
  />

  <Field
    label={t.degreeCourse}
    name="degreeCourse"
    value={formData.degreeCourse}
    onChange={updateField}
    placeholder={t.degreeCoursePlaceholder}
  />

  <Field
    label={t.collegeUniversity}
    name="collegeUniversity"
    value={formData.collegeUniversity}
    onChange={updateField}
    placeholder={t.collegeUniversityPlaceholder}
  />

  <Field
    label={t.occupation}
    name="occupation"
    value={formData.occupation}
    onChange={updateField}
    placeholder={t.occupationPlaceholder}
  />

  <Field
    label={t.companyBusiness}
    name="companyBusiness"
    value={formData.companyBusiness}
    onChange={updateField}
    placeholder={t.companyBusinessPlaceholder}
  />

  <Field
    label={t.designation}
    name="designation"
    value={formData.designation}
    onChange={updateField}
    placeholder={t.designationPlaceholder}
  />

  <Field
    label={t.workLocation}
    name="workLocation"
    value={formData.workLocation}
    onChange={updateField}
    placeholder={t.workLocationPlaceholder}
  />

  <Field
    label={t.annualIncome}
    name="annualIncome"
    value={formData.annualIncome}
    onChange={updateField}
    placeholder={t.annualIncomePlaceholder}
  />

  <div className="sm:col-span-2">
    <label className="mb-2 block text-sm font-semibold text-slate-800">
      Additional Education / Career Details
    </label>

    <textarea
      name="careerDetails"
      value={formData.careerDetails}
      onChange={updateField}
      rows={4}
      placeholder="Add any additional education or career information..."
      className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
    />
  </div>
</div>
</div>

    <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
      <button
        type="button"
        onClick={() => setCurrentStep(1)}
        className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
      >
        ← Back
      </button>

      <button
        type="button"
        onClick={() => setCurrentStep(3)}
        className="rounded-xl bg-orange-500 px-7 py-3.5 font-bold text-white transition hover:bg-orange-600"
      >
        Save & Continue →
      </button>
    </div>
  </section>
)}

{currentStep === 3 && (
  <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
    <p className="text-sm font-bold text-orange-600">
      STEP 3 OF 6
    </p>

    <h2 className="mt-1 text-2xl font-bold text-slate-900">
      {t.familyDetails}
    </h2>

    <p className="mt-2 text-sm leading-6 text-slate-500">
      {t.step3Description}
    </p>

    <div className="mt-7 grid gap-5 sm:grid-cols-2">
      <Field
        label={t.fatherName}
        name="fatherName"
        value={formData.fatherName}
        onChange={updateField}
placeholder={t.fatherNamePlaceholder}
      />

      <Field
label={t.fatherOccupation}
        name="fatherOccupation"
        value={formData.fatherOccupation}
        onChange={updateField}
placeholder={t.fatherOccupationPlaceholder}
      />

      <Field
label={t.motherName}
        name="motherName"
        value={formData.motherName}
        onChange={updateField}
placeholder={t.motherNamePlaceholder}
      />

      <Field
label={t.motherOccupation}
        name="motherOccupation"
        value={formData.motherOccupation}
        onChange={updateField}
placeholder={t.motherOccupationPlaceholder}
      />

      <Field
label={t.brothers}
        name="brothers"
        value={formData.brothers}
        onChange={updateField}
placeholder={t.brothersPlaceholder}
      />

      <Field
label={t.sisters}
        name="sisters"
        value={formData.sisters}
        onChange={updateField}
placeholder={t.sistersPlaceholder}
      />

      <SelectField
label={t.familyType}
        name="familyType"
        value={formData.familyType}
        onChange={updateField}
        options={["Nuclear Family", "Joint Family"]}
      />

      <Field
label={t.familyLocation}
        name="familyLocation"
        value={formData.familyLocation}
        onChange={updateField}
placeholder={t.familyLocationPlaceholder}      />

      <div className="sm:col-span-2">
        <label className="mb-2 block text-sm font-semibold text-slate-800">
          {t.additionalFamilyDetails}
        </label>

        <textarea
          name="familyDetails"
          value={formData.familyDetails}
          onChange={updateField}
          rows={4}
          placeholder={t.additionalFamilyDetailsPlaceholder}
          className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
        />
      </div>
    </div>

    <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
      <button
        type="button"
        onClick={() => setCurrentStep(2)}
        className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
      >
        ← Back
      </button>

      <button
        type="button"
        onClick={() => setCurrentStep(4)}
        className="rounded-xl bg-orange-500 px-7 py-3.5 font-bold text-white transition hover:bg-orange-600"
      >
        Save & Continue →
      </button>
    </div>
  </section>
)}

{currentStep === 4 && (
  <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
    <p className="text-sm font-bold text-orange-600">
      STEP 4 OF 6
    </p>

    <h2 className="mt-1 text-2xl font-bold text-slate-900">
      {t.traditionalDetails}
    </h2>

    <p className="mt-2 text-sm leading-6 text-slate-500">
      {t.step4Description}
    </p>

    <div className="mt-7 grid gap-5 sm:grid-cols-2">
      <Field
        label={t.communityCaste}
        name="community"
        value={formData.community}
        onChange={updateField}
        placeholder={t.communityCastePlaceholder}
      />

      <Field
        label={t.subCommunity}
        name="subCommunity"
        value={formData.subCommunity}
        onChange={updateField}
        placeholder={t.subCommunityPlaceholder}
      />

      <Field
        label={t.gotra}
        name="gotra"
        value={formData.gotra}
        onChange={updateField}
        placeholder={t.gotraPlaceholder}
      />

      <Field
        label={t.rashi}
        name="rashi"
        value={formData.rashi}
        onChange={updateField}
        placeholder={t.rashiPlaceholder}
      />

      <Field
        label={t.nakshatra}
        name="nakshatra"
        value={formData.nakshatra}
        onChange={updateField}
        placeholder={t.nakshatraPlaceholder}
      />

      <SelectField
        label={t.manglik}
        name="manglik"
        value={formData.manglik}
        onChange={updateField}
        options={["Yes", "No", "Anshik Manglik", "Don't Know"]}
      />

      <SelectField
        label={t.horoscopeAvailable}
        name="horoscopeAvailable"
        value={formData.horoscopeAvailable}
        onChange={updateField}
        options={["Yes", "No"]}
      />

      <div className="hidden sm:block" />

      <div className="sm:col-span-2">
        <label className="mb-2 block text-sm font-semibold text-slate-800">
          {t.additionalTraditionalDetails}
        </label>

        <textarea
          name="traditionalDetails"
          value={formData.traditionalDetails}
          onChange={updateField}
          rows={4}
          placeholder={t.additionalTraditionalDetailsPlaceholder}
          className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
        />
      </div>
    </div>

    <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
      <button
        type="button"
        onClick={() => setCurrentStep(3)}
        className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
      >
        ← Back
      </button>

      <button
        type="button"
        onClick={() => setCurrentStep(5)}
        className="rounded-xl bg-orange-500 px-7 py-3.5 font-bold text-white transition hover:bg-orange-600"
      >
        Save & Continue →
      </button>
    </div>
  </section>
)}

{currentStep === 5 && (
  <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
    <p className="text-sm font-bold text-orange-600">
      STEP 5 OF 6
    </p>

    <h2 className="mt-1 text-2xl font-bold text-slate-900">
      {t.contactDetails}
    </h2>

    <p className="mt-2 text-sm leading-6 text-slate-500">
      {t.step5Description}
    </p>

    <div className="mt-7 grid gap-5 sm:grid-cols-2">
      <Field
        label={t.contactPerson}
        name="contactPerson"
        value={formData.contactPerson}
        onChange={updateField}
        placeholder={t.contactPersonPlaceholder}
      />

      <Field
        label={t.mobileNumber}
        name="mobileNumber"
        value={formData.mobileNumber}
        onChange={updateField}
        placeholder={t.mobileNumberPlaceholder}

      />

      <Field
        label={t.alternateNumber}
        name="alternateNumber"
        value={formData.alternateNumber}
        onChange={updateField}
        placeholder={t.alternateNumberPlaceholder}
      />

      <Field
        label={t.emailAddress}
        name="email"
        value={formData.email}
        onChange={updateField}
        placeholder={t.emailAddressPlaceholder}
      />

      <Field
        label={t.city}
        name="contactCity"
        value={formData.contactCity}
        onChange={updateField}
        placeholder={t.cityPlaceholder}
      />

      <Field
        label={t.state}
        name="contactState"
        value={formData.contactState}
        onChange={updateField}
        placeholder={t.statePlaceholder}
      />

      <div className="sm:col-span-2">
        <label className="mb-2 block text-sm font-semibold text-slate-800">
          {t.fullAddress}
        </label>

        <textarea
          name="address"
          value={formData.address}
          onChange={updateField}
          rows={4}
          placeholder={t.fullAddressPlaceholder}
          className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
        />
      </div>
    </div>

    <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
      <button
        type="button"
        onClick={() => setCurrentStep(4)}
        className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
      >
        ← Back
      </button>

      <button
        type="button"
        onClick={() => setCurrentStep(6)}
        className="rounded-xl bg-orange-500 px-7 py-3.5 font-bold text-white transition hover:bg-orange-600"
      >
        Choose Design →
      </button>
    </div>
  </section>
)}

{currentStep === 6 && (
  <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
    <p className="text-sm font-bold text-orange-600">
      STEP 6 OF 6
    </p>

    <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
      Choose Template
    </h2>

    <p className="mt-2 text-sm leading-6 text-slate-500">
      Select a design you like. You can preview and customize it before
      downloading your biodata.
    </p>

    {/* Template Filters */}
    <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
      {["All", "Traditional", "Modern", "Elegant", "Simple"].map(
        (category) => (
          <button
            key={category}
            type="button"
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
              category === "All"
                ? "bg-orange-500 text-white"
                : "border border-slate-200 bg-slate-50 text-slate-600 hover:border-orange-300"
            }`}
          >
            {category}
          </button>
        )
      )}
    </div>

    {/* Template Gallery */}
    <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6">
      
      {/* H-01 */}
      <button
  type="button"
  onClick={() => setSelectedTemplate("H-01")}
  className={`group rounded-2xl border-2 p-3 text-left transition hover:shadow-md ${
    selectedTemplate === "H-01"
      ? "border-orange-500 bg-orange-50"
      : "border-slate-200 bg-white hover:border-orange-300"
  }`}
>
        <div className="flex aspect-[3/4] items-center justify-center rounded-xl border border-orange-200 bg-[#fff8e8]">
          <div className="text-center">
            <div className="text-3xl">ॐ</div>
            <p className="mt-3 font-bold text-[#7f1d1d]">
              {formData.fullName || "Your Name"}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Marriage Biodata
            </p>
          </div>
        </div>

     <div className="mt-3">
  <p className="font-bold text-slate-900">H-01</p>
  <p className="text-sm text-slate-500">Traditional</p>

  {selectedTemplate === "H-01" && (
   <div className="group/preview mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-center text-sm font-bold text-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-orange-600 hover:shadow-lg">
  <span>Preview Template</span>

  <span className="transition-transform duration-300 group-hover/preview:translate-x-1.5">
    →
  </span>
</div>
  )}
</div>
      </button>

      {/* H-02 */}
      <button
  type="button"
  onClick={() => setSelectedTemplate("H-02")}
  className={`group rounded-2xl border-2 p-3 text-left transition hover:shadow-md ${
    selectedTemplate === "H-02"
      ? "border-orange-500 bg-orange-50"
      : "border-slate-200 bg-white hover:border-orange-300"
  }`}
>
        <div className="flex aspect-[3/4] items-center justify-center rounded-xl border border-green-200 bg-green-50">
          <div className="text-center">
            <p className="font-bold text-green-900">
              {formData.fullName || "Your Name"}
            </p>
            <p className="mt-1 text-xs text-green-700">
              Marriage Biodata
            </p>
          </div>
        </div>

       <div className="mt-3">
  <p className="font-bold text-slate-900">H-02</p>
  <p className="text-sm text-slate-500">Modern</p>

  {selectedTemplate === "H-02" && (
    <div className="group/preview mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-center text-sm font-bold text-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-orange-600 hover:shadow-lg">
      <span>Preview Template</span>

      <span className="transition-transform duration-300 group-hover/preview:translate-x-1.5">
        →
      </span>
    </div>
  )}
</div>
      </button>

      {/* H-03 */}
     {/* H-03 */}
<button
  type="button"
  onClick={() => setSelectedTemplate("H-03")}
  className={`group rounded-2xl border-2 p-3 text-left transition hover:shadow-md ${
    selectedTemplate === "H-03"
      ? "border-orange-500 bg-orange-50"
      : "border-slate-200 bg-white hover:border-orange-300"
  }`}
>
        <div className="flex aspect-[3/4] items-center justify-center rounded-xl border border-amber-200 bg-amber-50">
          <div className="text-center">
            <div className="text-3xl">ॐ</div>
            <p className="mt-3 font-bold text-amber-900">
              {formData.fullName || "Your Name"}
            </p>
          </div>
        </div>

       <div className="mt-3">
  <p className="font-bold text-slate-900">H-03</p>
  <p className="text-sm text-slate-500">Ganesh Theme</p>

  {selectedTemplate === "H-03" && (
    <div className="group/preview mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-center text-sm font-bold text-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-orange-600 hover:shadow-lg">
      <span>Preview Template</span>

      <span className="transition-transform duration-300 group-hover/preview:translate-x-1.5">
        →
      </span>
    </div>
  )}
</div>
      </button>

      {/* H-04 */}
     {/* H-04 */}
<button
  type="button"
  onClick={() => setSelectedTemplate("H-04")}
  className={`group rounded-2xl border-2 p-3 text-left transition hover:shadow-md ${
    selectedTemplate === "H-04"
      ? "border-orange-500 bg-orange-50"
      : "border-slate-200 bg-white hover:border-orange-300"
  }`}
>
        <div className="flex aspect-[3/4] items-center justify-center rounded-xl border border-orange-200 bg-orange-100">
          <div className="text-center">
            <p className="text-3xl">🚩</p>
            <p className="mt-3 font-bold text-orange-950">
              {formData.fullName || "Your Name"}
            </p>
          </div>
        </div>

        <div className="mt-3">
  <p className="font-bold text-slate-900">H-04</p>
  <p className="text-sm text-slate-500">Shivaji Maharaj</p>

  {selectedTemplate === "H-04" && (
    <div className="group/preview mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-center text-sm font-bold text-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-orange-600 hover:shadow-lg">
      <span>Preview Template</span>

      <span className="transition-transform duration-300 group-hover/preview:translate-x-1.5">
        →
      </span>
    </div>
  )}
</div>
      </button>

      {/* H-05 */}
    {/* H-05 */}
<button
  type="button"
  onClick={() => setSelectedTemplate("H-05")}
  className={`group rounded-2xl border-2 p-3 text-left transition hover:shadow-md ${
    selectedTemplate === "H-05"
      ? "border-orange-500 bg-orange-50"
      : "border-slate-200 bg-white hover:border-orange-300"
  }`}
>
        <div className="flex aspect-[3/4] items-center justify-center rounded-xl border-2 border-double border-amber-300 bg-[#fffdf7]">
          <div className="text-center">
            <p className="font-bold text-slate-900">
              {formData.fullName || "Your Name"}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Marriage Biodata
            </p>
          </div>
        </div>

      <div className="mt-3">
  <p className="font-bold text-slate-900">H-05</p>
  <p className="text-sm text-slate-500">Elegant Border</p>

  {selectedTemplate === "H-05" && (
    <div className="group/preview mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-center text-sm font-bold text-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-orange-600 hover:shadow-lg">
      <span>Preview Template</span>

      <span className="transition-transform duration-300 group-hover/preview:translate-x-1.5">
        →
      </span>
    </div>
  )}
</div>
      </button>

      {/* H-06 */}
     {/* H-06 */}
<button
  type="button"
  onClick={() => setSelectedTemplate("H-06")}
  className={`group rounded-2xl border-2 p-3 text-left transition hover:shadow-md ${
    selectedTemplate === "H-06"
      ? "border-orange-500 bg-orange-50"
      : "border-slate-200 bg-white hover:border-orange-300"
  }`}
>
        <div className="flex aspect-[3/4] items-center justify-center rounded-xl border border-slate-200 bg-[#fffdf7]">
          <div className="text-center">
            <p className="font-bold text-[#172554]">
              {formData.fullName || "Your Name"}
            </p>
            <div className="mx-auto mt-2 h-px w-16 bg-amber-400" />
            <p className="mt-2 text-xs text-slate-500">
              Marriage Biodata
            </p>
          </div>
        </div>

    <div className="mt-3">
  <p className="font-bold text-slate-900">H-06</p>
  <p className="text-sm text-slate-500">Minimal</p>

  {selectedTemplate === "H-06" && (
    <div className="group/preview mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-center text-sm font-bold text-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-orange-600 hover:shadow-lg">
      <span>Preview Template</span>

      <span className="transition-transform duration-300 group-hover/preview:translate-x-1.5">
        →
      </span>
    </div>
  )}
</div>
      </button>
    </div>

    {/* Bottom Navigation */}
    <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
      <button
        type="button"
        onClick={() => setCurrentStep(5)}
        className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
      >
        ← Back
      </button>

     {selectedTemplate ? (
  <button
    type="button"
    className="rounded-xl bg-orange-500 px-7 py-3 font-bold text-white transition hover:bg-orange-600"
  >
    Preview {selectedTemplate} →
  </button>
) : (
  <p className="text-sm text-slate-500">
    Select a template to continue
  </p>
)}
    </div>
  </section>
)}



          </div>

        </div>
      </div>

      {/* SYMBOL PICKER MODAL */}
      {symbolPickerOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-3 sm:p-6"
          onClick={() => setSymbolPickerOpen(false)}
        >
          <div
            className="flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-7">
              <div>
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  Choose Biodata Symbol
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Select any symbol or choose No Symbol.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSymbolPickerOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-600 hover:bg-slate-200"
              >
                ×
              </button>
            </div>

            {/* Categories */}
            <div className="overflow-x-auto border-b border-slate-200 px-5 sm:px-7">
              <div className="flex min-w-max gap-2 py-4">
                {symbolCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      activeCategory === category
                        ? "bg-orange-500 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-orange-50 hover:text-orange-600"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Symbols */}
            <div className="overflow-y-auto p-5 sm:p-7">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {visibleSymbols.map((item) => {
                  const unavailable = item.type === "image" && !item.image;
                  const selected = selectedSymbolId === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      disabled={unavailable}
                      onClick={() => chooseSymbol(item)}
                      className={`relative min-h-36 rounded-2xl border p-4 transition ${
                        selected
                          ? "border-orange-500 bg-orange-50 ring-2 ring-orange-100"
                          : unavailable
                          ? "cursor-default border-slate-200 bg-slate-50"
                          : "border-slate-200 bg-white hover:border-orange-300 hover:shadow-md"
                      }`}
                    >
                      <div className="flex h-20 items-center justify-center">
                        {item.type === "text" ? (
                          item.value ? (
                            <span className="whitespace-pre-wrap text-center text-xl font-bold text-orange-600">
                              {item.value}
                            </span>
                          ) : (
                            <span className="text-3xl text-slate-300">Ø</span>
                          )
                        ) : item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-20 w-20 object-contain"
                          />
                        ) : (
                          <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white text-2xl text-slate-300">
                            ◈
                          </div>
                        )}
                      </div>

                      <p className="mt-3 text-xs font-bold text-slate-700">
                        {item.name}
                      </p>

                      {unavailable && (
                        <p className="mt-1 text-[10px] font-medium text-slate-400">
                          Artwork coming next
                        </p>
                      )}

                      {selected && (
                        <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
                          ✓
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-slate-200 bg-slate-50 px-5 py-3 text-center text-xs text-slate-500">
              Image artwork will use our own optimized assets for clean PDF and
              image downloads.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

type ChangeHandler = (
  event: ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >
) => void;

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: ChangeHandler;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-50"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  placeholder = "Select if you want",
}: {
  label: string;
  name: string;
  value: string;
  onChange: ChangeHandler;
  options: string[];
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-50"
      >
        <option value="">{placeholder}</option>

    {options.map((option, index) => (
  <option key={`${name}-${index}`} value={option}>
    {option}
  </option>
))}
      
      </select>
    </div>
  );
}

function PreviewRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  if (!value) return null;

  return (
    <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3">
      <span className="shrink-0 text-slate-400">{label}</span>

      <span className="break-words text-right font-medium text-slate-700">
        {value}
      </span>
    </div>
  );
}

function ProgressStep({
  number,
  title,
  active = false,
}: {
  number: string;
  title: string;
  active?: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
          active
            ? "bg-orange-500 text-white"
            : "border border-slate-200 bg-white text-slate-400"
        }`}
      >
        {number}
      </div>

      <span
        className={`mt-2 text-xs font-medium ${
          active ? "text-orange-600" : "text-slate-400"
        }`}
      >
        {title}
      </span>
    </div>
  );
}

function ProgressLine() {
  return <div className="mx-2 mb-5 h-px flex-1 bg-slate-200" />;
}