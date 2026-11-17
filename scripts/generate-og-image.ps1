# Generates public/og-image.png (1200x630) for link previews.
# Run from the repo root:  powershell -ExecutionPolicy Bypass -File scripts/generate-og-image.ps1

Add-Type -AssemblyName System.Drawing

$width = 1200
$height = 630
$outPath = Join-Path $PSScriptRoot "..\public\og-image.png"

$bmp = New-Object System.Drawing.Bitmap($width, $height)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

function Brush($hex) {
  return New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml($hex))
}

function Font($size, $bold) {
  $style = if ($bold) { [System.Drawing.FontStyle]::Bold } else { [System.Drawing.FontStyle]::Regular }
  return New-Object System.Drawing.Font("Segoe UI", $size, $style, [System.Drawing.GraphicsUnit]::Pixel)
}

$bgBrush = Brush "#FAFBF9"
$accentBrush = Brush "#2F6F4E"
$textBrush = Brush "#1A1D1B"
$mutedBrush = Brush "#5B615C"
$borderPen = New-Object System.Drawing.Pen ([System.Drawing.ColorTranslator]::FromHtml("#E1E4DE")), 2

$g.Clear([System.Drawing.ColorTranslator]::FromHtml("#FAFBF9"))

# Left accent bar
$g.FillRectangle($accentBrush, 0, 0, 14, $height)

$left = 96

# Small label
$g.DrawString("PORTFOLIO", (Font 20 $false), $mutedBrush, $left, 92)

# Name
$g.DrawString("John Gabriel Panopio", (Font 58 $true), $textBrush, ($left - 4), 138)

# Accent rule
$g.FillRectangle($accentBrush, $left, 240, 168, 6)

# Role
$g.DrawString("Junior Software Engineer", (Font 38 $false), $accentBrush, ($left - 2), 286)

# Tagline
$g.DrawString("Backend Development  ·  Automation  ·  AI Integration", (Font 26 $false), $mutedBrush, ($left - 1), 352)

# Divider
$g.DrawLine($borderPen, $left, 512, ($width - $left), 512)

# Footer row
$g.DrawString("panopio-dev.vercel.app", (Font 22 $false), $mutedBrush, $left, 542)
$g.DrawString("BS Computer Engineering, PLSP", (Font 22 $false), $mutedBrush, 748, 542)

$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()
$borderPen.Dispose()
$bgBrush.Dispose(); $accentBrush.Dispose(); $textBrush.Dispose(); $mutedBrush.Dispose()

Write-Output "Wrote $outPath"
