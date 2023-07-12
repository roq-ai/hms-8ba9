const mapping: Record<string, string> = {
  appointments: 'appointment',
  departments: 'department',
  organizations: 'organization',
  patients: 'patient',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
