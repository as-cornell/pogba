<?php if ((!empty($content['field_links'])) OR (!empty($content['field_sidebar_factoids'])) OR (!empty($content['field_sidebar_stories']))): ?>
	<?php $showSidebar = 'yes'; ?>
<?php endif; ?>
<div class="as-page as-page__block">
<div class="as-container">

	<div class='

	<?php if (!empty($showSidebar)){
		echo "as-page__content--withSidebar";
		}else{
		echo "as-page__content--full";
	} ?>

	'>


			<div class="as-page__content">

			<!-- if image -->
			<?php if (!empty($content['field_pano_image'])): ?>
			<div class="as-img">
			  <div class="as-hero as-hero--mini">
			    <?php print render($content['field_pano_image']); ?>

			      <h1 class="as-hero__copy pageTitle">
				<?php print $title; ?>
				</h1>

			  </div>
			</div>
			<?php else: ?>

			<!--else-->
			<h1 class="pageTitle">
				<?php print $title; ?>
			</h1>

			<?php endif; ?>
				<?php print render($content['field_image']); ?>
				<?php
$breadcrumb = theme('breadcrumb', array('breadcrumb' => drupal_get_breadcrumb())) ;
print $breadcrumb; ?>
				<?php print render($content['body']); ?>

				<?php print render($content['field_secondary_body']); ?>
			</div>

			<?php if (!empty($showSidebar)): ?>

				<div class="as-page__sidebar">

					<?php if ($content['field_links']): ?>
						<!-- Important Links -->
						<div class="buttonLinks">
							<h3 class="field-label">Important Links</h3>
							<?php print render($content['field_links']); ?>
						</div>
					<?php endif; ?>

					<?php if (!empty($content['field_sidebar_factoids'])): ?>
						<!-- Sidebar Stats -->
						<div class="as-stats as-stats--double">
							<?php print render($content['field_sidebar_factoids']); ?>
						</div>

					<?php endif; ?>

					<?php if (!empty($content['field_sidebar_stories'])): ?>
						<!-- Sidebar Stories -->
						<div class="as-page__sidebar__stories">
							<?php print render($content['field_sidebar_stories']); ?>
						</div>
					<?php endif; ?>
				</div>
			<?php endif; ?>
			</div>
		</div>

</div>
