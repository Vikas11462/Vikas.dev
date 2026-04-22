# Run this in PowerShell to copy generated project images into your portfolio
# Right-click on desktop > Open PowerShell, then paste this block

New-Item -ItemType Directory -Path "C:\Users\vikas\OneDrive\Desktop\CV\public\projects" -Force

Copy-Item "C:\Users\vikas\.gemini\antigravity\brain\7bf5cc35-c7ea-4131-bbb2-499dd694ea2b\project_rateguard_1776714890173.png" `
    "C:\Users\vikas\OneDrive\Desktop\CV\public\projects\rateguard.png" -Force

Copy-Item "C:\Users\vikas\.gemini\antigravity\brain\7bf5cc35-c7ea-4131-bbb2-499dd694ea2b\project_pixelclub_1776714902961.png" `
    "C:\Users\vikas\OneDrive\Desktop\CV\public\projects\pixelclub.png" -Force

Copy-Item "C:\Users\vikas\.gemini\antigravity\brain\7bf5cc35-c7ea-4131-bbb2-499dd694ea2b\project_business_1776714918084.png" `
    "C:\Users\vikas\OneDrive\Desktop\CV\public\projects\business.png" -Force

Copy-Item "C:\Users\vikas\.gemini\antigravity\brain\7bf5cc35-c7ea-4131-bbb2-499dd694ea2b\project_aiassistant_1776714933069.png" `
    "C:\Users\vikas\OneDrive\Desktop\CV\public\projects\aiassistant.png" -Force

Write-Host "✅ All project images copied successfully!"
