const countriesData = [
  {
    flag: "uk",
    value: "44",
    label: "United Kingdom (+44)",
    reGexValidation: "/((+44(s(0)s|s0s|s)?)|0)7d{3}(s)?d{6}/"
  },
  {
    flag: "de",
    value: "49",
    label: "Germany (+49)",
    reGexValidation: "/(?+(?49)?[ ()]?([- ()]?d[- ()]?){10}/"
  },
  {
    flag: "fr",
    value: "33",
    label: "France (+33)",
    reGexValidation: "/^((+)33|0)[1-9](d{2}){4}$/"
  },
  {
    flag: "it",
    value: "39",
    label: "Italy (+39)",
    reGexValidation: "/(?+(?39)?[ ()]?([- ()]?d[- ()]?){10}/"
  },
  {
    flag: "ro",
    value: "40",
    label: "Romania (+40)",
    reGexValidation: "/((+40(s(0)s|s0s|s)?)|0)7d{3}(s)?d{6}/"
  },
  {
    flag: "pl",
    value: "48",
    label: "Poland (+48)",
    reGexValidation:
      "//(?<!w)((?(+|00)?48)?)?[ -]?d{3}[ -]?d{3}[ -]?d{3}(?!w)//"
  },
  {
    flag: "at",
    value: "43",
    label: "Austria (+43)",
    reGexValidation: "/^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im"
  }
];
export default countriesData;
