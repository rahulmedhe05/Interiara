// Location-Specific Footer Component
// This component displays all services available in a specific location
// with internal linking for better SEO and user navigation

import Link from "next/link"

export function LocationFooter({ location, services }) {
  if (!location || !services || services.length === 0) {
    return null
  }

  // Group services into columns
  const columns = 4
  const servicesPerColumn = Math.ceil(services.length / columns)
  const serviceColumns = []

  for (let i = 0; i < columns; i++) {
    const start = i * servicesPerColumn
    const end = Math.min(start + servicesPerColumn, services.length)
    if (start < services.length) {
      serviceColumns.push(services.slice(start, end))
    }
  }

  return (
    <section className="py-16 bg-muted/50 border-t">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            All {location} Services
          </h2>
          <p className="text-muted-foreground mb-8">
            Explore our complete range of interior design services available in {location}. 
            Each service is tailored to meet the unique needs and preferences of this area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceColumns.map((column, colIndex) => (
            <div key={colIndex} className="space-y-3">
              {column.map((service) => (
                <Link
                  key={service.url}
                  href={service.url}
                  className="block text-primary hover:text-primary-dark hover:underline transition-colors duration-200 text-sm font-medium"
                >
                  {service.service_formatted}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            Looking for a specific service in {location}? 
            <Link href="/" className="text-primary hover:underline ml-1">
              Explore all our services
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
