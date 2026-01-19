var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

var app = builder.Build();
app.MapGet("/", () =>
{
    return TypedResults.Json("hello: world");
});

app.Run();
