# ----------------------------------------------------------------------------------
# src/pages/_public should be renamed src/pages/~public to be included by the router
# ----------------------------------------------------------------------------------

function Save-Generated-File {
    param (
        [string]$UriPath,
        [string]$FilePath
    )
    if (Test-Path "$FilePath") {
        Remove-Item "$FilePath"
    }
    Invoke-WebRequest "http://localhost:4321/~public/$UriPath" -OutFile "$FilePath"
}

$favicons = @(
    'android-chrome-512x512.png',
    'android-chrome-192x192.png',
    'apple-touch-icon.png',
    'favicon-32x32.png',
    'favicon-16x16.png'
)

$favicons | ForEach-Object { Save-Generated-File -UriPath "favicon/$PSItem" -FilePath "./public/meta/$PSItem" }
Save-Generated-File -UriPath "og/og.png" -FilePath "./public/meta/og.png"
