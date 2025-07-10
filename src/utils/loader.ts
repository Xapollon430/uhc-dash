export async function printFacilityNames() {
  const response = await fetch("/claims_data.json");
  const claimsData = await response.json();
  claimsData.forEach((claim: any) => {
    console.log(claim.facility_name);
  });
}
