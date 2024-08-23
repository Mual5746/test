
using System.Text.Json;
using Api.Models;

namespace Api.Domain
{
    public class ItemsService : IItemsService
    {
        private readonly HttpClient _httpClient;
        private readonly string _apiUrl;
        private readonly string _apiKey;

        public ItemsService(HttpClient httpClient, IConfiguration configuration) 
        {
            _httpClient = httpClient;
           _apiUrl = configuration["ApiSettings:Url"];
           _apiKey = configuration["ApiSettings:Key"];
        
        }
        public async Task<IEnumerable<ItemDto>> GetItems()
        {
            

           var request = new HttpRequestMessage(HttpMethod.Get, _apiUrl + "api/fetch");
           request.Headers.Add("X-Functions-Key", _apiKey);
           
           var response = await _httpClient.SendAsync(request);


           if (response.IsSuccessStatusCode)
           {
            var content = await response.Content.ReadAsStringAsync();
            
            Console.WriteLine("API Response: " + content);

            var items = JsonSerializer.Deserialize<IEnumerable<ItemDto>>(content, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true,
            });
           
            return items ?? Enumerable.Empty<ItemDto>();
           }

           return Enumerable.Empty<ItemDto>();
        }
    }
}