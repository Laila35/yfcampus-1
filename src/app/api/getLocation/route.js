 

export async function POST(req) {
  try {
    const { ip } = await req.json(); // Ensure the request body contains the `ip`
    
    // If there's no IP address, return an error
    if (!ip) {
      return new Response(JSON.stringify({ error: 'IP address is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Fetch location data from an external service (like ip-api.com)
    const response = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await response.json();

    // Check if the API response is successful
    if (data.status === 'success') {
      return new Response(JSON.stringify({ country: data.country }), {
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ error: 'Failed to get location' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
